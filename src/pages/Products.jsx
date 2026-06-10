import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

const PRODUCTS = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Audio accessories, smart home devices, charging accessories, small appliances. Sourced from factories with in-house tooling and CE/FCC/RoHS capability.",
    examples: ["Bluetooth speakers", "Charging cables and hubs", "Smart plugs and sensors", "Personal grooming devices"],
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, kitchen tools, food storage, household goods. FDA, LFGB, and Prop 65 compliant suppliers available for export.",
    examples: ["Stainless steel cookware", "Kitchen gadgets", "Food storage containers", "Household cleaning tools"],
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Knit and woven garments, accessories, home textiles. Custom fabric sourcing, sample development, and small to mid-MOQ production.",
    examples: ["T-shirts and basics", "Outerwear", "Bags and accessories", "Bedding and towels"],
  },
  {
    id: "furniture",
    title: "Furniture & Home Goods",
    desc: "Indoor and outdoor furniture, decor, lighting. Custom dimensions, finishes, and packaging for retail and e-commerce.",
    examples: ["Outdoor patio furniture", "Office and home seating", "Storage furniture", "Lamps and decor"],
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Metal parts, fasteners, hand tools, industrial components from audited workshops. CNC, casting, and stamping capabilities.",
    examples: ["Custom metal parts", "Fasteners and fittings", "Hand and power tools", "OEM industrial components"],
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Cosmetic packaging, applicators, skincare tools. Suppliers with cleanroom and ISO-certified production.",
    examples: ["Cosmetic packaging", "Brushes and applicators", "Skincare devices", "Hair tools"],
  },
  {
    id: "toys",
    title: "Toys & Baby Products",
    desc: "EN71, ASTM F963, and CPC compliant toys and baby goods from audited and tested suppliers.",
    examples: ["Plush toys", "Educational toys", "Baby accessories", "Outdoor play items"],
  },
  {
    id: "outdoor",
    title: "Outdoor & Sports",
    desc: "Camping, fitness, and outdoor accessories. From small accessories to OEM equipment with custom branding.",
    examples: ["Camping gear", "Fitness accessories", "Cycling accessories", "Backpacks and bags"],
  },
  {
    id: "promotional",
    title: "Promotional & Custom",
    desc: "Branded merchandise, gift sets, and custom packaging. Logo printing, embroidery, embossing, and engraving.",
    examples: ["Branded drinkware", "Custom gift sets", "Event merchandise", "Custom packaging"],
  },
]

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Products We Source</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Categories with proven supplier networks
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-3xl">
            We do not claim to source everything. These are the categories where
            we have direct factory relationships and a track record of delivered
            orders.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="bg-white rounded-xl border border-border-soft overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`prodp-${p.id}-img-8e3a`}
                    data-strk-img={`[prodp-${p.id}-desc] [prodp-${p.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={`prodp-${p.id}-title`} className="text-lg font-semibold text-navy">
                    {p.title}
                  </h2>
                  <p id={`prodp-${p.id}-desc`} className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.examples.map((e) => (
                      <li key={e} className="text-xs text-navy bg-bg-soft border border-border-soft px-2.5 py-1 rounded-md">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-soft border-t border-border-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">
            Looking for a category not listed?
          </h2>
          <p className="mt-4 text-slate-600">
            We can still help. Send your product details and we will tell you honestly whether we are the right partner.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-navy px-7 py-3.5 rounded-md font-semibold"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
