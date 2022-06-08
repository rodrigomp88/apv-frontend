import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente";

const ListadoPacientes = () => {

    const { pacientes } = usePacientes()

    return (
        <>
            {pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mb-5">Listado pacientes</h2>
                    <p className="text-center text-xl my-10 text-gray-600">
                        Administra tus{' '}
                        <span className="font-bold text-lime-600">Pacientes y citas</span>
                    </p>
                    {pacientes.map(paciente => (
                        <Paciente key={paciente._id} paciente={paciente} />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center mb-5">No hay pacientes</h2>
                    <p className="text-center my-10 font-bold">
                        Agrega pacientes y apareceran
                        <span>en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
}

export default ListadoPacientes