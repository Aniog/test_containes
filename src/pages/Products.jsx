import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Package, Cpu, Wrench, Building2, Shirt, Car, Box } from "lucide-react"
import Button from "@/components/ui/button"

const categories = [
  {
    icon: Cpu,
    name: "Electronics & Components",
    desc: "PCBs, semiconductors, sensors, IoT modules, displays, connectors, cables, power supplies, and consumer electronics components.",
    examples: "PCBs, sensors, IoT devices, displays, wiring harnesses"
  },
  {
    icon: Wrench,
    name: "Industrial Equipment & Machinery",
    desc: "Manufacturing machinery, industrial tools, automation components, hydraulic parts, bearings, and precision instruments.",
    examples: "CNC parts, molds, tools, automation components"
  },
  {
    icon: Package,
    name: "Packaging Materials",
    desc: "Custom corrugated boxes, rigid boxes, labels, flexible packaging, shrink wrap, blister packs, and display packaging.",
    examples: "Custom boxes, labels, film packaging, display units"
  },
  {
    icon: Building2,
    name: "Home & Lifestyle Products",
    desc: "Furniture, kitchenware, home decor, bathroom accessories, storage solutions, garden supplies, and household items.",
    examples: "Furniture, kitchenware, home decor, storage"
  },
  {
    icon: Shirt,
    name: "Apparel & Textiles",
    desc: "Garments, technical fabrics, accessories, sportswear, workwear, and custom textile products for brands and businesses.",
    examples: "Garments, fabrics, uniforms, technical textiles"
  },
  {
    icon: Car,
    name: "Automotive Parts & Accessories",
    desc: "Aftermarket parts, automotive components, interior accessories, tools, and maintenance equipment.",
    examples: "Auto parts, accessories, tools, components"
  },
  {
    icon: Box,
    name: "Raw Materials & Components",
    desc: "Steel, aluminum, plastics, rubber, chemicals, fasteners, and semi-finished materials for manufacturing.",
    examples: "Metals, plastics, chemicals, fasteners"
  },
  {
    icon: Package,
    name: "Medical & Healthcare Products",
    desc: "Medical devices, healthcare equipment, PPE, diagnostic supplies, laboratory equipment, and pharmaceutical packaging.",
    examples: "Medical devices, PPE, lab equipment"
  }
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">Products We Source</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Wide Range of Products Across Industries
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              We source products across multiple categories and industries, leveraging China's diverse manufacturing ecosystem to find the right supplier for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-surface-50 rounded-xl p-6 border border-surface-100 hover:shadow-md transition-shadow">
                <cat.icon className="w-10 h-10 text-brand-500 mb-4" />
                <h3 className="font-semibold text-brand-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-surface-600 mb-3 leading-relaxed">{cat.desc}</p>
                <p className="text-xs text-surface-400">
                  <span className="font-medium text-surface-500">Examples: </span>
                  {cat.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure */}
      <section className="bg-surface-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Not Sure if We Can Source Your Product?</h2>
          <p className="text-lg text-surface-600 mb-8">
            China's manufacturing capabilities span virtually every industry. Contact us with your product requirements and we'll let you know how we can help.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Discuss Your Product <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}