import { useState } from "react";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

const AdministrarPacientes = () => {
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    return (
        <div className="flex flex-col md:flex-row">
            <button
                type="button"
                className="bg-opacity-75 bg-lime-900 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 sm:hidden"
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
                {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
            </button>

            <div
                className={`${mostrarFormulario ? "block" : "hidden"
                    } sm:block md:w-1/2 lg:w-2/5`}
            >
                <Formulario />
            </div>

            <div className="md:w-1/2 lg:w-3/5">
                <ListadoPacientes />
            </div>
        </div>
    );
};

export default AdministrarPacientes;
