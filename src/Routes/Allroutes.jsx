import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../index";
export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
