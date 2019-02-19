import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Styles from "modules/union-feed/components/feed-main-card/feed-main-card.styles";

const FeedMainCard = p => (
  <div className={ Styles.FeedMainCard }>
    <div className={ Styles.Row_1 }>
      <div className={ Styles.Row_1_Left }></div>
      <div className={Styles.Row_1_Right}></div>
    </div>
    <div className={ Styles.Row_2 }>
    </div>
  </div>
);

FeedMainCard.propTypes = {
  proposalType: PropTypes.string,
  mainLink: PropTypes.string.isRequired,

};

FeedMainCard.defaultProps = {
  availableEth: "0",
  availableRep: "0"
};

export default FeedMainCard;
