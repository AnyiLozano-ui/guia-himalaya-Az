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
					<a href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP%20AB%20IMFINZI%202025%20Colombia.pdf" target="_blank" rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[320px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMFINZI Abreviada Colombia
							</p>
						</div>
					</a>

					<a href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IMJUDO%20ABREVIADA%20IPP%20Colombia.pdf" target="_blank" rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[350px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMJUDO Abreviada Colombia
							</p>
						</div>
					</a>
					<a href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP%20IMFINZI%20Completa%20Peru%CC%81.pdf" target="_blank" rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[300px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMFINZI Completa Perú
							</p>
						</div>
					</a>
					<a href="https://eml.com.co/guia-himalaya.eml.com.co/pdf/IPP%20IMJUDO%20Completa%20Peru%CC%81.pdf" target="_blank" rel="noopener noreferrer">
						<div className="shadow-[8px_8px_10px_rgba(0,0,0,.5)] w-[300px] flex justify-center items-center rounded-[20px] h-[60px] border-[4px] border-white border-solid bg-[#00ae9b]">
							<p className="text-white text-[20px]">
								IPP IMJUDO Completa Perú
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Claim
