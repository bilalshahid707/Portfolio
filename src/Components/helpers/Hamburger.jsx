import React from "react";

export const Hamburger = ({ openNav, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`hamburger z-20 cursor-pointer ${
          openNav ? "rotate-45 delay-150" : ""
        } transition-all absolute w-12 h-12 inline-flex  gap-1 items-center justify-center md:hidden aria-expanded:true`}
      >
        <div className="div-1 flex flex-col gap-1 items-center justify-center">
          <span
            className={`block w-8 h-[2px] bg-primary ${
              openNav ? "bg-bg1 opacity-0 " : ""
            } transition-all duration-500 ease-in-out`}
          ></span>
          <span
            className={`block w-8 h-[2px]  ${
              openNav ? "bg-bg1" : "bg-primary"
            } `}
          ></span>
          <span
            className={`block w-8 h-[2px] bg-primary ${
              openNav ? "bg-bg1 opacity-0" : ""
            } transition-all duration-500 ease-in-out`}
          ></span>
        </div>
        <div
          className={`div-2 rotate-90 absolute ${
            openNav ? "opacity-100 delay-150" : "opacity-0"
          } transition-all`}
        >
          <span
            className={`block w-8 h-[2px] bg-bg1 ${
              openNav ? "bg-bg1" : ""
            } transition-all`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default Hamburger;
