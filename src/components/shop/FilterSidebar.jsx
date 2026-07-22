import { X } from 'lucide-react'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Crystal Accent', 'Hypoallergenic']

export default function FilterSidebar({ filters, onChange, mobileOpen, onClose }) {
  const groups = [
    { key: 'category', label: 'Category', options: categories },
    { key: 'price', label: 'Price', options: prices },
    { key: 'material', label: 'Material', options: materials },
  ]

  const content = (
    <div className="text-velmora-espresso">
      <div className="mb-7 flex items-center justify-between border-b border-velmora-mist pb-5 lg:block">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Refine</p>
          <h2 className="mt-2 font-serif text-3xl text-velmora-espresso">Shop Jewelry</h2>
        </div>
        <button type="button" onClick={onClose} className="rounded-full border border-velmora-mist p-2 lg:hidden" aria-label="Close filters">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-8">
        {groups.map((group) => (
          <fieldset key={group.key}>
            <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">{group.label}</legend>
            <div className="space-y-3">
              {group.options.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-cacao/80">
                  <input
                    type="radio"
                    name={group.key}
                    checked={filters[group.key] === option}
                    onChange={() => onChange(group.key, option)}
                    className="h-4 w-4 accent-velmora-gold"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden border-r border-velmora-mist pr-8 lg:block">{content}</aside>
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-velmora-espresso/45 transition ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
        <aside className={`absolute left-0 top-0 h-full w-80 max-w-[88vw] overflow-y-auto bg-velmora-ivory p-6 shadow-drawer transition duration-500 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>{content}</aside>
      </div>
    </>
  )
}
