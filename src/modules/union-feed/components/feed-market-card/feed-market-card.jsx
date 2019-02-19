import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Styles from "modules/union-feed/components/feed-market-card/feed-market-card.styles";

const FeedMarketCard = p => (
  <div className={Styles.FeedMarketCard}>
    <h6>Bet On Outcome</h6>
    <p className={Styles.Probability}>
      Pedicted approval probability:{" "}
      <span className={Styles.Highlight}>{p.probability}</span>
    </p>
    <p className={ Styles.Volume }>
      Volume: <span className={ Styles.Highlight }>{ p.volume }</span>
    </p>
    <button className={Styles.TradeBTN}>Trade</button>
  </div>
);

FeedMarketCard.propTypes = {
  logo: PropTypes.string.required,
  probability: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired
};

FeedMarketCard.defaultProps = {
  availableEth: "0",
  availableRep: "0"
};

export default FeedMarketCard;
