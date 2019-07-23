import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={styles.header}>
      <header>
        <nav>
          <Link style={styles.link} to="/">
            Home -
          </Link>
          <Link style={styles.link} to="/addTodo">
            Add Todo
          </Link>
        </nav>
      </header>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "lightblue",
    padding: "2px",
    justifyContent: "center"
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    display: "inline",

    padding: "2px"
  }
};

export default Header;
