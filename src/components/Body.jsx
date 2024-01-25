import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Body.css'; // Import the CSS file for custom styling

const AnimatedDiv = animated.div;

const Body = () => {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 250, friction: 20 }, // Adjust animation config as needed
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust this threshold based on your needs
      const threshold = windowHeight * 0.3;

      // Set isVisible to true when the user scrolls up beyond the threshold,
      // and set it to false when the user is below the threshold
      setIsVisible(scrollPosition > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependencies array to run once on mount

 return (
  <>
   <section className="relative overflow-hidden">
    <div className="px-24 py-3">
     <p className="font-bold text-sm py-5">RISK-FREE 30 DAY TRIAL</p>
     <div className="font-inter font-bold text-7xl leading-none">
      The best way <br /> to organize <br />{" "}
      <AnimatedDiv style={props} className={isVisible ? "animate" : ""}>
       your work.
      </AnimatedDiv>
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
