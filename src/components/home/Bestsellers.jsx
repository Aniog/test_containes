import { Link } from 'react-router-dom'
import ProductGrid from '@/components/product/ProductGrid'
import { getBestsellers } from '@/data/products'

export default function Bestsellers() {
  const bestsellers = getBestsellers()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Bestsellers
          </h2>
        </div>
        <ProductGrid products={bestsellers} />
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  )
}
