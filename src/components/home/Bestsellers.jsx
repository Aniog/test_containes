import ProductCard from '@/components/common/ProductCard.jsx'
import SectionHeader from '@/components/common/SectionHeader.jsx'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Bestsellers"
          title="Small pieces. Lasting rituals."
          body="Our most-loved demi-fine gold designs, chosen for everyday polish and effortless gifting."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              imageContext="bestsellers"
              contextTitleId="bestsellers-title"
            />
          ))}
        </div>
        <p id="bestsellers-title" className="sr-only">
          Velmora bestselling demi-fine gold jewelry
        </p>
      </div>
    </section>
  )
}
