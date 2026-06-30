import { categoryFilters, materialFilters } from '@/data/store.js'
import { cn } from '@/lib/utils.js'

const priceRanges = [
  { value: 'all', label: 'All prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-plus', label: '$80+' },
]

export default function FilterSidebar({
  filters,
  onChange,
}) {
  const sections = [
    {
      key: 'category',
      title: 'Category',
      options: ['All', ...categoryFilters],
    },
    {
      key: 'material',
      title: 'Material',
      options: ['All', ...materialFilters],
    },
  ]

  return (
    <aside className="surface-card h-fit p-6 text-stone-100">
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.key} className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.24em] text-stone-100">{section.title}</h3>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {section.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em]',
                    filters[section.key] === option
                      ? 'border-amber-200/40 bg-amber-200 text-stone-950'
                      : 'border-white/10 text-stone-300 hover:border-amber-200/30 hover:text-amber-200',
                  )}
                  onClick={() => onChange(section.key, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.24em] text-stone-100">Price</h3>
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {priceRanges.map((range) => (
              <button
                key={range.value}
                type="button"
                className={cn(
                  'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em]',
                  filters.price === range.value
                    ? 'border-amber-200/40 bg-amber-200 text-stone-950'
                    : 'border-white/10 text-stone-300 hover:border-amber-200/30 hover:text-amber-200',
                )}
                onClick={() => onChange('price', range.value)}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
