import React from "react";

const styles = {
  title: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  sidebarButton: {
    display: "block",
    width: "100%",
    textAlign: "left",
    textDecoration: "none",
    color: "#FFFFFF",
  },
};

const Sidebar = props => (
  <div>
    <h1 style={styles.title}>Menu</h1>
  </div>
);

export default Sidebar;
