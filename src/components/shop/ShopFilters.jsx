import { SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

const priceRanges = ['All', 'Under $50', '$50 to $80', '$80+']

export default function ShopFilters({
  categories,
  materials,
  selectedCategory,
  setSelectedCategory,
  selectedMaterial,
  setSelectedMaterial,
  selectedPrice,
  setSelectedPrice,
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-3 rounded-full border border-velmora-sand bg-velmora-ivory px-5 py-3 text-xs uppercase tracking-[0.26em] text-velmora-ink lg:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>

      <div
        className={cn(
          'fixed inset-0 z-[70] bg-velmora-ink/40 backdrop-blur-sm transition lg:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={cn(
          'rounded-[2rem] border border-velmora-sand bg-velmora-ivory p-6 shadow-velmora-soft lg:sticky lg:top-28 lg:block',
          mobileOpen
            ? 'fixed inset-x-4 top-24 z-[80] block max-h-[80vh] overflow-y-auto'
            : 'hidden lg:block',
        )}
      >
        <div className="space-y-8">
          <FilterGroup
            title="Category"
            options={['All', ...categories]}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <FilterGroup
            title="Price"
            options={priceRanges}
            selected={selectedPrice}
            onSelect={setSelectedPrice}
          />
          <FilterGroup
            title="Material"
            options={['All', ...materials]}
            selected={selectedMaterial}
            onSelect={setSelectedMaterial}
          />
        </div>
      </aside>
    </>
  )
}

function FilterGroup({ title, options, selected, onSelect }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">{title}</p>
      <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={cn(
              'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition',
              selected === option
                ? 'border-velmora-gold bg-velmora-gold text-velmora-cream'
                : 'border-velmora-sand bg-velmora-cream text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
            )}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
