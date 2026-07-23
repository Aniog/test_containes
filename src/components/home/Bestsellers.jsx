import ProductCard from '@/components/products/ProductCard'
import SectionHeader from './SectionHeader'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Bestsellers" title="Most Gifted, Most Worn" copy="Five luminous signatures designed for stacking, gifting, and everyday gold rituals." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} imagePrefix="home-bestseller" compact />)}
        </div>
      </div>
    </section>
  )
}
