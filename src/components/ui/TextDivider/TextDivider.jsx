import React from "react";
import "./TextDivider.css";

export const TextDivider = ({ children, className }) => {
  return (
    <div
      className={`${className} text-divider`}
      style={{ "--linecolor": "#20A564" }}
    >
      {children}
    </div>
  );
};
