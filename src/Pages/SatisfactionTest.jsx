import Menu from '../components/Menu/Menu'

const SatisfactionTest = () => {
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
		</div>
	)
}

export default SatisfactionTest
