import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const LoadingNavbar = ({navDivRef}) => {
  const leftText = useRef(null);
  const rightText = useRef(null);

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
    <div ref={navDivRef} className="text-white flex items-center justify-between relative">
      <p ref={leftText}>EST 2002</p>
      <p ref={rightText}>California</p>
    </div>
  );
};

export default LoadingNavbar;
