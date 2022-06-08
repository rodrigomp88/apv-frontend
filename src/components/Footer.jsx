
const Footer = () => {
    return (
        <footer className="py-10 bg-gradient-to-t from-black">
            <p className="text-center drop-shadow-2xl text-gray-800 font-bold">
                &copy; {new Date().getFullYear()}{' '}All right reserved.{' '}<span className="text-lime-500 font-bold">V</span>eterinari<span className="text-lime-500 font-bold">A</span>pp{" "}

                <span className="text-white"></span>
            </p>
        </footer>
    )
}

export default Footer