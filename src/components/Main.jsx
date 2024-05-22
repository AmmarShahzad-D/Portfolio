import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      ".box",
      { y: -1000, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
    gsap.fromTo(
      ".profession",
      { y: 1000, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out" }
    );
  });

  const handleButtonClick = () => {
    navigate('/Projects');
  }

  return (
    <div
      className="  d-flex text-center  align-items-center justify-content-center"
      style={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <div className="row">
        <div className="col my-5 ">
          {/* <h1 className="col mt-5 fs-1 box "> ALI AMMAR SHAHZAD </h1> */}
          <div className="col  mb-5 profession  ">
            &#123; Software Developer , Mern Stack engineer , Javascript Developer &#125;
          </div>
          <div className="col  mb-5 profession  "> Working with my hands to maek magic , happen on the internet View my <button onClick={handleButtonClick} className="border-2 rounded-md px-2 " > projects</button> , <button className="border-2 rounded-md px-2 " >Resume</button> , <button className="border-2 rounded-md px-2 ">Contact me</button> or send me email at <button className="border-2 rounded-md px-2 ">shahzadammar80@gmail.com</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Main;


//

//
//
//  