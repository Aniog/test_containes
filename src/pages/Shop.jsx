import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({ category: initialCategory, price: 'All', material: 'All' })
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filters.category, filters.price, filters.material, sort])

  const filteredProducts = useMemo(() => {
    const priceMatches = (product) => filters.price === 'All' || (filters.price === '$30–$50' && product.price <= 50) || (filters.price === '$50–$80' && product.price > 50 && product.price <= 80) || (filters.price === '$80–$120' && product.price > 80)
    return products.filter((product) => (filters.category === 'All' || product.category === filters.category) && (filters.material === 'All' || product.material === filters.material) && priceMatches(product)).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : 0)
  }, [filters, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-espresso lg:pt-28">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16"><p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Shop all</p><div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><h1 className="font-serif text-6xl md:text-7xl">The Collection</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-taupe">Demi-fine gold earrings, necklaces, huggies, and giftable sets in warm editorial finishes.</p></div><label className="flex items-center gap-3 text-sm"><span className="uppercase tracking-luxury text-velmora-taupe">Sort</span><select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-line bg-velmora-porcelain px-4 py-3 text-velmora-espresso"><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option></select></label></div></section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8"><FilterSidebar filters={filters} setFilters={setFilters} /><div><div className="mb-5 border-y border-velmora-line py-4 text-sm text-velmora-taupe">{filteredProducts.length} pieces</div><div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} context="shop" />)}</div>{filteredProducts.length === 0 && <div className="border border-velmora-line bg-velmora-porcelain p-10 text-center text-velmora-espresso"><p className="font-serif text-3xl">No pieces match these filters.</p><p className="mt-2 text-sm text-velmora-taupe">Try a wider price range or another category.</p></div>}</div></section>
    </main>
  )
}
