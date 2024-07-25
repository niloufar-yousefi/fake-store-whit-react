 import Footer from './component/Footer'
 import Header from './component/Header'
 import Content from './component/Content'


export default function App() {
    return (
        <main className="w-full h-[100vh] bg-[rgb(255,255,255)] flex flex-wrap *:w-full *:px-10 lg:*:px-40">
            <div className=" h-[15%] py-2 ">
                <Header/>
            </div>
            <div className="h-[60%] lg:h-[70%] flex items-center">
                <Content/> 
            </div>
            <div className=" h-[25%] lg:h-[15%]">
            <Footer/> 
            </div>
        </main>


    )
}



