import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Faq = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-xl border border-line bg-white">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
            >
              <span className="text-base font-semibold text-ink md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-brand-600 transition-transform',
                  open && 'rotate-180',
                )}
              />
            </button>
            {open && (
              <div className="px-6 pb-5">
                <p className="text-base leading-relaxed text-slate-body">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Faq
