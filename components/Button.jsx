import React from "react";
import LoadingIcon from "./icons/LoadingIcon";

const CustomButton = ({
  children,
  variant,
  isLoading,
  icon_primary,
  isDisabled,
  loading_w,
  loading_h,
}) => {
  return (
    <button
      className={`${variant} flex items-center gap-2`}
      disabled={isDisabled}
    >
      <label className="flex items-center gap-2 justify-center">
        {children}
      </label>

      {isLoading &&
        (icon_primary ? (
          <LoadingIcon
            w={loading_w}
            h={loading_h}
            color={"#fff"}
            isDisabled={isDisabled}
          />
        ) : (
          <LoadingIcon
            w={loading_w}
            h={loading_h}
            color={"#4caf4f"}
            isDisabled={isDisabled}
          />
        ))}
    </button>
  );
};

export default CustomButton;
