import solo from "../assets/Images/solo.png";
import apple from "../assets/Images/app-store.svg";
import google from "../assets/Images/google-play.svg";

const Footer = () => {
 return (
  <>
   <div className="flex justify-between py-24 px-14">
    <div>
     <img className="object-contain w-36" src={solo} alt="" />
     <p className="text-poppins text-custom-textboard text-lg py-3">
      Join millions of people who organize work <br /> and life with Solo App.
     </p>
     <div className="flex gap-6">
      <img src={apple} alt="" />
      <img src={google} alt="" />
     </div>
    </div>
    <ul className="flex gap-10 font-poppins text-lg items-end font-medium text-custom-textboard">
     <li>Downloads</li>
     <li>Pricing</li>
     <li>Features</li>
     <li>About Us</li>
     <li>Contact</li>
    </ul>
   </div>
   <div className="flex justify-center">
    <div className=" border-custom-textboard border-solid border-t-[1px] w-11/12">
     <div className="flex text-sm justify-between py-7">
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
