import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const LoadingNavbar = () => {
  const leftText = useRef(null);
  const rightText = useRef(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    const screenHeight = window.innerHeight;

    gsap.from([leftText.current,rightText.current ], {
      y: screenHeight/2,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.5
    });
  });

  return () => ctx.revert();
}, []);



  return (
    <div className="text-white flex items-center justify-between relative">
      <p ref={leftText}>EST 2002</p>
      <p ref={rightText}>California</p>
    </div>
  );
};

export default LoadingNavbar;
