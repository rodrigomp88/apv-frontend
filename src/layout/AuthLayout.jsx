import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            {/* <nav className="bg-gradient-to-b from-black">
                <h1 className="text-center text-gray-900 drop-shadow-2xl text-6xl md:text-8xl font-mono font-medium p-3 md:p-5">APV</h1>
            </nav> */}
            <main className="container mx-auto sm:grid grid-cols-2 mt-10 gap-12 p-5 items-center">
                <Outlet />
            </main>
        </>
    );
};

export default AuthLayout;
