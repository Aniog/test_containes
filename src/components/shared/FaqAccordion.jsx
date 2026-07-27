import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-slate-900">{faq.q}</span>
              <ChevronDown
                className={cn('h-5 w-5 shrink-0 text-slate-400 transition-transform', open && 'rotate-180')}
              />
            </button>
            {open && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 md:text-base">{faq.a}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
