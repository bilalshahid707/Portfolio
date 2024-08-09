import React from "react";

export const Icon = ({ name, socialLink }) => {
  return (
    <div className="hover:-translate-y-[5px] transition-all">
      <a href={socialLink} target="_blank" rel="noopener noreferrer">
        <i
          className={`bi bi-${name} text-slate cursor-pointer  text-base medium:text-md md:text-xl hover:text-green transition-all  `}
        ></i>
      </a>
    </div>
  );
};

export default Icon;
