import { Checkbox } from '@/components/ui/Checkbox'
import { Separator } from '@/components/ui/Separator'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const materials = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
  { id: 'gold-vermeil', label: 'Gold Vermeil' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
]

const priceRanges = [
  { id: 'under-50', label: 'Under $50' },
  { id: '50-75', label: '$50 - $75' },
  { id: '75-100', label: '$75 - $100' },
  { id: 'over-100', label: 'Over $100' },
]

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="py-5">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      <div className="space-y-1">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selected.includes(option.id)}
            onCheckedChange={(checked) => onToggle(option.id, checked)}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProductFilters({ filters, setFilters, className }) {
  const toggle = (key, id, checked) => {
    setFilters((prev) => {
      const current = prev[key]
      const next = checked ? [...current, id] : current.filter((v) => v !== id)
      return { ...prev, [key]: next }
    })
  }

  const clearFilters = () => {
    setFilters({ categories: [], materials: [], priceRanges: [] })
  }

  const hasFilters = filters.categories.length + filters.materials.length + filters.priceRanges.length > 0

  return (
    <aside className={cn('bg-card', className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl text-foreground">Filter</h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-medium uppercase tracking-wider text-accent hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <Separator className="my-5" />

      <FilterGroup
        title="Category"
        options={categories}
        selected={filters.categories}
        onToggle={(id, checked) => toggle('categories', id, checked)}
      />
      <Separator />
      <FilterGroup
        title="Material"
        options={materials}
        selected={filters.materials}
        onToggle={(id, checked) => toggle('materials', id, checked)}
      />
      <Separator />
      <FilterGroup
        title="Price"
        options={priceRanges}
        selected={filters.priceRanges}
        onToggle={(id, checked) => toggle('priceRanges', id, checked)}
      />
    </aside>
  )
}
