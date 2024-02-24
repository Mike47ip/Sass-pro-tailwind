import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import atom from "../assets/Images/atom.svg";
import sketch from "../assets/Images/sketch.svg";
import google from "../assets/Images/google.svg";
import figma from "../assets/Images/figma.svg";
import notion from "../assets/Images/notion.svg";
import ui8 from "../assets/Images/ui8.svg";
import dribbble from "../assets/Images/dribbble.svg";
import chatAsh from "../assets/Images/chatAsh.png";
import chatAsh2 from "../assets/Images/chatAsh2.png";
import figures3 from "../assets/Images/figures3.png";
import Figures2 from "../assets/Images/Figures2.png";
import clouds from "../assets/Images/clouds.png";
import histogram from "../assets/Images/histogram.png";
import donut from "../assets/Images/donut.png";
import hand from "../assets/Images/hand.svg";
import play from "../assets/Images/play.svg";
import clock from "../assets/Images/clock.svg";
import star from "../assets/Images/star-fill.svg";
import Bricks from "../assets/Images/Bricks.png";
import megaChat from "../assets/Images/megaChat.png";

export const Integration = () => {
 const AnimatedDiv = animated.div;
 const powerRef = useRef(null);
 const notionRef = useRef(null);
 const ui8Ref = useRef(null);
 const chatAshRef = useRef(null);
 const chatAsh2Ref = useRef(null);
 const busyRef = useRef(null);
 const neverRef = useRef(null);
 const cloudsRef = useRef(null);
 const histoRef = useRef(null);
 const increaseRef = useRef(null);
 const simpleRef = useRef(null);
 const saveRef = useRef(null);
 const whatRef = useRef(null);
 const getRef = useRef(null);
 const megaChatRef = useRef(null);
 const [isPowerVisible, setIsPowerVisible] = useState(false);
 const [isNotionVisible, setIsNotionVisible] = useState(false);
 const [isUi8Visible, setIsUi8Visible] = useState(false);
 const [isChatAshVisible, setIsChatAshVisible] = useState(false);
 const [isChatAsh2Visible, setIsChatAsh2Visible] = useState(false);
 const [isBusyVisible, setIsBusyVisible] = useState(false);
 const [isNeverVisible, setIsNeverVisible] = useState(false);
 const [isCloudVisible, setIsCloudVisible] = useState(false);
 const [isIncreaseVisible, setIsIncreaseVisible] = useState(false);
 const [isSimpleVisible, setIsSimpleVisible] = useState(false);
 const [isWhatVisible, setIsWhatVisible] = useState(false);
 const [isGetVisible, setIsGetVisible] = useState(false);
 const [isMegaChatVisible, setIsMegaChatVisible] = useState(false);
 const [isHIstoVisible, setIsHistoVisible] = useState(false);
 const [isSaveVisible, setIsSaveVisible] = useState(false);

 const powerProps = useSpring({
  opacity: isPowerVisible ? 1 : 0,
  transform: isPowerVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const notionProps = useSpring({
  opacity: isNotionVisible ? 1 : 0,
  transform: isNotionVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const ui8Props = useSpring({
  opacity: isUi8Visible ? 1 : 0,
  transform: isUi8Visible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const chatAshProps = useSpring({
  opacity: isChatAshVisible ? 1 : 0,
  transform: isChatAshVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const chatAsh2Props = useSpring({
  opacity: isChatAsh2Visible ? 1 : 0,
  transform: isChatAsh2Visible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const busyProps = useSpring({
  opacity: isBusyVisible ? 1 : 0,
  transform: isBusyVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const neverProps = useSpring({
  opacity: isNeverVisible ? 1 : 0,
  transform: isNeverVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const cloudProps = useSpring({
  opacity: isCloudVisible ? 1 : 0,
  transform: isCloudVisible ? "translateY(0)" : "translateY(-50px)",
  config: { tension: 250, friction: 35 },
 });

 const increaseProps = useSpring({
  opacity: isIncreaseVisible ? 1 : 0,
  transform: isIncreaseVisible ? "translateY(0)" : "translateY(-50px)",
  config: { tension: 250, friction: 35 },
 });

 const simpleProps = useSpring({
  opacity: isSimpleVisible ? 1 : 0,
  transform: isSimpleVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const whatProps = useSpring({
  opacity: isWhatVisible ? 1 : 0,
  transform: isWhatVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const getProps = useSpring({
  opacity: isGetVisible ? 1 : 0,
  transform: isGetVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 35 },
 });

 const megaChatProps = useSpring({
  opacity: isMegaChatVisible ? 1 : 0,
  transform: isMegaChatVisible ? "translateY(0)" : "translateY(-50px)",
  config: { tension: 250, friction: 35 },
 });

 const histoProps = useSpring({
  opacity: isHIstoVisible ? 1 : 0,
  transform: isHIstoVisible ? "translateY(0)" : "translateY(-50px)",
  config: { tension: 250, friction: 35 },
 });

 const saveProps = useSpring({
  opacity: isSaveVisible ? 1 : 0,
  transform: isSaveVisible ? "translateY(0)" : "translateY(-50px)",
  config: { tension: 250, friction: 35 },
 });

 // OBSERVER API

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
  return handleIntersection(powerRef, setIsPowerVisible);
 }, [powerRef]);

 useEffect(() => {
  return handleIntersection(notionRef, setIsNotionVisible);
 }, [notionRef]);

 useEffect(() => {
  return handleIntersection(ui8Ref, setIsUi8Visible);
 }, [ui8Ref]);

 useEffect(() => {
  return handleIntersection(chatAshRef, setIsChatAshVisible);
 }, [chatAshRef]);

 useEffect(() => {
  return handleIntersection(chatAsh2Ref, setIsChatAsh2Visible);
 }, [chatAsh2Ref]);

 useEffect(() => {
  return handleIntersection(busyRef, setIsBusyVisible);
 }, [busyRef]);

 useEffect(() => {
  return handleIntersection(neverRef, setIsNeverVisible);
 }, [neverRef]);

 useEffect(() => {
  return handleIntersection(cloudsRef, setIsCloudVisible);
 }, [cloudsRef]);

 useEffect(() => {
  return handleIntersection(histoRef, setIsHistoVisible);
 }, [histoRef]);

 useEffect(() => {
  return handleIntersection(increaseRef, setIsIncreaseVisible);
 }, [increaseRef]);

 useEffect(() => {
  return handleIntersection(simpleRef, setIsSimpleVisible);
 }, [simpleRef]);

 useEffect(() => {
  return handleIntersection(saveRef, setIsSaveVisible);
 }, [saveRef]);

 useEffect(() => {
  return handleIntersection(whatRef, setIsWhatVisible);
 }, [whatRef]);

 useEffect(() => {
  return handleIntersection(getRef, setIsGetVisible);
 }, [getRef]);

 useEffect(() => {
  return handleIntersection(megaChatRef, setIsMegaChatVisible);
 }, [megaChatRef]);

 useEffect(() => {
  const handleScroll = () => {
   //  const scrollPosition = window.scrollY;
   //  const powerfulOffset = document.getElementById("powerful").offsetTop;
   //  const notionOffset = document.getElementById("notionDiv").offsetTop;
   //  const ui8Offset = document.getElementById("ui8Div").offsetTop;
   const windowHeight = window.innerHeight;
   //  const powerThreshold = powerfulOffset - windowHeight * 0.56;
   //  const notionThreshold = notionOffset - windowHeight * 0.6;
   //  const ui8Threshold = ui8Offset - windowHeight * 0.56;
   //  let chatAshThreshold = windowHeight * 13.0;
   //  if (window.innerWidth < 768) {
   //   chatAshThreshold = windowHeight * 16.4;
   //  }
   let chatAsh2Threshold = windowHeight * 13.1;
   if (window.innerWidth < 768) {
    chatAsh2Threshold = windowHeight * 16.2;
   }
   //  let busyThreshold = windowHeight * 13.1;
   //  if (window.innerWidth < 768) {
   //   busyThreshold = windowHeight * 15.7;
   //  }
   //  let neverThreshold = windowHeight * 14.4;
   //  if (window.innerWidth < 768) {
   //   neverThreshold = windowHeight * 17.8;
   //  }

   //  const cloudThreshold = windowHeight * 14.6;
   //  let increaseThreshold = windowHeight * 16.2;
   //  if (window.innerWidth < 768) {
   //   increaseThreshold = windowHeight * 18.5;
   //  }
   //  let histoThreshold = windowHeight * 16.1;
   //  if (window.innerWidth < 768) {
   //   histoThreshold = windowHeight * 19.1;
   //  }
   //  let simpleThreshold = windowHeight * 16.3;
   //  if (window.innerWidth < 768) {
   //   simpleThreshold = windowHeight * 19.8;
   //  }
   //  let whatThreshold = windowHeight * 17.3;
   //  if (window.innerWidth < 768) {
   //   whatThreshold = windowHeight * 20.8;
   //  }
   //  let getThreshold = windowHeight * 18.9;
   //  if (window.innerWidth < 768) {
   //   getThreshold = windowHeight * 22;
   //  }
   //  let megaChatThreshold = windowHeight * 19.1;
   //  if (window.innerWidth < 768) {
   //   megaChatThreshold = windowHeight * 22.4;
   //  }
   //  let saveThreshold = windowHeight * 16.5;
   //  if (window.innerWidth < 768) {
   //   saveThreshold = windowHeight * 20;
   //  }

   console.log("ChatASh:", chatAsh2Threshold);

   //  setIsPowerVisible(scrollPosition > powerThreshold);
   //  setIsNotionVisible(scrollPosition > notionThreshold);
   //  setIsUi8Visible(scrollPosition > ui8Threshold);
   //  setIsChatAshVisible(scrollPosition > chatAshThreshold);
   //  setIsChatAsh2Visible(scrollPosition > chatAsh2Threshold);
   //  setIsNeverVisible(scrollPosition > neverThreshold);
   //  setIsBusyVisible(scrollPosition > busyThreshold);
   //  setIsCloudVisible(scrollPosition > cloudThreshold);
   //  setIsIncreaseVisible(scrollPosition > increaseThreshold);
   //  setIsSimpleVisible(scrollPosition > simpleThreshold);
   //  setIsWhatVisible(scrollPosition > whatThreshold);
   //  setIsGetVisible(scrollPosition > getThreshold);
   //  setIsMegaChatVisible(scrollPosition > megaChatThreshold);
   //  setIsHistoVisible(scrollPosition > histoThreshold);
   //  setIsSaveVisible(scrollPosition > saveThreshold);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  <>
   <section>
    <section className="Power flex flex-col lg:flex-col justify-center items-center gap-[100px] xl:gap-[10%] xl:px-28 xl:flex-row">
     <div className="lg:flex lg:flex-col lg:justify-center lg:items-center w-[70%] lg:w-[100%] xl:items-start xl:w-[50%]">
      <p className=" text-custom-graytext font-bold py-4">AMAZING FEATURES</p>
      <h1 id="powerful" className="powerful">
       <AnimatedDiv
        ref={powerRef}
        style={powerProps}
        className="powerful font-poppins text-3xl lg:text-5xl leading-snug font-semibold"
       >
        Powerful <br className="block lg:hidden xl:block" /> integrations
       </AnimatedDiv>
      </h1>
      <div className="text-custom-textboard font-poppins lg:text-lg pt-6 lg:text-center xl:text-start">
       We&apos;re a growing family of 382,081 designers and{" "}
       <br className="hidden lg:block" /> makers from around the world
      </div>
     </div>
     <div className="SVG grid grid-cols-3 items-center justify-center w-[60%] gap-0">
      <div className="w-[60.33%] flex flex-col gap-12 lg:right-[-10%] right-[30%] relative ">
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[130%] lg:w-[125px] lg:h-[125px]"
        style={notionProps}
        ref={notionRef}
       >
        <img src={atom} alt=""></img>
       </AnimatedDiv>
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[130%] lg:w-[125px] lg:h-[125px]"
        style={ui8Props}
        ref={ui8Ref}
       >
        <img src={sketch} alt=""></img>
       </AnimatedDiv>
      </div>
      <div className=" w-[60.33%] flex flex-col gap-12  ">
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[130%] lg:w-[125px] lg:h-[125px]"
        id="notionDiv"
        style={notionProps}
        ref={notionRef}
       >
        <img src={notion} alt=""></img>
       </AnimatedDiv>
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[130%] lg:w-[125px] lg:h-[125px]"
        id="ui8Div"
        style={ui8Props}
        ref={ui8Ref}
       >
        <img src={ui8} alt=""></img>
       </AnimatedDiv>
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[160%] lg:w-[125px] lg:h-[125px]"
        style={ui8Props}
        ref={ui8Ref}
       >
        <img
         className="w-[80%] md:w-[60%] lg:w-[60%] "
         src={figma}
         alt=""
        ></img>
       </AnimatedDiv>
      </div>
      <div className="w-[60.33%] flex flex-col gap-12 lg:left-[-10%] left-[30%] relative">
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[130%] lg:w-[125px] lg:h-[125px]"
        style={notionProps}
        ref={notionRef}
       >
        <img src={google} alt=""></img>
       </AnimatedDiv>
       <AnimatedDiv
        className="p-6 bg-white rounded-3xl shadow-lg flex justify-center w-[160%] h-[130%] lg:w-[125px] lg:h-[125px]"
        style={ui8Props}
        ref={ui8Ref}
       >
        <img src={dribbble} alt=""></img>
       </AnimatedDiv>
      </div>
     </div>
    </section>

    <section className="flex flex-col-reverse lg:flex-row items-center left-[-5%] relative pt-40 lg:gap-28">
     <div className="flex flex-col justify-center items-center  lg:w-[45%]">
      <AnimatedDiv
       id="chatAsh"
       className="lg:left-[5%] w-[37%] lg:mt-[-10%] z-40 left-[12%] absolute lg:w-[24%] xl:left-[7%]"
       style={chatAshProps}
       ref={chatAshRef}
      >
       <img src={chatAsh} alt="" />
      </AnimatedDiv>
      <AnimatedDiv
       id="chatAsh2"
       className="lg:left-[27%] lg:mt-[-5%] left-[55%] z-40 absolute lg:w-[29%] xl:left-[30%]"
       style={chatAsh2Props}
       ref={chatAsh2Ref}
      >
       <img src={chatAsh2} alt="" />
      </AnimatedDiv>
      <img
       className="relative left-[9%] lg:max-w-[160%] lg:left-[30%] mt-20 "
       src={figures3}
       alt=""
      />
     </div>
     <div className="w-[70%] pl-[10%] lg:w-[55%]">
      <p className=" text-custom-graytext font-bold py-4">AMAZING FEATURES</p>
      <AnimatedDiv
       style={busyProps}
       ref={busyRef}
       className="font-poppins text-3xl lg:text-[41px] leading-snug font-semibold tracking-tight"
      >
       <h1>
        Your busy life <br className="hidden lg:block" /> deserves this
       </h1>
      </AnimatedDiv>
      <div className="text-custom-textboard font-poppins lg:text-md pt-6 ">
       We&apos;re a growing family of 382,081 designers and <br /> makers from
       around the world
      </div>
      <button className="flex text-lg items-center font-bold mt-10  border-2 border-custom-blackboard border-solid rounded-2xl px-6 py-3 hover:bg-custom-blackboard hover:text-white whitespace-nowrap">
       Launch Solo Desktop App
      </button>
     </div>
    </section>

    <section className="flex flex-col-reverse lg:flex-row  pt-28 pl-24 items-center ">
     <div className="lg:w-[100%]">
      <p className=" text-custom-graytext font-bold py-4">AMAZING FEATURES</p>
      <AnimatedDiv
       style={neverProps}
       ref={neverRef}
       className="font-poppins text-3xl lg:text-[41px] leading-snug font-semibold tracking-tight"
      >
       <h1>
        Never forget <br className="hidden lg:block" /> anything, <br /> ever
        again
       </h1>
      </AnimatedDiv>
      <div className="text-custom-textboard font-poppins lg:text-md pt-6 ">
       We&apos;re a growing family of 382,081 designers and{" "}
       <br className=" lg:hidden block" /> makers from around the world
      </div>
      <button className="flex text-lg items-center gap-2 font-bold mt-10  border-2 border-custom-blackboard border-solid rounded-2xl px-6 py-3 hover:bg-custom-blackboard hover:text-white">
       Find out more
      </button>
     </div>
     <div className="relative left-[-10%]">
      <AnimatedDiv style={cloudProps} ref={cloudsRef}>
       <img
        className="absolute w-[50%] left-[7%] mt-[-14%] lg:left-[20%] lg:mt-[-7%]"
        src={clouds}
        alt=""
       />
      </AnimatedDiv>
      <img
       className="w-[100rem] lg:min-w-[130%] ml-[7%]"
       src={Figures2}
       alt=""
      />
     </div>
    </section>

    <section className="flex justify-center items-center pt-20">
     <div className="flex flex-col lg:flex-row  lg:justify-between bg-white shadow-lg w-[90%] rounded-3xl p-[4rem]">
      <div className="flex flex-col-reverse lg:block lg:w-[50%]">
       <div className="pt-24 pb-16">
        <AnimatedDiv style={histoProps} ref={histoRef}>
         <img className="pt-12" src={histogram} alt="" />
        </AnimatedDiv>
        <img
         className="absolute left-[-5%] mt-[-35%] lg:left-[-20%] lg:mt-[-27%] xl:left-[-15%]"
         src={donut}
         alt=""
        />
       </div>
       <div className="lg:w-[55%]">
        <p className=" text-custom-graytext font-bold py-4">
         DEEP FOCUS & MULTITASKING
        </p>
        <h1 className="font-poppins text-3xl lg:text-5xl leading-snug font-semibold tracking-tight">
         <AnimatedDiv style={increaseProps} ref={increaseRef}>
          Increase <br /> Productivity
         </AnimatedDiv>
        </h1>
        <div className="text-custom-textboard font-poppins lg:text-lg pt-6 ">
         We&apos;re a growing family of 382,081 designers and <br /> makers from
         around the world
        </div>
        <button className="flex text-lg items-center gap-2 font-bold mt-10  border-2 border-custom-blackboard border-solid rounded-2xl px-6 py-3 hover:bg-custom-blackboard hover:text-white">
         Sign up now
        </button>
       </div>
      </div>
      <div className="flex flex-col w-full lg:w-[38%] justify-center">
       <div className="md:h-[161px] h-30 font-poppins flex justify-center gap-5 items-start  border-b-4 border-solid border-custom-greytext pb-8">
        <img className="w-12" src={hand} alt="" />
        <div>
         <AnimatedDiv style={simpleProps} ref={simpleRef}>
          <h2 className="font-semibold text-xl">Use a simple way</h2>
         </AnimatedDiv>
         <p className="pt-4 text-custom-textboard">
          We&apos;re a growing family of 382,081 designers and makers from
          around the world
         </p>
        </div>
       </div>
       <div className="md:h-44 h-49 font-poppins flex justify-center gap-5 items-start  border-b-4 border-solid border-custom-greytext pt-5 pb-8">
        <img className="w-12" src={play} alt="" />
        <div>
         <AnimatedDiv style={simpleProps} ref={simpleRef}>
          <h2 className="font-semibold text-xl">A productivity platform</h2>
         </AnimatedDiv>
         <p className="pt-4 text-custom-textboard">
          We&apos;re a growing family of 382,081 designers and makers from
          around the world
         </p>
        </div>
       </div>
       <div className=" md:h-44 h-49 font-poppins flex justify-center gap-5 items-start  border-b-4 border-solid border-custom-greytext pt-5 pb-8">
        <img className="w-12" src={clock} alt="" />
        <div>
         <AnimatedDiv style={saveProps} ref={saveRef}>
          <h2 className="font-semibold text-xl">Save your time</h2>
         </AnimatedDiv>
         <p className="pt-4 text-custom-textboard">
          We&apos;re a growing family of 382,081 designers and makers from
          around the world
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>
    <h3 className="text-center font-poppins text-3xl lg:text-5xl font-semibold leading-snug pt-28 pb-20">
     <AnimatedDiv style={whatProps} ref={whatRef}>
      What people <br /> are saying
     </AnimatedDiv>
    </h3>

    <div className="flex justify-center gap-24 p-8 overflow-x-auto ">
     <div className="min-w-[20rem] font-poppins font-semibold text-lg lg:text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;I used to have a hard time figuring out how to organize online
       meetings, Solo helped me to find a great solution and stay ahead of
       time&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="lg:text-xl font-poppins font-semibold pt-7">Ama Serwaa</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-lg lg:text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;Solo keeps things simple, the best apps of the year I&quot;ve ever
       used. I’ sure that the upcoming updates will be more complete..&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="lg:text-xl font-poppins font-semibold pt-7">
       Godfred Sugar
      </p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-lg lg:text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;Solo makes life easier to me. With Solo you can organize your work
       and life in seconds&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="lg:text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-lg lg:text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;Solo makes life easier to me. With Solo you can organize your work
       and life in seconds&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="lg:text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-lg lg:text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;Solo makes life easier to me. With Solo you can organize your work
       and life in seconds&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="lg:text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-lg lg:text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;Solo makes life easier to me. With Solo you can organize your work
       and life in seconds&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="lg:text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
    </div>
    <div className="pt-24 flex justify-center">
     <div className="bg-custom-blackboard flex flex-col lg:flex-row    lg:justify-start lg:items-center w-11/12  shadow-lg rounded-3xl lg:h-[40rem]">
      <div className="lg:min-w-[65%] flex flex-col justify-center items-center lg:items-start lg:px-10 p-10 relative ">
       <h1 className="font-poppins text-4xl lg:text-[52px] leading-snug font-semibold tracking-tight text-white">
        <AnimatedDiv style={getProps} ref={getRef}>
         Get started <br className="hidden lg:block" /> with Solo today
        </AnimatedDiv>
       </h1>
       <div className="text-custom-textboard font-poppins text-base lg:text-lg pt-6 ">
        Just invite your team, Solo does all the heavy-lifting.
       </div>
       <button className="bg-custom-primary px-6 py-4 mt-10 text-xl font-bold text-white rounded-2xl hover:bg-custom-deepcoral">
        Try it free
       </button>
      </div>
      <div className="min-w-[100%]">
       <AnimatedDiv
        ref={megaChatRef}
        className="absolute left-[35%] w-[24%] lg:mt-[8%] z-40 lg:left-[70%] xl:left-[63%]"
        style={megaChatProps}
       >
        <img src={megaChat} alt="" />
       </AnimatedDiv>
       <img
        className="MegaBricks w-[90%] mt-[14%] lg:w-[60rem] object-contain relative lg:right-[30%]  lg:mt-48"
        src={Bricks}
        alt=""
       />
      </div>
     </div>
    </div>
   </section>
  </>
 );
};
