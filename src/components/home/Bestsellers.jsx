import { products } from '@/data/products.js'
import ProductCard from '@/components/product/ProductCard.jsx'
import SectionIntro from './SectionIntro.jsx'
export default function Bestsellers() {
  return <section className="bg-velmora-ivory py-16 md:py-24"><div className="velmora-container"><SectionIntro eyebrow="Bestsellers" title="The pieces everyone returns for" copy="Polished silhouettes, warm gold finishes, and crystal details designed to become part of your daily uniform." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} context="home-bestseller" extraQueryIds={['bestsellers-context']} />)}</div><p id="bestsellers-context" className="sr-only">Premium demi-fine gold jewelry photographed in warm editorial light.</p></div></section>
}
