const About = () => {
  return (
    <div id="about" className="h-screen px-4 md:flex md:flex-row md:px-50 flex flex-col bg-bg text-logtext md:justify-between ">

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
        <div className="flex flex-col md:mt-4 md:items-center  md:flex md:flex-row md:h-10">
          <a href="#projects" className="bg-accent w-full p-2 rounded-xl justify-center items-center ">
            Loyihalarni ko'rish
          </a>
          <a href="#contactcard" className="border-1 p-2 rounded-xl w-full items-center">
            Bog'lanish
          </a>
        </div>
      </div>

      <pre className="bg-surface border-chegarasi border-2 rounded-xl text-xs md:w-100 mt-4 pt-4 pr-2 md:h-50">
        {`  export const me = {
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