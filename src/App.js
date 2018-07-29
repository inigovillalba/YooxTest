import React, { Component } from "react";

import Button from "./components/Button/Button";
import { Audio, Delivery, Edit, Favourites, GiftCards } from "./Icons";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.tooltipData = {
      buttonText: "Button CTA",
      size: "large",
      tooltipItems: [
        { id: 0, icon: Audio, text: "Button Call To Action Longer" },
        { id: 1, icon: Delivery, text: "Button Call To Action Longer" },
        { id: 2, icon: Edit, text: "Button Call To Action Longer" },
        { id: 3, icon: Favourites, text: "Button Call To Action Longer" },
        { id: 4, icon: GiftCards, text: "Button Call To Action Longer" }
      ]
    };
    this.tooltipNoIconsData = {
      buttonText: "Button CTA",
      size: "medium",
      tooltipItems: [
        { id: 5, text: "Button Call To Action" },
        { id: 6, text: "Button Call To Action" },
        { id: 7, text: "Button Call To Action" },
        { id: 8, text: "Button Call To Action" },
        { id: 9, text: "Button Call To Action" }
      ]
    };
    this.buttonData = { buttonText: "Button CTA" };
  }

  render() {
    const { tooltipData, tooltipNoIconsData, buttonData } = this;

    return (
      <div className="App">
        <div className="button-type">
          <p>With Icons</p>
          <Button {...tooltipData} />
        </div>
        <div className="button-type">
          <p>No Icons</p>
          <Button {...tooltipNoIconsData} />
        </div>
        <div className="button-type">
          <p>No Tooltip</p>
          <Button {...buttonData} />
        </div>
      </div>
    );
  }
}

export default App;
