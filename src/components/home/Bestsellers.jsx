import ProductCard from '@/components/product/ProductCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-[#F7F1E8] px-5 py-20 text-[#17110D] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Bestsellers" title="Beloved pieces, quietly luminous.">
          Demi-fine signatures in warm gold tones, made to feel considered from first wear.
        </SectionHeading>
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
