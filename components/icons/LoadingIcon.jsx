const LoadingIcon = ({ w, h, color, isDisabled }) => (
  <svg
    className="animate-spin"
    width={w}
    height={h}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L12 5"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 19L12 22"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12L19 12"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12L2 12"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.071 4.92893L16.9497 7.05025"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.05003 16.95L4.92871 19.0713"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.92897 4.92893L7.05029 7.05025"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9495 16.95L19.0708 19.0713"
      stroke={isDisabled ? "#ABBED1" : color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default LoadingIcon;
