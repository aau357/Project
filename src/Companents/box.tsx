import rasm from '../assets/Megaph.png'
const box = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex relative w-300 h-120 rounded-2xl gap-50  ">
                {/* rasm uchun */}
                <div >
                    <img src={rasm} alt="photo"
                        className="w-90  rounded-2xl  absolute bottom-5 left-200" />
                </div>
                {/* text uchun */}
                <h1 className="absolute top-40 left-30 font-medium text-6xl w-120 ">
                    Navigating the digital landscape for success
                </h1>
                {/* telefon raqam uchun */}
                <h1 className="absolute top-90 left-30 font-sans w-100">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </h1>
             <button className='absolute w-50 h-20 top-110 left-29 bg-black text-amber-50 rounded-2xl'>
               <a href='#ui'>
                 Book a consultant
               </a>
             </button>
            </div>
        </div>
    )
}
export default box