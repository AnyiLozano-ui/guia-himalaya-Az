import { useEffect, useState } from "react";

const Agenda = () => {
    const [image, setImage] = useState(null)
    const type = localStorage.getItem("type");

    const getImageByType = (type, landscape) => {
        if (type === "acceso") setImage(landscape === "mobile" ? "/images/agenda-acceso.png" : "/images/agenda-acceso-desktop.png");
        if (type === "speaker") setImage(landscape === "mobile" ? "/images/agenda-speaker.png" : "/images/agenda-speaker-desktop.png");
        if (type === "lanzamiento") setImage(landscape === "mobile" ? "/images/agenda-starter.png" : "/images/agenda-starter-desktop.png");
        return null;
    }

    useEffect(() => {
        if (window.innerWidth > 1024) {
            getImageByType(type, "desktop");
        } else {
            getImageByType(type, "mobile");
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                getImageByType(type, "desktop");
            } else {
                getImageByType(type, "mobile");
            }
        })

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth > 1024) {
                    getImageByType(type, "desktop");
                } else {
                    getImageByType(type, "mobile");
                }
            })
        }
    }, [type])

    return (
        <div className="[@media(max-width:1024px)]:h-screen h-full relative [@media(max-width:1024px)]:overflow-x-auto [@media(max-width:1024px)]:overflow-y-hidden">
            <img src={image} className="rotated-img"/>
            <div className="absolute top-6 border-solid border-white border-4 right-2 bg-[#00ae9b] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" onClick={() => window.history.back()}>
                <span className="text-white">X</span>
            </div>
        </div>
    )
}

export default Agenda