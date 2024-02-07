const ArrowRight = ({ w, h, color, isDisabled }) => (
  <svg
    width={w}
    height={h}
    viewBox="0 0 17 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5"
      stroke={isDisabled ? "#ABBED1" : color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
export default ArrowRight;
