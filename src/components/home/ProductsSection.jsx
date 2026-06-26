import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { productCategories } from '@/data/site'

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          label="Products We Source"
          title="Industries & Categories We Cover"
          description="Our team sources a wide range of products across major manufacturing hubs in China."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-neutral-200 overflow-hidden bg-white shadow-sm transition hover:shadow-md"
            >
              <div
                className="h-40 bg-neutral-100 bg-cover bg-center"
                data-strk-bg-id={`category-bg-${category.id}-c1d2e3`}
                data-strk-bg={`[category-${category.id}-name] [category-${category.id}-examples]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
              <div className="p-6">
                <h3 id={`category-${category.id}-name`} className="text-lg font-bold text-neutral-900 mb-1">
                  {category.name}
                </h3>
                <p id={`category-${category.id}-examples`} className="text-sm text-neutral-500 mb-4">
                  {category.examples}
                </p>
                <Link
                  to="/products"
                  className="text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  View category →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
