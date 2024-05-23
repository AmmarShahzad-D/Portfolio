import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.to(
      { scrollTrigger: ".about" },
      { x: -window.innerWidth },
      { x: 0, duration: 3 }
    );
  });
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        p: 3,
      }}
    >
      <div
        style={{ height: "100vh" }}
        className="flex items-center justify-center"
      >
        <div className="row">
          {/* <div className="col-md-6">
         <img src={} alt="aboutImage" className="img-fluid max-height-200 " />
        </div> */}
          <div className="about">
            <div className=" text-center fs-1">aBOUt mE </div>
            <p className="  md:w-1/2 text-center mx-auto ">
              I code beautifully simple things, and I love what I do. Passionate
              and Driven student currently pursuing a Bachelor&apos;s degree in
              Information Technology (BS-IT). I &apos;m currently in my 6th
              semester, and Excited to share my journey with YOU!
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
