import solo from "../assets/Images/solo.png";

const Navbar = () => {
 return (
  <>
   <div className="NavWrapper flex px-28 py-12 font-inter font-semibold items-center justify-between">
    <div className="w-36">
     <img src={solo} alt="" />
    </div>
    <ul className="flex gap-10 text-custom-additional">
      <li>Downloads</li>
      <li>Pricing</li>
      <li>Features</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>

    <div className="NavButton">
      <button className="pr-6 text-custom-additional">Login</button>
      <button className="bg-custom-primary py-4 px-6 text-white rounded-2xl">Sign up</button>

    </div>

   </div>
  </>
 );
};

export default Navbar;
