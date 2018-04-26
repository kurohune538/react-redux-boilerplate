import React from "react";
import PropTypes from "prop-types";

import styles from "./style.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends React.PureComponent {
  render() {
    const { count, increase } = this.props;
    return (
      <div className={styles.home}>
        <div>
          count: <span className={styles.count}>{count}</span>
        </div>
        <div>
          <button onClick={() => increase(1)}>+1</button>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
};
