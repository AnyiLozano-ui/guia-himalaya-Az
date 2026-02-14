import AccessModal from "../components/AccessModal/AccessModal";
import { useState } from "react";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState("")

    return (
        <div>
            <div className="min-h-150 bg-[url('/images/himalaya.png')] bg-cover bg-center bg-top">
                <div className="flex items-center justify-end mr-15 pt-16">
                    <img src="/images/logo.png" alt="Aztrazeneca" className="max-w-[200px]"/>
                </div>
            </div>
            <div className="flex items-center justify-center py-10 flex-nowrap gap-10 [@media_(max-width:1200px)]:flex-col [@media_(max-width:1200px)]:max-w-[80%] [@media_(max-width:1200px)]:mx-auto">
                <img src="/images/acceso.png" alt="Acceso" className="cursor-pointer w-97" onClick={() => {setIsOpen(true); setType("acceso")}}/>
                {/* <img src="/images/speaker.png" alt="Speaker"  className="cursor-pointer w-97" onClick={() => {setIsOpen(true); setType("speaker")}}/> */}
                <img src="/images/lanzamiento.png" alt="Lanzamiento" className="cursor-pointer w-97" onClick={() => {setIsOpen(true); setType("lanzamiento")}}/>
            </div>
            {isOpen && <AccessModal onClose={() => setIsOpen(false)} type={type}/>}
        </div>
    )
}

export default Home;