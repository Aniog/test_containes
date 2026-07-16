import ProductCard from '@/components/common/ProductCard'
import SectionHeading from './SectionHeading'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="collections" className="bg-velmora-pearl py-18 text-velmora-ink lg:py-28">
      <div className="velmora-container">
        <SectionHeading eyebrow="Bestsellers" title="The Pieces Everyone Reaches For" text="Demi-fine staples with a warm gold finish, refined crystals, and gift-ready packaging." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
