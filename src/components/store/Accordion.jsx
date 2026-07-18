import { ChevronDown } from 'lucide-react'

const Accordion = ({ items, openItem, setOpenItem }) => {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-velvet">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-ink/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-5 text-sm leading-7 text-ink/75">{item.content}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
