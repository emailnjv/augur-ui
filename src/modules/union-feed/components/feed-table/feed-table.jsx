import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import FeedLogo from "modules/union-feed/components/feed-logo/feed-logo";
import FeedMainCard from "modules/union-feed/components/feed-main-card/feed-main-card";
import FeedMarketCard from "modules/union-feed/components/feed-market-card/feed-market-card";

import Styles from "modules/union-feed/components/feed-table/feed-table.styles";

const FeedTable = p => (
  <section className={Styles.FeedTable}>
    <Helmet>
      <title>Create Market</title>
    </Helmet>
    <div className={Styles.FeedRow}>
      <FeedLogo {...p} />
      <FeedMainCard {...p} />
      <FeedMarketCard {...p} />
    </div>
  </section>
);

FeedTable.propTypes = {
  // categories: PropTypes.array.isRequired,
  // isMobileSmall: PropTypes.bool.isRequired,
  // currentTimestamp: PropTypes.number.isRequired,
  // gasPrice: PropTypes.number.isRequired,
  // history: PropTypes.object.isRequired,
  // newMarket: PropTypes.object.isRequired,
  // universe: PropTypes.object.isRequired,
  // addOrderToNewMarket: PropTypes.func.isRequired,
  // estimateSubmitNewMarket: PropTypes.func.isRequired,
  // removeOrderFromNewMarket: PropTypes.func.isRequired,
  // submitNewMarket: PropTypes.func.isRequired,
  // updateNewMarket: PropTypes.func.isRequired,
  // meta: PropTypes.object.isRequired,
  // availableEth: PropTypes.string,
  // availableRep: PropTypes.string
};

FeedTable.defaultProps = {
  availableEth: "0",
  availableRep: "0"
};

export default FeedTable;
