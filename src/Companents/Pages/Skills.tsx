import { BadgeCheck, Download, Gauge, SquareTerminal } from "lucide-react"
import { useState } from "react";

const Skills = () => {
    const [active, setActive] = useState("all");
    return (

        // main div

        <div className="  ">

            <div className="flex flex-col h-130 bg-blue-100 px-10">


                {/* second div for text */}
                <div className="pt-20 flex justify-between gap-20 items-end">

                    {/* Birinchi qism uchun */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <span className="text-xl">
                                •
                            </span>
                            <span className="text-sm text-gray-700">
                                Arxitektura & Asboblar / Expertise
                            </span>
                        </div>
                        <span className="text-4xl font-semibold">
                            Qobiliyat & texnik jihatlarim.
                        </span>
                        <span className="text-xl max-w-4xl text-gray-600">
                            A comprehensive breakdown of engineering capabilities, core libraries, state architectures, testing
                            frameworks, and development workflows honed across 4+ years of production experience in
                            mission-critical applications.
                        </span>
                    </div>

                    {/* Ikkinchi qism uchun  */}
                    <div className="flex flex-col items-end gap-2 shrink-0">

                        <span className="rounded-full flex gap-1 bg-blue-300 pt-0 pb-0 pr-4 pl-3">
                            <span className="p-1">
                                <SquareTerminal size={18} />
                            </span>
                            Raect 19 + TS + Tailwind
                        </span>
                        <span className="rounded-full flex gap-1 bg-blue-200 pt-0 pb-0 pr-4 pl-4">
                            <span className="p-1">
                                <BadgeCheck size={18} />
                            </span>
                            Enterprice level proficiency
                        </span>
                        <span className="rounded-full flex gap-1 bg-blue-50 pt-0 pb-0 pr-4 pl-4">
                            <span className="p-1">
                                <Gauge size={18} />
                            </span>
                            Design system & Perfomence
                        </span>
                    </div>
                </div>








                {/* third div for diaogram */}
                <div className="mt-10 mb-10">
                    <div className="rounded-xl  py-5 ps-30 bg-white w-full h-34 grid grid-cols-4">

                        {/* 1-teg  */}
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-sm font-semibold">
                                PRODUCTION TENURE
                            </span>
                            <span className="text-5xl  font-semibold ">

                                4.5+
                                <span className="text-2xl ps-1 text-gray-500">
                                    Yrs
                                </span>
                            </span>
                            <span className="text-gray-600 font-semibold">
                                Scale & Fintech platforms
                            </span>
                        </div>
                        {/* 2-teg */}
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-sm font-semibold">
                                CORE LIGHTHOUSE METRIC
                            </span>
                            <span className="text-5xl  font-semibold ">

                                98
                                <span className="text-2xl ps-1 text-gray-500">
                                    /100
                                </span>
                            </span>
                            <span className="text-gray-600 font-semibold">
                                Median permormance score
                            </span>
                        </div>
                        {/* 3-teg */}
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-sm font-semibold">
                                UI ARCHITECTURE
                            </span>
                            <span className="text-5xl  font-semibold ">

                                3
                                <span className="text-2xl ps-1 text-gray-500">
                                    Systems
                                </span>
                            </span>
                            <span className="text-gray-600 font-semibold">
                                Build & governed from scratch
                            </span>
                        </div>
                        {/* 4-teg */}
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-sm font-semibold">
                                TEST AUTOMATION
                            </span>
                            <span className="text-5xl  font-semibold ">

                                88
                                <span className="text-2xl ps-1 text-gray-500">
                                    %
                                </span>
                            </span>
                            <span className="text-gray-600 font-semibold">
                                Integration & unit coverage
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* second ui */}
            <div className="bg-blue-50 pb-20">
                {/* navigation bar for skills  */}
                <div className="flex items-center gap-2  rounded-full w-full h-15 px-10">
                    <button
                        onClick={() => setActive("all")}
                        className={`rounded-full px-4 py-2 ${active === "all" ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                        All Disciplines
                    </button>
                    <button
                        onClick={() => setActive("frontend")}
                        className={`rounded-full px-4 py-2 ${active === "frontend" ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                        Frontend
                    </button>
                    <button
                        onClick={() => setActive("tools")}

                        className={`rounded-full px-4 py-2 ${active === "tools" ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                        Tools
                    </button>
                    <button
                        onClick={() => setActive("testing")}
                        className={`rounded-full px-4 py-2 ${active === "testing" ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                        Testing
                    </button>
                    <button className="flex rounded-md items-center gap-1.5 font-semibold bg-blue-100 py-1 px-4 ml-auto">
                        <Download size={18} className="" />
                        Download Stack sheet
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-6 px-10 justify-between">
                    <div className="rounded-xl  h-50 border-2 bg-white ">

                    </div>

                    <div className="rounded-xl  h-50 border-2 bg-white ">

                    </div>
                    <div className="rounded-xl  h-50 border-2 bg-white ">

                    </div>
                    <div className="rounded-xl  h-50 border-2 bg-white ">

                    </div>
                    <div className="rounded-xl  h-50 border-2 bg-white ">

                    </div>
                    <div className="rounded-xl  h-50 border-2 bg-white ">

                    </div>
                </div>
            </div>
            <div className="bg-blue-100 h-150">

            </div>
            <div className="bg-blue-50 h-100">

            </div>
            <div className="bg-blue-100 h-70">

            </div>
            <div className="bg-blue-50 h-15">

            </div>
            <div className="bg-blue-100 h-50">

            </div>

        </div>
    )
}

export default Skills