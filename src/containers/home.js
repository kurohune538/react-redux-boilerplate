import { connect } from "react-redux";

import Component from "../components/pages/home";
import { increase } from "../actions/counter";

export default connect(
  ({ counter: { count } }) => ({
    count,
  }),
  {
    increase,
  },
)(Component);
