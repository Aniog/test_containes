import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden bg-white">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-4 text-left p-5 md:p-6 hover:bg-slate-50 transition-colors"
            >
              <span className="text-base md:text-lg font-semibold text-primary leading-snug pr-4">
                {item.q}
              </span>
              <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-primary flex-shrink-0">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2">
                <p className="text-sm md:text-base text-primary-600 leading-relaxed max-w-prose">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FAQ
