import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'

export default function Bestsellers() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <SectionHeading
          title="Bestsellers"
          subtitle="Most Loved"
          linkTo="/shop"
          linkText="Shop All"
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
