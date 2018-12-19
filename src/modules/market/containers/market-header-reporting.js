import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectMarket } from "modules/markets/selectors/market";
import MarketHeaderReporting from "modules/market/components/market-header/market-header-reporting";
import { sendFinalizeMarket } from "modules/markets/actions/finalize-market";
import marketDisputeOutcomes from "modules/reports/selectors/select-market-dispute-outcomes";

const mapStateToProps = (state, ownProps) => {
  const market = selectMarket(ownProps.marketId);
  const disputeOutcomes = marketDisputeOutcomes() || {};
  return {
    market,
    isLogged: state.authStatus.isLogged,
    isDesignatedReporter:
      market.designatedReporter === state.loginAccount.address,
    tentativeWinner:
      disputeOutcomes[ownProps.marketId] &&
      disputeOutcomes[ownProps.marketId].find(o => o.tentativeWinning)
  };
};

const mapDispatchToProps = dispatch => ({
  finalizeMarket: (marketId, cb) => dispatch(sendFinalizeMarket(marketId, cb))
});

const MarketHeaderReportingContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MarketHeaderReporting)
);

export default MarketHeaderReportingContainer;
