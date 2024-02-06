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

export const Integration = () => {
 return (
  <>
   <section>
    <section className="flex justify-center items-center px-20 gap-[100px]">
     <div className="w-[40%]">
      <p className=" text-custom-graytext font-bold py-4">AMAZING FEATURES</p>
      <h1 className="font-poppins text-6xl leading-snug font-semibold">
       Powerfull <br /> Intergrations
      </h1>
      <div className="text-custom-textboard font-poppins text-lg pt-6 ">
       We&apos;re a growing family of 382,081 designers and <br /> makers from
       around the world
      </div>
     </div>
     <div className="grid grid-cols-3 items-center justify-center w-[60%] gap-0">
      <div className="w-[60.33%] flex flex-col gap-12 right-[-15%] relative ">
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={atom}
        alt=""
       ></img>
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={sketch}
        alt=""
       ></img>
      </div>
      <div className=" w-[60.33%] flex flex-col gap-12  ">
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={notion}
        alt=""
       ></img>
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={ui8}
        alt=""
       ></img>
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={figma}
        alt=""
       ></img>
      </div>
      <div className="w-[60.33%] flex flex-col gap-12 left-[-15%] relative   ">
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={google}
        alt=""
       ></img>
       <img
        className="p-6 bg-white rounded-2xl shadow-lg"
        src={dribbble}
        alt=""
       ></img>
      </div>
     </div>
    </section>

    <section className="flex items-center left-[-5%] relative pt-40 ">
     <div className="w-[45%">
      <img className="left-[5%] mt-[10%] absolute" src={chatAsh} alt="" />
      <img className="left-[30%] absolute" src={chatAsh2} alt="" />
      <img className="w-[90rem]" src={figures3} alt="" />
     </div>
     <div className="w-[55%]">
      <p className=" text-custom-graytext font-bold py-4">AMAZING FEATURES</p>
      <h1 className="font-poppins text-5xl leading-snug font-semibold tracking-tight">
       Your busy life <br /> deserves this
      </h1>
      <div className="text-custom-textboard font-poppins text-lg pt-6 ">
       We&apos;re a growing family of 382,081 designers and <br /> makers from
       around the world
      </div>
      <button className="flex text-lg items-center gap-2 font-bold mt-10  border-2 border-custom-blackboard border-solid rounded-2xl px-6 py-3 hover:bg-custom-blackboard hover:text-white">
       Launch Solo Desktop App
      </button>
     </div>
    </section>

    <section className="flex pt-28 pl-24 items-center">
     <div className="w-[55%]">
      <p className=" text-custom-graytext font-bold py-4">AMAZING FEATURES</p>
      <h1 className="font-poppins text-5xl leading-snug font-semibold tracking-tight">
       Never forget <br /> anything, <br /> ever again
      </h1>
      <div className="text-custom-textboard font-poppins text-lg pt-6 ">
       We&apos;re a growing family of 382,081 designers and <br /> makers from
       around the world
      </div>
      <button className="flex text-lg items-center gap-2 font-bold mt-10  border-2 border-custom-blackboard border-solid rounded-2xl px-6 py-3 hover:bg-custom-blackboard hover:text-white">
       Launch Solo Desktop App
      </button>
     </div>
     <div>
      <img className="absolute" src={clouds} alt="" />
      <img src={Figures2} alt="" />
     </div>
    </section>

    <section className="flex justify-center items-center pt-64">
     <div className="flex justify-between bg-white shadow-lg w-[90%] rounded-3xl p-28">
      <div className="w-[50%]">
       <img className="pt-12" src={histogram} alt="" />
       <img className="absolute left-[-13%] mt-[-30%]" src={donut} alt="" />
       <div className="w-[55%]">
        <p className=" text-custom-graytext font-bold py-4">
         DEEP FOCUS & MULTITASKING
        </p>
        <h1 className="font-poppins text-5xl leading-snug font-semibold tracking-tight">
         Increase <br /> Productivity
        </h1>
        <div className="text-custom-textboard font-poppins text-lg pt-6 ">
         We&apos;re a growing family of 382,081 designers and <br /> makers from
         around the world
        </div>
        <button className="flex text-lg items-center gap-2 font-bold mt-10  border-2 border-custom-blackboard border-solid rounded-2xl px-6 py-3 hover:bg-custom-blackboard hover:text-white">
         Sign up now
        </button>
       </div>
      </div>
      <div className="flex flex-col w-[38%] justify-center">
       <div className="h-30 h-38 h-42 h-44 font-poppins flex justify-center gap-5 items-start  border-b-4 border-solid border-custom-greytext">
        <img className="w-12" src={hand} alt="" />
        <div>
         <h2 className="font-semibold text-xl">Use a simple way</h2>
         <p className="pt-4 text-custom-textboard">
          We&apos;re a growing family of 382,081 designers and makers from
          around the world
         </p>
        </div>
       </div>
       <div className="h-30 h-38 h-42 h-44 font-poppins flex justify-center gap-5 items-start  border-b-4 border-solid border-custom-greytext pt-5">
        <img className="w-12" src={play} alt="" />
        <div>
         <h2 className="font-semibold text-xl">A productivity platform</h2>
         <p className="pt-4 text-custom-textboard">
          We&apos;re a growing family of 382,081 designers and makers from
          around the world
         </p>
        </div>
       </div>
       <div className="h-30 h-38 h-42 h-44 font-poppins flex justify-center gap-5 items-start  border-b-4 border-solid border-custom-greytext pt-5">
        <img className="w-12" src={clock} alt="" />
        <div>
         <h2 className="font-semibold text-xl">Save your time</h2>
         <p className="pt-4 text-custom-textboard">
          We&apos;re a growing family of 382,081 designers and makers from
          around the world
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>
    <h3 className="text-center font-poppins text-5xl font-semibold leading-snug pt-28 pb-20">
     What people <br /> are saying
    </h3>

    <div className="flex justify-center gap-14 p-8 overflow-x-auto  ">
     <div className="min-w-[20rem] font-poppins font-semibold text-2xl  text-center ">
      <p className=" h-[200px]">
       &quot;I used to have a hard time figuring out how to organize online
       meetings, Solo helped me to find a great solution!&quot;
      </p>
      <div className="flex justify-center gap-5 pt-8">
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
       <img src={star} alt="" />
      </div>
      <p className="text-xl font-poppins font-semibold pt-7">Ama Serwaa</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-2xl  text-center ">
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
      <p className="text-xl font-poppins font-semibold pt-7">Godfred Sugar</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-2xl  text-center ">
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
      <p className="text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-2xl  text-center ">
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
      <p className="text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-2xl  text-center ">
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
      <p className="text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
     <div className="min-w-[20rem] font-poppins font-semibold text-2xl  text-center ">
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
      <p className="text-xl font-poppins font-semibold pt-7">Nana Adjei</p>
      <span className="font-poppins text-custom-textboard text-base font-medium">
       via. Apple Store
      </span>
     </div>
    </div>
   </section>
  </>
 );
};
