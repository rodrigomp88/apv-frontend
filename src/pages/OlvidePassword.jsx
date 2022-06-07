import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if (email === '') {
            setAlerta({ msg: "El email es obligatorio", error: true })
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
            setAlerta({ msg: data.msg })
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
                    Recupere{" "}
                    <span className="block text-black">su Contraseña</span>
                </h1>
            </div>
            <div className="mt-20 sm:mt-5 shadow-lg px-5 py-10 rounded bg-white">
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Email</label>
                        <input
                            type="email"
                            placeholder="Email de recuperacion"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Enviar email"
                        className="drop-shadow-2xl bg-green-800 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-green-900 md:w-auto"
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link
                        className="block drop-shadow-2xl text-center my-5 text-gray-500"
                        to="/"
                    >
                        Ya tienes una cuenta?
                        <span className="text-green-800"> Ingresa</span>
                    </Link>
                    <Link
                        className="block drop-shadow-2xl text-center my-5 text-gray-500"
                        to="/registrar"
                    >
                        No tienes una cuenta?
                        <span className="text-green-800"> Registrate</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default OlvidePassword;
