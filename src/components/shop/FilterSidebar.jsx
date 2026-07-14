import React from 'react'
import { X } from 'lucide-react'

const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  categories, 
  selectedCategory, 
  onCategoryChange,
  priceRange,
  onPriceChange,
  materials,
  selectedMaterials,
  onMaterialChange
}) => {
  if (!isOpen) return null

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-2xl overflow-y-auto lg:relative lg:z-auto lg:shadow-none lg:w-auto">
        <div className="p-6">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <h2 className="font-serif text-xl text-stone-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5 text-stone-600" />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-medium text-stone-900 mb-4 tracking-wider text-sm uppercase">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map(category => (
                <label
                  key={category.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.id}
                    onChange={() => onCategoryChange(category.id)}
                    className="w-4 h-4 text-amber-700 border-stone-300 focus:ring-amber-700"
                  />
                  <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div className="mb-8">
            <h3 className="font-medium text-stone-900 mb-4 tracking-wider text-sm uppercase">
              Price
            </h3>
            <div className="space-y-2">
              {[
                { label: 'Under $50', value: 'under-50' },
                { label: '$50 - $75', value: '50-75' },
                { label: '$75 - $100', value: '75-100' },
                { label: 'Over $100', value: 'over-100' }
              ].map(range => (
                <label
                  key={range.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === range.value}
                    onChange={() => onPriceChange(range.value)}
                    className="w-4 h-4 text-amber-700 border-stone-300 focus:ring-amber-700"
                  />
                  <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="mb-8">
            <h3 className="font-medium text-stone-900 mb-4 tracking-wider text-sm uppercase">
              Material
            </h3>
            <div className="space-y-2">
              {materials.map(material => (
                <label
                  key={material}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(material)}
                    onChange={() => onMaterialChange(material)}
                    className="w-4 h-4 text-amber-700 border-stone-300 rounded focus:ring-amber-700"
                  />
                  <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                    {material}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear filters */}
          <button
            onClick={() => {
              onCategoryChange('all')
              onPriceChange('all')
              selectedMaterials.forEach(m => onMaterialChange(m))
            }}
            className="text-sm text-stone-500 hover:text-stone-900 underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </>
  )
}

export default FilterSidebar
