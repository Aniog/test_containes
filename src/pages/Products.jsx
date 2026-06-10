import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ProductCategory from '@/components/sections/ProductCategory'
import { 
  Smartphone, Home, Shirt, Wrench, Car, Heart, 
  Gamepad2, Sofa, Package, Hammer 
} from 'lucide-react'

const Products = () => {
  const categories = [
    {
      icon: Smartphone,
      title: "Consumer Electronics & Accessories",
      items: [
        "Mobile phones and accessories",
        "Audio equipment and headphones",
        "Smart home devices",
        "Power banks and chargers",
        "Computer peripherals",
        "Wearable technology"
      ],
      examples: "Bluetooth speakers, phone cases, wireless earbuds, smart watches"
    },
    {
      icon: Home,
      title: "Home & Kitchen Products",
      items: [
        "Kitchenware and cookware",
        "Small appliances",
        "Home organization",
        "Cleaning supplies",
        "Tableware and dinnerware",
        "Storage solutions"
      ],
      examples: "Non-stick pans, coffee makers, storage containers, cutlery sets"
    },
    {
      icon: Shirt,
      title: "Apparel, Textiles & Accessories",
      items: [
        "Clothing and fashion apparel",
        "Footwear and bags",
        "Home textiles and bedding",
        "Workwear and uniforms",
        "Fashion accessories",
        "Promotional apparel"
      ],
      examples: "T-shirts, jackets, tote bags, bed linens, work uniforms"
    },
    {
      icon: Wrench,
      title: "Industrial Components & Machinery",
      items: [
        "Mechanical components",
        "Fasteners and hardware",
        "Electrical components",
        "Pneumatic and hydraulic parts",
        "Tooling and equipment",
        "OEM manufacturing parts"
      ],
      examples: "Bearings, connectors, valves, custom machined parts"
    },
    {
      icon: Car,
      title: "Automotive Parts & Accessories",
      items: [
        "Aftermarket accessories",
        "Replacement parts",
        "Interior and exterior trim",
        "Lighting and electrical",
        "Performance parts",
        "Maintenance supplies"
      ],
      examples: "Car mats, LED lights, seat covers, air filters, tool kits"
    },
    {
      icon: Heart,
      title: "Health, Beauty & Personal Care",
      items: [
        "Beauty tools and devices",
        "Personal care products",
        "Health and wellness items",
        "Medical supplies (non-regulated)",
        "Packaging for cosmetics",
        "Salon and spa equipment"
      ],
      examples: "Facial devices, hair tools, massage equipment, travel kits"
    },
    {
      icon: Gamepad2,
      title: "Toys, Games & Sporting Goods",
      items: [
        "Educational toys",
        "Outdoor and sports equipment",
        "Board games and puzzles",
        "Fitness accessories",
        "Seasonal and promotional items",
        "Pet products and accessories"
      ],
      examples: "Building blocks, yoga mats, board games, pet beds"
    },
    {
      icon: Sofa,
      title: "Furniture & Home Furnishings",
      items: [
        "Home furniture",
        "Office furniture",
        "Outdoor furniture",
        "Lighting fixtures",
        "Decorative accessories",
        "Mattresses and bedding"
      ],
      examples: "Dining tables, office chairs, lamps, outdoor sets"
    },
    {
      icon: Package,
      title: "Packaging Materials & Supplies",
      items: [
        "Custom packaging solutions",
        "Shipping and protective packaging",
        "Retail display packaging",
        "Eco-friendly packaging",
        "Labels and tags",
        "Industrial packaging"
      ],
      examples: "Custom boxes, bubble wrap, gift packaging, product labels"
    },
    {
      icon: Hammer,
      title: "Building Materials & Hardware",
      items: [
        "Construction hardware",
        "Tools and equipment",
        "Plumbing and electrical supplies",
        "Safety equipment",
        "Finishing materials",
        "DIY and renovation products"
      ],
      examples: "Hand tools, fasteners, safety gear, lighting fixtures"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wider text-blue-300 mb-3">PRODUCT EXPERTISE</div>
            <h1 className="text-white mb-6">Products We Source</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              We have experience sourcing across a wide range of product categories for retailers, wholesalers, brands, and distributors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600">
            Our team has worked with factories across all major manufacturing regions in China. 
            We understand the capabilities, quality levels, and pricing structures for each category.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="b2b-card overflow-hidden">
                <div className="h-32 bg-slate-100 relative">
                  <img
                    data-strk-img-id={`products-cat-${index}`}
                    data-strk-img={`products we source factory manufacturing ${category.title.toLowerCase()}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <ProductCategory 
                    icon={category.icon}
                    title={category.title}
                    items={category.items}
                    examples={category.examples}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-8">Our Sourcing Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">What We Can Source</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Standard catalog products from existing production lines</li>
                <li>• Custom and private label products to your specifications</li>
                <li>• OEM and ODM manufacturing partnerships</li>
                <li>• Small-batch and trial orders for new products</li>
                <li>• High-volume container and FCL orders</li>
                <li>• Products requiring specific certifications (CE, FCC, RoHS, etc.)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">What We Typically Do Not Source</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Regulated medical devices and pharmaceuticals</li>
                <li>• Products requiring specialized import licenses</li>
                <li>• Highly perishable or temperature-controlled goods</li>
                <li>• Items prohibited for export from China</li>
                <li>• Products with complex IP or patent concerns</li>
                <li>• Extremely low-value, low-margin commodity items</li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">If you are unsure whether we can help with your product, please contact us to discuss.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container text-center">
          <h2 className="section-heading mb-4">Looking for a specific product?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">Tell us what you need to source. We will assess feasibility and provide supplier options within a few business days.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg">Submit Your Sourcing Request</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
