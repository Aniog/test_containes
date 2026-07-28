import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card"
import { productCategories } from "@/data/siteData"

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <span
            id="products-subtitle"
            className="text-sm font-semibold uppercase tracking-wide text-primary"
          >
            Products We Source
          </span>
          <h2 id="products-title" className="mt-2 section-title">
            Categories we cover
          </h2>
          <p className="section-subtitle">
            From industrial components to consumer goods, we source across a
            wide range of categories.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <Card key={cat.id} className="group overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={cat.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle id={cat.titleId}>{cat.title}</CardTitle>
                <CardDescription id={cat.descId} className="mt-2">
                  {cat.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
