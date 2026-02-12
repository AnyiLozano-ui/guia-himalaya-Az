import { useForm } from 'react-hook-form'
import { acceso, speaker, lanzamiento } from '../../api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AccessModal = ({ onClose, type }) => {
	const router = useNavigate()
	const { register, handleSubmit } = useForm({ mode: 'onChange' })

	const handleData = (data) => {
		try {
			const response = (type === "acceso" ? acceso : type === "speaker" ? speaker : lanzamiento).find((item) => item.cedula === data.cedula)
			console.log(response)
			if (response) {
				localStorage.setItem('user', response.cedula.toString())
				localStorage.setItem('type', type)
				router('/principal')
				onClose()
			} else {
				Swal.fire({
					icon: 'error',
					text: 'El usuario ingresado no esta autorizado para el ingreso'
				})
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="bg-[rgba(0,0,0,.4)] fixed w-screen h-screen top-0 left-0 flex justify-center items-center">
			<div className="rounded-lg bg-white p-10 md:min-w-[500px] max-w-[500px]">
				<h1 className="text-center text-[25px]">
					Ingresa tu numero de cedula
				</h1>
				<input
					className="border-solid border-1 border-black rounded-lg mt-4.5 w-full h-11.25 px-2.5"
					placeholder="Ingresa tu documento"
					type="number"
					{...register('cedula')}
				/>
				<button
					className="cursor-pointer bg-[#0072CE] text-white rounded-lg w-full h-11.25 mt-4.5"
					onClick={handleSubmit(handleData)}>
					Ingresar
				</button>
			</div>
		</div>
	)
}

export default AccessModal
