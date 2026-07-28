import { Cpu, Cog, Shirt, Package, Sofa, Hammer, Plug, ToyBrick } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"

const products = [
  { icon: Cpu, title: "Electronics & Components", description: "PCBs, cables, chargers, consumer electronics, and IoT devices." },
  { icon: Cog, title: "Machinery & Industrial Parts", description: "Custom metal parts, tooling, automation components, and spare parts." },
  { icon: Shirt, title: "Apparel & Textiles", description: "Garments, fabrics, bags, shoes, and fashion accessories." },
  { icon: Package, title: "Packaging Materials", description: "Retail boxes, bags, labels, blister packs, and sustainable packaging." },
  { icon: Sofa, title: "Furniture & Home Goods", description: "Indoor and outdoor furniture, lighting, décor, and kitchenware." },
  { icon: Hammer, title: "Hardware & Building Supplies", description: "Tools, fasteners, plumbing, electrical fittings, and safety equipment." },
  { icon: Plug, title: "Automotive & EV Parts", description: "EV accessories, interior trims, charging components, and after-market parts." },
  { icon: ToyBrick, title: "Promotional Products", description: "Custom-branded merchandise, gifts, toys, and retail display items." },
]

export default function Products() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeader
          label="Products We Source"
          title="Industries we support"
          description="We source a wide range of products across consumer, industrial, and promotional categories."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-xl border border-slate-100 bg-slate-50 p-6 transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm group-hover:text-blue-700">
                <product.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900">{product.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
