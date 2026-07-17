import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import ProductCard from '../shared/ProductCard'
import SectionHeading from '../shared/SectionHeading'

export default function BestsellersSection() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Bestsellers"
          title="An edit of signatures that sell out first"
          description="Our most-loved demi-fine styles balance polish, everyday wearability, and gift-worthy detail."
          titleId="bestsellers-title"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-end">
          <Link to="/shop" className="button-secondary">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
