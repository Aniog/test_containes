import { cn } from '@/lib/utils'

const groups = [
  {
    key: 'category',
    label: 'Category',
    options: ['All', 'Earrings', 'Necklaces', 'Huggies'],
  },
  {
    key: 'price',
    label: 'Price',
    options: ['All', 'Under $50', '$50–$80', '$80+'],
  },
  {
    key: 'material',
    label: 'Material',
    options: ['All', '18K Gold Plated', 'Gold Vermeil'],
  },
]

export const FilterSidebar = ({ filters, setFilters }) => (
  <aside className="space-y-8 rounded-[2rem] border border-brand-line bg-white p-6 shadow-soft">
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
        Refine
      </p>
      <h2 className="text-3xl leading-none text-brand-ink">Shop filters</h2>
    </div>

    {groups.map((group) => (
      <div key={group.key} className="space-y-4 border-t border-brand-line pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-overline text-brand-ink">
          {group.label}
        </h3>
        <div className="flex flex-wrap gap-3 lg:flex-col">
          {group.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilters((current) => ({ ...current, [group.key]: option }))}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-overline transition',
                filters[group.key] === option
                  ? 'border-brand-ink bg-brand-ink text-brand-parchment'
                  : 'border-brand-line bg-brand-mist text-brand-ink hover:bg-brand-sand',
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ))}
  </aside>
)
