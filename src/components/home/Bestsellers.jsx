import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import SectionIntro from '@/components/home/SectionIntro'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-11 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Bestsellers"
            title="The pieces she keeps reaching for."
            copy="A considered edit of luminous gold cuffs, huggies, necklaces, and gifts designed to feel personal from the first wear."
            align="left"
          />
          <Link to="/shop" className="w-fit border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-gold">
            Shop all jewelry
          </Link>
        </div>
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} imageScope="bestseller" />
          ))}
        </div>
      </div>
    </section>
  )
}
