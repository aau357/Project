import { Home, Mail, MessageCircleMore, Phone, } from "lucide-react"
import { Link } from "react-router-dom"
const ContactCard = () => {
    return (
        <div className="flex justify-center items-center m-50">
            {/* Umumiy card uchun */}
            <div className="flex p-5 justify-between gap-10  bg-blue-50 w-200 h-80 shadow-2xl rounded-2xl ">
             
                <Link to="/" className="">
                    <Home />
                </Link>
             
                {/* 1-qator */}
                <div className="flex flex-col items-center gap-2">
                    {/* rasm */}
                    <img
                        className="w-32 h-32 object-cover rounded-full border-2 border-white shadow-2xl shadow-gray-700"
                        src="../Ali.jpg"
                        alt="Photgraphy" />
                    {/* ism */}
                    <h1 className="text-2xl font-sans text-center">
                        MR:  Alimardon
                    </h1>
                    <h2 className="w-40 text-center">
                        Junior developer.
                        React + Tailwindcss
                    </h2>
                </div>
                {/* 2-qator contact info*/}
                <div className="flex flex-col gap-3">
                    <h1 className="text-gray-600">
                        Contact information
                    </h1>
                    {/* email uchun */}
                    <div className="flex justify-between w-78 bg-blue-200 p-2 rounded-2xl">
                        <div className="flex justify-center p-2  bg-white rounded-full w-10 h-10 text-center ">
                            <Mail className="" />
                        </div>
                        {/* email text */}
                        <div>
                            <h1 className="text-sm text-gray-700">
                                Email:
                            </h1>
                            <h2>
                                ashurboyevalimardon@gmail.com
                            </h2>
                        </div>
                    </div>
                    {/* For Phone */}
                    <div className="flex gap-3 w-78 bg-blue-200 p-2 rounded-2xl ">
                        {/* for phone  icon */}
                        <div className="flex justify-center p-2 bg-white rounded-full h-10 ">
                            <Phone />
                        </div>
                        <div>
                            <h1 className="text-gray-600 text-sm">
                                Phone:
                            </h1>
                            <h2>
                                +998 91 062 62 26
                            </h2>
                        </div>

                    </div>
                    <div className="flex gap-3 w-78 bg-blue-200 p-2 rounded-2xl ">
                        {/* for phone  icon */}
                        <div className="flex justify-center p-2 bg-white rounded-full h-10 ">
                            <MessageCircleMore />
                        </div>
                        <div>
                            <h1 className="text-gray-600 text-sm">
                                Telegram
                            </h1>
                            <h2>
                                t.me/@milliydeveloper
                            </h2>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default ContactCard