import { useState } from 'react'
import Menu from '../components/Menu/Menu'
import { videos } from '../api'
import { IPP_AB_IMFINZI_2025_COLOMBIA_FOOTER_HTML } from '../data/ippTexts'
import { IPP_IMJUDO_Abreviada_Colombia_FOOTER_HTML } from '../data/ippTexts1'
import { IPP_IMFINZI_PERU_FOOTER_HTML } from '../data/imfinziperu'
import { IPP_IMJUDO_PERU_FOOTER_HTML } from '../data/IMJUDO'

const Principal = () => {
	const [type, setType] = useState(0)
	const [open, setOpen] = useState(false)
	const isImage =
		videos[type]?.endsWith('.jpg') || videos[type]?.endsWith('.png')

	// ✅ NUEVO: identificar tarjeta Mipress (según tu código, Mipress es type 2)
	const isMipress = type === 2

	// ✅ NUEVO: URL del PDF de Mipress (pon aquí la ruta real)
	// Recomendado: guardar el PDF en /public/pdfs/mipress.pdf y usar "/pdfs/mipress.pdf"
	const mipressPdfUrl =
		'https://eml.com.co/guia-himalaya.eml.com.co/pdf/MDMp(CO) Paso a Paso MIPRES IMJUDO.pdf'

	const [openModal, setOpenModal] = useState(false)
	const [modalContent, setModalContent] = useState({
		title: '',
		description: '',
		link: '',
	})

	const handleOpenModal = (e, title, description, link, isHtml = false) => {
		e.preventDefault()
		setModalContent({ title, description, link, isHtml })
		setOpenModal(true)
	}

	const handleCloseModal = () => {
		setOpenModal(false)
	}

	return (
		<div>
			<div className="min-h-150 bg-[url('/images/himalaya.png')] bg-cover bg-center bg-top">
				<p className="absolute top-[5px] text-white right-[20px] font-bold">
					{localStorage.getItem('type') === 'acceso'
						? 'Acceso'
						: localStorage.getItem('type') === 'speaker'
							? 'Speaker Training'
							: 'Lanzamiento'}
				</p>
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
						Cápsulas
					</h1>
					<div className="relative mt-10 flex gap-[10px] flex-wrap justify-center">
						<div
							onClick={() => {
								setType(0)
								setOpen(true)
							}}
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
							onClick={() => {
								setType(1)
								setOpen(true)
							}}
							className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								PSP
							</h5>
							<img
								src="/images/psp.png"
								alt="PSP"
								className="mx-auto w-[210px]"
							/>
						</div>
						<div
							onClick={() => {
								setType(2)
								setOpen(true)
							}}
							className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								Mipress
							</h5>
							<img
								src="/images/mipress.png"
								alt="Mipress"
								className="w-[190px] ml-[80px] [@media(max-width:1024px)]:ml-[70px]"
							/>
						</div>
						{localStorage.getItem('type') !== 'acceso' && (
							<div
								onClick={() => {
									setType(3)
									setOpen(true)
								}}
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
						)}
						<div
							onClick={() => {
								setType(4)
								setOpen(true)
							}}
							className="cursor-pointer shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[337px] flex flex-col justify-between rounded-tl-[47px] rounded-tr-[47px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<h5 className="text-white text-center helvetica mt-[20px] text-[30px]">
								Kilimanjaro
							</h5>
							<img
								src="/images/kili.png"
								alt="Kilimanjaro"
								className="mx-auto w-[170px]"
							/>
						</div>
					</div>
				</div>
			</div>
			{open && (
				<div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(255,255,255,.5)] flex justify-center items-center z-1">
					<div className="relative max-w-[80%] [@media(max-width:500px)]:max-w-full flex justify-center items-center">
						<div
							className="absolute z-1 top-6 right-4 border-solid border-white border-4 right-2 bg-[#00ae9b] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
							onClick={() => setOpen(false)}>
							<span className="text-white">X</span>
						</div>

						{isImage ? (
							<img
								src={videos[type]}
								alt="media"
								className="w-[30%] [@media(min-width:768px)_and_(max-width:1024px)]:w-[55%] h-auto [@media(max-width:500px)]:w-full object-contain [@media(max-width:500px)]:rounded-none"
							/>
						) : isMipress ? (
							// ✅ NUEVO: PDF más ancho para Mipress
							<embed
								src={mipressPdfUrl}
								className="w-[95vw] max-w-[1200px] h-[85vh] [@media(max-width:500px)]:w-full [@media(max-width:500px)]:h-[85vh] bg-white [@media(max-width:500px)]:rounded-none"
								type="application/pdf"
								width="100%"
								height="600"></embed>
						) : (
							<video
								src={videos[type]}
								controls
								preload="metadata"
								playsInline
								className="w-[30%] [@media(min-width:768px)_and_(max-width:1024px)]:w-[55%] h-auto [@media(max-width:500px)]:w-full [@media(max-width:500px)]:rounded-none"></video>
						)}
					</div>
				</div>
			)}

			{/* CONTENT */}
			<div className="mt-[120px]">
				{/* QR SECTION */}
				<div className="flex justify-center items-center gap-[30px] flex-wrap">
					<div className="relative font-semibold text-[16px] justify-center items-center flex flex-col">
						<p>Escanee el QR para ver IPP de IMJUDO®</p>
						<div className="mt-[20px] shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[200px] flex justify-center items-center rounded-[47px] h-[200px] border-[4px] border-white bg-[#00ae9b]">
							<img
								src="/images/IMJUDO IPP.png"
								alt="Acceso"
								width={130}
							/>
						</div>
					</div>

					<div className="relative font-semibold text-[16px] justify-center items-center flex flex-col">
						<p>Escanee el QR para ver IPP de IMFINZI®</p>
						<div className="mt-[20px] shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[200px] flex justify-center items-center rounded-[47px] h-[200px] border-[4px] border-white bg-[#00ae9b]">
							<img
								src="/images/IPP IMFINZI COMPLETA.jpeg"
								alt="Acceso"
								width={130}
							/>
						</div>
					</div>
				</div>

				{/* BUTTONS */}
				<div className="flex justify-center items-center gap-[10px] my-[50px] flex-wrap">
					<a
						href="#"
						onClick={(e) =>
							handleOpenModal(
								e,
								'IPP IMFINZI Abreviada Colombia',
								window.innerWidth > 800
									? IPP_AB_IMFINZI_2025_COLOMBIA_FOOTER_HTML
									: 'https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP AB IMFINZI 2025 Colombia.pdf',
								'',
								true, // ✅ NUEVO: este contenido es HTML
							)
						}>
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[320px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMFINZI Abreviada Colombia
							</p>
						</div>
					</a>

					<a
						href="#"
						onClick={(e) =>
							handleOpenModal(
								e,
								'IPP IMJUDO Abreviada Colombia',
								window.innerWidth > 800
									? IPP_IMJUDO_Abreviada_Colombia_FOOTER_HTML
									: 'https://eml.com.co/guia-himalaya.eml.com.co/pdf/IMJUDO ABREVIADA IPP Colombia.pdf',
								'',
								true, // ✅ NUEVO: este contenido es HTML
							)
						}>
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[350px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMJUDO Abreviada Colombia
							</p>
						</div>
					</a>

					<a
						href="#"
						onClick={(e) =>
							handleOpenModal(
								e,
								'IPP IMFINZI Completa Perú',
								window.innerWidth > 800
									? IPP_IMFINZI_PERU_FOOTER_HTML
									: 'https://eml.com.co/guia-himalaya.eml.com.co/pdf/pdf24_converted.pdf',
								'',
								true, // ✅ NUEVO: este contenido es HTML
							)
						}>
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[300px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMFINZI Completa Perú
							</p>
						</div>
					</a>

					<a
						href="#"
						onClick={(e) =>
							handleOpenModal(
								e,
								'IPP IMJUDO Completa Perú',
								window.innerWidth > 800
									? IPP_IMJUDO_PERU_FOOTER_HTML
									: 'https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP IMJUDO Completa Perú.pdf',
								'',
								true, // ✅ NUEVO: este contenido es HTML
							)
						}>
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[300px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMJUDO Completa Perú
							</p>
						</div>
					</a>
				</div>

				{/* MODAL */}
				{openModal && (
					<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
						<div className="bg-white rounded-[20px] p-[30px] w-[90%] max-w-[800px] max-h-[80vh] overflow-y-auto">
							<h2 className="text-[22px] font-bold mb-[15px] text-center">
								{modalContent.title}
							</h2>
							{modalContent.isHtml ? (
								window.innerWidth > 800 ? (
									<p
										className="text-gray-700 text-[14px] leading-relaxed"
										dangerouslySetInnerHTML={{
											__html: modalContent.description,
										}}></p>
								) : (
									<embed
										src={modalContent.description}
										className="w-full h-[50vh]"
										type="application/pdf"
										width="100%"
										height="600"></embed>
								)
							) : (
								<p className="text-gray-700 text-[14px] leading-relaxed ">
									{modalContent.description}
								</p>
							)}

							<div className="flex justify-center mt-[25px]">
								<button
									onClick={handleCloseModal}
									className="bg-[#00ae9b] cursor-pointer text-white px-[25px] py-[10px] rounded-[10px]">
									Cerrar
								</button>
							</div>
						</div>
					</div>
				)}

				{/* FOOTER */}
				<div className="w-full bg-[#f18f1c] px-6 py-10 mt-6">
					<div className="max-w-[1400px] mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
							{/* Colombia */}
							<div className="text-white text-[12px] md:text-[10px] leading-[1.35] font-semibold text-justify break-words hyphens-auto">
								MIFINJ 50 mg/mL (Colombia). Registro sanitario:
								INVIMA 2019MB-0019214. MIJUDO 20 mg/mL
								(Colombia). Registro sanitario: INVIMA
								2025MB-0000140. Material dirigido al cuerpo
								médico. Información aplicable a Colombia. Mayor
								información Departamento Médico AstraZeneca
								Colombia. En caso de evento adverso repórtelo en
								Colombia a la línea 018000115610 o el link{' '}
								<a
									href="https://aereporting.astrazeneca.com"
									target="_blank"
									rel="noopener noreferrer"
									className="underline break-all">
									https://aereporting.astrazeneca.com
								</a>{' '}
								seleccionando el país. Link de Data Privacy para
								reporte de eventos adversos:{' '}
								<a
									href="https://bit.ly/2ZsHh5J"
									target="_blank"
									rel="noopener noreferrer"
									className="underline">
									https://bit.ly/2ZsHh5J
								</a>
								. Link de Data Privacy para reporte de eventos
								adversos:{' '}
								<a
									href="https://bit.ly/3Sp2C8k"
									target="_blank"
									rel="noopener noreferrer"
									className="underline">
									https://bit.ly/3Sp2C8k
								</a>
								. AstraZeneca IPS S.A.S. Tel: 646 2828 ext.
								114203 Cll 102 # 17A - 61. En caso de evento
								adverso repórtelo a las líneas 6444507 en Bogotá
								y 018000950820 a nivel nacional. Continente IPP.
								AstraZeneca Colombia S.A.S. Edificio NAOS,
								Avenida Carrera 9 No. 101-67, Oficina 601,
								Bogotá, D.C., tel.: 3257200. MATPROM: CO-20494
								Prep.: 2-2026
							</div>

							{/* Perú */}
							<div className="text-white text-[12px] flex md:text-[10px] leading-[1.35] font-semibold text-justify break-words hyphens-auto md:border-l md:border-white md:pl-10 flex flex-col justify-center">
								<p>
									IMFINZI 50 mg/mL (Perú). Registro sanitario:
									BE-01202. IMJUDO® 20 mg/mL (Perú). Registro
									sanitario: BE-01313. Material exclusivo para
									el profesional de la salud. Información
									aplicable a Perú. Mayor información
									Departamento Médico AstraZeneca Perú. En
									caso de evento adverso ingrese a
									<a
										href="https://aereporting.astrazeneca.com"
										target="_blank"
										rel="noopener noreferrer"
										className="underline break-all">
										https://aereporting.astrazeneca.com
									</a>{' '}
									y seleccione en país Perú, o escriba al
									correo electrónico{' '}
									<a
										href="mailto:PatientsSafety.Peru@astrazeneca.com"
										className="underline">
										PatientsSafety.Peru@astrazeneca.com
									</a>
									. Link de Data Privacy para reporte de
									eventos adversos:{' '}
									<a
										href="https://bit.ly/35p2CFr"
										target="_blank"
										rel="noopener noreferrer"
										className="underline">
										https://bit.ly/35p2CFr
									</a>
									. AstraZeneca Perú S.A., Calle Las Orquídeas
									675, Interior 802, San Isidro, Lima-Perú,
									tel.: 610515 RUC 20513645547.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Principal
