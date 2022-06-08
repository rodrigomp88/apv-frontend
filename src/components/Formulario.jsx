
const Formulario = () => {
    return (
        <>
            <p className="text-lg text-center mb-10 font-bold">Añade tus pacientes y {' '}
                <span className="text-gray-600 font-bold">Administralos</span>
            </p>
            <form className="bg-white py-10 px-5 mb-10 md:mb-0 shadow-lg rounded-sm">
                <div className="mb-5">
                    <label htmlFor="mascota" className="text-gray-600 uppercase font-bold">Nombre mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="text-gray-600 uppercase font-bold">Nombre propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="text-gray-600 uppercase font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="text-gray-600 uppercase font-bold">Fecha</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="text-gray-600 uppercase font-bold">Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <input type="submit" value="Agregar paciente" className="bg-green-800 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors" />
            </form>
        </>


    )
}

export default Formulario