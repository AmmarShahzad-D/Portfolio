import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      { ScrollTrigger: ".nav" },
      { x: window.innerWidth },
      { x: 0, opacity: 1, duration: 2, ease: "power4.out" }
    );
  });

  return (
    <nav >
      <h6 className="m-3"> PORTFOLIO </h6>

      <hr/>
    </nav>
  );
};

export default Navbar;
