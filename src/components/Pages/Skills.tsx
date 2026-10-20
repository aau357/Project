import SkillCard from "../SkillCard"


const Skills = () => {
  return (
    <div id="skills" className="bg-chegarasi md:px-50 px-4 text-logtext pb-6  ">

      <div className=" pt-3 md:pt-10 ">
        <span className="font-mono uppercase text-accent">
          KO'NIKMALAR
        </span>
      </div>

      <span className="font-display md:text-5xl text-3xl md:flex  flex flex-col  ">
        <span className="hidden">
          Men
        </span>
        <span>
          Nimani bilaman va nimani o'rganaypman
        </span>
      </span>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <SkillCard title="Ishlata olaman" items={["HTML", "CSS", "Tailwind", "Git"]} />
        <SkillCard title="O'rganyapman" items={["JavaScript", "React", "TypeScript"]} />
        <SkillCard title="Keyingi navbatda" items={["API", "Testlash", "Veb xavfsizlik"]} />
      </div>






















    </div>
  )
}

export default Skills