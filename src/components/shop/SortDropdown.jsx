import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
]

export function SortDropdown({ value, onChange }) {
  return (
    <div className="relative">
      <label className="sr-only" htmlFor="sort">Sort products</label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full md:w-auto pl-4 pr-10 py-2.5 bg-transparent border border-velmora-sand text-sm text-velmora-dark focus:outline-none focus:border-velmora-dark cursor-pointer"
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none"
      />
    </div>
  )
}
