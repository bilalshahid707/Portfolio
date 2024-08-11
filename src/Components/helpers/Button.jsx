import React from "react";

export const Button = ({ children, icon, handleClick, href }) => {
  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        type="button"
        className={`text-green border-2 font-secondary border-green rounded-[4px] w-44 flex justify-center items-center gap-4 px-6 py-3 hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[4px_4px_0px_0_rgba(100,255,218,1)] transition-all cursor-pointer`}
      >
        {icon ? icon : ""}
        {children}
      </a>
    </div>
  );
};

export default Button;
