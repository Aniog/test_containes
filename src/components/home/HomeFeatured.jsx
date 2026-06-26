import { Container, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/products/ProductCard'
import { products } from '@/data/products'

export function HomeFeatured() {
  const featured = products.slice(0, 3)
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Machinery"
            title="Featured Folding Solutions"
            description="A selection of our most popular folders and folding machines, each engineered for accuracy and built to last."
          />
          <Button to="/products" variant="outline" className="shrink-0">
            View All Products
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
