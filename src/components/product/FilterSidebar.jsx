export default function FilterSidebar({
  categories,
  materials,
  prices,
  activeCategory,
  activeMaterial,
  activePrice,
  onCategoryChange,
  onMaterialChange,
  onPriceChange,
}) {
  return (
    <aside className="panel-surface h-fit p-6">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition duration-300 ${
                  activeCategory === category
                    ? 'border-champagne bg-champagne/10 text-obsidian'
                    : 'border-mist bg-porcelain text-espresso/75 hover:border-champagne/50'
                }`}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">Price</h3>
          <div className="space-y-2">
            {prices.map((price) => (
              <button
                key={price.value}
                type="button"
                onClick={() => onPriceChange(price.value)}
                className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition duration-300 ${
                  activePrice === price.value
                    ? 'border-champagne bg-champagne/10 text-obsidian'
                    : 'border-mist bg-porcelain text-espresso/75 hover:border-champagne/50'
                }`}
              >
                <span>{price.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">Material</h3>
          <div className="space-y-2">
            {materials.map((material) => (
              <button
                key={material}
                type="button"
                onClick={() => onMaterialChange(material)}
                className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition duration-300 ${
                  activeMaterial === material
                    ? 'border-champagne bg-champagne/10 text-obsidian'
                    : 'border-mist bg-porcelain text-espresso/75 hover:border-champagne/50'
                }`}
              >
                <span>{material}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
