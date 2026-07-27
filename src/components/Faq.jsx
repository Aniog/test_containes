import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQS } from '@/data/site.js'

export default function Faq({ items = FAQS }) {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((f, i) => {
        const open = openIdx === i
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-slate-900 md:text-base">{f.q}</span>
              <ChevronDown className={cn('h-5 w-5 shrink-0 text-slate-400 transition-transform', open && 'rotate-180')} />
            </button>
            {open && (
              <div className="px-6 pb-5">
                <p className="text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
