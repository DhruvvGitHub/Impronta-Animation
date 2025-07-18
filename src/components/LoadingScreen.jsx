import React, { useEffect, useRef } from "react";
import LoadingNavbar from "./LoadingNavbar";
import gsap from "gsap";
import homeMainImage from "../assets/home_main_img.jpg";

const LoadingScreen = () => {
  const headingRefs = useRef([]);
  const mainHeadRef = useRef(null);
  const navDivRef = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);
  const logoTitle = useRef(null);
  const homeRightDiv = useRef(null);
  const loadingDiv = useRef(null);
  const homeLeftDiv = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const screenHeight = window.innerHeight;
      const heightToGo = window.innerHeight / 20;
      console.log(heightToGo);

      // Step 1: Animate EST 2002 & California (nav)
      gsap.from([leftText.current, rightText.current], {
        y: screenHeight / 2,
        stagger: 0.15,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.29,
      });

      // Step 2: Prepare headings off-screen
      headingRefs.current.forEach((heading) => {
        gsap.set(heading, { y: 1000 });
      });
      gsap.set(mainHeadRef.current, { y: 1000 });

      // Step 3: Create timeline
      const tl = gsap.timeline({ delay: 1.5 });

      // Animate Living → Space → Future
      headingRefs.current.forEach((heading) => {
        tl.to(heading, {
          y: 0,
          duration: 1.15,
          delay: -1.1
        }).to(
          heading,
          {
            y: -1000,
            rotate: -15,
            duration: 1.15,
            ease: "power3.inOut",
          },
          "+=0.1"
        );
      });

      // Animate Impronta in, then to top
      tl.to(mainHeadRef.current, {
        y: 0,
        duration: 1.15,
          delay: -1.1
      }).to(mainHeadRef.current, {
        top: "-10%", // moves up to around 40px from top
        duration: 1.15,
        ease: "power3.inOut",
      },"a")
      .to(navDivRef.current, {
        y: -500,
        duration: 1,
        delay: 0.7
      },"a")
      .to(loadingDiv.current, {
        top: "-100%"
      })
      .from(homeLeftDiv.current, {
        width: "0%",
        duration: 1
      })
      .from(homeRightDiv.current, {
        width: "100%",
        duration: 1
      })
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={loadingDiv} className="w-full h-screen absolute flex flex-col !overflow-hidden justify-between bg-[#265B80] px-8 sm:px-12 md:px-20 lg:px-28 py-6 sm:py-8 md:py-10 lg:py-12">
        <div
          ref={navDivRef}
          className="text-white flex items-center justify-between relative"
        >
          <p ref={leftText}>EST 2002</p>
          <p ref={rightText}>California</p>
        </div>

        <div className="headings-div relative flex-1 flex items-end">
          {["Living", "Space", "Future"].map((text, i) => (
            <h2
              key={i}
              ref={(el) => (headingRefs.current[i] = el)}
              className="text-9xl font-semibold text-white absolute"
            >
              {text}
            </h2>
          ))}
          <h2
            ref={mainHeadRef}
            className="text-9xl font-semibold text-white absolute"
          >
            Impronta
          </h2>
        </div>
      </div>
      <div className="w-full h-screen bg-amber-200">
        <div className="w-full h-full flex ">
          <div ref={homeLeftDiv} className="home-left w-[40%] flex flex-col justify-between pb-4">
            <div className="home-nav flex gap-12">
              <div className="w-fit py-6 px-4 bg-[#2A2A2A] text-white ">
                <p className="text-xs">MENU</p>
              </div>
              <div className="logo-name">
                <h5 ref={logoTitle} className="text-2xl font-semibold">
                  Impronta
                </h5>
              </div>
            </div>
            <div className="home-middle w-fit  flex items-end text-white">
              <div className="middle-left px-4 pr-20 py-10 flex items-center gap-10 bg-[#2A2A2A]">
                <p className="text-xs">01.03</p>
                <h5>Progetti</h5>
              </div>
              <div className="middle-right bg-[#2A2A2A] px-8 py-4">
                <p className="text-xs underline">TUTTI PROGETTI</p>
              </div>
            </div>
            <div className="home-bottom px-28">
              <h5 className="text-2xl font-semibold">Living</h5>
              <h5 className="text-2xl font-semibold">Space</h5>
              <h5 className="text-2xl font-semibold">Future</h5>
            </div>
          </div>
          <div
            ref={homeRightDiv}
            className="home-right w-[60%] h-full bg-zinc-500"
          >
            <img
              src={homeMainImage}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
