import ProjectsCard from "../ProjectsCard"

const Projects = () => {
  return (


    <div id="projects" className="flex justify-between px-4 items-center md:px-50 bg-bg h-20  border-link  ">

      <div className="gap-4">
        <div className=" pt-10 md:pt-10 ">
          <span className="font-mono uppercase text-accent">
            LOYIHALARIM
          </span>
        </div>


        <span className="font-display md:text-5xl text-3xl md:flex  flex flex-col text-white pt-2 ">
          <span className="hidden">
            Men
          </span>
          <span>
            Qilganlarim va qilayotganlarim.
          </span>
        </span>
        <div className="">
          <ProjectsCard title="" />
        </div>
      </div>
<div>
  <ProjectsCard title=""/>
</div>




    </div>
  )
}

export default Projects