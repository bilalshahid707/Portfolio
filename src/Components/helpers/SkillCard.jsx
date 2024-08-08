import React from "react";
export const SkillCard = ({ name, image }) => {
  return (
    <div
      className="skill bg-bg1 rounded-full p-6 hover:scale-110 transition-all "
      data={name}
    >
      <img
        className="w-10 medium:w-14  cursor-pointer aspect-square object-contain "
        src={image}
      />
    </div>
  );
};

export default SkillCard;
