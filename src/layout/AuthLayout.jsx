import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <>
            <h1>Desde layout auth</h1>
            <Outlet />
        </>
    )
}

export default AuthLayout
