import {useState } from "react"


export default function Header() {
   
    const [bgColor1,setBgColor] = useState(true)
  
    return(     
       <div   className={`w-full h-full duration-[1s]  rounded-xl flex ${bgColor1 ? 'bg-[#F7F4ED]' : 'bg-[#FD5D00]'}`}>
            {/* dask mode */}
            <div className="hidden lg:flex w-full h-full *:flex *:text-slate-900 *:font-mono">
                <div className="w-[25%] justify-center items-center text-[25px] ">WIPM</div>
                <div className="w-[50%]">
                    <ul className="w-full h-full list-none flex items-center *:h-[50%] *:mx-5 *:grow   *:cursor-pointer *:flex *:items-center *:justify-center	">
                        <li><a href="">Our Story</a></li>
                        <li><a href="">Our Coffee</a></li>
                        <li><a href="">Why Decaf?</a></li>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </div>
                <div className="w-[25%] flex items-center justify-center">
                    <div onClick={()=>{setBgColor(!bgColor1)}} className=" w-[80px] h-[30px] bg-[#FD5D00] rounded-full relative cursor-pointer">
                        <div  className={`pointer-events-none absolute  w-[30px] h-[30px] rounded-full bg-amber-400 ${bgColor1 ? 'left-0' : 'right-0'}`}></div>
                    </div>
                </div>
            </div>

            {/* mob mode */}
            <div className="flex lg:hidden w-full h-full *:h-full *:w-[50%] *:flex *:items-center px-5 ">
                <div className="">
                <i className="bi bi-list text-3xl cursor-pointer"></i>
                </div>
                <div className=" justify-end ">
                <div onClick={()=>{setBgColor(!bgColor1)}} className={` w-[80px] h-[30px] duration-[1s] rounded-full relative cursor-pointer ${bgColor1 ? 'bg-[#FD5D00]' : 'bg-[#F7F4ED]'}`}>
                        <div  className={`duration-[1s]  pointer-events-none absolute  w-[30px] h-[30px] rounded-full bg-amber-400 ${bgColor1 ? 'left-0' : 'right-0' }`}></div>
                    </div>
                </div>
            </div>
       </div>
    )
}


