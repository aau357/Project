import { useState } from "react"


const NavigationBar = () => {
    const [isopen, setisopen] = useState(false)
    return (
        <div className="">
            <div className="flex justify-between px-4 items-center md:px-50 bg-bg h-20 border-b-1 border-link  ">



                {/* for phone */}
                <span className=" md:flex  text-logtext text-2xl font-bold">
                    Alimardon.
                    <span className="text-accent">
                        Dev
                    </span>
                </span>



                <button
                    onClick={() => setisopen(!isopen)}
                    className="md:hidden flex text-link border-link border-2 rounded-xl pb-0 pt-0 px-1 items-center  h-10">
                    {isopen ? "Yopish" : "Menu"}
                </button>


                <div className="text-link  gap-10 font-sans hidden md:flex">
                    <a href="#about" >
                        Men haqimda
                    </a>

                    <a href="#skills">
                        Ko'nikmalar
                    </a>
                    <a href="#projects">
                        Loyihalar
                    </a>
                    <a href="#contactcard">
                        Aloqa
                    </a>

                </div>
                <a href="./Rezyume.pdf" download className="hidden md:flex rounded-xl border-link border-2 text-link p-2">
                    CV yuklash
                    </a>




                    </div>
                    {isopen && (
                        <div className="flex flex-col  md:hidden gap-2 bg-bg pb-3 px-4">
                            <div className="text-link flex flex-col gap-1.5 font-sans ">
                                <a
                                    onClick={() => setisopen(false)}
                                    href="#about" className="border-b-2 border-t-2 pt-3 pb-3">
                                    Men haqimda
                                </a>
                                <a
                                    onClick={() => setisopen(false)}
                                    href="#skills" className="border-b-2 pt-3 pb-3">
                                    Ko'nikmalar
                                </a>
                                <a
                                    onClick={() => setisopen(false)}
                                    href="#projects" className="border-b-2 pt-3 pb-3">
                                    Loyihalar
                                </a>
                                <a
                                    onClick={() => setisopen(false)}
                                    href="#contactcard" className="border-b-2 pt-3 pb-3">
                                    Aloqa
                                </a>

                            </div>
                            <a href="./Rezyume.pdf" download className=" rounded-xl border-link border-2 text-link p-2">
                                CV yuklash
                            </a>

                        </div>
                    )}
            </div>
            )
}

            export default NavigationBar