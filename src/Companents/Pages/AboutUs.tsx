import { Rocket } from "lucide-react"
import { motion } from "motion/react"


const AboutUs = () => {
    return (
        <div className="bg-blue-100 min-h-screen">
            <div className="flex flex-col justify-center items-center gap-50 ">


                {/* first box */}
                <div className="flex flex-col w-200 h-50 rounded-2xl mt-50 bg-amber-50 justify-center items-center">
                    <h1 className="text-center pt-2 font-merriweather text-4xl ">
                        Biz haqimizda:
                    </h1>
                    <h2 className="w-120 text-center font-bold">
                        Bizning jamoamiz innovatsion yechimlar va zamonaviy texnologiyalar orqali
                        biznesingizni yangi
                        bosqichga olib chiqishga yordam beradi.
                    </h2>
                </div>


                {/* second box                 */}
                <div className="flex w-350 h-auto bg-blue-50 p-5 justify-between ">

                    {/* Bizning missiyamiz box */}


                    <motion.div



                        //   animatsiya
                        initial={{ x: 150 }}
                        animate={{ x: 50 }}
                        exit={{ x: 10 }}
                        transition={{ duration: 0.888 }}

                        className=" w-80 h-80 backdrop-blur-xl bg-white/20 shadow-lg  p-10 gap-4 rounded-2xl ">

                        {/* burchak logo */}
                        <div className="flex text-gray-600 rounded-full w-10 h-10 bg-blue-950 items-center justify-center">
                            <Rocket />
                        </div>
                        {/* textlar uchun */}
                        <h1 className="text-2xl font-bold ">
                            Bizning missiyamiz
                        </h1>
                        <h2>
                            Har bir mijoz uchun shaffof,
                            ishonchli va yuqori sifatli xizmat ko'rsatish orqali uzoq muddatli hamkorlik o'rnatish.
                            Bizning asosiy maqsadimiz - texnologiyalar yordamida insonlar hayotini osonlashtirish.
                        </h2>
                    </motion.div>







                    <div className="flex relative justify-center">
                        {/* for photo */}
                        <div>
                            <img
                                className="w-150 "
                                src="https://hireroad.com/wp-content/uploads/2022/01/Acendre-Blog-Posts-7-Elements-Successful-Team-5.7.19-min.png"
                                alt="Team photo"
                            />
                        </div>

                        {/* text uchun  */}
                        <div className="absolute bottom-5 left-0  bg-blue-300 w-120 rounded-br-2xl rounded-tl-2xl">
                            <h1 className=" text-4xl text-white text-shadow-white p-2">
                                Bizning tariximiz
                            </h1>
                            <h2 className="text-white pl-2 pb-1.5">
                                Kichik g'oyadan boshlangan yo'limiz bugungi kunda yirik
                                loyihalarni amalga oshiruvchi jamoaga aylandi.
                            </h2>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default AboutUs