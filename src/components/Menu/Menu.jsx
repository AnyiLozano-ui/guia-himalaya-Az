import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="absolute top-[60px] w-full">
            {
                !open ? (
                    <img src="/images/menu.png" alt="Menu" className="w-10 cursor-pointer [@media(max-width:500px)]:ml-5 ml-10" onClick={() => setOpen(true)}/>
                ) : (
                    <div className="flex flex-col gap-[10px] justify-center bg-[#00ae9b] border-4 border-solid border-white px-2.5 rounded-tr-[20px] rounded-br-[20px] [@media(max-width:500px)]:w-[70%] w-[450px] bottom-0 left-0 pt-[10px]">
                        <a href="/agenda" className="text-white text-lg border-dashed border-b-2 border-white [@media(max-width:500px)]:text-[20px] text-[30px]">Agenda</a>
                        <a href="/encuesta-de-satisfaccion" className="text-white text-lg border-dashed border-b-2 border-white [@media(max-width:500px)]:text-[20px] text-[30px]">Encuesta de satisfación</a>
                        <a href="/principal" className="text-white text-lg [@media(max-width:500px)]:text-[20px] text-[30px] border-dashed border-b-2 border-white">Cápsulas</a>
                        <a href="/claim" className="text-white text-lg [@media(max-width:500px)]:text-[20px] text-[30px] border-dashed border-b-2 border-white">Claim</a>
                        <div onClick={() => {
                            localStorage.clear()
                            window.location.href = "/"
                        }} className="cursor-pointer text-white text-lg [@media(max-width:500px)]:text-[20px] text-[30px]">Cerrar Sesión   </div>
                    </div>
                )
            }
        </div>
    )
}

export default Menu