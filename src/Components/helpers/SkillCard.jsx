import React from "react";
export const SkillCard = ({ name, image }) => {
  return (
    <div className="skill  transition-all w-10 medium:w-20" data={name}>
      <img
        className="w-10 medium:w-20  cursor-pointer object-contain aspect-square"
        src={image}
      />
    </div>
  );
};

export default SkillCard;
