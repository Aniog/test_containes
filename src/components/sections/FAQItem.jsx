import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        <span className="text-slate-400 group-hover:text-slate-600 flex-shrink-0">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <div className="mt-3 text-sm text-slate-600 leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  )
}

export default FAQItem