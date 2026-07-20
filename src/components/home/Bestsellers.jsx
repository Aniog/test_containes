import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { StrkImageContainer } from '@/components/ui/StrkImage'

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5)

  return (
    <StrkImageContainer as="section" deps={[]} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide">Bestsellers</h2>
          <div className="mt-5 mx-auto w-12 h-px bg-stone" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal px-10 py-4 text-[11px] uppercase tracking-widest2 hover:bg-charcoal hover:text-cream transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </StrkImageContainer>
  )
}
