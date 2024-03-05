import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
// import { Svg } from "./svg";
import { Integration } from "./Integration";
import card1 from "../assets/Images/card1.png";
import arrow from "../assets/Images/arrow.png";
import card2 from "../assets/Images/card2.png";
import chatpro from "../assets/Images/chatpro.png";
import card3 from "../assets/Images/card3.png";
import plane from "../assets/Images/plane.png";
import figure2 from "../assets/Images/figure2.png";
import scube from "../assets/Images/scube.png";
import triangle from "../assets/Images/triangle.png";
import ball from "../assets/Images/ball.png";
import megaChat1 from "../assets/Images/megaChat1.png";
import megaChat2 from "../assets/Images/megaChat2.png";

const Projects = () => {
 const AnimatedDiv = animated.div;
 const seeRef = useRef(null);
 const arrowRef = useRef(null);
 const stayRef = useRef(null);
 const triangleRef = useRef(null);
 const shareRef = useRef(null);
 const sharePropsRef = useRef(null);
 const ballRef = useRef(null);
 //  const collaboCubeRef = useRef(null);
 const planeRef = useRef(null);
 const collaboRef = useRef(null);
 const historyRef = useRef(null);
 const megaChat2Ref = useRef(null);
 const megaChat1Ref = useRef(null);
 const scubeRef = useRef(null);
 const [isSeeVisible, setIsSeeVisible] = useState(false);
 const [isArrowVisible, setIsArrowVisible] = useState(false);
 const [isStayVisible, setIsStayVisible] = useState(false);
 const [isShareVisible, setIsShareVisible] = useState(false);
 const [isShareChatVisible, setIsShareChatVisible] = useState(false);
 const [isPlaneVisible, setIsPlaneVisible] = useState(false);
 const [isCollaboVisible, setIsCollaboVisible] = useState(false);
 const [isScubeVisible, setIsScubeVisible] = useState(false);
 const [isTriangleVisible, setIsTriangleVisible] = useState(false);
 //  const [isCollaCubeVisible, setIsCollaCubeVisible] = useState(false);
 const [isBallVisible, setIsBallVisible] = useState(false);
 const [isHistoryVisible, setIsHIstorylVisible] = useState(false);
 const [isMegaChat1Visible, setIsMegaChat1lVisible] = useState(false);
 const [isMegaChat2Visible, setIsMegaChat2lVisible] = useState(false);

 const seeProps = useSpring({
  opacity: isSeeVisible ? 1 : 0,
  transform: isSeeVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21 },
 });

 const arrowProps = useSpring({
  opacity: isArrowVisible ? 1 : 0,
  transform: isArrowVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const stayProps = useSpring({
  opacity: isStayVisible ? 1 : 0,
  transform: isStayVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const shareProps = useSpring({
  opacity: isShareVisible ? 1 : 0,
  transform: isShareVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const shareChatProps = useSpring({
  opacity: isShareChatVisible ? 1 : 0,
  transform: isShareChatVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const planeProps = useSpring({
  opacity: isPlaneVisible ? 1 : 0,
  transform: isPlaneVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const collaboProps = useSpring({
  opacity: isCollaboVisible ? 1 : 0,
  transform: isCollaboVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const scubeProps = useSpring({
  opacity: isScubeVisible ? 1 : 0,
  transform: isScubeVisible ? "translateY(0)" : "translateY(60px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const triangleProps = useSpring({
  opacity: isTriangleVisible ? 1 : 0,
  transform: isTriangleVisible ? "translateY(0)" : "translateY(60px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 //  const collaCubeProps = useSpring({
 //   opacity: isCollaCubeVisible ? 1 : 0,
 //   transform: isCollaCubeVisible ? "translateY(0)" : "translateY(60px)",
 //   config: { tension: 250, friction: 21, mass: 2 },
 //  });

 const ballProps = useSpring({
  opacity: isBallVisible ? 1 : 0,
  transform: isBallVisible ? "translateY(0)" : "translateY(60px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

 const historyProps = useSpring({
  opacity: isHistoryVisible ? 1 : 0,
  transform: isHistoryVisible ? "translateY(0)" : "translateY(60px)",
  config: { tension: 250, friction: 40, mass: 2 },
 });

 const megaChat1Props = useSpring({
  opacity: isMegaChat1Visible ? 1 : 0,
  config: { tension: 70, friction: 20, duration: 1000 },
 });

 const megaChat2Props = useSpring({
  opacity: isMegaChat2Visible ? 1 : 0,
  config: { tension: 70, friction: 20, duration: 1000 },
 });

 //  OBERESER API

 const handleIntersection = (ref, setVisible) => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    setVisible(entry.isIntersecting);
   },
   { threshold: 1 }
  );

  if (ref.current) {
   observer.observe(ref.current);
  }

  return () => {
   observer.disconnect();
  };
 };

 useEffect(() => {
  return handleIntersection(seeRef, setIsSeeVisible);
 }, [seeRef]);

 useEffect(() => {
  return handleIntersection(arrowRef, setIsArrowVisible);
 }, [arrowRef]);

 useEffect(() => {
  return handleIntersection(stayRef, setIsStayVisible);
 }, [stayRef]);

 useEffect(() => {
  return handleIntersection(triangleRef, setIsTriangleVisible);
 }, [triangleRef]);

 useEffect(() => {
  return handleIntersection(shareRef, setIsShareVisible);
 }, [shareRef]);

 useEffect(() => {
  return handleIntersection(ballRef, setIsBallVisible);
 }, [ballRef]);

 //  useEffect(() => {
 //   return handleIntersection(collaboCubeRef, setIsCollaCubeVisible);
 //  }, [collaboCubeRef]);

 useEffect(() => {
  return handleIntersection(planeRef, setIsPlaneVisible);
 }, [planeRef]);

 useEffect(() => {
  return handleIntersection(collaboRef, setIsCollaboVisible);
 }, [collaboRef]);

 useEffect(() => {
  return handleIntersection(historyRef, setIsHIstorylVisible);
 }, [historyRef]);

 useEffect(() => {
  return handleIntersection(megaChat2Ref, setIsMegaChat2lVisible);
 }, [megaChat2Ref]);

 useEffect(() => {
  return handleIntersection(megaChat1Ref, setIsMegaChat1lVisible);
 }, [megaChat1Ref]);

 useEffect(() => {
  return handleIntersection(scubeRef, setIsScubeVisible);
 }, [scubeRef]);

 // FOR SINGLE USE CASE

 //  useEffect(() => {
 //   const observer = new IntersectionObserver(
 //    ([entry]) => {
 //     setIsSeeVisible(entry.isIntersecting);
 //    },
 //    { threshold: 0.6 }
 //   );

 //   if (seeRef.current) {
 //    observer.observe(seeRef.current);
 //   }

 //   return () => {
 //    observer.disconnect();
 //   };
 //  }, []);

 //  useEffect(() => {
 //   const observer = new IntersectionObserver(
 //    ([entry]) => {
 //     setIsArrowVisible(entry.isIntersecting);
 //    },
 //    { threshold: 0.6 }
 //   );

 //   if (arrowRef.current) {
 //    observer.observe(arrowRef.current);
 //   }

 //   return () => {
 //    observer.disconnect();
 //   };
 //  }, []);

 useEffect(() => {
  // let lastScrollTop = 0;

  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   const windowHeight = window.innerHeight;
   //  let seeThreshold = windowHeight * 4.7;
   //  if (window.innerWidth < 768) {
   //   seeThreshold = windowHeight * 7;
   //  }
   //  const arrowThreshold = windowHeight * 5.1;
   //  let stayThreshold = windowHeight * 5.5;
   //  if (window.innerWidth < 768) {
   //   stayThreshold = windowHeight * 8.3;
   //  }
   //  let shareThreshold = windowHeight * 6.6;
   //  if (window.innerWidth < 768) {
   //   shareThreshold = windowHeight * 9.8;
   //  }
   let shareChatProps = windowHeight * 6.45;
   if (window.innerWidth < 768) {
    shareChatProps = windowHeight * 9.7;
   }
   //  let triangleProps1 = windowHeight * 6.9;
   //  if (window.innerWidth < 768) {
   //   triangleProps1 = windowHeight * 9.7;
   //  }
   //  const sharePlaneProps = windowHeight * 7.8;
   //  let collaboPlaneProps = windowHeight * 8.15;
   //  if (window.innerWidth < 768) {
   //   collaboPlaneProps = windowHeight * 11.7;
   //  }
   //  let scubeProps1 = windowHeight * 5.2;
   //  if (window.innerWidth < 768) {
   //   scubeProps1 = windowHeight * 8;
   //  }
   //  const collaCube = windowHeight * 7.2;
   //  let ballThreshold = windowHeight * 8;
   //  if (window.innerWidth < 768) {
   //   ballThreshold = windowHeight * 11.3;
   //  }
   //  let historyThreshold = windowHeight * 8.5;
   //  if (window.innerWidth < 768) {
   //   historyThreshold = windowHeight * 12.5;
   //  }
   //  let megaChat1Threshold = windowHeight * 8.5;
   //  if (window.innerWidth < 768) {
   //   megaChat1Threshold = windowHeight * 12.2;
   //  }
   //  let megaChat2Threshold = windowHeight * 8.5;
   //  if (window.innerWidth < 768) {
   //   megaChat2Threshold = windowHeight * 12.3;
   //  }

   //  const scrollDirection = scrollPosition > lastScrollTop ? "down" : "up";

   // Set isVisible to true only when scrolling down and beyond the threshold
   //  setIsSeeVisible(scrollDirection === "down" && scrollPosition > seeThreshold);

   //  setIsArrowVisible(scrollPosition > arrowThreshold);
   //  setIsStayVisible(scrollPosition > stayThreshold);
   //  setIsShareVisible(scrollPosition > shareThreshold);
   setIsShareChatVisible(scrollPosition > shareChatProps);
   //  setIsPlaneVisible(scrollPosition > sharePlaneProps);
   //  setIsCollaboVisible(scrollPosition > collaboPlaneProps);
   //  setIsScubeVisible(scrollPosition > scubeProps1);
   //  setIsTriangleVisible(scrollPosition > triangleProps1);
   //  setIsCollaCubeVisible(scrollPosition > collaCube);
   //  setIsBallVisible(scrollPosition > ballThreshold);
   //  setIsHIstorylVisible(scrollPosition > historyThreshold);
   //  setIsMegaChat1lVisible(scrollPosition > megaChat1Threshold);
   //  setIsMegaChat2lVisible(scrollPosition > megaChat2Threshold);

   //  lastScrollTop = scrollPosition;
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  <>
   <p className="text-3xl lg:text-5xl font-semibold text-center pt-4 font-poppins leading-none ">
    <AnimatedDiv ref={seeRef} style={seeProps}>
     See what you can do <br /> in one app
    </AnimatedDiv>
   </p>
   <div className="flex justify-center flex-col  items-center lg:flex-row gap-9  lg:pt-[140px] lg:gap-0 relative lg:w-[100%]">
    <AnimatedDiv
     style={scubeProps}
     ref={scubeRef}
     className="object-contain ml-[-72%] lg:ml-[-86%] lg:mt-[20%] absolute z-40 lg:max-w-[14%]"
    >
     <img src={scube} alt="" />
    </AnimatedDiv>
    <img
     className="pt-10 lg:min-w-[54%] lg:pl-[3%] xl:min-w-[45%] xl:ml-[10%] "
     src={card1}
     alt=""
    />
    <div className="flex flex-col items-start lg:w-[150%]">
     <AnimatedDiv ref={arrowRef} style={arrowProps}>
      <img
       className="arrow hidden lg:block object-contain left-[-44%] pt-5 relative lg:w-[70%] lg:left-[-7%]"
       src={arrow}
       alt=""
      />
     </AnimatedDiv>
     <div className="pl-20">
      <AnimatedDiv
       className="font-poppins pt-20 text-2xl lg:text-3xl font-semibold lg:pt-0"
       style={stayProps}
       ref={stayRef}
      >
       <p>
        Stay focused <br /> whenever, wherever
       </p>
      </AnimatedDiv>
      <p className="font-inter text-[16px] lg:text-lg font-medium leading-6 py-7 lg:text-[16px]">
       We&apos;re a growing family of 382,081 <br className="hidden lg:block" />{" "}
       designers and makers from
       <br className="hidden lg:block" /> around the world
      </p>
      <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
       Watch how it works
      </button>
     </div>
    </div>
   </div>
   <div className="flex justify-center flex-col  items-center lg:flex-row gap-9 lg:gap-0 lg:pt-[140px] lg:right-[3%] relative">
    <div className="flex flex-col flex-start ">
     <img
      className="pt-10 lg:max-w-[91%] relative xl:max-w-[97%] xl:ml-[-6%]"
      src={card2}
      alt=""
     />
     <AnimatedDiv ref={triangleRef} style={triangleProps}>
      <img className="top-[-29px] relative lg:w-[32%]" src={triangle} alt="" />
     </AnimatedDiv>
    </div>
    <div className="flex flex-col items-start">
     <AnimatedDiv ref={shareRef} style={shareChatProps}>
      <img
       className="chatcard hidden lg:block object-contain left-[-44%] pt-5 lg:pt-0 relative lg:mt-[-20%] lg:w-[90%] lg:left-[-37%] xl:left-[-30%]"
       src={chatpro}
       alt=""
      />
     </AnimatedDiv>
     <div className="px-20 lg:px-0 lg:pl-4 xl:pl-7">
      <p className="font-poppins text-2xl lg:text-3xl font-semibold">
       <AnimatedDiv ref={sharePropsRef} style={shareProps}>
        Share files at the <br className="hidden lg:block" /> right time
       </AnimatedDiv>
      </p>
      <p className="font-inter text-[16px] lg:text-lg font-medium leading-6 py-7 lg:text-[16px]">
       We&apos;re a growing family of 382,081 <br className="hidden lg:block" />{" "}
       designers and makers from <br className="hidden lg:block" /> around the
       world
      </p>
      <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white mb-12">
       Watch how it works
      </button>
     </div>
    </div>
   </div>
   <div className="flex justify-center flex-col  items-center lg:flex-row gap-9 lg:gap-0 lg:pt-[140px] lg:right-[7%]  relative">
    <AnimatedDiv
     ref={ballRef}
     className="object-contain left-[11%] mt-[-30%] z-30 absolute lg:left-[15%]"
     style={ballProps}
    >
     <img src={ball} alt="" />
    </AnimatedDiv>
    {/* <AnimatedDiv ref={collaboCubeRef} className="z-40" style={collaCubeProps}>
     <img
      className="relative w-20 object-contain left-[1100%] top-[40%]"
      src={scube}
      alt=""
     />
    </AnimatedDiv> */}
    <img className="relative z-10 lg:max-w-[60%]" src={card3} alt="" />
    <div className="flex flex-col items-start lg:w-[29%]">
     <AnimatedDiv ref={planeRef} style={planeProps}>
      <img
       className="plane hidden lg:block object-contain left-[-44%] pt-5 lg:pt-0 relative lg:left-[-32%]"
       src={plane}
       alt=""
      />
     </AnimatedDiv>
     <div className="px-20 lg:px-0 lg:pl-[11%] ">
      <p className="font-poppins text-2xl lg:text-3xl font-semibold">
       <AnimatedDiv ref={collaboRef} style={collaboProps}>
        Collaborate from <br className="hidden lg:block" /> anywhere
       </AnimatedDiv>
      </p>
      <p className="font-inter text-[16px] lg:text-lg font-medium leading-6 py-7 lg:text-[16px]">
       <AnimatedDiv>
        We&apos;re a growing family of 382,081{" "}
        <br className="hidden lg:block" /> designers and makers from{" "}
        <br className="hidden lg:block" /> around the world
       </AnimatedDiv>
      </p>
      <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
       Schedule and demo
      </button>
     </div>
    </div>
   </div>

   <div className="white-board-continter flex justify-center mt-20">
    <div className="bg-custom-whiteboard w-[90%] rounded-3xl shadow-lg p-5 flex flex-col-reverse lg:flex-row lg:h-[36rem]">
     <div className=" lg:ml-20 lg:mt-40 lg:mb-40 lg:min-w-[60%] relative">
      <p className="text-custom-graytext text-sm lg:text-base font-bold">
       EASILY FIND WHAT YOU’RE LOOKING FOR
      </p>
      <p className="font-poppins font-semibold text-3xl  pt-7 lg:pt-1 leading-tight lg:text-[40px] lg:leading-snug">
       <AnimatedDiv ref={historyRef} style={historyProps}>
        History you can <br className="hidden lg:block" /> see and search
       </AnimatedDiv>
      </p>
      <p className="font-poppins text-[15px] py-7 text-custom-textboard lg:text-[16px]">
       We&apos;re a growing family of 382,081 designers <br /> and makers from
       around the world
      </p>
      <button className="flex text-lg items-center gap-2 font-bold mb-8 border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
       Learn more
      </button>
     </div>
     <div className="flex justify-center items-center">
      <img
       className="object-contain w-[60%] lg:right-[27%] relative lg:min-w-[275%] xl:min-w-[220%]"
       src={figure2}
       alt=""
      />
     </div>
     <AnimatedDiv
      ref={megaChat2Ref}
      className="megaChat2 w-[24%] left-[55%] top-[10%] object-contain relative lg:hidden lg:absolute lg:right-[1%]"
      style={megaChat2Props}
     >
      <img src={megaChat2} alt="" />
     </AnimatedDiv>
     <AnimatedDiv
      ref={megaChat1Ref}
      className="megaChat1 w-[19%] left-[25%]  object-contain relative mb-[-20%] lg:absolute lg:left-[55%]"
      style={megaChat1Props}
     >
      <img src={megaChat1} alt="" />
     </AnimatedDiv>
    </div>
   </div>
   {/* <Svg /> */}
   <Integration />
  </>
 );
};

export default Projects;
