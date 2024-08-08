import React from "react";

export const ServiceCard = ({ name, icon, description }) => {
  return (
    <div>
      <div className="max-w-sm p-3 small:p-6 bg-black  rounded-lg shadow flex flex-col items-center ">
        <i className={`${icon} text-primary text-3xl`}></i>

        <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-primary">
          {name}
        </h5>

        <p className="mb-3 font-normal text-center text-secondary text-base medium:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
