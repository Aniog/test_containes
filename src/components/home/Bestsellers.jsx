import { Link } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'

const Bestsellers = ({ products, onAddToCart }) => (
  <section id="bestsellers" className="bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Bestsellers"
          title="The pieces everyone keeps reaching for."
          description="Gold-forward essentials with the polish of fine jewelry and the ease of everyday wear."
        />
        <Link
          to="/shop"
          className="w-fit rounded-full border border-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory"
        >
          View all
        </Link>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
        ))}
      </div>
    </div>
  </section>
)

export default Bestsellers
