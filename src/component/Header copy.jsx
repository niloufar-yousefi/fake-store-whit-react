import { useRef, useState } from "react"


export default function Header() {
    const myRef = useRef()

    let flag = true   
    function myDarkMode(e) {        
       if (flag == true) {    
        e.target.children[0].classList.add('right-0')
        e.target.children[0].classList.remove('left-0') 
        e.target.classList.add('bg-[#F7F4ED]')  
        e.target.classList.remove('bg-[#FD5D00]')
        myRef.current.classList.remove('bg-[#F7F4ED]') 
        myRef.current.classList.add('bg-[#FD5D00]')           
       }else{
        e.target.children[0].classList.remove('right-0')
        e.target.children[0].classList.add('left-0')         
        myRef.current.classList.add('bg-[#F7F4ED]') 
        myRef.current.classList.remove('bg-[#FD5D00]')   
        e.target.classList.remove('bg-[#F7F4ED]')  
        e.target.classList.add('bg-[#FD5D00]')  
       }
       flag = !flag
    }
  
    return(     
       <div ref={myRef} className="w-full h-full  rounded-xl flex bg-[#F7F4ED]">
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
                    <div onClick={myDarkMode} className=" w-[80px] h-[30px] bg-[#FD5D00] rounded-full relative cursor-pointer">
                        <div  className='pointer-events-none absolute left-0 w-[30px] h-[30px] rounded-full bg-amber-400 '></div>
                    </div>
                </div>
            </div>

            {/* mob mode */}
            <div className="flex lg:hidden w-full h-full *:h-full *:w-[50%] *:flex *:items-center px-5 ">
                <div className="">
                <i className="bi bi-list text-3xl cursor-pointer"></i>
                </div>
                <div className=" justify-end ">
                <div onClick={myDarkMode} className=" w-[80px] h-[30px] bg-[#FD5D00] rounded-full relative cursor-pointer">
                        <div  className='pointer-events-none absolute left-0 w-[30px] h-[30px] rounded-full bg-amber-400 '></div>
                    </div>
                </div>
            </div>
       </div>
    )
}


