import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import SectionHeading from './SectionHeading'

function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Bestsellers" title="Loved for every day, chosen for keepsakes.">
            Five polished signatures that make gifting feel personal and self-purchase feel ceremonial.
          </SectionHeading>
          <Link to="/shop" className="w-fit border border-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-porcelain">
            View All
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
