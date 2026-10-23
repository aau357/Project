const ProjectsCard = (props: {
  title: string
  description: string
  stack: string
  status: "Jarayonda" | "Rejada" | "Amalda test qilinmoqda"
}) => {
  return (
    <div className="rounded-xl border-2 border-chegarasi bg-surface p-5 flex flex-col gap-3">
      <span
        className={`self-start rounded px-2 py-1 font-mono text-xs uppercase tracking-wider ${
          props.status === "Jarayonda" ? "bg-accent text-bg" : "border border-chegarasi text-link"
        }`}
      >
        {props.status}
      </span>

      <span className="font-display text-xl">{props.title}</span>

      <span className="text-sm text-link flex-1">{props.description}</span>

      <span className="font-mono text-xs text-link">{props.stack}</span>
    </div>
  )
}

export default ProjectsCard
