import React from "react";

export const ProjectCard = ({ name, img, tags, link }) => {
  return (
    <div className={` flex flex-col w-[90%] md:w-full mx-auto`}>
      <div
        className={`max-w-sm w-full transition-all cursor-pointer   project-img relative  shadow-[10px_10px_0px_0_rgba(100,255,218,1)] hover:shadow-[6px_6px_0px_0_rgba(100,255,218,1)]`}
      >
        <img
          src={img}
          alt="Cinemate"
          className="w-full aspect-video object-cover "
        />
        <a href={link} target="_blank">
          <i className=" project-icon bi bi-box-arrow-up-right text-green absolute  top-2 right-2 p-3  md:hidden  transition-all bg-navy rounded-full flex"></i>
        </a>
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
