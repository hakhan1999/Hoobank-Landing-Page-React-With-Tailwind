import React from "react";

const Button = ({styles}) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium tex-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
