import Menu from '../components/Menu/Menu'

const Claim = () => {
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

			<div className="mt-[40px]">
				<div className="flex justify-center items-center gap-[30px] flex-wrap">
					<div className="relative font-semibold text-[16px]">
						<p>Escanee el QR para ver IPP de IMJUDO®</p>
						<div className="mt-[20px] shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[300px] flex justify-center items-center rounded-[47px] h-[300px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<img
								src="/images/IMJUDO IPP.png"
								alt="Acceso"
								width={220}
							/>
						</div>
					</div>

					<div className="relative font-semibold text-[16px]">
						<p>Escanee el QR para ver IPP de IMJUDO®</p>
						<div className="mt-[20px] shadow-[8px_8px_10px_rgba(0,0,0,.6)] w-[300px] flex justify-center items-center rounded-[47px] h-[300px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<img
								src="/images/IPP IMFINZI COMPLETA.jpeg"
								alt="Acceso"
								width={220}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center gap-[10px] my-[50px] flex-wrap">
					<a
						href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP%20AB%20IMFINZI%202025%20Colombia.pdf"
						target="_blank"
						rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[320px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMFINZI Abreviada Colombia
							</p>
						</div>
					</a>

					<a
						href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IMJUDO%20ABREVIADA%20IPP%20Colombia.pdf"
						target="_blank"
						rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[350px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMJUDO Abreviada Colombia
							</p>
						</div>
					</a>

					<a
						href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP%20IMFINZI%20Completa%20Peru%CC%81.pdf"
						target="_blank"
						rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[300px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMFINZI Completa Perú
							</p>
						</div>
					</a>

					<a
						href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP%20IMJUDO%20Completa%20Peru%CC%81.pdf"
						target="_blank"
						rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[300px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMJUDO Completa Perú
							</p>
						</div>
					</a>
				</div>

				{/* FOOTER */}
				<div className="w-full bg-[#f18f1c] px-6 py-10 mt-6">
					<div className="max-w-[1400px] mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
							{/* Colombia */}
							<div className="text-white text-[12px] md:text-[13px] leading-[1.35] font-semibold text-justify break-words hyphens-auto">
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
							<div className="text-white text-[12px] md:text-[13px] leading-[1.35] font-semibold text-justify break-words hyphens-auto md:border-l md:border-white md:pl-10 flex flex-col justify-center">
								IMFINZI 50 mg/mL (Perú). Registro sanitario:
								BE-01202. IMJUDO® 20 mg/mL (Perú). Registro
								sanitario: BE-01313. Material exclusivo para el
								profesional de la salud. Información aplicable a
								Perú. Mayor información Departamento Médico
								AstraZeneca Perú. En caso de evento adverso
								ingrese a{' '}
								<a
									href="https://aereporting.astrazeneca.com"
									target="_blank"
									rel="noopener noreferrer"
									className="underline break-all">
									https://aereporting.astrazeneca.com
								</a>{' '}
								y seleccione en país Perú, o escriba al correo
								electrónico{' '}
								<a
									href="mailto:PatientsSafety.Peru@astrazeneca.com"
									className="underline">
									PatientsSafety.Peru@astrazeneca.com
								</a>
								. Link de Data Privacy para reporte de eventos
								adversos:{' '}
								<a
									href="https://bit.ly/35p2CFr"
									target="_blank"
									rel="noopener noreferrer"
									className="underline">
									https://bit.ly/35p2CFr
								</a>
								. AstraZeneca Perú S.A., Calle Las Orquídeas
								675, Interior 802, San Isidro, Lima-Perú, tel.:
								610515 RUC 20513645547.
							</div>
						</div>
					</div>
				</div>
				{/* /FOOTER */}
			</div>
		</div>
	)
}

export default Claim
