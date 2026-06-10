import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Lightbulb, Sofa, Shirt, Wrench, Package, Cpu, Factory, 
  ArrowRight, CheckCircle, Filter 
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const categories = [
  {
    name: 'Electronics & Tech',
    icon: Lightbulb,
    description: 'Consumer electronics, components, and technology products',
    products: [
      'Consumer electronics (speakers, headphones, chargers)',
      'PCBs and electronic components',
      'Smart home devices',
      'Computer accessories',
      'Mobile phone accessories',
      'LED lighting products',
      'Batteries and power banks',
      'Cables and connectors',
    ],
  },
  {
    name: 'Furniture & Home',
    icon: Sofa,
    description: 'Home furnishings, office furniture, and decor',
    products: [
      'Living room furniture',
      'Bedroom furniture',
      'Office chairs and desks',
      'Kitchen furniture',
      'Home decor items',
      'Storage solutions',
      'Outdoor furniture',
      'Mattresses and bedding',
    ],
  },
  {
    name: 'Textiles & Apparel',
    icon: Shirt,
    description: 'Garments, fabrics, and fashion accessories',
    products: [
      'Men\'s and women\'s clothing',
      'Children\'s apparel',
      'Sportswear and activewear',
      'Fashion accessories (bags, belts, hats)',
      'Fabrics and textiles',
      'Shoes and footwear',
      'Jewelry and watches',
      'Home textiles (curtains, bedding)',
    ],
  },
  {
    name: 'Machinery & Industrial',
    icon: Wrench,
    description: 'Industrial equipment, tools, and machinery',
    products: [
      'Power tools',
      'Hand tools',
      'Industrial machinery',
      'Agricultural equipment',
      'Construction materials',
      'Medical equipment',
      'Safety equipment',
      'Laboratory instruments',
    ],
  },
  {
    name: 'Packaging & Materials',
    icon: Package,
    description: 'Packaging products and raw materials',
    products: [
      'Paper packaging',
      'Plastic packaging',
      'Metal packaging',
      'Eco-friendly packaging',
      'Labels and stickers',
      'Pallets and containers',
      'Raw materials',
      'Industrial chemicals',
    ],
  },
  {
    name: 'Parts & Components',
    icon: Cpu,
    description: 'Manufacturing parts and precision components',
    products: [
      'Metal parts and components',
      'Plastic molds and parts',
      'Rubber products',
      'Auto parts',
      'Bicycle components',
      'Furniture hardware',
      'Electrical components',
      'Fasteners and screws',
    ],
  },
  {
    name: 'Sports & Outdoor',
    icon: Factory,
    description: 'Sports equipment and outdoor products',
    products: [
      'Fitness equipment',
      'Camping gear',
      'Sports accessories',
      'Bicycles and parts',
      'Water sports equipment',
      'Hiking gear',
      'Pet products',
      'Toys and games',
    ],
  },
  {
    name: 'Health & Beauty',
    icon: Package,
    description: 'Beauty products and health supplies',
    products: [
      'Skincare products',
      'Hair care products',
      'Cosmetics and makeup',
      'Health supplements',
      'Medical supplies',
      'Personal care items',
      'Bathroom accessories',
      'Wellness products',
    ],
  },
]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Extensive experience across multiple industries and product categories. 
            If you need it, we can likely source it from China.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Categories"
            subtitle="Browse our sourcing expertise by industry"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <Card 
                key={category.name} 
                hover 
                className={`cursor-pointer ${activeCategory === category.name ? 'ring-2 ring-secondary' : ''}`}
                onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
              >
                <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{category.name}</h3>
                <p className="text-slate-600 text-sm">{category.description}</p>
              </Card>
            ))}
          </div>

          {/* Expanded Category Details */}
          {activeCategory && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              {categories.filter(c => c.name === activeCategory).map(category => (
                <div key={category.name}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{category.name}</h3>
                      <p className="text-slate-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.products.map((product) => (
                      <div key={product} className="flex items-center p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Link to="/contact">
                      <Button variant="secondary">
                        Get Quote for {category.name}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!activeCategory && (
            <div className="text-center text-slate-600 p-8 bg-white rounded-xl border border-slate-200">
              <Filter className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <p>Click on a category above to see detailed product examples</p>
            </div>
          )}
        </div>
      </section>

      {/* Can't Find Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our sourcing network is extensive. Contact us with your requirements 
            and we'll let you know if we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Request Custom Sourcing
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products