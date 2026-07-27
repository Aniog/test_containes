import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'PCBs, cables, connectors, consumer electronics, IoT devices, power supplies, LED products, and electronic accessories.',
    examples: ['PCB assemblies', 'USB cables & connectors', 'Bluetooth speakers', 'Smart home devices', 'LED lighting'],
    imgId: 'product-cat-electronics-a1b2c3',
    titleId: 'product-cat-electronics-title',
  },
  {
    name: 'Machinery & Hardware',
    desc: 'Industrial tools, CNC machined parts, fasteners, hydraulic components, bearings, and mechanical assemblies.',
    examples: ['CNC machined parts', 'Fasteners & screws', 'Hydraulic fittings', 'Industrial tools', 'Bearing assemblies'],
    imgId: 'product-cat-machinery-d4e5f6',
    titleId: 'product-cat-machinery-title',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Fabrics, garments, bags, footwear, home textiles, and fashion accessories for retail and wholesale.',
    examples: ['Cotton & synthetic fabrics', 'T-shirts & apparel', 'Backpacks & bags', 'Footwear', 'Home textiles'],
    imgId: 'product-cat-textiles-g7h8i9',
    titleId: 'product-cat-textiles-title',
  },
  {
    name: 'Packaging Materials',
    desc: 'Boxes, bags, labels, bottles, jars, and custom packaging solutions for products across all industries.',
    examples: ['Corrugated boxes', 'Plastic bottles & jars', 'Paper bags', 'Labels & stickers', 'Custom gift boxes'],
    imgId: 'product-cat-packaging-j0k1l2',
    titleId: 'product-cat-packaging-title',
  },
  {
    name: 'Home & Furniture',
    desc: 'Indoor and outdoor furniture, kitchenware, home decor, garden products, and household items.',
    examples: ['Office furniture', 'Outdoor patio sets', 'Kitchenware', 'Home decor', 'Garden tools'],
    imgId: 'product-cat-furniture-m3n4o5',
    titleId: 'product-cat-furniture-title',
  },
  {
    name: 'Automotive Parts',
    desc: 'Replacement parts, accessories, tools, EV components, and aftermarket automotive products.',
    examples: ['Replacement auto parts', 'Car accessories', 'EV charging components', 'Automotive tools', 'LED car lights'],
    imgId: 'product-cat-automotive-p6q7r8',
    titleId: 'product-cat-automotive-title',
  },
  {
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, hair care, personal grooming tools, and beauty accessories.',
    examples: ['Skincare products', 'Hair care tools', 'Cosmetic packaging', 'Makeup brushes', 'Personal grooming kits'],
    imgId: 'product-cat-beauty-s9t0u1',
    titleId: 'product-cat-beauty-title',
  },
  {
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, sports accessories, and recreational items.',
    examples: ['Fitness equipment', 'Camping gear', 'Yoga mats & accessories', 'Cycling accessories', 'Outdoor lighting'],
    imgId: 'product-cat-sports-v2w3x4',
    titleId: 'product-cat-sports-title',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From electronics to textiles, we have experience sourcing across dozens of product categories from vetted manufacturers throughout China.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-[#f8f9fa] rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-navy mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="inline-flex items-center gap-1 text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We source products across many more categories. Reach out and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
