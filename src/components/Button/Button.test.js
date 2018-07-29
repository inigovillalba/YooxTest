/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Button from "./Button";
import { Audio, Delivery, Edit, Favourites, GiftCards } from "../../Icons";

describe("Button", () => {
  test("renders correctly", () => {
    const renderer = new ShallowRenderer();
    const tooltipData = {
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
    const wrapper = renderer.render(<Button {...tooltipData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
