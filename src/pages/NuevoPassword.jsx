import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const NuevoPassword = () => {
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const [tokenValido, setTokenValido] = useState(false)
    const [passwordModificado, setPasswordModificado] = useState(false)

    const params = useParams()
    const { token } = params

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/veterinarios/olvide-password/${token}`)
                setAlerta({
                    msg: 'Coloca tu nueva contraseña'
                })
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    msg: 'Hubo un error con el mensaje',
                    error: true
                })
            }
        }
        comprobarToken()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password.length < 6) {
            setAlerta({
                msg: "La contraseña debe ontener al menos 6 caracteres",
                error: true
            })
            return
        }

        try {
            const url = `/veterinarios/olvide-password/${token}`
            const { data } = await clienteAxios.post(url, { password })
            setAlerta({ msg: data.msg })
            setPasswordModificado(true)
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
                    Restabelce tu{" "}
                    <span className="text-black">Contraseña</span>
                </h1>
            </div>
            <div className="mt-20 sm:mt-5 shadow-lg px-5 py-10 rounded bg-white">
                {msg && <Alerta alerta={alerta} />}
                {tokenValido && (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="my-5">
                                <label className="uppercase block text-xl font-bold">
                                    Nueva contraseña
                                </label>
                                <input
                                    type="password"
                                    placeholder="Ingrese una nueva contraseña"
                                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <input
                                type="submit"
                                value="Cambiar contraseña"
                                className="drop-shadow-2xl bg-green-800 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-green-900 md:w-auto"
                            />
                        </form>
                        {passwordModificado &&

                            <Link
                                className="block drop-shadow-2xl text-center my-5 text-gray-500"
                                to="/"
                            >
                                <span className="text-green-800"> Ingresa</span>
                            </Link>
                        }
                    </>
                )}
            </div>
        </>
    )
}

export default NuevoPassword