import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Body.css";
import Figures from "../assets/Images/Figures.png";
import bike from "../assets/Images/bike.png";

const AnimatedDiv = animated.div;

const Body = () => {
 const [isVisible, setIsVisible] = useState(false);

 const props = useSpring({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(50px)",
  config: { tension: 250, friction: 20 },
 });

 useEffect(() => {
  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   const windowHeight = window.innerHeight;

   // Adjust this threshold based on your needs
   const threshold = windowHeight * 0.1;

   // Set isVisible to true when the user scrolls up beyond the threshold,
   // and set it to false when the user is below the threshold
   setIsVisible(scrollPosition > threshold);
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
     <div></div>
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
