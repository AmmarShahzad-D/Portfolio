
const ProjectCard = ({ title, Description, imageUrl, projectLink }) => {

  return (
    <div className=" rounded-xl  shadow-lg  ">
      <img src={imageUrl} alt={title} className="rounded-t-xl" />
      <div className=" p-3" >
        <h3 className="text-xl my-2 font-medium ">{title}</h3>
        <p className=" my-2">{Description}</p>
        <a href={projectLink} target="_blank" rel="noreferrer" className="my-2 px-3 rounded-md border-2   hover:bg-slate-200 hover:border-none ">
          Visit
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;


// {hover && (
//   <button
//     className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-semibold transition-opacity opacity-0 hover:opacity-100"
//     onClick={() => window.location.href = projectLink}
//   >
//     Go to Website
//   </button>
// )}