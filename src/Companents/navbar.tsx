import { Link } from "react-router-dom"

const navbar = () => {
    return (
        // Main
        <div className="flex justify-center gap-150   z-50  ">
            <div className="text-2xl text-shadow-indigo-400 font-bold ">
                Positiv.UZ
            </div>
            {/* menu */}
            <div className="flex gap-10">
                <a className="text-2xl text-shadow-indigo-400 font-light"
                    href="#home">
                    About us
                </a >
                <Link to="/ContactCard" className="text-2xl text-shadow-indigo-400 font-light ">
                    Contact
                </Link >
                <div className="text-2xl text-shadow-indigo-400 font-light ">
                    Pricing
                </div>
                <div className="text-2xl text-shadow-indigo-400 font-light ">
                    Blog
                </div>
            </div>
        </div>
    )
}
export default navbar