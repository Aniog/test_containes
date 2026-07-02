import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = [{ label: 'All', min: 0, max: 999 }, { label: '$30–$50', min: 30, max: 50 }, { label: '$51–$80', min: 51, max: 80 }, { label: '$81–$120', min: 81, max: 120 }]
const materials = ['All', '18K Gold Plated', 'Crystal & Gold Plate', 'Textured Gold Plate', 'Gold Plate & Crystal']

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const selectedBand = prices.find((price) => price.label === selectedPrice) || prices[0]
    const filtered = products.filter((product) => (selectedCategory === 'All' || product.category === selectedCategory) && product.price >= selectedBand.min && product.price <= selectedBand.max && (selectedMaterial === 'All' || product.material === selectedMaterial))
    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [selectedCategory, selectedMaterial, selectedPrice, sort])

  const updateCategory = (category) => {
    setSelectedCategory(category)
    setSearchParams(category === 'All' ? {} : { category })
  }

  return (
    <main className="min-h-screen bg-velmora-pearl pt-24 text-velmora-espresso">
      <section className="border-b border-velmora-line px-5 py-12 lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Shop Velmora</p><div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">Demi-fine pieces for every glow.</h1><p className="mt-5 max-w-2xl text-base leading-8 text-velmora-taupe">Explore gold huggies, sculptural earrings, crystal necklaces, and gift-ready sets priced for everyday luxury.</p></div><div className="flex items-center gap-3 border border-velmora-line bg-velmora-ivory px-4 py-3 text-velmora-espresso"><label htmlFor="sort" className="text-xs font-bold uppercase tracking-widest text-velmora-taupe">Sort</label><select id="sort" value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent text-sm font-semibold text-velmora-espresso focus:outline-none"><option value="featured">Featured</option><option value="price-low">Price low to high</option><option value="price-high">Price high to low</option><option value="rating">Top rated</option></select></div></div></div></section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[280px_1fr] lg:px-10 lg:py-14">
        <aside className="h-fit border border-velmora-line bg-velmora-ivory p-5 text-velmora-espresso lg:sticky lg:top-28"><div className="mb-5 flex items-center gap-2 border-b border-velmora-line pb-4"><SlidersHorizontal className="h-4 w-4 text-velmora-bronze" /><h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filters</h2></div><FilterGroup title="Category" options={categories} value={selectedCategory} onChange={updateCategory} /><FilterGroup title="Price" options={prices.map((price) => price.label)} value={selectedPrice} onChange={setSelectedPrice} /><FilterGroup title="Material" options={materials} value={selectedMaterial} onChange={setSelectedMaterial} /></aside>
        <div><div className="mb-6 flex items-center justify-between text-sm text-velmora-taupe"><span>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}</span><span className="hidden uppercase tracking-widest md:inline">Free worldwide shipping over every order</span></div>{filteredProducts.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div> : <div className="border border-velmora-line bg-velmora-ivory p-12 text-center text-velmora-espresso"><h3 className="font-serif text-3xl">No pieces match this edit.</h3><p className="mt-3 text-velmora-taupe">Try another category, price, or material filter.</p></div>}</div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return <fieldset className="border-b border-velmora-line py-5 last:border-b-0"><legend className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{title}</legend><div className="grid gap-3">{options.map((option) => <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso"><input type="radio" name={title} value={option} checked={value === option} onChange={() => onChange(option)} className="h-4 w-4 accent-velmora-bronze" /><span>{option}</span></label>)}</div></fieldset>
}
