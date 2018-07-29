/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Tooltip from "./Tooltip";
import { Audio, Delivery, Edit, Favourites, GiftCards } from "../../Icons";

describe("Tooltip", () => {
  test("renders correctly", () => {
    const renderer = new ShallowRenderer();
    const tooltipItems = [
      { id: 0, icon: Audio, text: "Button Call To Action Longer" },
      { id: 1, icon: Delivery, text: "Button Call To Action Longer" },
      { id: 2, icon: Edit, text: "Button Call To Action Longer" },
      { id: 3, icon: Favourites, text: "Button Call To Action Longer" },
      { id: 4, icon: GiftCards, text: "Button Call To Action Longer" }
    ];

    const wrapper = renderer.render(
      <Tooltip active={false} items={tooltipItems} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
