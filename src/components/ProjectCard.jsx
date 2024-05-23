const ProjectCard = ({ title, Description, imageUrl, projectLink }) => {
  return (
    <div className=" rounded-xl  shadow-lg  ">
      <img src={imageUrl} alt={title} className="rounded-t-xl" />
      <div className=" p-3">
        <h3 className="text-xl my-2 font-medium ">{title}</h3>
        <p className=" my-2">{Description}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="my-2 px-3 rounded-md border-2   hover:bg-slate-200   hover:text-black hover:border-none "
        >
          Visit
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
