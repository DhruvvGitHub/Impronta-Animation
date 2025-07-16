import React, { useEffect, useRef } from "react";
import LoadingNavbar from "./LoadingNavbar";
import gsap from "gsap";

const LoadingScreen = () => {
  const headingRefs = useRef([]);
  const mainHeadRef = useRef(null);
    const navDivRef = useRef(null)

    console.log(navDivRef);
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 1 });

    // Step 1: Set all positions before animation
    headingRefs.current.forEach((heading) => {
      gsap.set(heading, { y: 1000 });
    });
    gsap.set(mainHeadRef.current, { y: 1000 });

    // Step 2: Animate 3 headings one by one
    headingRefs.current.forEach((heading) => {
      tl.to(heading, {
        y: 0,
        duration: 1.3,
      }).to(heading, {
        y: -1000,
        rotate: -15,
        duration: 1.3,
      });
    });

    // Step 3: Animate mainHead last
    tl.to(mainHeadRef.current, {
      y: 0,
      duration: 1.3,
    }).to(mainHeadRef.current, {
      y: -1000,
      rotate: -15,
      duration: 1.3,
    });
  });

  return () => ctx.revert();
}, []);


  return (
    <div className="w-full h-screen flex flex-col overflow-hidden justify-between bg-[#265B80] px-8 sm:px-12 md:px-20 lg:px-28 py-6 sm:py-8 md:py-10 lg:py-12">
      <LoadingNavbar navDivRef={navDivRef} />
      <div className="headings-div relative h-60 flex items-center">
        {["Living", "Space", "Future"].map((text, i) => (
          <h2
            key={i}
            ref={(el) => {
              headingRefs.current[i] = el;
            }}
            className="text-9xl font-semibold text-white absolute"
          >
            {text}
          </h2>
        ))}
        <h2 ref={mainHeadRef} className="text-9xl font-semibold text-white absolute">Impronta</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;