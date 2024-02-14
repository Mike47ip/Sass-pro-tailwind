import solo from "../assets/Images/solo.png";
import "./Body.css";

const Navbar = () => {
 return (
  <>
   <div className="NavWrapper flex px-10 lg:px-28 py-12 font-inter font-semibold items-center justify-between">
    <div className="w-36">
     <img className="object-contain min-w-20 min-w-36" src={solo} alt="" />
    </div>
    <ul className="MenuList hidden gap-10 text-custom-additional">
     <li>Downloads</li>
     <li>Pricing</li>
     <li>Features</li>
     <li>About Us</li>
     <li>Contact</li>
    </ul>

    <div className="NavButton">
     <div className="hidden lg:flex buttonsDiv justify-center items-center">
      <button className="pr-6 text-custom-additional">Login</button>
      <button className="bg-custom-primary py-4 px-6 text-white rounded-2xl">
       Sign up
      </button>
     </div>
     <button className="HamburgerMenu w-60 flex  flex-col gap-2 justify-center items-end lg:hidden">
      <span className="w-[14%] border-2 border-black transform rotate-45 "></span>
      <span className="w-[14%] border-2 border-black transform relative mt-[-5%]   rotate-[-45deg] "></span>
     </button>
    </div>
   </div>
  </>
 );
};

export default Navbar;
