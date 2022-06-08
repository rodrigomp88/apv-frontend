import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { cerrarSesion } = useAuth()
    return (
        <header className="py-10 bg-gradient-to-b from-black">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
                <h1 className="font-bold text-4xl text-center pb-5 md:pb-0 text-gray-800"><span className="text-lime-500 font-bold">V</span>eterinari
                    <span className="text-lime-500 font-bold">A</span>pp
                </h1>
                <nav className="flex gap-4 text-gray-200 text-sm uppercase font-bold">
                    <Link to="/admin" className="">Pacientes</Link>
                    <Link to="/admin" className="">Perfil</Link>
                    <button onClick={cerrarSesion} type="button" className="text-gray-200 text-sm uppercase font-bold">Cerrar sesion</button>
                </nav>
            </div>
        </header>
    )
}

export default Header