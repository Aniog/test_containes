import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { productCategories, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Products() {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef}>
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-wide text-primary font-semibold text-sm mb-4">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
              Product Categories We Source from China
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our team has experience across a broad range of industries. If your product is not
              listed, contact us — we likely have relevant factory contacts.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <article
                key={category.id}
                className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md"
              >
                <div
                  className="h-52 bg-neutral-100 bg-cover bg-center"
                  data-strk-bg-id={`products-bg-${category.id}-c1d2e3`}
                  data-strk-bg={`[products-${category.id}-name] [products-${category.id}-examples]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="700"
                />
                <div className="p-6">
                  <h2
                    id={`products-${category.id}-name`}
                    className="text-xl font-bold text-neutral-900 mb-2"
                  >
                    {category.name}
                  </h2>
                  <p
                    id={`products-${category.id}-examples`}
                    className="text-neutral-600 mb-4"
                  >
                    {category.examples}
                  </p>
                  <Button as={Link} to="/contact" variant="outline" size="sm">
                    Request quote
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-xl bg-primary text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't see your product?</h2>
            <p className="text-primary-light mb-6 max-w-2xl mx-auto">
              We source custom products across many categories. Send us your specs and we will
              confirm if we can support your project.
            </p>
            <Button as={Link} to="/contact" variant="accent" size="lg">
              {site.cta}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
