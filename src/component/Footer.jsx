export default function Footer() {
    return (
       <div className=" w-full h-full">

         <div className="w-full h-[50%] flex flew-wrap justify-center *:h-[50%] *:w-full *:flex *:flew-wrap py-2 ">
            <div className="justify-end ">
                <form className="w-[250px] ">
                    <input placeholder="Email Address" className="w-full h-[35px] rounded-md border-slate-500 border-2 pl-2 py-2" type="text" name="" id="" />
                </form>                              
            </div>
            <div className="px-5">
                <button type="button" className="w-[250px] h-[35px] rounded-md bg-[rgb(253,93,0)]">Join The WaitList</button>
            </div>          
        </div>

        <div className="flex flex-wrap justify-center *:w-full *:h-[50%] text-[#2d2d2d] *:font-mono *:text-center py-2">
           <p className='text-sm'>Don't Worry,no commitment😃. Break up whit us anytime </p> 
            <p className='text-[10px] mt-2'>DEVELOPED BY NILOOFAR YOOSEFI</p>
        </div>

       </div>
    )
}