import React from "react";
import "./styles.scss";

const Tag = ({ children }) => {
  return <li className="tag-container">{children.toLowerCase()}</li>;
};

export default Tag;
