import { PageContainer } from "@/components/shared/PageContainer"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { StockImage } from "@/components/shared/StockImage"

const categories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    desc: "Consumer electronics, mobile accessories, PCBA, cables, chargers, and IoT hardware.",
  },
  {
    id: "machinery",
    title: "Machinery & Industrial",
    desc: "Tools, hardware, machine parts, packaging equipment, pumps, valves, and industrial supplies.",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Men's, women's and children's garments, fabrics, bags, footwear, and fashion accessories.",
  },
  {
    id: "home",
    title: "Home & Furniture",
    desc: "Indoor and outdoor furniture, lighting, kitchenware, home decor, and household goods.",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Skincare, cosmetics, haircare, personal grooming products, and packaging.",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    desc: "Retail boxes, labels, bags, displays, and custom printed materials.",
  },
  {
    id: "toys",
    title: "Toys & Baby Products",
    desc: "Educational toys, plush toys, baby gear, and children's accessories with safety compliance.",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    desc: "Fitness equipment, camping gear, cycling accessories, and outdoor products.",
  },
]

export default function Products() {
  return (
    <PageContainer>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel>Products</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Products We Source
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            We source across a wide range of categories. If you do not see yours,
            ask us — we likely cover it.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => {
              const titleId = `cat-${c.id}-title`
              const descId = `cat-${c.id}-desc`
              return (
                <Card key={c.id} className="overflow-hidden">
                  <StockImage
                    imgId={`cat-thumb-${c.id}-j1k2l3`}
                    query={`[${descId}] [${titleId}]`}
                    ratio="4x3"
                    width="500"
                    alt={c.title}
                    className="h-44 w-full object-cover"
                  />
                  <CardContent className="p-5">
                    <h2 id={titleId} className="text-lg font-semibold">
                      {c.title}
                    </h2>
                    <p id={descId} className="mt-2 text-sm text-slate-600">
                      {c.desc}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Looking for a product not listed here?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Send us your requirements and we will confirm whether we can source
              it for you.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
