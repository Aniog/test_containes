import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight, Box, Wrench, Shirt, Printer, Home, Cog } from "lucide-react"

const categories = [
  {
    icon: Box,
    name: "Electronics & Components",
    desc: "PCBs, cables, chargers, IoT devices, consumer electronics, batteries, and semiconductors.",
    examples: ["USB cables & adapters", "Bluetooth speakers", "PCB assemblies", "Smart home sensors"],
  },
  {
    icon: Wrench,
    name: "Hardware & Tools",
    desc: "Hand tools, power tools, fasteners, building hardware, and industrial supplies.",
    examples: ["Screwdriver sets", "Power drill accessories", "Nuts & bolts", "Safety equipment"],
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    desc: "Garments, bags, fabrics, home textiles, fashion accessories, and footwear.",
    examples: ["T-shirts & hoodies", "Tote bags", "Bedding sets", "Athletic wear"],
  },
  {
    icon: Printer,
    name: "Packaging & Printing",
    desc: "Corrugated boxes, retail packaging, labels, promotional materials, and gift boxes.",
    examples: ["Corrugated shipping boxes", "Retail folding cartons", "Custom labels & stickers", "Promotional flyers"],
  },
  {
    icon: Home,
    name: "Home & Kitchen",
    desc: "Cookware, furniture, home decor, small appliances, lighting, and bathroom accessories.",
    examples: ["Non-stick cookware sets", "LED pendant lights", "Bathroom organizers", "Kitchen gadgets"],
  },
  {
    icon: Cog,
    name: "Machinery & Industrial",
    desc: "Industrial parts, automation equipment, molds, precision components, and hardware.",
    examples: ["CNC machined parts", "Injection molds", "Conveyor components", "Pneumatic fittings"],
  },
]

export default function Products() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb] py-16 md:py-24">
        <div className="container-main text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Products
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary">
            Products We Source
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            We source a wide range of products from verified factories across China. If your category is not listed, reach out — we likely cover it.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text-primary">{cat.name}</h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{cat.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.examples.map((ex, j) => (
                      <span
                        key={j}
                        className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-main text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary">
            Have a Product in Mind?
          </h2>
          <p className="mt-4 text-text-secondary">
            Send us your specifications and we will assess feasibility, pricing, and lead times within 24 hours.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
