import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-widest2 text-ink">{title}</span>
        {open ? <Minus width={16} height={16} className="text-ink" /> : <Plus width={16} height={16} className="text-ink" />}
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-stone">{children}</div>
        </div>
      </div>
    </div>
  )
}
