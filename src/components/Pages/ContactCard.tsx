import { useState } from "react"

const contacts = [
  { label: "Email", value: "ashurboyevalimardon@gmail.com", href: "mailto:ashurboyevalimardon@gmail.com" },
  { label: "Telegram", value: "t.me/milliydeveloper", href: "https://t.me/milliydeveloper" },
  { label: "GitHub", value: "github.com/aau357", href: "https://github.com/aau357" },
]

const ContactCard = () => {
  const [copied, setCopied] = useState("")

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(""), 1500)
  }

  return (
    <div id="contactcard" className="bg-chegarasi text-logtext px-4 md:px-50 pt-10 pb-10">
      <div className="grid md:grid-cols-2 gap-8 md:items-end">
        <div className="flex flex-col">
          <span className="font-mono uppercase text-accent">Aloqa</span>
          <span className="font-display md:text-5xl text-3xl pt-2">
            Birga ishlash uchun yozing.
          </span>
        </div>

        <div className="flex flex-col">
          {contacts.map((c) => (
            <div key={c.label} className="flex items-center justify-between gap-3 border-b-2 border-bg py-3">
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-xs uppercase tracking-wider text-link">{c.label}</span>
                <a href={c.href} target="_blank" className="font-semibold break-all hover:text-accent">
                  {c.value}
                </a>
              </div>
              <button
                onClick={() => copy(c.value)}
                className="shrink-0 rounded-xl border-2 border-link text-link px-3 py-1 text-sm hover:border-accent"
              >
                {copied === c.value ? "Olindi" : "Nusxa"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
