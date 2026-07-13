import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Cog, Sofa, Shirt, Package, Sparkles, Wrench, MoreHorizontal, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHeader from '@/components/shared/PageHeader'
import SectionLabel from '@/components/shared/SectionLabel'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { name: 'Electronics & Electrical', icon: Cpu, description: 'Consumer electronics, cables, adapters, chargers, components, LED lighting, and small appliances.', examples: ['Power banks', 'USB cables', 'LED strips', 'Bluetooth speakers'], imgId: 'products-page-electronics', titleId: 'products-page-title-electronics', descId: 'products-page-desc-electronics' },
  { name: 'Machinery & Industrial Parts', icon: Cog, description: 'Custom machined parts, tooling, castings, fasteners, pumps, valves, and industrial equipment.', examples: ['CNC parts', 'Tooling molds', 'Hydraulic fittings', 'Conveyor components'], imgId: 'products-page-machinery', titleId: 'products-page-title-machinery', descId: 'products-page-desc-machinery' },
  { name: 'Home & Furniture', icon: Sofa, description: 'Furniture, lighting, kitchenware, home décor, garden products, and household goods.', examples: ['Sofas & chairs', 'Table lamps', 'Kitchen organizers', 'Planters'], imgId: 'products-page-furniture', titleId: 'products-page-title-furniture', descId: 'products-page-desc-furniture' },
  { name: 'Apparel & Textiles', icon: Shirt, description: 'Garments, fabrics, bags, accessories, uniforms, and textile-based promotional products.', examples: ['T-shirts', 'Tote bags', 'Caps', 'Workwear'], imgId: 'products-page-apparel', titleId: 'products-page-title-apparel', descId: 'products-page-desc-apparel' },
  { name: 'Packaging & Printing', icon: Package, description: 'Custom packaging, labels, printed boxes, pouches, and retail-ready display materials.', examples: ['Rigid boxes', 'Paper bags', 'Stickers & labels', 'Display stands'], imgId: 'products-page-packaging', titleId: 'products-page-title-packaging', descId: 'products-page-desc-packaging' },
  { name: 'Beauty & Personal Care', icon: Sparkles, description: 'Skincare, cosmetics, grooming tools, salon equipment, and personal care accessories.', examples: ['Cosmetic brushes', 'Skin care tools', 'Hair accessories', 'Travel bottles'], imgId: 'products-page-beauty', titleId: 'products-page-title-beauty', descId: 'products-page-desc-beauty' },
  { name: 'Hardware & Tools', icon: Wrench, description: 'Hand tools, power tools, fasteners, construction hardware, safety equipment, and tool storage.', examples: ['Screwdriver sets', 'Drill bits', 'Safety gloves', 'Toolboxes'], imgId: 'products-page-hardware', titleId: 'products-page-title-hardware', descId: 'products-page-desc-hardware' },
  { name: 'Other Categories', icon: MoreHorizontal, description: 'If your product is manufactured in China, we can help you find the right supplier. Contact us with details.', examples: ['Toys', 'Sports equipment', 'Automotive parts', 'Pet supplies'], imgId: 'products-page-other', titleId: 'products-page-title-other', descId: 'products-page-desc-other' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Products We Source"
        subtitle="From electronics to industrial parts, we connect you with manufacturers across major categories."
        backgroundId="products-page-header-bg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <SectionLabel>Categories</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Major Product Categories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our network covers a wide range of industries. Each category is supported by verified factories and tailored sourcing workflows.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-blue-600">
                    <product.icon className="h-5 w-5" />
                    <h3 id={product.titleId} className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  </div>
                  <p id={product.descId} className="text-slate-600 leading-relaxed mb-4">{product.description}</p>
                  <div className="mt-auto">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Common examples</p>
                    <div className="flex flex-wrap gap-2">
                      {product.examples.map((example) => (
                        <span key={example} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Do not see your product category?</h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              China manufactures an enormous range of products. Send us your requirements and we will let you know how we can help.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact?quote=true" className="no-underline hover:no-underline">
                Request a Product Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
