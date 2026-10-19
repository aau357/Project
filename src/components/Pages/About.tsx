const About = () => {
  return (
    <div id="about" className="md:pb-5 px-4 md:flex md:flex-row md:px-50 flex flex-col bg-bg text-logtext md:justify-between pt-2">

      <div  >
        <span className="uppercase font-mono md:flex tracking-wider text-s pb-4 text-accent">
          junior frontend developer
          <span className="hidden md:flex">
            .Toshkent
          </span>
        </span>


        <span className="font-display md:text-7xl text-5xl md:flex  flex flex-col -">
          Salom, men
          <span>
            Alimardon.
          </span>
        </span>

        <span className="md:w-100 font-sans text-link pt-5 md:flex md:flex-col">
          React, TypeScript va Tailwind bilan tez va telefonga mos interfeyslar yasashni o'rganyapman. Axborot xavfsizligi yo'nalishida o'qiyman.
        </span>
        <div className="flex flex-col md:mt-4 md:items-center  md:flex md:flex-row md:h-10 md:w-auto gap-4 md:gap-10 ">
          <a href="#projects" className="flex  bg-accent w-full p-2 rounded-xl justify-center items-center mt-4 ">
            Loyihalarni ko'rish
          </a>
          <a href="#contactcard" className="flex border-1 p-2 rounded-xl w-full justify-center items-center">
            Bog'lanish
          </a>
        </div>
      </div>

      <pre className="bg-surface border-chegarasi border-2 rounded-xl text-xs md:w-100 mt-4 pt-4 pr-2 md:h-50 mb-2 ">
        {` 
 export const me = {
    name: "Alimardon Ashurboyev",
    role: "Junior Frontend Developer",
    stack: ["React", "TypeScript", "Tailwind"],
    study: "TITU · Axborot xavfsizligi",
    openToWork: true,
 };

`}
      </pre>
    </div>
  )
}

export default About