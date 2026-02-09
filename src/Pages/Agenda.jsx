import { useEffect, useState } from 'react'

const Agenda = () => {
	const [image, setImage] = useState(null)
	const type = localStorage.getItem('type')

	const getImageByType = (type, landscape) => {
		if (type === 'acceso')
			setImage(
				landscape === 'mobile'
					? '/images/agenda-acceso.jpg'
					: '/images/agenda-acceso-desktop.jpg',
			)
		if (type === 'speaker')
			setImage(
				landscape === 'mobile'
					? '/images/agenda-speaker.jpg'
					: '/images/agenda-speaker-desktop.jpg',
			)
		if (type === 'lanzamiento')
			setImage(
				landscape === 'mobile'
					? '/images/agenda-starter.png'
					: '/images/agenda-starter-desktop.png',
			)
		return null
	}

	useEffect(() => {
		if (window.innerWidth > 1024) {
			getImageByType(type, 'desktop')
		} else {
			getImageByType(type, 'mobile')
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1024) {
				getImageByType(type, 'desktop')
			} else {
				getImageByType(type, 'mobile')
			}
		})

		return () => {
			window.removeEventListener('resize', () => {
				if (window.innerWidth > 1024) {
					getImageByType(type, 'desktop')
				} else {
					getImageByType(type, 'mobile')
				}
			})
		}
	}, [type])

	return (
		<div className="[@media(max-width:1024px)]:h-screen [@media(max-width:1024px)]:flex [@media(max-width:1024px)]:items-center [@media(max-width:1024px)]:bg-black">
			<div className="[@media(max-width:1024px)]:h-auto [@media(max-width:1024px)]:flex [@media(max-width:1024px)]:items-center my-auto [@media(max-width:1024px)]:w-screen h-full relative [@media(max-width:1024px)]:overflow-x-auto [@media(max-width:1024px)]:overflow-y-hidden">
				<img src={image} className="rotated-img" />
				{type === 'speaker' && type !== "lanzamiento" && window.innerWidth > 1024 ? (
					<>
						<img
							src="/images/agenda-speaker-desktop-2.jpg"
							className="rotated-img"
						/>
						<img
							src="/images/agenda-starter-desktop.jpg"
							className="rotated-img"
						/>
					</>
				) : type === 'speaker' && type !== "lanzamiento" && window.innerWidth < 1024 ? (
					<>
						<img
							src="/images/agenda-speaker-2.jpg"
							className="rotated-img"
						/>
						<img
							src="/images/agenda-starter.jpg"
							className="rotated-img"
						/>
					</>
				) : type === 'acceso' && window.innerWidth > 1024 ? (
                    <img
						src="/images/agenda-starter-desktop.jpg"
						className="rotated-img"
					/>
                ) : type === 'acceso' && window.innerWidth < 1024 ? (
                    <img
						src="/images/agenda-starter.jpg"
						className="rotated-img"
					/>
                ) : null}
				<div
					className="fixed top-6 border-solid border-white border-4 right-2 bg-[#00ae9b] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() => window.history.back()}>
					<span className="text-white">X</span>
				</div>
			</div>
		</div>
	)
}

export default Agenda
