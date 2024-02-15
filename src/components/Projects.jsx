import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Svg } from "./svg";
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
 const [isSeeVisible, setIsSeeVisible] = useState(false);
 const [isArrowVisible, setIsArrowVisible] = useState(false);
 const [isStayVisible, setIsStayVisible] = useState(false);
 const [isShareVisible, setIsShareVisible] = useState(false);
 const [isShareChatVisible, setIsShareChatVisible] = useState(false);
 const [isPlaneVisible, setIsPlaneVisible] = useState(false);
 const [isCollaboVisible, setIsCollaboVisible] = useState(false);
 const [isScubeVisible, setIsScubeVisible] = useState(false);
 const [isTriangleVisible, setIsTriangleVisible] = useState(false);
 const [isCollaCubeVisible, setIsCollaCubeVisible] = useState(false);
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

 const collaCubeProps = useSpring({
  opacity: isCollaCubeVisible ? 1 : 0,
  transform: isCollaCubeVisible ? "translateY(0)" : "translateY(60px)",
  config: { tension: 250, friction: 21, mass: 2 },
 });

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

 useEffect(() => {
  let lastScrollTop = 0;

  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   const windowHeight = window.innerHeight;
   let seeThreshold = windowHeight * 4.7;
   if ( window.innerWidth < 768) {
    seeThreshold = windowHeight * 7
   }
   const arrowThreshold = windowHeight * 5.1;
   const stayThreshold = windowHeight * 5.5;
   const shareThreshold = windowHeight * 6.6;
   const shareChatProps = windowHeight * 6.45;
   const triangleProps1 = windowHeight * 6.9;
   const sharePlaneProps = windowHeight * 7.8;
   const collaboPlaneProps = windowHeight * 8.15;
   let scubeProps1 = windowHeight * 5.2;
   if (window.innerWidth < 768) {
    scubeProps1 = windowHeight * 7.5
   }
   const collaCube = windowHeight * 7.2;
   const ballThreshold = windowHeight * 8;
   const historyThreshold = windowHeight * 8.5;
   const megaChat1Threshold = windowHeight * 8.5;
   const megaChat2Threshold = windowHeight * 8.5;

   const scrollDirection = scrollPosition > lastScrollTop ? "down" : "up";

   // Set isVisible to true only when scrolling down and beyond the threshold
   setIsSeeVisible(scrollDirection === "down" && scrollPosition > seeThreshold);

   setIsArrowVisible(scrollPosition > arrowThreshold);
   setIsStayVisible(scrollPosition > stayThreshold);
   setIsShareVisible(scrollPosition > shareThreshold);
   setIsShareChatVisible(scrollPosition > shareChatProps);
   setIsPlaneVisible(scrollPosition > sharePlaneProps);
   setIsCollaboVisible(scrollPosition > collaboPlaneProps);
   setIsScubeVisible(scrollPosition > scubeProps1);
   setIsTriangleVisible(scrollPosition > triangleProps1);
   setIsCollaCubeVisible(scrollPosition > collaCube);
   setIsBallVisible(scrollPosition > ballThreshold);
   setIsHIstorylVisible(scrollPosition > historyThreshold);
   setIsMegaChat1lVisible(scrollPosition > megaChat1Threshold);
   setIsMegaChat2lVisible(scrollPosition > megaChat2Threshold);

   lastScrollTop = scrollPosition;
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
   <p className="text-4xl lg:text-5xl font-semibold text-center pt-4 font-poppins leading-none ">
    <AnimatedDiv style={seeProps}>
     See what you can do <br /> in one app
    </AnimatedDiv>
   </p>
   <div className="flex justify-center flex-col  items-center lg:flex-row gap-9 lg:gap-36 lg:pt-[140px] lg:right-[10%] relative">
    <AnimatedDiv style={scubeProps}
     className="object-contain ml-[-72%] absolute z-40" >
     <img
      
      src={scube}
      alt=""
     />
    </AnimatedDiv>
    <img className="pt-10" src={card1} alt="" />
    <div className="flex flex-col items-start">
     <AnimatedDiv style={arrowProps}>
      <img
       className="arrow hidden lg:block object-contain left-[-44%] pt-5 relative"
       src={arrow}
       alt=""
      />
     </AnimatedDiv>
     <p className="font-poppins text-2xl lg:text-4xl font-semibold">
      <AnimatedDiv style={stayProps}>
       Stay focused <br /> whenever, wherever
      </AnimatedDiv>
     </p>
     <p className="font-inter text-[16px] lg:text-lg font-medium leading-6 py-7 ">
      We&apos;re a growing family of 382,081 <br /> designers and makers from
      <br /> around the world
     </p>
     <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
      Watch how it works
     </button>
    </div>
   </div>
   <div className="flex justify-center gap-36 pt-[140px]">
    <div className="flex flex-col">
     <img className="" src={card2} alt="" />
     <AnimatedDiv style={triangleProps}>
      <img className="top-[-29px] relative" src={triangle} alt="" />
     </AnimatedDiv>
    </div>
    <div className="flex flex-col items-start">
     <AnimatedDiv style={shareChatProps}>
      <img
       className="arrow object-contain left-[-44%] pt-5 relative"
       src={chatpro}
       alt=""
      />
     </AnimatedDiv>
     <p className="font-poppins text-4xl font-semibold">
      <AnimatedDiv style={shareProps}>
       Share files at the <br /> right time
      </AnimatedDiv>
     </p>
     <p className="font-inter text-lg font-medium leading-6 py-7 ">
      We&apos;re a growing family of 382,081 <br /> designers and makers from{" "}
      <br /> around the world
     </p>
     <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
      Watch how it works
     </button>
    </div>
   </div>
   <div className="flex justify-center gap-36 pt-[140px] right-[10%]  relative">
    <AnimatedDiv
     className="object-contain z-30 absolute left-[15%]"
     style={ballProps}
    >
     <img src={ball} alt="" />
    </AnimatedDiv>
    <AnimatedDiv className="z-40" style={collaCubeProps}>
     <img
      className="relative w-20 object-contain left-[1100%] top-[40%]"
      src={scube}
      alt=""
     />
    </AnimatedDiv>
    <img className="relative z-10" src={card3} alt="" />
    <div className="flex flex-col items-start">
     <AnimatedDiv style={planeProps}>
      <img
       className="arrow object-contain left-[-44%] pt-5 relative"
       src={plane}
       alt=""
      />
     </AnimatedDiv>
     <p className="font-poppins text-4xl font-semibold">
      <AnimatedDiv style={collaboProps}>
       Collaborate from <br /> anywhere
      </AnimatedDiv>
     </p>
     <p className="font-inter text-lg font-medium leading-6 py-7 ">
      <AnimatedDiv>
       We&apos;re a growing family of 382,081 <br /> designers and makers from{" "}
       <br /> around the world
      </AnimatedDiv>
     </p>
     <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
      Get Solo Desktop
     </button>
    </div>
   </div>

   <div className="white-board-continter flex justify-center ">
    <div className="bg-custom-whiteboard w-[90%] rounded-3xl shadow-md p-5 flex">
     <div className=" ml-20 mt-40 mb-40 min-w-[60%]">
      <p className="text-custom-graytext font-bold">
       EASILY FIND WHAT YOU’RE LOOKING FOR
      </p>
      <p className="font-poppins font-semibold text-[3.3rem] pt-7 leading-tight">
       <AnimatedDiv style={historyProps}>
        History you can <br /> see and search
       </AnimatedDiv>
      </p>
      <p className="font-poppins text-lg py-7 text-custom-boldtext ">
       We&apos;re a growing family of 382,081 designers <br /> and makers from
       around the world
      </p>
      <button className="flex text-lg items-center gap-2 font-bold  border-2 border-black border-solid rounded-2xl px-6 py-3 hover:bg-black hover:text-white">
       Learn more
      </button>
     </div>
     <AnimatedDiv
      className="megaChat1 object-contain absolute left-[55%]"
      style={megaChat1Props}
     >
      <img src={megaChat1} alt="" />
     </AnimatedDiv>
     <AnimatedDiv
      className="megaChat2 object-contain absolute right-[1%]"
      style={megaChat2Props}
     >
      <img src={megaChat2} alt="" />
     </AnimatedDiv>
     <img
      className="object-contain right-[27%] relative"
      src={figure2}
      alt=""
     />
    </div>
   </div>
   <Svg />
   <Integration />
  </>
 );
};

export default Projects;
