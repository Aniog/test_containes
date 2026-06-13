import React from 'react'
import CTAButton from '../components/CTAButton'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks & chargers', 'LED lighting', 'Computer accessories', 'Mobile phone components'],
    },
    {
      name: 'Home & Kitchen',
      items: ['Kitchen appliances', 'Cookware & bakeware', 'Home textiles', 'Storage solutions', 'Cleaning equipment', 'Furniture hardware'],
    },
    {
      name: 'Textiles & Apparel',
      items: ['Garments & clothing', 'Fabric & materials', 'Home textiles', 'Workwear & uniforms', 'Accessories', 'Technical textiles'],
    },
    {
      name: 'Industrial & Machinery',
      items: ['Machine parts', 'Tools & equipment', 'Fasteners & hardware', 'Pneumatic components', 'Motors & drives', 'Safety equipment'],
    },
    {
      name: 'Automotive',
      items: ['Aftermarket parts', 'Interior components', 'Electrical systems', 'Body & chassis parts', 'Maintenance tools', 'OEM components'],
    },
    {
      name: 'Packaging & Materials',
      items: ['Custom packaging', 'Shipping containers', 'Labeling materials', 'Protective packaging', 'Retail displays', 'Industrial packaging'],
    },
    {
      name: 'Medical & Safety',
      items: ['PPE equipment', 'Medical devices', 'First aid supplies', 'Safety signage', 'Protective gear', 'Healthcare consumables'],
    },
    {
      name: 'Construction & Building',
      items: ['Building materials', 'Electrical supplies', 'Plumbing fixtures', 'Tools & equipment', 'Safety gear', 'Finishing materials'],
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-xl text-gray-300">Established supplier networks across major product categories.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b">{category.name}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-600">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Don't See Your Product?</h2>
          <p className="text-gray-600 mb-8">We work with suppliers across additional categories. Contact us with your specific requirements.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}

export default Products