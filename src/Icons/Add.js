import React from "react";

function SvgAdd(props) {
  return (
    <svg viewBox="0 0 42 42" {...props}>
      <path
        fill="none"
        stroke="#23a24d"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M21 0v42M42 21H0"
      />
    </svg>
  );
}

export default SvgAdd;
