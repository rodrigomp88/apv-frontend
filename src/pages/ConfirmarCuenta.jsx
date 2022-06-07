import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/veterinarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                setCuentaConfirmada(true);
                setAlerta({
                    msg: data.msg
                })
            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true,
                })
                setCargando(false)
            }
        };
        confirmarCuenta()
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center drop-shadow-2xl sm:text-left text-gray-500 font-black text-4xl sm:text-5xl md:text-6xl">
                    Conrfirme su Cuenta y{" "}
                    <span className="text-gray-600 block">Comienze a Administrar</span>{" "}
                    <span className="text-black">a sus Pacientes</span>
                </h1>
            </div>
            <div className="mt-20 sm:mt-5 shadow-lg px-5 py-10 rounded bg-white">
                {!cargando && <Alerta alerta={alerta} />}
                {cuentaConfirmada && (
                    <Link
                        className="block drop-shadow-2xl text-center my-5 text-gray-500"
                        to="/"
                    >
                        <span className="text-green-800"> Inicia sesion</span>
                    </Link>
                )}
            </div>
        </>
    );
};

export default ConfirmarCuenta;
