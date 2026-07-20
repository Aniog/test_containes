import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import SectionHeading from './SectionHeading'

export default function Bestsellers() {
  return (
    <section id="collections" className="bg-velmora-cream px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Jewelry with a lasting glow"
          text="Our most gifted and most worn pieces, designed to layer softly and live beautifully in your everyday rotation."
        />
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
