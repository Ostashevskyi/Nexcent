import Image from "next/image";
import React from "react";

const ButtonNormal = ({ children, variant, icon, loading, icon_position }) => {
  return (
    <button className={`${variant} flex gap-2 items-center`}>
      {icon_position === "left" && !loading && (
        <Image src={icon} width={24} height={24} />
      )}
      {children}
      {icon_position === "right" && !loading && (
        <Image src={icon} width={24} height={24} />
      )}
      {loading && (
        <Image
          alt="loading"
          src={"/loading.svg"}
          width={24}
          height={24}
          className="animate-spin"
        />
      )}
    </button>
  );
};

export default ButtonNormal;
