import coffee from './../assets/img/coffee.jpg'
 import coltrane from './../assets/img/coltrane.png'
 import kahlo from './../assets/img/kahlo.png'
 import kubrick from './../assets/img/kubrick.png'

export default function Content() {
    return (
        <div className="flex flex-wrap items-center  h-[80%] w-full relative">
            <img className='w-full h-[40%] rounded-3xl' src={coffee} alt="" />

            <div className="absolute z-1 w-full h-full flex  *:w-full ">
                <div className="flex justify-end items-center">                    
                    <img src={coltrane} alt="" className="w-[70%] h-[full]  " /> 
                </div>
                <div className="flex object-cover	 items-cente">                    
                     <img src={kahlo} alt="" className="w-full h-[full] " /> 
                </div>
                <div className="flex  items-center">
                    <img src={kubrick} alt="" className="w-[70%] h-[full] " />                     
                </div>
            </div>
        </div>
    )
}