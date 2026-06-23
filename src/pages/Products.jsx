import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Cpu, Shirt, Sofa, Wrench, Package, Heart, Gamepad2, Bike } from 'lucide-react';

const productCategories = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    icon: Cpu,
    description: 'Consumer electronics, smart devices, electronic components, and tech accessories from verified manufacturers.',
    products: [
      'Smartphones & Tablets',
      'Laptops & Computers',
      'Audio Equipment',
      'Smart Home Devices',
      'Wearable Technology',
      'Electronic Components',
      'LED Lighting',
      'Power Banks & Chargers',
    ],
    image: 'electronics manufacturing',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: Shirt,
    description: 'Garments, fabrics, and textile products from experienced manufacturers with quality certifications.',
    products: [
      'Casual Wear',
      'Sportswear & Activewear',
      'Formal Attire',
      'Kids Clothing',
      'Fabric & Materials',
      'Home Textiles',
      'Technical Textiles',
      'Fashion Accessories',
    ],
    image: 'textile factory manufacturing',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    icon: Sofa,
    description: 'Modern furniture, home decor, and household items from specialized manufacturers.',
    products: [
      'Living Room Furniture',
      'Bedroom Furniture',
      'Office Furniture',
      'Kitchen & Dining',
      'Home Decor',
      'Bedding & Linens',
      'Curtains & Blinds',
      'Storage Solutions',
    ],
    image: 'furniture factory warehouse',
  },
  {
    id: 'machinery',
    name: 'Machinery & Parts',
    icon: Wrench,
    description: 'Industrial machinery, equipment parts, and mechanical components from certified factories.',
    products: [
      'Industrial Machinery',
      'Agricultural Equipment',
      'Construction Machinery',
      'Automotive Parts',
      'Mechanical Components',
      'Hydraulic Systems',
      'Electrical Parts',
      'Custom Fabrication',
    ],
    image: 'industrial machinery manufacturing',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    icon: Package,
    description: 'Custom packaging solutions, printing services, and promotional materials.',
    products: [
      'Paper Packaging',
      'Plastic Packaging',
      'Corrugated Boxes',
      'Labels & Stickers',
      'Bags & Pouches',
      'Gift Boxes',
      'Printing Services',
      'Custom Displays',
    ],
    image: 'packaging factory production',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    icon: Heart,
    description: 'Cosmetics, personal care products, and health supplements from GMP-certified facilities.',
    products: [
      'Skincare Products',
      'Hair Care Items',
      'Makeup & Cosmetics',
      'Personal Care',
      'Health Supplements',
      'Medical Devices',
      'Fitness Equipment',
      'Wellness Products',
    ],
    image: 'cosmetics manufacturing lab',
  },
  {
    id: 'toys',
    name: 'Toys & Gifts',
    icon: Gamepad2,
    description: 'Toys, games, and promotional gifts from experienced manufacturers meeting international safety standards.',
    products: [
      'Electronic Toys',
      'Educational Toys',
      'Plush Toys',
      'Board Games',
      'Puzzles',
      'Promotional Gifts',
      'Seasonal Items',
      'Craft Products',
    ],
    image: 'toy factory production line',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    icon: Bike,
    description: 'Sports equipment, outdoor gear, and fitness accessories from specialized manufacturers.',
    products: [
      'Fitness Equipment',
      'Camping Gear',
      'Outdoor Furniture',
      'Sports Apparel',
      'Cycling Equipment',
      'Water Sports Gear',
      'Winter Sports',
      'Hunting & Fishing',
    ],
    image: 'sports equipment factory',
  },
];

const capabilities = [
  'Factory verification and audit',
  'Quality control inspections',
  'Sample development',
  'Custom manufacturing',
  'Private labeling',
  'Packaging design',
  'Shipping coordination',
  'Compliance certification',
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] py-20 lg:py-28">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Products We Source
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              We have expertise sourcing a wide range of products from verified 
              Chinese manufacturers across multiple industries.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-2 bg-[#F97316]" />
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-7 h-7 text-[#1E3A5F]" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {category.name}
                      </h2>
                      <p className="mt-2 text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                      Products We Source
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.products.map((product) => (
                        <div key={product} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="ml-2 text-sm text-gray-600">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Sourcing Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Beyond finding suppliers, we provide comprehensive support 
              to ensure successful sourcing and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div 
                key={capability}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-[#1E3A5F]/5 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-[#F97316] mx-auto" />
                <p className="mt-3 font-medium text-gray-900">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#1E3A5F]">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Don't See Your Product Category?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            We have experience sourcing across many industries. Contact us 
            with your specific requirements and we'll find the right suppliers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get a Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;