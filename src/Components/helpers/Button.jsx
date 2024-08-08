import React from "react";

export const Button = ({ children, icon, filled, handleClick, href }) => {
  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        type="button"
        className={`${
          filled
            ? "text-bg1 bg-primary hover:bg-transparent hover:text-primary"
            : "text-primary bg-transparent hover:text-bg1 hover:bg-primary"
        } border-2 border-primary transition-all font-medium rounded-lg w-44 text-base px-5 py-2.5  -2 mb-2 duration-300 text-center ${
          icon ? "flex items-center justify-between" : ""
        } cursor-pointer`}
      >
        {icon ? icon : ""}
        {children}
      </a>
    </div>
  );
};

export default Button;
