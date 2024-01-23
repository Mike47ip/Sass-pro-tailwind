import solo from "../assets/Images/solo.png";

const Navbar = () => {
 return (
  <>
   <div className="NavWrapper flex p-4 font-roboto">
    <div>
     <img src={solo} alt="" />
     <div>Navbar</div>
    </div>
    <ul className="flex gap-10 font-raleway">
      <li>Downloads</li>
      <li>Pricing</li>
      <li>Features</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>

   </div>
  </>
 );
};

export default Navbar;
