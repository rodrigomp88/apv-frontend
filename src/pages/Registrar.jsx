import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Registrar = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repetirPassword, setRepetirPassword] = useState("");

    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, email, password, repetirPassword].includes("")) {
            setAlerta({ msg: "Hay campos vacios", error: true });
            return;
        }
        if (password !== repetirPassword) {
            setAlerta({ msg: "Las contraseñas no son iguales", error: true });
            return
        }
        if (password.length < 6) {
            setAlerta({ msg: "Demasiado corto! Ingrese 6 caracteres como minimo", error: true });
            return
        }

        setAlerta({})

        try {
            await clienteAxios.post('/veterinarios', { nombre, email, password })
            setAlerta({
                msg: 'Creado correctamente, Revisa tu email para confirmar tu cuenta',
                error: false
            })
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
                    Cree una Cuenta{" "}
                    <span className="text-gray-600 block">y Administre</span>{" "}
                    <span className="text-black">sus Pacientes</span>
                </h1>
            </div>
            <div className="mt-20 sm:mt-5 shadow-lg px-5 py-10 rounded bg-white">
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Nombre</label>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Correo</label>
                        <input
                            type="email"
                            placeholder="Ingresa tu correo"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="Ingrese una contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">
                            Repetir contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="Repite la contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={repetirPassword}
                            onChange={(e) => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Crea tu cuenta"
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

export default Registrar;
