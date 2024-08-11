import React from "react";

export const ProjectCard = ({ name, img, tags, link }) => {
  return (
    <div className={` flex flex-col h-max bg-lightnavy p-5 rounded-md`}>
      <div
        className={`max-w-md w-60 flex-1 z-10 transition-all cursor-pointer rounded-lg project-img `}
      >
        <img
          src={img}
          alt="Cinemate"
          className="w-full aspect-video object-cover"
        />
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
              className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-navy bg-green rounded-lg bg-primary"
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
