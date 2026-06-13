import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Cpu, Shirt, Cog, Home, Car, Package,
  Building2, ShoppingBag, ArrowRight, CheckCircle
} from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, semiconductors, cables, connectors, and electronic components from major manufacturing hubs in Shenzhen, Dongguan, and Suzhou.',
    examples: ['Smartphones & accessories', 'PCB assemblies', 'LED lighting', 'Audio equipment', 'Smart home devices'],
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Garments, fabrics, home textiles, and fashion accessories from textile manufacturing centers in Zhejiang, Jiangsu, and Guangdong provinces.',
    examples: ['Custom clothing', 'Sportswear', 'Home textiles', 'Fabric rolls', 'Fashion accessories'],
  },
  {
    id: 'machinery',
    icon: Cog,
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, manufacturing equipment, tools, and automation systems from established machinery manufacturers across China.',
    examples: ['CNC machines', 'Packaging equipment', 'Agricultural machinery', 'Construction equipment', 'Industrial tools'],
  },
  {
    id: 'home',
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, home decor, and household items from manufacturing regions specializing in consumer home products.',
    examples: ['Outdoor furniture', 'Kitchen appliances', 'Garden tools', 'Home decor', 'Storage solutions'],
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts',
    description: 'Auto components, aftermarket parts, accessories, and specialized automotive manufacturing from established automotive supply chains.',
    examples: ['Engine components', 'Body parts', 'Electrical systems', 'Interior accessories', 'Aftermarket parts'],
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging Materials',
    description: 'Custom packaging, boxes, bags, labels, and protective materials from packaging manufacturers serving global supply chains.',
    examples: ['Custom boxes', 'Flexible packaging', 'Labels & tags', 'Protective materials', 'Retail packaging'],
  },
  {
    id: 'building',
    icon: Building2,
    title: 'Building Materials',
    description: 'Construction materials, tiles, fixtures, hardware, and architectural products from building material manufacturing centers.',
    examples: ['Ceramic tiles', 'Sanitary ware', 'Hardware & fittings', 'Steel structures', 'Flooring materials'],
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'Toys, sports equipment, promotional items, gifts, and general consumer products from diverse manufacturing sources.',
    examples: ['Toys & games', 'Sports equipment', 'Promotional items', 'Gift items', 'Personal care products'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            From electronics to textiles, we source virtually any product manufactured in China. Here are our main product categories.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="card group hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example) => (
                        <span
                          key={example}
                          className="inline-flex items-center gap-1 text-xs bg-secondary text-foreground/70 px-2 py-1 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom text-center">
          <h2 className="section-title">Do Not See Your Product Category?</h2>
          <p className="section-subtitle">
            We source products across virtually all manufacturing sectors. If you do not see your product listed, contact us — we likely have experience in your industry.
          </p>
          <Link to="/contact" className="btn-primary">
            Tell Us What You Need
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Your Products?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote and let us find the right manufacturers for your products.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
