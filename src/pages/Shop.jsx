import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products.js'
import ProductCard from '@/components/product/ProductCard.jsx'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAddToCart }) {
  const [params] = useSearchParams()
  const initialCategory = params.get('category') || 'All'
  const [category, setCategory] = React.useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [priceRange, setPriceRange] = React.useState('All')
  const [material, setMaterial] = React.useState('All')
  const [sort, setSort] = React.useState('featured')

  const filtered = products
    .filter((product) => category === 'All' || product.category === category)
    .filter((product) => material === 'All' || product.material === material || (material === 'Hypoallergenic' && product.care.toLowerCase().includes('hypoallergenic')))
    .filter((product) => {
      if (priceRange === 'All') return true
      if (priceRange === '$30–$50') return product.price >= 30 && product.price <= 50
      if (priceRange === '$50–$80') return product.price > 50 && product.price <= 80
      return product.price > 80 && product.price <= 120
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })

  const FilterGroup = ({ label, options, value, onChange }) => (
    <div className="border-b border-sand py-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-stone">{label}</h3>
      <div className="grid gap-3">{options.map((option) => <button key={option} type="button" onClick={() => onChange(option)} className={`flex items-center justify-between text-left text-sm transition ${value === option ? 'text-antique' : 'text-ink hover:text-antique'}`}><span>{option}</span><span className={`h-2 w-2 rounded-full ${value === option ? 'bg-champagne' : 'bg-sand'}`} /></button>)}</div>
    </div>
  )

  return (
    <main className="bg-porcelain pt-24 text-ink">
      <section className="border-b border-sand bg-espresso text-porcelain"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"><p className="text-xs font-bold uppercase tracking-[0.3em] text-champagne">The Velmora edit</p><h1 className="mt-4 font-serif text-6xl leading-none text-porcelain md:text-7xl">Shop Demi-Fine Jewelry</h1><p className="mt-5 max-w-2xl text-base leading-8 text-porcelain/76">Gold-plated earrings, necklaces, huggies, and gift-ready sets designed for luminous everyday wear.</p></div></section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-14">
        <aside className="self-start border border-sand bg-pearl p-6 text-ink lg:sticky lg:top-28"><div className="flex items-center gap-3 border-b border-sand pb-5"><SlidersHorizontal className="h-5 w-5 text-champagne" /><h2 className="font-serif text-3xl text-ink">Filter</h2></div><FilterGroup label="Category" options={categories} value={category} onChange={setCategory} /><FilterGroup label="Price" options={priceRanges} value={priceRange} onChange={setPriceRange} /><FilterGroup label="Material" options={materials} value={material} onChange={setMaterial} /></aside>
        <div><div className="mb-6 flex flex-col gap-4 border-b border-sand pb-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm uppercase tracking-[0.2em] text-stone">{filtered.length} pieces</p><label className="flex items-center gap-3 text-sm text-stone">Sort<select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-sand bg-pearl px-4 py-3 text-sm text-ink outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/35"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Top Rated</option></select></label></div>{filtered.length > 0 ? <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div> : <div className="border border-sand bg-pearl p-12 text-center text-ink"><h3 className="font-serif text-4xl text-ink">No pieces found</h3><p className="mt-3 text-sm text-stone">Adjust your filters to reveal more of the Velmora collection.</p></div>}</div>
      </section>
    </main>
  )
}
