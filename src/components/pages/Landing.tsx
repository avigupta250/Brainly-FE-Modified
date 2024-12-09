

import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FloatingNav } from "../ui/floating-navBar";

import { GoogleGeminiEffectDemo } from "../shadcn/GoogleGemini";
import { BentoGridThirdDemo } from "../shadcn/BentoGrid";
import { MdSpaceDashboard } from "react-icons/md";

export function LandingPage(){
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: <MdSpaceDashboard className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        // {
        //   name: "Contact",
        //   link: "/contact",
        //   icon: (
        //     <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        //   ),
        // },
      ];


// <div class="bg-gradient-to-r from-cyan-500 to-blue-500 ..."></div>
    return <div className="bg-black w-full  ">
         <FloatingNav navItems={navItems} />
         <GoogleGeminiEffectDemo/>
    
     {/* <div className="h-screen w-full flex justify-between px-10 -10 items-center ">
        <div className="text-white">
            Put your first brain into
        <Cover className=""  >
      <h1> Second Brain</h1>
     </Cover> 
        </div>
    
       <ThreeDCardDemo/>
       </div> */}
     <div className=" mt-[100px]">
       <div className="">
       < BentoGridThirdDemo/>
       </div>
       {/* <ThreeDCardDemo/> */}
       </div>
     

    </div>
}