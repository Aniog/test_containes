import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ item, open, onToggle }) => {
  return (
    <div className="border-b border-velmora-line">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-[0.24em] text-velmora-ink">
          {item.title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-velmora-muted transition ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      {open ? (
        <div className="pb-5 text-sm leading-7 text-velmora-muted">
          {item.content}
        </div>
      ) : null}
    </div>
  )
}

const Accordion = ({ items }) => {
  const [openTitle, setOpenTitle] = useState(items[0]?.title ?? '')

  return (
    <div className="border-t border-velmora-line">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          item={item}
          open={openTitle === item.title}
          onToggle={() =>
            setOpenTitle((current) =>
              current === item.title ? '' : item.title,
            )
          }
        />
      ))}
    </div>
  )
}

export default Accordion
