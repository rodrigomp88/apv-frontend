import usePacientes from "../hooks/usePacientes";

const Paciente = ({ paciente }) => {

    const { editarPaciente, eliminarPaciente } = usePacientes()

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-AR', { dateStyle: 'long' }).format(nuevaFecha)
    }
    return (
        <div className="mx-5 my-10 shadow-md px-5 py-10">
            <p className="font-bold uppercase text-lime-800 my-2">Nombre:{' '}
                <span className="font-normal normal-case text-black">{nombre}</span>

            </p>
            <p className="font-bold uppercase text-lime-800 my-2">Propietario:{' '}
                <span className="font-normal normal-case text-black">{propietario}</span>

            </p>
            <p className="font-bold uppercase text-lime-800 my-2">Email de contacto:{' '}
                <span className="font-normal normal-case text-black">{email}</span>

            </p>
            <p className="font-bold uppercase text-lime-800 my-2">Fecha de alta:{' '}
                <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>

            </p>
            <p className="font-bold uppercase text-lime-800 my-2">Sintomas:{' '}
                <span className="font-normal normal-case text-black">{sintomas}</span>

            </p>

            <div className="flex justify-between my-5">
                <button className="bg-lime-600 py-3 px-10 text-white rounded-sm uppercase font-bold hover:bg-lime-700 cursor-pointer transition-colors" onClick={() => editarPaciente(paciente)}>Editar</button>
                <button className="bg-red-600 py-3 px-10 text-white rounded-sm uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors" onClick={() => eliminarPaciente(_id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente