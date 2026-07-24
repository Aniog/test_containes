import { Link } from 'react-router-dom'
import SectionIntro from '@/components/common/SectionIntro'
import ProductCard from '@/components/product/ProductCard'

const BestsellersSection = ({ products }) => {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionIntro
          eyebrow="Bestsellers"
          title="An edit of Velmora signatures"
          description="Five refined favorites designed for gifting, daily wear, and polished layering."
        />
        <Link
          to="/shop"
          className="text-xs uppercase tracking-eyebrow text-velvet/60 transition hover:text-gold-deep"
        >
          View all products
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default BestsellersSection
