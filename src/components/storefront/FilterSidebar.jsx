const sectionTitleClass = 'text-xs uppercase tracking-[0.32em] text-[#6d5a57]'
const optionClass = 'flex items-center gap-3 text-sm text-[#241d1f]'

export default function FilterSidebar({ filters, onChange }) {
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
  const prices = ['All', 'Under $50', '$50-$80', '$80+']
  const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

  return (
    <aside className="rounded-[2rem] border border-[#e5d5c8] bg-white/75 p-6 text-[#241d1f] shadow-[0_16px_40px_rgba(36,29,31,0.05)]">
      <div className="space-y-7">
        <div>
          <p className={sectionTitleClass}>Category</p>
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label key={category} className={optionClass}>
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category}
                  onChange={() => onChange('category', category)}
                  className="h-4 w-4 accent-[#b78b54]"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className={sectionTitleClass}>Price</p>
          <div className="mt-4 space-y-3">
            {prices.map((price) => (
              <label key={price} className={optionClass}>
                <input
                  type="radio"
                  name="price"
                  checked={filters.price === price}
                  onChange={() => onChange('price', price)}
                  className="h-4 w-4 accent-[#b78b54]"
                />
                <span>{price}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className={sectionTitleClass}>Material</p>
          <div className="mt-4 space-y-3">
            {materials.map((material) => (
              <label key={material} className={optionClass}>
                <input
                  type="radio"
                  name="material"
                  checked={filters.material === material}
                  onChange={() => onChange('material', material)}
                  className="h-4 w-4 accent-[#b78b54]"
                />
                <span>{material}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
