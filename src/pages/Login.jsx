import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/login', { email, password })
            localStorage.setItem('token', data.token);
            navigate('/admin')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <>
            <div>
                <h1 className="text-center drop-shadow-2xl sm:text-left text-gray-500 font-black text-4xl sm:text-5xl md:text-6xl">
                    Inicie Sesión{" "}
                    <span className="text-gray-600 block">y Administre</span>{" "}
                    <span className="text-black">sus Pacientes</span>
                </h1>
            </div>
            <div className="mt-20 sm:mt-5 shadow-lg px-5 py-10 rounded bg-white">
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Correo</label>
                        <input
                            type="email"
                            placeholder="Tu correo"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="drop-shadow-2xl bg-green-800 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-green-900 md:w-auto"
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link
                        className="block drop-shadow-2xl text-center my-5 text-gray-800"
                        to="/registrar"
                    >
                        No tienes una cuenta?
                        <span className="text-green-800"> Registrate</span>

                    </Link>
                    <Link
                        className="block drop-shadow-2xl text-center my-5 text-gray-800"
                        to="/olvide-password"
                    >
                        Olvide mi
                        <span className="text-green-800"> contraseña!</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Login;
