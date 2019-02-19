import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Styles from "modules/union-feed/components/feed-table/feed-table.styles";

const FeedLogo = p => (
  <div className={Styles.FeedLogoWrapper}>
    <img className={Styles.FeedLogo} src={this.props.logo} />
  </div>
);

FeedLogo.propTypes = {
  logo: PropTypes.string.required
};

FeedLogo.defaultProps = {
  availableEth: "0",
  availableRep: "0"
};

export default FeedLogo;
