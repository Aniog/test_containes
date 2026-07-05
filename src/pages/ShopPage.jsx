import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { useStockImages } from '@/hooks/useStockImages.js'
import { products } from '@/data/products.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated']

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = categories.includes(searchParams.get('category')) ? searchParams.get('category') : 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useStockImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-[#F7F1E8] px-5 pb-20 pt-32 text-[#17110D] md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-[#17110D]/10 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">Shop all</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-[#17110D] md:text-7xl">Demi-fine jewelry, direct to you.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#8D7463]">Explore warm gold essentials, polished huggies, crystal accents, and gift-ready sets from $30–$120.</p>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[#17110D]/10 bg-[#FBF8F2] p-5 text-[#17110D]">
              <FilterGroup label="Category" options={categories} value={category} onChange={setCategory} />
              <FilterGroup label="Price" options={prices} value={price} onChange={setPrice} />
              <FilterGroup label="Material" options={materials} value={material} onChange={setMaterial} last />
            </div>
          </aside>

          <section>
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-[#8D7463]">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#5D3A1E]">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-[#17110D]/15 bg-[#FBF8F2] px-3 py-2 text-sm normal-case tracking-normal text-[#17110D] focus:border-[#B9853B] focus:outline-none">
                  {['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated'].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange, last = false }) {
  return (
    <div className={last ? '' : 'mb-6 border-b border-[#17110D]/10 pb-6'}>
      <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#5D3A1E]">{label}</h2>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`text-left text-sm transition ${value === option ? 'font-semibold text-[#17110D]' : 'text-[#8D7463] hover:text-[#17110D]'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
