import { ProductCard } from '@/components/shop/ProductCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const RelatedProducts = ({ products }) => (
  <section className="space-y-8">
    <SectionHeading
      eyebrow="Selected for you"
      title="You may also like"
      description="A refined edit of demi-fine pieces that style beautifully together."
    />
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
)
