import React from "react";
import { useRef, useState, useEffect } from "react";
export const Animate = ({ children, classname }) => {
  const [intersecting, setIntersecting] = useState(false);
  const name = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(name.current);
  }, [intersecting]);
  useEffect(() => {
    if (intersecting) {
      name.current.querySelector(classname).style.transform = "none";
      name.current.querySelector(classname).style.opacity = "100%";
    }
  }, [intersecting]);
  return <div ref={name}>{children}</div>;
};

export default Animate;
