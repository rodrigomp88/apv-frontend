import { useState } from "react"
import Alerta from "../components/Alerta"
import AdminNav from "./AdminNav"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const { guardarPassword } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (Object.values(password).some(campo => campo === '')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return
        }

        if (password.pwd_nuevo.length < 6) {
            setAlerta({
                msg: 'La contraseña debe tener al menos 6 caracteres',
                error: true
            })
            return
        }

        const respuesta = await guardarPassword(password)
        setAlerta(respuesta)
    }

    const { msg } = alerta

    return (
        <>
            <AdminNav />
            <h2 className="font-black text-3xl text-center mt-10">Cambie su contraseña</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu{' '}<span className="text-lime-500 font-bold">contraseña aqui</span></p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta} />}

                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600">Contraseña actual</label>
                            <input type="password" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" placeholder="Contraseña actual" name="pwd_actual" onChange={e => setPassword({
                                ...password, [e.target.name]: e.target.value
                            })} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600">Contraseña Nueva</label>
                            <input type="password" className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" placeholder="Contraseña nueva" name="pwd_nuevo" onChange={e => setPassword({
                                ...password, [e.target.name]: e.target.value
                            })} />
                        </div>


                        <input type="submit" value="Guardar contraseña" className="bg-lime-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5" />
                    </form>

                </div>
            </div>

        </>
    )
}

export default CambiarPassword