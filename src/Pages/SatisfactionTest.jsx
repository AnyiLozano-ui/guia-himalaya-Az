import Menu from '../components/Menu/Menu'
import { useState } from "react"
import { IPP_AB_IMFINZI_2025_COLOMBIA_FOOTER_HTML } from '../data/ippTexts'
import { IPP_IMJUDO_Abreviada_Colombia_FOOTER_HTML } from '../data/ippTexts1'
import { IPP_IMFINZI_PERU_FOOTER_HTML } from '../data/imfinziperu'
import { IPP_IMJUDO_PERU_FOOTER_HTML } from '../data/IMJUDO'

const SatisfactionTest = () => {
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
			<div className="min-h-150 bg-[url('/images/image-satisfaction.png')] bg-cover bg-center bg-top">
				<Menu />
				<p 
                    className='absolute top-[5px] text-white right-[20px] font-bold'
                >{localStorage.getItem("type") === "acceso" ? "Acceso" : localStorage.getItem("type") === "speaker" ? "Speaker Training" : "Lanzamiento"}</p>
				<div className="flex items-center justify-end items-end mr-10 pt-10">
					<img
						src="/images/logo.png"
						alt="Aztrazeneca"
						className="max-w-[200px]"
					/>
				</div>
			</div>
			<div className="relative mt-[30px] mx-auto max-w-[70%]">
				<h3 className="text-center text-[#00ae9b] font-normal text-[50px] mb-[30px] [@media(max-width:768px)]:text-[25px]">
					Su opinión es muy importante para nosotros
				</h3>
				<p className="text-center text-[#4d4d4d] helvetica text-[22px]">
					Nos encantaría conocer sus comentarios sobre los aspectos
					que más valoró de este evento, ya sea en el contenido, la
					calidad de las presentaciones o su aplicabilidad en su área
					de trabajo. Su retroalimentación nos ayudará a mejorar en
					futuras ediciones y a seguir ofreciendo experiencias de
					valor para la comunidad científica.
				</p>
				<h4 className="text-center text-[#00ae9b] font-normal text-[30px] mt-[20px]" style={{ fontStyle: 'italic' }}>
					¡Gracias por ser parte de este encuentro!
				</h4>
				<div className='w-full flex justify-center mt-[30px] mb-[40px]'>
					<a
						href="https://forms.office.com/Pages/ResponsePage.aspx?id=o4mOr6zZL0KtBsxOtCFDFEPENyndAPxGroMIxCxtuhtUNUpNSzQ0R0NINjlSSE9DSUVPU0JJM1g4MS4u"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-auto">
						<button className="cursor-pointer shadow-[6px_6px_8px_rgba(0,0,0,.6)] border-solid border-4 border-white bg-[#f39322] px-[20px] py-[10px] rounded-[40px]">
							<p className='text-white text-[30px] helvetica [@media(max-width:768px)]:text-[15px]'>Haga clic aquí para diligenciar la encuesta</p>
						</button>
					</a>
				</div>
			</div>
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

export default SatisfactionTest
