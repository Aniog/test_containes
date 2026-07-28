import { useEffect, useRef } from "react"
import { Cpu, Cog, Shirt, Package, Sofa, Hammer, Plug, ToyBrick, FlaskConical, Gem } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import CTABanner from "@/components/CTABanner"
import strkImgConfig from "@/strk-img-config.json"

const categories = [
  {
    icon: Cpu,
    title: "Electronics & Components",
    examples: "PCBs, cables, chargers, power banks, consumer electronics, IoT devices, smart home products.",
  },
  {
    icon: Cog,
    title: "Machinery & Industrial Parts",
    examples: "CNC parts, castings, forgings, tooling, automation components, pumps, valves.",
  },
  {
    icon: Shirt,
    title: "Apparel & Textiles",
    examples: "T-shirts, uniforms, activewear, bags, shoes, fabrics, fashion accessories.",
  },
  {
    icon: Package,
    title: "Packaging Materials",
    examples: "Folding cartons, rigid boxes, mailers, labels, blister packs, sustainable packaging.",
  },
  {
    icon: Sofa,
    title: "Furniture & Home Goods",
    examples: "Indoor and outdoor furniture, lighting, home décor, kitchenware, storage.",
  },
  {
    icon: Hammer,
    title: "Hardware & Building Supplies",
    examples: "Hand tools, fasteners, plumbing, electrical fittings, safety equipment, building hardware.",
  },
  {
    icon: Plug,
    title: "Automotive & EV Parts",
    examples: "EV accessories, charging cables, interior trims, after-market parts, LED lighting.",
  },
  {
    icon: ToyBrick,
    title: "Promotional Products",
    examples: "Branded gifts, corporate merchandise, toys, retail displays, event giveaways.",
  },
  {
    icon: FlaskConical,
    title: "Personal Care & Cosmetics",
    examples: "Skincare packaging, beauty tools, personal care accessories, wellness products.",
  },
  {
    icon: Gem,
    title: "Jewelry & Accessories",
    examples: "Fashion jewelry, watches, sunglasses, belts, scarves, hair accessories.",
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
          <div className="container-site">
            <SectionHeader
              label="Products We Source"
              title="Industries and product categories"
              description="We source a broad range of products. If you do not see your category, contact us — we likely have relevant supplier contacts."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <Card key={category.title} className="flex flex-col">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 id={`product-title-${index}`} className="text-xl font-bold text-navy-900">{category.title}</h3>
                  <p id={`product-desc-${index}`} className="mt-2 flex-1 text-slate-600">{category.examples}</p>
                  <img
                    data-strk-img-id={`product-img-${index}`}
                    data-strk-img={`[product-desc-${index}] [product-title-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="mt-4 h-32 w-full rounded-lg object-cover"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="rounded-2xl bg-navy-900 p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl">Custom product development</h2>
                  <p className="mt-4 text-slate-300">
                    We also help develop custom products from scratch: 3D drawings, prototypes, tooling, packaging design, and pilot runs.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Industrial design support", "Prototype sourcing", "Tooling management", "Small-batch trials"].map((item) => (
                    <div key={item} className="rounded-xl bg-navy-800 p-4">
                      <span className="font-semibold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Looking for a specific product?"
          description="Tell us what you need and we will confirm whether we can source it for you."
        />
    </div>
  )
}
