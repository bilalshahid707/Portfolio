import React from "react";

export const ProjectCard = ({ name, img, tags, link }) => {
  return (
    <div className={` h-max `}>
      <div
        className={`max-w-sm w-56 relative z-10 transition-all cursor-pointer rounded-lg project-img `}
      >
        <a
          href={link}
          target="_blank"
          className="text-primary p-2 text-lg bg-black rounded-full visible md:hidden absolute right-4 top-4"
        >
          <i className="bi bi-arrow-up-right flex"></i>
        </a>
        <img src={img} alt="Cinemate" className="w-full" />
      </div>

      <div className="mt-8">
        <a href={link} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {name}
          </h5>
        </a>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-bg1 rounded-lg bg-primary"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
