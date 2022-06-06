import { Link } from "react-router-dom";

const Registrar = () => {
    return (
        <>
            <div>
                <h1 className="text-center drop-shadow-2xl sm:text-left text-gray-500 font-black text-4xl sm:text-5xl md:text-6xl">
                    Cree una Cuenta{" "}
                    <span className="text-gray-600 block">y Administre</span>{" "}
                    <span className="text-black">sus Pacientes</span>
                </h1>
            </div>
            <div className="pt-8 sm:pt-0 shadow-lg p-5 rounded">
                <form>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Nombre</label>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <div className="my-5">
                        <label className="uppercase block text-xl font-bold">Correo</label>
                        <input
                            type="email"
                            placeholder="Ingresa tu correo"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
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
                        Ya tienes una cuenta? Ingresa.
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

export default Registrar;
