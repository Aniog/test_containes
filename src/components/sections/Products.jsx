import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeading, Button } from "@/components/ui"
import { products } from "@/data/content"

export function Products() {
  return (
    <Section id="products" className="bg-cloud">
      <Container>
        <SectionHeading
          eyebrow="Our Products"
          title="Folding machines engineered for every job"
          description="From compact workshop folders to fully automated double folding machines, our range covers the full spectrum of sheet metal folding needs."
        />
        <span id="products-section-title" className="sr-only">
          Sheet metal folding machines and metal folders
        </span>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold tracking-tight text-ink"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-dark">
                  {product.tagline}
                </p>
                <p
                  id={product.descId}
                  className="mt-3 text-sm leading-relaxed text-graphite"
                >
                  {product.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-graphite"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent-dark"
                  >
                    Request details
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* CTA card to fill the grid (7 products + 1 CTA = 8) */}
          <div className="flex flex-col justify-center rounded-xl border border-dashed border-accent/50 bg-accent/5 p-8 text-center">
            <h3 className="text-xl font-bold tracking-tight text-ink">
              Not sure which machine fits?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Our engineers will help you match the right folder to your
              material, volume, and floor space.
            </p>
            <div className="mt-6">
              <Button as="a" href="#contact" variant="outline" size="md">
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Products
