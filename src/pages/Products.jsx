import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Cpu, 
  Shirt, 
  Home, 
  Wrench, 
  Package, 
  Gamepad2, 
  Heart, 
  Dumbbell,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
  }
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Section = ({ children, className = '' }) => (
  <section className={`py-16 md:py-20 ${className}`}>
    {children}
  </section>
)

const SectionTitle = ({ subtitle, title, description, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
    {subtitle && <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg">{description}</p>}
  </div>
)

const productCategories = [
  {
    icon: Cpu,
    name: 'Electronics',
    description: 'Consumer electronics, gadgets, smart devices, and technology products.',
    products: [
      'Smartphones & Tablets',
      'Laptops & Computers',
      'Smart Home Devices',
      'Wearable Technology',
      'Audio Equipment',
      'Cameras & Drones',
      'Electronic Accessories',
      'LED Lighting',
    ],
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Clothing, fabrics, fashion accessories, and textile products.',
    products: [
      'Casual Wear',
      'Sportswear & Activewear',
      'Formal Attire',
      'Kids Clothing',
      'Fabric & Materials',
      'Fashion Accessories',
      'Bags & Luggage',
      'Shoes & Footwear',
    ],
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor living products.',
    products: [
      'Furniture',
      'Home Decor',
      'Kitchenware',
      'Bedding & Linens',
      'Outdoor Furniture',
      'Garden Tools',
      'Storage Solutions',
      'Smart Home Fixtures',
    ],
  },
  {
    icon: Wrench,
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, machinery parts, and tools.',
    products: [
      'Industrial Machinery',
      'Power Tools',
      'Machine Parts',
      'Safety Equipment',
      'Agricultural Machinery',
      'Construction Equipment',
      'Industrial Sensors',
      'Automation Components',
    ],
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Custom packaging solutions and printed materials.',
    products: [
      'Cardboard Boxes',
      'Paper Bags',
      'Plastic Packaging',
      'Custom Labels',
      'Gift Boxes',
      'Food Packaging',
      'Cosmetic Packaging',
      'Printing Services',
    ],
  },
  {
    icon: Gamepad2,
    name: 'Toys & Games',
    description: 'Educational toys, games, puzzles, and entertainment products.',
    products: [
      'Educational Toys',
      'Board Games',
      'Puzzles',
      'Action Figures',
      'Building Blocks',
      'Electronic Toys',
      'Outdoor Play Equipment',
      'Party Supplies',
    ],
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Cosmetics, personal care, wellness, and beauty products.',
    products: [
      'Skincare Products',
      'Makeup & Cosmetics',
      'Hair Care',
      'Body Care',
      'Health Supplements',
      'Medical Devices',
      'Fitness Equipment',
      'Wellness Products',
    ],
  },
  {
    icon: Dumbbell,
    name: 'Sports & Outdoors',
    description: 'Fitness equipment, camping gear, and sporting goods.',
    products: [
      'Fitness Equipment',
      'Camping Gear',
      'Hiking Equipment',
      'Water Sports',
      'Cycling Products',
      'Winter Sports',
      'Team Sports',
      'Outdoor Accessories',
    ],
  },
]

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products We Source | China Sourcing Agent | SSourcing China</title>
        <meta name="description" content="Explore the wide range of products we source from China. From electronics to textiles, machinery to packaging - find reliable manufacturers." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-xl text-slate-200">
              Wide range of product categories from verified Chinese manufacturers. Find the right supplier for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Our Expertise" 
            title="Product Categories" 
            description="We source across diverse industries with proven supplier networks."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                      <p className="text-slate-600 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other Categories */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Not Found What You're Looking For?" 
            title="Other Categories" 
            description="We have supplier networks beyond these categories. Contact us to discuss your specific needs."
          />
          <div className="text-center">
            <p className="text-slate-600 mb-8">
              Our team has extensive networks across various industries in China. Even if your product category isn't listed, we can help you find reliable suppliers.
            </p>
            <Link to="/contact">
              <Button className="text-lg px-10 py-4">
                Discuss Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Tell us what you need, and we'll find the right suppliers for you.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-10 py-4 bg-white text-red-600 hover:bg-slate-100">
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default Products