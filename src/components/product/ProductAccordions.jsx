import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const sections = [
  { key: 'detail', label: 'Description', field: 'detail' },
  { key: 'materials', label: 'Materials & Care', field: 'materials' },
  { key: 'shipping', label: 'Shipping & Returns', field: 'shipping' },
]

export const ProductAccordions = ({ product }) => {
  const [openKey, setOpenKey] = useState('detail')

  return (
    <div className="rounded-[2rem] border border-brand-line bg-white px-6 shadow-soft">
      {sections.map((section) => {
        const isOpen = openKey === section.key

        return (
          <div key={section.key} className="border-b border-brand-line last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? '' : section.key)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-sm font-semibold uppercase tracking-overline text-brand-ink">
                {section.label}
              </span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-brand-cocoa transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            {isOpen ? (
              <div className="pb-5 pr-6">
                <p className="text-sm leading-7 text-brand-cocoa">
                  {product[section.field]}
                </p>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
