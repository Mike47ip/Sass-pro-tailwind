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

const AnimatedDiv = animated.div;

const Body = () => {
 const [isVisible, setIsVisible] = useState(false);

 const props = useSpring({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 20 },
 });

 const chat1Props = useSpring({
  loop: { reverse: true }, // Reverse the animation when reaching the end
  from: { y: 0 },
  to: { y: 20 },
  config: { tension: 70, friction: 20 },
 });

 const chat2Props = useSpring({
  loop: { reverse: true }, // Reverse the animation when reaching the end
  from: { y: 0 },
  to: { y: -20 },
  config: { tension: 70, friction: 20 },
 });

 useEffect(() => {
  let lastScrollTop = 0;

  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   const windowHeight = window.innerHeight;
   const threshold = windowHeight * 0.1;

   const scrollDirection = scrollPosition > lastScrollTop ? "down" : "up";

   // Set isVisible to true only when scrolling down and beyond the threshold
   setIsVisible(scrollDirection === "down" && scrollPosition > threshold);

   lastScrollTop = scrollPosition;
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []); // Empty dependencies array to run once on mount

 return (
  <>
   <section className="relative overflow-hidden">
    <div className="flex overflow-hidden">
     <div className="Paragraph pl-24 pr-5 pt-32">
      <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
      <div className="font-inter font-bold text-7xl leading-none">
       The best way <br /> to organize <br />{" "}
       <AnimatedDiv style={props} className={isVisible ? "animate" : ""}>
        your work.
       </AnimatedDiv>
      </div>
      <div className=" text-xl pt-6">
       Organize your tasks, lists and reminders in one app.
      </div>
      <div className="flex gap-6 pt-10 text-lg font-inter">
       <button className="bg-custom-primary px-6 py-4 font-bold text-white rounded-2xl">
        Try it free
       </button>
       <button className="flex items-center gap-2 font-semibold  border-2 border-black border-solid rounded-2xl px-6 py-3">
        <ion-icon name="play"></ion-icon>Watch how it works
       </button>
      </div>
     </div>
     <div>
      <AnimatedDiv
       style={{
        ...useSpring({
         opacity: isVisible ? 1 : 0,
         transform: isVisible ? "translate(0, 0)" : "translate(100px, -100px)",
         config: { tension: 250, friction: 20 },
        }),
       }}
       className={isVisible ? "animate" : ""}
      >
       <img className="bike absolute" src={bike} alt="" />
      </AnimatedDiv>
      <img className="Figures overflow-hidden" src={Figures} alt="" />
     </div>
    </div>
    <p className="text-center text-custom-textboard font-inter">
     Thousands of teams worldwide are using Solo
    </p>
    <div className="flex justify-center gap-4 pt-5 pb-32">
     <img src={goldlines} alt="" />
     <img src={rotashow} alt="" />
     <img src={travelers} alt="" />
     <img src={velocity} alt="" />
     <img src={goldlines} alt="" />
     <img src={waves} alt="" />
    </div>
   </section>

   <section>
    <div className="BoardWrapper flex justify-center">
     <div className="black-board bg-custom-blackboard w-4/5 h-[604px] rounded-3xl px-22">
      <img className="relative top-[-4%] left-[17%] z-20" src={iphone} alt="" />
      <img
       className="relative top-[-37%] left-[-1%] z-10"
       src={stairs}
       alt=""
      />
      <AnimatedDiv
       style={{
        ...chat1Props,
        opacity: isVisible ? 1 : 0,
        zIndex: isVisible ? 1 : -1,
       }}
      >
       <img className="relative mt-[-700px] z-20" src={chat1} alt="" />
      </AnimatedDiv>
      <AnimatedDiv
       style={{
        ...chat2Props,
        opacity: isVisible ? 1 : 0,
        zIndex: isVisible ? 1 : -1,
       }}
      >
       <img
        className="relative mt-[-200px] left-[26%] z-20"
        src={chat2}
        alt=""
       />
      </AnimatedDiv>
      <img className="ml-[-7%] mt-[7%]" src={concave} alt="" />
      <div className="flex flex-col gap-8 relative top-[-40%] left-[60%] z-20 text-white">
       <p className="font-inter font-semibold text-5xl">
        Keeping it all <br /> together
       </p>
       <p className="text-custom-textboard font-inter font-bold">
        Just invite your team, Solo does all the <br /> heavy-lifting.
       </p>
      </div>
     </div>
    </div>
    <div className="gradient w-full h-96"></div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br /> <div>your work.</div>
     </div>
    </div>
   </section>
  </>
 );
};
export default Body;
