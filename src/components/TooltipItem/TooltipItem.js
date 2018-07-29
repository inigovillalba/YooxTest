import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TooltipItem.css";

class TooltipItem extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };

  render() {
    return <li className="tooltip-item">{this.props.children}</li>;
  }
}

export default TooltipItem;
