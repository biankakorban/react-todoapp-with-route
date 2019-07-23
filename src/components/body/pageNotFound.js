import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.noPage}>
      <div style={styles.content}>
        <p>404 page not found !!!</p>
      </div>
    </div>
  );
};

const styles = {
  noPage: {
    backgroundColor: "grey"
  },
  content: {
    padding: "50px 100px",
    textAlign: "center",
    fontWeight: "bold"
  }
};

export default PageNotFound;
