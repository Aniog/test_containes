import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { CheckCircle } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics & Accessories',
      examples: [
        'Mobile phone accessories and cases',
        'Audio equipment and headphones',
        'Power banks and charging cables',
        'Smart home devices and IoT products',
        'Computer peripherals and components',
      ],
      notes: 'We verify component sourcing and assembly quality. Battery and electrical safety certifications are commonly required.',
    },
    {
      name: 'Home & Kitchen Products',
      examples: [
        'Cookware and kitchen utensils',
        'Small appliances and gadgets',
        'Storage and organization solutions',
        'Tableware and drinkware',
        'Cleaning tools and supplies',
      ],
      notes: 'Food contact materials and safety standards vary by market. We coordinate relevant testing when required.',
    },
    {
      name: 'Apparel, Textiles & Fashion',
      examples: [
        'Clothing and outerwear',
        'Bags, backpacks, and luggage',
        'Home textiles and bedding',
        'Footwear and accessories',
        'Workwear and uniforms',
      ],
      notes: 'We assess factory capabilities for specific construction methods, fabric types, and finishing requirements.',
    },
    {
      name: 'Industrial Components & Machinery',
      examples: [
        'Mechanical parts and assemblies',
        'Fasteners and hardware',
        'Pumps, valves, and fittings',
        'Motors and drive systems',
        'Custom fabricated components',
      ],
      notes: 'Technical drawings and material specifications are essential. We verify machining capabilities and quality systems.',
    },
    {
      name: 'Automotive Parts & Accessories',
      examples: [
        'Aftermarket accessories',
        'Replacement components',
        'Interior trim and accessories',
        'Lighting and electrical parts',
        'Maintenance and repair items',
      ],
      notes: 'We confirm IATF or equivalent quality systems when automotive-grade certification is required.',
    },
    {
      name: 'Furniture & Home Furnishings',
      examples: [
        'Indoor and outdoor furniture',
        'Lighting fixtures',
        'Mattresses and bedding',
        'Decorative accessories',
        'Office and commercial furniture',
      ],
      notes: 'We assess wood sourcing, finishing processes, and packaging methods for damage prevention.',
    },
    {
      name: 'Toys, Games & Sporting Goods',
      examples: [
        'Children\'s toys and games',
        'Outdoor and sports equipment',
        'Fitness and exercise products',
        'Board games and puzzles',
        'Seasonal and promotional items',
      ],
      notes: 'Safety standards (ASTM, EN71, CPSIA) are critical. We coordinate required testing and documentation.',
    },
    {
      name: 'Beauty, Health & Personal Care',
      examples: [
        'Cosmetic tools and accessories',
        'Personal care devices',
        'Health and wellness products',
        'Packaging for beauty products',
        'Disposable and single-use items',
      ],
      notes: 'We verify GMP compliance for relevant facilities and coordinate required safety assessments.',
    },
    {
      name: 'Packaging Materials & Supplies',
      examples: [
        'Custom boxes and cartons',
        'Protective packaging solutions',
        'Retail display packaging',
        'Shipping and fulfillment supplies',
        'Sustainable and recyclable options',
      ],
      notes: 'Material specifications, print quality, and structural integrity are key inspection points.',
    },
    {
      name: 'Tools, Hardware & Construction',
      examples: [
        'Hand tools and power tool accessories',
        'Fasteners and building hardware',
        'Plumbing and electrical supplies',
        'Safety equipment and PPE',
        'Garden and landscaping tools',
      ],
      notes: 'We verify material grades and manufacturing processes for durability and safety compliance.',
    },
  ]

  const capabilities = [
    'Product specification review and supplier matching',
    'Sample coordination and quality assessment',
    'Material and component verification',
    'Production process capability assessment',
    'Quality inspection at multiple stages',
    'Packaging and labeling compliance review',
    'Documentation and certification coordination',
    'Logistics and shipping arrangement',
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[36px] font-semibold mb-4">Products We Source</h1>
            <p className="text-lg text-[#94A3B8]">
              We work across a broad range of product categories. Our team has experience 
              sourcing both consumer goods and industrial components for international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="space-y-10">
            {categories.map((category, index) => (
              <div key={index} className="border-b border-[#E2E8F0] pb-10 last:border-b-0 last:pb-0">
                <h2 className="text-xl font-semibold text-[#0A2540] mb-4">{category.name}</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mb-4">
                  {category.examples.map((example, i) => (
                    <div key={i} className="text-sm text-[#475569] flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#64748B] pl-6">{category.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-6 text-center">
              What We Can Support
            </h2>
            <p className="text-center text-[#475569] mb-8">
              Regardless of category, we apply consistent processes to reduce sourcing risk.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-sm text-[#475569] flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-4">Our Approach</h2>
            <p className="text-[#475569] mb-6">
              We do not claim expertise in every product. Before accepting a project, we assess 
              whether our network and experience align with your requirements. If we are not the 
              right fit, we will say so.
            </p>
            <p className="text-[#475569] mb-8">
              For specialized or highly technical products, we may recommend involving your 
              engineering or quality team directly with suppliers, with us providing coordination support.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Discuss Your Product Requirements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
