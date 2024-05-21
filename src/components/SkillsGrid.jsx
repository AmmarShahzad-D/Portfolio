import React from "react";

const images = [
  "/images/Skills/Html.png",
  "/images/Skills/CSS3-.png",
  "/images/Skills/BootStrap_.png",
  "/images/Skills/Tailwind_.png",
  "/images/Skills/Javascript-.png",
  "/images/Skills/ReactJS-.png",
  "/images/Skills/MongoDB-.png",
  "/images/Skills/NodeJS_logo-.png",
  "/images/Skills/Next_js_.png",
];

const SkillsGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {images.map((src, index) => (
          <div key={index} className="h-48 p-2 shadow-md">
            <img
              src={src}
              alt={`Skills ${index + 1}`}
              className="object-contain  h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
