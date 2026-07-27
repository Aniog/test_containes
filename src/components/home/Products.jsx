import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Cpu, Cog, ShoppingBag, Package, Shirt, Sofa } from "lucide-react"
import StrkImageLoader from "@/components/shared/StrkImageLoader"

const products = [
  { icon: Cpu, title: "Electronics & Components", examples: "PCBA, cables, chargers, IoT devices" },
  { icon: Cog, title: "Machinery & Industrial", examples: "Tools, spare parts, automation equipment" },
  { icon: ShoppingBag, title: "Consumer Goods", examples: "Home goods, kitchenware, personal care" },
  { icon: Package, title: "Packaging & Printing", examples: "Boxes, labels, bags, retail packaging" },
  { icon: Shirt, title: "Textiles & Apparel", examples: "Fabrics, garments, accessories, bags" },
  { icon: Sofa, title: "Furniture & Home", examples: "Office, outdoor, lighting, decor" },
]

export default function Products() {
  return (
    <StrkImageLoader>
      <section className="bg-background py-16 md:py-24" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 id="products-title" className="section-title">Products We Source</h2>
            <p id="products-subtitle" className="section-subtitle">
              We work across major manufacturing categories in China. If we do not specialize in your product, we will tell you upfront.
            </p>
            <div className="mt-8">
              <img
                data-strk-img-id="products-showcase-img-a2b3c4"
                data-strk-img="[products-subtitle] [products-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sample sourced products from Chinese manufacturers"
                className="rounded-2xl object-cover shadow-card"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lift">
                <CardContent className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <product.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-base">{product.title}</CardTitle>
                  <p className="mt-1 text-sm text-muted">{product.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    </StrkImageLoader>
  )
}
