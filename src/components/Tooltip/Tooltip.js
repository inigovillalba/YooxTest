import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TooltipItem from "../TooltipItem/TooltipItem";

import "./Tooltip.css";

class Tooltip extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    active: PropTypes.bool.isRequired
  };

  render() {
    const tooltipClass = classNames({
      tooltip: true,
      active: this.props.active
    });

    const { items } = this.props;

    return (
      <div className={tooltipClass}>
        <div className="pointer" />
        <ul>
          {items.map(item => {
            return (
              <TooltipItem key={item.id}>
                {item.icon && <item.icon />}
                <span>{item.text}</span>
              </TooltipItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Tooltip;
