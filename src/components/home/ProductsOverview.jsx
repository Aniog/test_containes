import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/Section"
import { StrkImage } from "@/components/ui/StrkImage"
import { productCategories } from "@/data/content"

const imgHints = {
  electronics: "consumer electronics gadgets assembly line factory",
  "home-kitchen": "kitchen utensils home goods production factory",
  apparel: "garment clothing textile factory sewing",
  beauty: "skincare cosmetics packaging bottles factory",
  industrial: "metal hardware parts factory machinery",
  packaging: "cardboard boxes packaging printing factory",
  outdoor: "outdoor sports equipment camping factory",
  kids: "kids toys wooden colorful factory production",
}

export function ProductsOverview() {
  return (
    <Section bg="white" id="products">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <SectionHeader
          eyebrow="Products we source"
          title="Eight categories we work in every day"
          subtitle="If your product is in one of these categories, we likely have vetted manufacturers on file and can shortlist within days."
          align="left"
          className="!max-w-2xl"
        />
        <Link
          to="/products"
          className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600 transition-colors"
        >
          See all categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {productCategories.map((p) => (
          <Link
            key={p.id}
            to="/products"
            className="group card overflow-hidden hover:shadow-md transition-shadow"
          >
            <StrkImage
              imgId={`prod-${p.id}-img`}
              query={`[prod-${p.id}-title] [prod-${p.id}-desc] ${imgHints[p.id] || ""}`.trim()}
              ratio="4x3"
              width={500}
              alt={p.title}
              className="aspect-[4/3]"
            />
            <div className="p-5">
              <h3
                id={`prod-${p.id}-title`}
                className="text-base font-semibold text-slate-900 group-hover:text-navy-900"
              >
                {p.title}
              </h3>
              <p
                id={`prod-${p.id}-desc`}
                className="mt-1.5 text-sm text-slate-600 leading-relaxed"
              >
                {p.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export default ProductsOverview
