import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return <section id="shop" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Loved first</p><h2 className="mt-3 font-serif text-5xl md:text-6xl">Bestsellers</h2></div><p className="max-w-md text-sm leading-7 text-velmora-taupe">Five signature pieces designed to layer effortlessly and arrive gift-ready.</p></div><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} context="bestseller" />)}</div></div></section>
}
