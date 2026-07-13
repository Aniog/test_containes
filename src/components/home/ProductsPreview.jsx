import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import IconByName from "@/components/shared/IconByName.jsx"
import { productCategories } from "@/data/products.js"

const iconByCategory = {
  "consumer-electronics": "Plug",
  "home-kitchen": "Box",
  "apparel-textiles": "Shirt",
  "beauty-personal-care": "Pill",
  "industrial-equipment": "Cog",
  "packaging-printing": "Package",
  "toys-sporting": "Bike",
  "furniture-decor": "Sofa",
  "auto-parts": "Truck",
}

export default function ProductsPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Products we source"
        title="Specialist factories for the categories overseas buyers actually order"
        description="We work with manufacturers we have audited or visited, organised by the product categories our clients most often ask us about."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {productCategories.map((cat) => (
          <article key={cat.id} className="card p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="icon-tile shrink-0">
                <IconByName name={iconByCategory[cat.id] || "Box"} className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {cat.examples.slice(0, 3).map((e) => (
                    <li key={e} className="pill">{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/products" className="btn-secondary">
          Browse all categories
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </Section>
  )
}
