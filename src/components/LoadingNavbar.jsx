import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const LoadingNavbar = ({navDivRef}) => {


useEffect(() => {
  let ctx = gsap.context(() => {
    const screenHeight = window.innerHeight;

    gsap.from([leftText.current,rightText.current ], {
      y: screenHeight/2,
      stagger: 0.15,
      duration: 1,
      ease: "power3.inOut",
      delay: 0.3
    });
  });

  return () => ctx.revert();
}, []);



  return (
    <h1></h1>
  );
};

export default LoadingNavbar;
