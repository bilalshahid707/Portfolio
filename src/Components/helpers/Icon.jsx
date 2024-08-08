import React from "react";

export const Icon = ({ name, socialLink }) => {
  return (
    <div>
      <a href={socialLink} target="_blank" rel="noopener noreferrer">
        <i
          className={`bi bi-${name} text-primary cursor-pointer text-base medium:text-md md:text-xl p-[10px] border-2 border-primary hover:bg-primary hover:text-bg1 rounded-full flex transition-all duration-300`}
        ></i>
      </a>
    </div>
  );
};

export default Icon;
