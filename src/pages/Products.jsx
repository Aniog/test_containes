import { Link } from "react-router-dom"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card"
import { productCategories } from "@/data/siteData"

export default function Products() {
  useDocumentTitle("Products We Source | SSourcing China")

  return (
    <div>
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-main">
          <span
            id="products-hero-subtitle"
            className="text-sm font-semibold uppercase tracking-wide text-accent"
          >
            Products We Source
          </span>
          <h1 id="products-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight lg:text-5xl">
            Source across major product categories
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            We match your project with factories experienced in your specific
            product type, quality standard, and export market.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-main">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <Card key={cat.id} className="group overflow-hidden p-0">
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={cat.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img-id={`${cat.imgId}-page`}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-hero-subtitle] [products-hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle id={cat.titleId}>{cat.title}</CardTitle>
                  <CardDescription id={cat.descId} className="mt-2">
                    {cat.description}
                  </CardDescription>
                  <div className="mt-5">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">Source {cat.title.split(" ")[0]}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
