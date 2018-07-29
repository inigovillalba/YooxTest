/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import TooltipItem from "./TooltipItem";
import { Audio } from "../../Icons";

describe("TooltipItem", () => {
  test("renders correctly", () => {
    const renderer = new ShallowRenderer();

    const wrapper = renderer.render(
      <TooltipItem>
        <Audio />
        <span>Some Text</span>
      </TooltipItem>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
