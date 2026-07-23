import ProductCard from '../product/ProductCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Bestsellers({ products, onAdd }) {
  return (
    <section id="bestsellers" className="bg-velmora-cream px-5 py-20 text-velmora-ink lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading idPrefix="bestsellers" eyebrow="Bestsellers" title="The pieces she reaches for first" subtitle="Refined gold staples with warm shine, made to layer beautifully and gift effortlessly." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} compact />)}
        </div>
      </div>
    </section>
  )
}
