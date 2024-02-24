import solo from "../assets/Images/solo.png";
import apple from "../assets/Images/app-store.svg";
import google from "../assets/Images/google-play.svg";

const Footer = () => {
 return (
  <>
   <div className="flex flex-col lg:flex-row justify-center items-center py-24 px-14">
    <div className="flex flex-col lg:flex-row justify-center lg:w-[100%] lg:justify-between items-center lg:justify-content xl:flex-col xl:items-start">
     <div>
      <div className="flex flex-col items-center">
       <img
        className="flex flex-col justify-center items-center object-contain w-36"
        src={solo}
        alt=""
       />
      </div>
      <p className="text-poppins text-center lg:text-start text-custom-textboard text-lg py-3">
       Join millions of people who <br className="block lg:hidden" /> organize
       work <br className="hidden lg:block" /> and life with{" "}
       <br className="block lg:hidden" /> Solo App.
      </p>
     </div>
     <div className="flex justify-center gap-6">
      <img src={apple} alt="" />
      <img src={google} alt="" />
     </div>
    </div>
    <ul className="xl:flex whitespace-nowrap hidden gap-10 font-poppins justify-end pt-[12%] text-md text-custom-textboard">
     <li>Downloads</li>
     <li>Pricing</li>
     <li>Features</li>
     <li>About Us</li>
     <li>Contact</li>
    </ul>
   </div>
   <div className="flex justify-center">
    <div className=" border-custom-textboard border-solid border-t-[1px] w-11/12">
     <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-sm lg:justify-between py-7">
      <span>© Solo Inc. Designed by UI8 Team</span>
      <ul className="flex gap-6 ">
       <li className="text-custom-textboard text-[20px]">
        <ion-icon name="logo-facebook"></ion-icon>
       </li>
       <li className="text-custom-textboard text-[20px]">
        <ion-icon name="logo-twitter"></ion-icon>
       </li>
       <li className="text-custom-textboard text-[20px]">
        <ion-icon name="logo-instagram"></ion-icon>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </>
 );
};

export default Footer;
