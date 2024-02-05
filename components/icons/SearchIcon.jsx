import React from "react";

const SearchIcon = ({ w, h, color, isDisabled }) => (
  <svg
    width={w}
    height={h}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke={isDisabled ? "#ABBED1" : color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 16.958L21.5 21.958"
      stroke={isDisabled ? "#ABBED1" : color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
