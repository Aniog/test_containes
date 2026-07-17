import { SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

const priceBands = [
  { label: 'Under $50', value: 50 },
  { label: 'Under $80', value: 80 },
  { label: 'Under $120', value: 120 },
]

function FilterGroup({ title, children }) {
  return (
    <div className="space-y-4 border-b border-pearl pb-6">
      <h3 className="text-xs uppercase tracking-luxe text-smoke">{title}</h3>
      {children}
    </div>
  )
}

function ShopFilters({ categories, materials, selectedCategory, onCategoryChange, selectedMaterial, onMaterialChange, selectedPrice, onPriceChange, isMobileOpen, onToggleMobile }) {
  return (
    <div className="space-y-4">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-full border border-pearl bg-white/70 px-5 py-3 text-xs uppercase tracking-luxe text-velvet lg:hidden"
        onClick={onToggleMobile}
      >
        <span>Filters</span>
        <SlidersHorizontal className="h-4 w-4" />
      </button>

      <aside className={cn('space-y-6 rounded-luxe border border-pearl bg-white/70 p-5 shadow-soft lg:sticky lg:top-28 lg:block', isMobileOpen ? 'block' : 'hidden lg:block')}>
        <FilterGroup title="Category">
          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                type="button"
                className={cn('rounded-full border px-4 py-2 text-xs uppercase tracking-luxe transition', selectedCategory === category ? 'border-velvet bg-velvet text-ivory' : 'border-pearl text-velvet hover:border-champagne')}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Material">
          <div className="space-y-3">
            <button type="button" className={cn('block text-sm transition', selectedMaterial === 'All' ? 'text-velvet' : 'text-smoke')} onClick={() => onMaterialChange('All')}>
              All Materials
            </button>
            {materials.map((material) => (
              <button key={material} type="button" className={cn('block text-sm transition', selectedMaterial === material ? 'text-velvet' : 'text-smoke')} onClick={() => onMaterialChange(material)}>
                {material}
              </button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Price">
          <div className="space-y-3">
            <button type="button" className={cn('block text-sm transition', selectedPrice === null ? 'text-velvet' : 'text-smoke')} onClick={() => onPriceChange(null)}>
              All Prices
            </button>
            {priceBands.map((band) => (
              <button key={band.label} type="button" className={cn('block text-sm transition', selectedPrice === band.value ? 'text-velvet' : 'text-smoke')} onClick={() => onPriceChange(band.value)}>
                {band.label}
              </button>
            ))}
          </div>
        </FilterGroup>
      </aside>
    </div>
  )
}

export default ShopFilters
