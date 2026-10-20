const SkillCard = (props: { title: string; items: string[] }) => {
  return (
    <div className="rounded-xl border-2 border-chegarasi bg-bg p-5 flex flex-col gap-4">
     
      <span className="font-mono text-xs uppercase tracking-wider text-link">
        {props.title}
      </span>

      <div className="flex flex-wrap gap-2">
       
        {props.items.map((item) => (
         
         <span key={item} className="rounded-full border border-chegarasi px-3 py-1 text-sm">
            {item}
         
          </span>
       
       ))}
      
      </div>
    </div>
  )
}

export default SkillCard