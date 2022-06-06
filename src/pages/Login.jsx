import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-center drop-shadow-2xl sm:text-left text-gray-500 font-black text-4xl sm:text-5xl md:text-6xl">
                    Inicie Sesión{" "}
                    <span className="text-gray-600 block">y Administre</span>{" "}
                    <span className="text-black">sus Pacientes</span>
                </h1>
            </div>
            <div className="pt-8 sm:pt-0 shadow-lg p-5 rounded">
                <form>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Correo</label>
                        <input
                            type="email"
                            placeholder="Tu correo"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
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
                        className="block drop-shadow-2xl text-center my-5 text-gray-500"
                        to="/registrar"
                    >
                        No tienes una cuenta? Registrate
                    </Link>
                    <Link
                        className="block drop-shadow-2xl text-center my-5 text-gray-500"
                        to="/olvide-password"
                    >
                        Olvide mi contraseña!
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Login;
