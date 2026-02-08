import { useState } from 'react'
import Menu from '../components/Menu/Menu'
import { videos } from '../api'

const Principal = () => {
	const [type, setType] = useState(0)
	const [open, setOpen] = useState(false)
	return (
		<div>
			<div className="min-h-150 bg-[url('/images/himalaya.png')] bg-cover bg-center bg-top">
                <p 
                    className='absolute top-[5px] text-white right-[20px] font-bold'
                >{localStorage.getItem("type") === "acceso" ? "Acceso" : localStorage.getItem("type") === "speaker" ? "Speaker Training" : "Lanzamiento"}</p>
				<Menu />
				<div className="flex items-center justify-end items-end mr-10 pt-10">
					<img
						src="/images/logo.png"
						alt="Aztrazeneca"
						className="max-w-[200px]"
					/>
				</div>
			</div>
			<div className="mt-[20px]">
				<div className="mx-auto max-w-[90%]">
					<h1 className="text-[#00ae9b] font-extrabold text-[40px] underline">
						Cápsulas del ascenso
					</h1>
					<div className="relative mt-10 flex gap-[10px] flex-wrap justify-center">
						<div 
                            onClick={() => {setType(0);setOpen(true)}}
                            className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								Acceso
							</h5>
							<img
								src="/images/acc.png"
								alt="Acceso"
								className="mx-auto w-[210px]"
							/>
						</div>
						<div 
                            onClick={() => {setType(1);setOpen(true)}}
                            className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								PSP
							</h5>
							<img
								src="/images/psp.png"
								alt="PSP"
								className="mx-auto w-[180px]"
							/>
						</div>
						<div
                            onClick={() => {setType(2);setOpen(true)}} 
                            className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								Mipress
							</h5>
							<img
								src="/images/mipress.png"
								alt="Mipress"
								className="w-[215px] ml-[30px] [@media(max-width:1024px)]:ml-[70px]"
							/>
						</div>
						<div
                            onClick={() => {setType(3);setOpen(true)}} 
                            className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								OncoSinerGI
							</h5>
							<img
								src="/images/onco.png"
								alt="OncoSinerGI"
								className="mt-[20px] mx-auto w-[180px]"
							/>
						</div>
						<div 
                            onClick={() => {setType(4);setOpen(true)}}
                            className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								Kilimanjaro
							</h5>
							<img
								src="/images/kili.png"
								alt="Kilimanjaro"
								className="mx-auto w-[229px]"
							/>
						</div>
					</div>
				</div>
			</div>
			{open && (
				<div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(255,255,255,.5)] flex justify-center items-center">
					<div className="relative max-w-[80%] [@media(max-width:500px)]:max-w-full">
						<div
							className="absolute z-1 top-6 right-4 border-solid border-white border-4 right-2 bg-[#00ae9b] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
							onClick={() => setOpen(false)}>
							<span className="text-white">X</span>
						</div>
						<video
							src={videos[type]}
							controls
							className="w-full h-full rounded-[47px] [@media(max-width:500px)]:rounded-none"></video>
					</div>
				</div>
			)}
		</div>
	)
}

export default Principal
