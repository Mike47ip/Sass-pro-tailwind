import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Body.css";
import Figures from "../assets/Images/Figures.png";
import bike from "../assets/Images/bike.png";
import goldlines from "../assets/Images/goldlines.png";
import rotashow from "../assets/Images/rotashow.png";
import travelers from "../assets/Images/travelers.png";
import velocity from "../assets/Images/velocity.png";
import waves from "../assets/Images/waves.png";
import iphone from "../assets/Images/iphone.png";
import stairs from "../assets/Images/stairs.png";
import chat1 from "../assets/Images/chat1.png";
import chat2 from "../assets/Images/chat2.png";
import concave from "../assets/Images/concave.png";
import cubes from "../assets/Images/cubes.png";

const AnimatedDiv = animated.div;

const Body = () => {
 const [isVisible, setIsVisible] = useState(false);
 const [isBikeVisible, setIsBikeVisible] = useState(false);
 const [isFastVisible, setIsFastVisible] = useState(false);
 const [isPhonetVisible, setIsPhoneVisible] = useState(false);

 const props = useSpring({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 20 },
 });

 const keeping = useSpring({
  opacity: isBikeVisible ? 1 : 0,
  transform: isBikeVisible ? "translateY(0)" : "translateY(70px)",
  config: { tension: 1000, friction: 20, duration: 300 },
 });

 const chat1Props = useSpring({
  opacity: isBikeVisible ? 1 : 0,
  config: { tension: 70, friction: 20, duration: 1000 },
 });

 const chat2Props = useSpring({
  opacity: isBikeVisible ? 1 : 0,
  config: { tension: 70, friction: 20, duration: 1000 },
 });

 const fastProps = useSpring({
  opacity: isFastVisible ? 1 : 0,
  transform: isFastVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 21 },
 });

 const phoneProps = useSpring({
  opacity: isPhonetVisible ? 1 : 0,
  transform: isPhonetVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 60 },
 });

 useEffect(() => {
  let lastScrollTop = 0;

  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   const windowHeight = window.innerHeight;
   const threshold = windowHeight * 0.1;
   let bikeThreshold = windowHeight * 3;
   if (window.innerWidth < 768) {
    bikeThreshold = windowHeight * 1.7;
   } else if (window.innerWidth > 768) {
    bikeThreshold = windowHeight * 1.4;
   }

   let fastThreshold = windowHeight * 3.4;
   if (window.innerWidth < 768) {
    fastThreshold = windowHeight * 4.5;
   } else if (window.innerWidth > 768) {
    fastThreshold = windowHeight * 2.3;
   } else if (window.innerWidth > 1023) {
    fastThreshold = windowHeight * 3;
   }
   let phoneThreshold = windowHeight * 1.7;
   if (window.innerWidth > 768) {
    phoneThreshold = windowHeight * 1.3;
   }
   console.log("phone:", phoneThreshold);

   const scrollDirection = scrollPosition > lastScrollTop ? "down" : "up";

   // Set isVisible to true only when scrolling down and beyond the threshold
   setIsVisible(scrollDirection === "down" && scrollPosition > threshold);

   setIsBikeVisible(scrollPosition > bikeThreshold);
   setIsFastVisible(scrollPosition > fastThreshold);
   setIsPhoneVisible(scrollPosition > phoneThreshold);

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
   <section className="relative">
    <div className="flex flex-col gap-16 justify-center items-center overflow-hidden  md:flex-row md:px-14">
     <div className="Paragraph pt-5 md:flex md:flex-col md:items-start md:min-w-[65%] lg:min-w-[50%] xl:pl-[5%] xl:pt-[10%]">
      <p className="text-center text-custom-graytext font-bold pb-8 lg:text-sm">
       RISK-FREE 30 DAY TRIAL
      </p>
      <div className="Props font-inter font-bold text-5xl lg:text-5xl text-center leading-none md:text-start xl:text-7xl">
       The best way <br /> to organize <br />{" "}
       <AnimatedDiv style={props}>your work.</AnimatedDiv>
      </div>
      <div className="text-custom-textboard text-center lg:text-start font-poppins text-lg pt-6">
       Organize your tasks, lists and <br className="block xl:hidden" />{" "}
       reminders in one app.
      </div>
      <div className="flex flex-col justify-center items-center gap-6 pt-10 text-lg font-inter md:flex-row md:w-[100%] lg:w-[90%] md:justify-start">
       <button className="bg-custom-primary px-6 md:px-3 md:w-[30%] py-4 font-bold md:text-base w-[45%] text-white rounded-2xl hover:bg-custom-deepcoral xl:w-[25%]">
        Try it free
       </button>
       <button className="flex justify-center items-center gap-2 md:gap-1 md:w-[50%] font-semibold border-2 border-black border-solid rounded-2xl px-6 md:px-3 md:text-base py-4 hover:bg-black hover:text-white xl:w-[40%]">
        <ion-icon name="play"></ion-icon>Watch how it works
       </button>
      </div>
     </div>
     <div className="md:w-[50%]">
      <AnimatedDiv
       style={{
        ...useSpring({
         opacity: isVisible ? 1 : 0,
         transform: isVisible ? "translate(0, 0)" : "translate(100px, -170px)",
         config: { tension: 100, friction: 20 },
        }),
       }}
       className="max-w-[80%]"
      >
       <img
        className="bike object-contain max-w-[40%] absolute md:w-[100%] md:mt-[-120%] md:min-w-[150%] md:right-[50%] lg:mt-[-50%] lg:right-[43%] lg:min-w-[90%]"
        src={bike}
        alt=""
       />
      </AnimatedDiv>
      <img
       className="Figures overflow-hidden md:absolute md:w-[90%] md:left-[40%] md:mt-[-30%] lg:w-[85%] lg:mt-[-20%]"
       src={Figures}
       alt=""
      />
     </div>
    </div>
    <p className="hidden  md:block text-center md:pt-32  text-custom-textboard font-inter">
     Thousands of teams worldwide are using Solo
    </p>
    <div className="hidden md: md:flex justify-center items-center px-5 gap-8 pt-5 pb-32">
     <img className="w-[13%]" src={goldlines} alt="" />
     <img className="w-[13%]" src={rotashow} alt="" />
     <img className="w-[13%]" src={travelers} alt="" />
     <img className="w-[13%]" src={velocity} alt="" />
     <img className="w-[13%]" src={waves} alt="" />
    </div>
   </section>

   <section>
    <div className="BoardWrapper flex justify-center">
     <div className="flex flex-col md:flex-row-reverse justify-center items-center lg:items-start black-board bg-custom-blackboard w-11/12 z-20 h-[690px] md:h-[25rem] lg:h-[40rem] rounded-3xl px-22">
      <div className="flex justify-center items-center md:pr-1 flex-col gap-8 relative md:w-[40%] lg:w-[35%] lg:top-[30%] z-20 text-white md:items-start">
       <p className="font-inter font-semibold text-4xl relative mt-[-30%] md:mt-0">
        <AnimatedDiv style={keeping}>
         Keeping it all <br className="md:block hidden" /> together
        </AnimatedDiv>
       </p>
       <p className="text-custom-textboard md:text-start md:px-0 font-inter px-5 font-bold">
        Just invite your team, Solo does all the heavy-lifting.
       </p>
       <button className="px-3 py-4 text-white w-[200px] border-solid border-2 rounded-2xl font-inter font-bold hover:bg-white hover:text-black transform trasition-all ease-in">
        Schedule a demo
       </button>
      </div>
      <div className="w-[50%] md:mt-[-20%]">
       <AnimatedDiv
        className="chat1"
        style={{
         ...chat1Props,
        }}
       >
        <img
         className="relative object-contain w-[65%]   ml-[44%] mt-[2%] z-40 lg:left-[-4%] lg:mt-[45%] xl:w-[51%] xl:left-[-9%]"
         src={chat1}
         alt=""
        />
       </AnimatedDiv>
       <AnimatedDiv
        className="chat2 relative object-contain w-[54%] mt-[20%] ml-[-12%] lg:mt-[10%] z-40 lg:left-[-4%] lg:w-[53%] selection:marker: xl:mt-[-10%]"
        style={{
         ...chat2Props,
        }}
       >
        <img src={chat2} alt="" />
       </AnimatedDiv>
       <AnimatedDiv
        className="relative w-[55%] ml-[20%] mt-[-80%] lg:mt-[-80%] lg:left-[-4%] lg:w-[77%] z-20 xl:mt-[-54%]"
        style={phoneProps}
       >
        <img src={iphone} alt="" />
       </AnimatedDiv>
       <img
        className="w-[64%] mt-[-15%] ml-[-1%] absolute z-10 lg:left-[4%] lg:mt-[-17%] lg:w-[67%]"
        src={stairs}
        alt=""
       />
       <img className="hidden ml-[-29%] mt-[7%]" src={concave} alt="" />
      </div>
     </div>
    </div>
    <div className="gradientContainer flex justify-center">
     <div className="gradient w-11/12 mt-[-15px] z-10 md:h-[15rem] rounded-b-2xl flex justify-center items-center">
      <ul className="md:w-[100%] md:p-10 pt-32 flex flex-col md:flex-row md:justify-center md:items-center font-poppins gap-24 md:gap-11 lg:gap-20 xl:gap-32">
       <li className="px-10 py-5 flex flex-col gap-4">
        <span className="lg:text-7xl text-6xl font-semibold text-center">
         100<span style={{ verticalAlign: "super", fontSize: "24px" }}>+</span>
        </span>{" "}
        <span className="bg-white  md:whitespace-nowrap  text-center p-1 text-xs rounded-2xl shadow-xl">
         Countries supported
        </span>
       </li>
       <li className="px-10 py-5  flex flex-col gap-4">
        <span className="lg:text-7xl text-6xl font-semibold text-center">
         28<span style={{ fontSize: "24px" }}>m</span>
        </span>{" "}
        <span className="bg-white  md:whitespace-nowrap  text-center p-1 text-xs rounded-2xl shadow-xl">
         Downloads on App Store
        </span>
       </li>
       <li className="px-10 py-5 md:pt-0 pb-20 md:pb-0 flex flex-col gap-4 text-center">
        <span className="lg:text-7xl text-6xl font-semibold">
         16<span style={{ fontSize: "24px" }}>m</span>
        </span>{" "}
        <span className="bg-white  md:whitespace-nowrap  text-center p-1 text-xs rounded-2xl shadow-xl">
         Verified Users
        </span>
       </li>
      </ul>
     </div>
    </div>
    <div className="pt-36 font-poppins">
     <p className="text-center text-custom-graytext font-bold">INSTANT SETUP</p>
     <p className="text-4xl lg:text-5xl font-semibold text-center pt-4">
      <AnimatedDiv style={fastProps}>Fast, simple & effortless.</AnimatedDiv>
     </p>
     <div className="flex pt-16 flex-col md:flex-row justify-center items-center gap-6 lg:gap-16 lg:px-4">
      <div className="flex flex-col items-center gap-4 w-1/3 md:border-r-2  md:border-b-0   border-b-4 border-custom-border lg:border-r-4 lg:border-custom-border py-12 lg:pr-16">
       <svg
        className="laptop"
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="52"
        viewBox="0 0 58 52"
       >
        <path
         fill="#272e35"
         d="M45 .5c3.696 0 6.706 2.932 6.829 6.598l.004.235V20.5H53a4.17 4.17 0 0 1 4.162 3.959l.005.208v22.667A4.17 4.17 0 0 1 53 51.5h0-13.333a4.17 4.17 0 0 1-4.167-4.167h0V43.5H5.001a4.17 4.17 0 0 1-4.162-3.959l-.005-.208v-2.667A4.17 4.17 0 0 1 3.5 32.779V7.333C3.5 3.637 6.432.628 10.098.504L10.333.5H45zm9.166 43H38.5v3.833a1.17 1.17 0 0 0 1.04 1.16l.127.007H53a1.17 1.17 0 0 0 1.167-1.167h0l-.001-3.833zM53 23.5H39.667a1.17 1.17 0 0 0-1.167 1.167h0V40.5h15.666l.001-15.833a1.17 1.17 0 0 0-1.04-1.16L53 23.5zm-17.5 12H5.001a1.17 1.17 0 0 0-1.16 1.04l-.007.127v2.667a1.17 1.17 0 0 0 1.04 1.16l.127.007H35.5v-5zm9.5-32H10.333c-2.052 0-3.726 1.61-3.828 3.636l-.005.197V32.5h29v-7.833a4.17 4.17 0 0 1 3.959-4.162l.208-.005h9.166V7.333c0-2.052-1.61-3.726-3.636-3.828L45 3.5z"
        ></path>
       </svg>
       <span className="bg-custom-graytext text-white px-3 py-1.5 rounded-2xl text-xs">
        Step 1
       </span>
       <p className="opacity-80 lg:whitespace-nowrap">Download the app</p>
      </div>
      <div className="flex flex-col items-center gap-4 w-1/3 md:border-r-2  md:border-b-0   border-b-4 border-custom-border lg:border-r-4 lg:border-custom-border py-12 lg:pr-16">
       <svg
        className="cloud"
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="53"
        viewBox="0 0 58 42"
       >
        <path
         fill="#272e35"
         d="M29.001.833c9.117 0 16.604 6.969 17.425 15.871h0l.017.213.36.048c5.766.857 10.213 5.76 10.36 11.73h0l.004.305a12.17 12.17 0 0 1-12.167 12.167h0-29.333C7.476 41.167.834 34.525.834 26.333c0-7.089 5.02-13.072 11.841-14.47h0l.084-.016.063-.155A17.49 17.49 0 0 1 28.636.837h0zm0 3c-6.251 0-11.73 3.998-13.716 9.831a1.5 1.5 0 0 1-1.217 1.003c-5.842.798-10.234 5.75-10.234 11.666 0 6.534 5.299 11.833 11.833 11.833h29.333A9.17 9.17 0 0 0 54.167 29a9.17 9.17 0 0 0-9.167-9.167 1.5 1.5 0 0 1-1.5-1.5c0-8.009-6.491-14.5-14.5-14.5zm-.827 27.751l-.016-.01c-.032-.022-.063-.044-.093-.068l-.036-.03a1.51 1.51 0 0 1-.071-.064l-.02-.02-5.779-5.779a1.5 1.5 0 0 1 2.007-2.224l.114.103L27.5 26.71V17a1.5 1.5 0 0 1 2.993-.144L30.5 17v9.708l3.217-3.216a1.5 1.5 0 0 1 2.224 2.007l-.103.114-5.787 5.789a1.51 1.51 0 0 1-.095.086l.103-.096c-.038.038-.078.074-.12.108-.256.209-.584.333-.94.333-.292 0-.565-.084-.796-.228l-.03-.02z"
        ></path>
       </svg>
       <span className="bg-custom-graytext text-white px-3 py-1.5 rounded-2xl text-xs">
        Step 2
       </span>
       <p className="opacity-80 lg:whitespace-nowrap">Invite teammates</p>
      </div>
      <div className="flex flex-col items-center gap-4 w-1/3 md:border-r-2  md:border-b-0   border-b-4 border-custom-border lg:border-r-4 lg:border-custom-border py-12 lg:pr-16">
       <svg
        className="globe"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="52"
        viewBox="0 0 60 52"
       >
        <path
         fill="#272e35"
         d="M30.001.5C44.082.5 55.5 11.918 55.5 26c0 .836-.044 1.672-.129 2.509l1.569-1.569a1.5 1.5 0 0 1 2.224 2.007l-.103.114-4 4a1.5 1.5 0 0 1-2.007.103l-.114-.103-4-4a1.5 1.5 0 0 1 2.007-2.224l.114.103 1.32 1.318c.079-.754.119-1.506.119-2.257 0-4.467-1.302-8.63-3.548-12.131-2.741.872-5.525 1.555-8.341 2.045l.018.097.136.774.064.392.119.793.108.804a54.32 54.32 0 0 1 .22 2.057h0l.068.84.029.424.05.854c.051 1.001.077 2.019.077 3.051s-.026 2.05-.077 3.051h0l-.05.854-.029.424-.068.84a54.32 54.32 0 0 1-.22 2.057h0l-.108.804-.058.398-.125.787-.136.774-.016.088a63.56 63.56 0 0 1 9.385 2.384l.027.01-.027-.01a1.5 1.5 0 0 1 .944 1.9c-.059.176-.148.334-.259.471l.055-.079C46.05 47.331 38.57 51.359 30.388 51.486A5.13 5.13 0 0 1 30 51.5a5.83 5.83 0 0 1-.39-.013l.38.002c-14.082 0-25.5-11.418-25.5-25.5 0-.828.043-1.656.127-2.485l-1.556 1.556a1.5 1.5 0 0 1-2.007.103l-.114-.103a1.5 1.5 0 0 1-.103-2.007l.103-.114 4-4a1.5 1.5 0 0 1 2.007-.103l.114.103 4 4a1.5 1.5 0 0 1-2.007 2.224l-.114-.103-1.33-1.328a21.61 21.61 0 0 0-.119 2.257c0 4.467 1.302 8.63 3.548 12.131 2.743-.872 5.53-1.556 8.348-2.046l-.015-.085-.136-.774-.064-.392-.119-.793-.108-.804a54.32 54.32 0 0 1-.22-2.057h0l-.068-.84-.029-.424-.05-.854C18.526 28.05 18.5 27.032 18.5 26h0l.002-.441a59.97 59.97 0 0 1 .075-2.61h0l.05-.854.029-.424.068-.84a54.32 54.32 0 0 1 .22-2.057h0l.108-.804.058-.398.125-.787.136-.774.018-.099c-3.158-.548-6.277-1.341-9.341-2.368a1.47 1.47 0 0 1-.445-.216c-.181-.129-.325-.292-.43-.473-.005-.011-.011-.022-.017-.033a.98.98 0 0 1-.044-.086c-.004-.011-.009-.022-.014-.033-.015-.033-.028-.067-.04-.101-.003-.011-.007-.023-.011-.035a1.16 1.16 0 0 1-.025-.082l-.01-.043a1.34 1.34 0 0 1-.016-.076 1.49 1.49 0 0 1-.01-.067l-.006-.055c-.003-.028-.005-.056-.006-.085v-.043c-.001-.076.004-.152.015-.229l.009-.055c.004-.022.009-.045.014-.067l.005-.02a1.49 1.49 0 0 1 .025-.09 1.1 1.1 0 0 1 .009-.029 1.52 1.52 0 0 1 .054-.139 2.17 2.17 0 0 1 .037-.075 1.4 1.4 0 0 1 .12-.195l-.011.018C14.019 4.551 21.666.5 30 .5h.001zm-.007 37.656c-2.335 0-4.656.139-6.959.414l.135.494.187.64a31.53 31.53 0 0 0 .5 1.52h0l.213.575.22.555c1.501 3.663 3.453 5.956 5.457 6.135h.243.26c2.006-.177 3.958-2.471 5.459-6.135h0l.22-.555.213-.575a31.53 31.53 0 0 0 .5-1.52h0l.187-.64.133-.493c-2.306-.275-4.631-.415-6.969-.415zm-9.959.852l-.481.082c-2.226.401-4.432.929-6.612 1.581a22.51 22.51 0 0 0 10.806 6.941c-1.239-1.73-2.297-3.97-3.133-6.585h0l-.208-.675c-.13-.438-.255-.886-.373-1.343zm19.93-.001l-.022.089a38.12 38.12 0 0 1-.35 1.254h0l-.208.675c-.833 2.607-1.888 4.843-3.122 6.571 4.162-1.214 7.887-3.62 10.74-6.937a60.1 60.1 0 0 0-7.038-1.652zM30 16.832a61.75 61.75 0 0 1-7.629-.473l-.004.023-.068.366-.128.742-.06.376-.112.762-.102.775-.132 1.185-.074.805-.062.816-.05.826-.038.836-.026.845L21.5 26l.002.43.013.854.026.845.038.836.05.826.062.816.074.805.132 1.185.102.775.112.762.06.376.128.742.137.728-.068-.352a61.75 61.75 0 0 1 15.263.001l.002-.012.068-.366.128-.742.06-.376.112-.762.102-.775.132-1.185.074-.805.062-.816.05-.826.038-.836.026-.845L38.5 26l-.015-1.284-.026-.845-.038-.836-.05-.826-.062-.816-.074-.805-.132-1.185-.102-.775-.112-.762-.06-.376-.128-.742-.137-.728.066.339a61.75 61.75 0 0 1-7.629.473zM30 3.5c-2.093 0-4.146 2.329-5.71 6.146h0l-.22.555-.213.575a31.53 31.53 0 0 0-.5 1.52h0l-.187.64-.13.482c2.303.275 4.625.414 6.96.414s4.658-.139 6.961-.414l-.131-.482-.187-.64a31.53 31.53 0 0 0-.5-1.52h0l-.213-.575-.22-.555C34.146 5.829 32.093 3.5 30 3.5zm-6.251.886l-.306.092a22.48 22.48 0 0 0-10.454 6.849c2.322.694 4.674 1.246 7.049 1.654.116-.455.24-.899.369-1.333h0l.208-.675c.836-2.616 1.895-4.857 3.134-6.588zm12.496-.008l.087.123c1.204 1.714 2.235 3.914 3.052 6.473h0l.208.675a38.22 38.22 0 0 1 .37 1.331c2.387-.408 4.751-.963 7.085-1.661-2.814-3.266-6.549-5.713-10.802-6.94z"
        ></path>
       </svg>
       <span className="bg-custom-graytext text-white px-3 py-1.5 rounded-2xl text-xs">
        Step 3
       </span>
       <p className="opacity-80 lg:whitespace-nowrap">Create workspace</p>
      </div>
      <div className="flex flex-col items-center gap-4 w-1/3 md:border-r-2  md:border-b-0  py-10 ">
       <svg
        className="chart"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="48"
        viewBox="0 0 56 48"
       >
        <path
         fill="#272e35"
         d="M49.332 23.5a1.5 1.5 0 0 1 1.493 1.356l.007.144v21.333a1.5 1.5 0 0 1-2.993.144l-.007-.144V25a1.5 1.5 0 0 1 1.5-1.5zM6.666 36.833a1.5 1.5 0 0 1 1.493 1.356l.007.144v8a1.5 1.5 0 0 1-2.993.144l-.007-.144v-8a1.5 1.5 0 0 1 1.5-1.5zm28.531-6.217a1.5 1.5 0 0 1 1.493 1.356l.007.144V46.33a1.5 1.5 0 0 1-2.993.144l-.007-.144V32.117a1.5 1.5 0 0 1 1.5-1.5zm-14.4-2.854a1.5 1.5 0 0 1 1.493 1.356l.007.144v17.067a1.5 1.5 0 0 1-2.993.144l-.007-.144V29.263a1.5 1.5 0 0 1 1.5-1.5zM45.253 2.619a6.17 6.17 0 0 1 8.721 0 6.17 6.17 0 0 1-7.99 9.347L40.76 16.31a6.17 6.17 0 0 1-9.916 7.04c-1.735-1.735-2.22-4.248-1.455-6.417l-4.459-2.991a6.17 6.17 0 0 1-7.758.414l-5.221 4.357a6.17 6.17 0 0 1-9.925 7.021 6.17 6.17 0 0 1 0-8.721 6.17 6.17 0 0 1 8.011-.611l5.209-4.347a6.17 6.17 0 0 1 9.911-7.051c1.743 1.743 2.224 4.269 1.445 6.445l4.447 2.983a6.17 6.17 0 0 1 7.79-.427l5.222-4.343a6.17 6.17 0 0 1 1.193-7.044zM4.146 19.135a3.17 3.17 0 0 0 0 4.478 3.17 3.17 0 0 0 4.777-4.134 1.2 1.2 0 0 1-.102-.109c-.035-.042-.067-.085-.096-.129l-.1-.107-.146-.137a3.17 3.17 0 0 0-4.332.137zm33.151-2.522c-1.244-1.098-3.143-1.052-4.332.137-1.237 1.237-1.237 3.242 0 4.478s3.242 1.237 4.478 0a3.17 3.17 0 0 0 .309-4.12c-.048-.041-.092-.088-.134-.138s-.077-.098-.11-.149l-.066-.072zM22.889 6.989c-1.244-1.098-3.143-1.052-4.332.137a3.17 3.17 0 0 0-.273 4.168 1.11 1.11 0 0 1 .094.1l.074.098.105.112c1.189 1.189 3.089 1.235 4.332.137l.146-.137a3.19 3.19 0 0 0 .329-.386c.016-.033.036-.065.057-.096l.066-.087a3.17 3.17 0 0 0-.452-3.91h0zm28.818-2.386a3.17 3.17 0 0 0-4.649 4.247 1.17 1.17 0 0 1 .147.149c.043.051.081.104.116.159l.054.06a3.17 3.17 0 0 0 4.478 0c1.237-1.237 1.237-3.242 0-4.478h0z"
        ></path>
       </svg>
       <span className="bg-custom-graytext text-white px-3 py-1.5 rounded-2xl text-xs">
        Step 4
       </span>
       <p className="opacity-80 lg:whitespace-nowrap">Track performance</p>
      </div>
     </div>
    </div>
    <div className="flex justify-center">
     <img src={cubes} alt="" />
    </div>
    <p className="text-center text-custom-graytext font-bold pt-6">
     AMAZING FEATURES
    </p>
   </section>
  </>
 );
};
export default Body;
