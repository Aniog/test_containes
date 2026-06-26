import * as React from "react"
import { Link } from "react-router-dom"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const products = [
  { title: "Electronics", description: "Consumer electronics, accessories, cables, chargers, and smart devices." },
  { title: "Machinery & Industrial", description: "Tools, components, OEM parts, and industrial equipment." },
  { title: "Home & Garden", description: "Furniture, kitchenware, lighting, décor, and outdoor products." },
  { title: "Apparel & Textiles", description: "Garments, fabrics, bags, shoes, and promotional textiles." },
  { title: "Packaging", description: "Retail boxes, bags, labels, and custom packaging solutions." },
  { title: "Health & Beauty", description: "Cosmetics, personal care, wellness devices, and supplements packaging." },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Products we source"
          title="Categories we source from vetted Chinese manufacturers"
          description="We work across major export categories, focusing on the supplier reliability and quality control your product demands."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <Card key={idx} className="overflow-hidden border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-40 bg-slate-100 relative">
                <img
                  data-strk-img-id={`product-thumb-${idx}-c4d5e6`}
                  data-strk-img={`[product-title-${idx}] [product-desc-${idx}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 id={`product-title-${idx}`} className="text-lg font-semibold text-slate-900">{product.title}</h3>
                <p id={`product-desc-${idx}`} className="mt-2 text-sm text-slate-600 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
            View all product categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
