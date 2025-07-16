import React, { useEffect, useRef } from "react";
import LoadingNavbar from "./LoadingNavbar";
import gsap from "gsap";

const LoadingScreen = () => {
  const headingRefs = useRef([]);
  const mainHeadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1 });

      headingRefs.current.forEach((heading, index) => {
        gsap.set(heading, {
          y: 1000
        })
        tl
        .to(
          heading, {
            y: 0,
            duration: 1.3,
            delay: -1.1
          }
        )
        .to(heading, {
          y: -1000,
          rotate: -15,
          duration: 1.3
        })
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden justify-between bg-[#265B80] px-8 sm:px-12 md:px-20 lg:px-28 py-6 sm:py-8 md:py-10 lg:py-12">
      <LoadingNavbar />
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
