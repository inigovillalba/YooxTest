import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Tooltip from "../Tooltip/Tooltip";

import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipActive: false
    };
  }

  static propTypes = {
    size: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    tooltipItems: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = { size: "medium", tooltipItems: [] };

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  handleClick = e => {
    const { type } = e.target;

    if (type !== "button") {
      this.setState({ tooltipActive: false });
    }
  };

  toggleTooltip = () => {
    const { tooltipItems } = this.props;

    if (!tooltipItems.length) {
      return;
    }
    this.setState({ tooltipActive: !this.state.tooltipActive });
  };

  render() {
    const { tooltipActive } = this.state;
    const { buttonText, tooltipItems, size } = this.props;

    const btnContainerClass = classNames({
      "btn-container": true,
      small: size === "small",
      medium: size === "medium",
      large: size === "large"
    });

    return (
      <div className={btnContainerClass}>
        <button className="btn" onClick={this.toggleTooltip} type="button">
          {buttonText}
        </button>
        {tooltipItems && (
          <Tooltip active={tooltipActive} items={tooltipItems} />
        )}
      </div>
    );
  }
}

export default Button;
