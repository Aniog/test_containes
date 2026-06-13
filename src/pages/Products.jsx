import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Mobile accessories', 'Computer peripherals', 'Wearable technology']
    },
    {
      name: 'Home & Garden',
      items: ['Furniture components', 'Kitchenware', 'Home textiles', 'Garden tools', 'Decorative items']
    },
    {
      name: 'Industrial Equipment',
      items: ['Machinery parts', 'Tools and hardware', 'Safety equipment', 'Material handling', 'Packaging machinery']
    },
    {
      name: 'Textiles & Apparel',
      items: ['Fabric and materials', 'Finished garments', 'Workwear', 'Home textiles', 'Technical textiles']
    },
    {
      name: 'Automotive Parts',
      items: ['Aftermarket components', 'Interior accessories', 'Maintenance parts', 'Electrical components', 'Body parts']
    },
    {
      name: 'Medical Supplies',
      items: ['Medical devices', 'Protective equipment', 'Diagnostic tools', 'Consumables', 'Rehabilitation products']
    },
    {
      name: 'Packaging Materials',
      items: ['Custom boxes', 'Protective packaging', 'Labels and tags', 'Shipping supplies', 'Retail packaging']
    },
    {
      name: 'Promotional Products',
      items: ['Branded merchandise', 'Trade show displays', 'Corporate gifts', 'Event supplies', 'Marketing materials']
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-xl text-[#94A3B8]">Categories and product types we regularly source for clients.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="border border-[#E2E8F0] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <ul className="space-y-2 text-[#64748B]">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#0D9488]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Don't See Your Product?</h2>
          <p className="text-[#64748B] mb-6">We work across many additional categories. Contact us to discuss your specific sourcing needs.</p>
          <Button asChild>
            <Link to="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Products