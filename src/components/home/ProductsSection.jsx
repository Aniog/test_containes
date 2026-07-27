import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { StockImage } from "@/components/shared/StockImage"

const products = [
  {
    id: "electronics",
    title: "Electronics & Components",
    desc: "Consumer electronics, cables, PCBA, accessories, and IoT devices.",
  },
  {
    id: "machinery",
    title: "Machinery & Industrial",
    desc: "Tools, hardware, machine parts, packaging equipment, and industrial supplies.",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Garments, fabrics, bags, footwear, and fashion accessories.",
  },
  {
    id: "home",
    title: "Home & Furniture",
    desc: "Furniture, lighting, kitchenware, decor, and household goods.",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Skincare, cosmetics, haircare, and personal grooming products.",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    desc: "Retail packaging, labels, boxes, bags, and promotional materials.",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>Products We Source</SectionLabel>
            <h2 id="products-title" className="text-3xl font-bold sm:text-4xl">
              Major Categories We Cover
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            See all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const titleId = `product-${p.id}-title`
            const descId = `product-${p.id}-desc`
            return (
              <Card key={p.id} className="overflow-hidden">
                <StockImage
                  imgId={`product-thumb-${p.id}-a1b2c3`}
                  query={`[${descId}] [${titleId}] [products-title]`}
                  ratio="16x9"
                  width="600"
                  alt={p.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 id={titleId} className="text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p id={descId} className="mt-2 text-sm text-slate-600">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
