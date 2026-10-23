import ProjectsCard from "../ProjectsCard"

const Projects = () => {
  return (
    <div id="projects" className="bg-bg text-logtext px-4 md:px-50 pt-10 pb-10">
      <span className="font-mono uppercase text-accent">Loyihalarim</span>

      <span className="font-display md:text-5xl text-3xl flex pt-2">
        Qilganlarim va qilayotganlarim
      </span>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <ProjectsCard
          title="Shaxsiy portfolio"
          description="Shu sayt. Komponentlar qayta ishlatiladi, telefon va kompyuterga moslashgan."
          stack="React · TypeScript · Tailwind"
          status="Jarayonda"
        />
        <ProjectsCard
          title="Telegram bot"
          description="Tadbirkorlar uchun qulaylik, mijozlar javobsiz qolib ketmasligini taminlaydi."
          stack="Node.js · Javascript"
          status="Amalda test qilinmoqda"
        />
        <ProjectsCard
          title="Parol tekshirgich"
          description="Parol kuchini real vaqtda baholaydi va nega zaif ekanini tushuntiradi."
          stack="React · useState"
          status="Rejada"
        />
      </div>
    </div>
  )
}

export default Projects
