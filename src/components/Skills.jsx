import React from "react";
import SkillsGrid from "./SkillsGrid";

const Skills = () => {
  return (
    <div className="container my-7" >
      <div className=" text-center fs-1  ">sKILLs </div>
      <p className=" text-center" >"Technologies I Work With"</p>
      <div className=" flex items-center justify-center ">
        <SkillsGrid />
      </div>
    </div>
  );
};
export default Skills;
