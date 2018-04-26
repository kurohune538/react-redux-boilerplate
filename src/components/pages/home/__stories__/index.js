import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Home from "../";

export default () => {
  storiesOf("pages/Home", module).add("default", () => (
    <Home count={1} increase={action("increase")} />
  ));
};
