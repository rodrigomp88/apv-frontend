import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { cerrarSesion } = useAuth()
    return (
        <header className="py-10 bg-black">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
                <h1 className="font-bold text-2xl text-center pb-5 md:pb-0 text-gray-400">Administrador pacientes de{' '}
                    <span className="text-white font-bold">Veterinaria</span>
                </h1>
                <nav className="flex gap-4">
                    <Link to="/admin" className="text-white text-sm uppercase font-bold">Pacientes</Link>
                    <Link to="/admin" className="text-white text-sm uppercase font-bold">Perfil</Link>
                    <button onClick={cerrarSesion} type="button" className="text-white text-sm uppercase font-bold">Cerrar sesion</button>
                </nav>
            </div>
        </header>
    )
}

export default Header