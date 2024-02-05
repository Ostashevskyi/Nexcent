import React from "react";

const PlusIcon = ({ w, h, color, isDisabled }) => (
  <svg
    width={w}
    height={h}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5L12 19"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 12L5 12"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default PlusIcon;
