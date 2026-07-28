import { ArrowRight, Cpu, Shirt, Wrench, Sofa, Box, Gamepad2, Home, Car, Lightbulb, Package } from 'lucide-react';

const productCategories = [
  {
    icon: Cpu,
    name: 'Electronics',
    description: 'Consumer electronics, electronic components, gadgets, and smart devices',
    examples: ['Smartphones & Tablets', 'LED Lighting', 'Power Banks', 'Cables & Chargers', 'Sensors', 'PC Components'],
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Garments, fabrics, fashion accessories, and home textiles',
    examples: ['Casual Wear', 'Sportswear', 'Fabrics & Materials', 'Bags & Backpacks', 'Shoes & Footwear', 'Accessories'],
  },
  {
    icon: Wrench,
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, machinery parts, tools, and hardware',
    examples: ['Power Tools', 'Machinery Parts', 'Hardware & Fasteners', 'Industrial Equipment', 'Agricultural Machinery', 'Packaging Machinery'],
  },
  {
    icon: Sofa,
    name: 'Furniture',
    description: 'Home furniture, office furniture, and outdoor furniture',
    examples: ['Living Room Furniture', 'Office Chairs & Desks', 'Bedroom Furniture', 'Outdoor Furniture', 'Kitchen Cabinets', 'Storage Solutions'],
  },
  {
    icon: Box,
    name: 'Packaging',
    description: 'Custom packaging solutions, boxes, bags, and labels',
    examples: ['Cardboard Boxes', 'Paper Bags', 'Plastic Packaging', 'Labels & Stickers', 'Gift Boxes', 'Food Packaging'],
  },
  {
    icon: Gamepad2,
    name: 'Toys & Games',
    description: 'Plastic toys, electronic toys, educational toys, and games',
    examples: ['Action Figures', 'Educational Toys', 'Board Games', 'Electronic Toys', 'Plush Toys', 'Outdoor Play Equipment'],
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Home decor, kitchenware, garden items, and daily use products',
    examples: ['Kitchenware', 'Home Decor', 'Garden Tools', 'Bedding & Linens', 'Bathroom Accessories', 'Cleaning Supplies'],
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'Auto parts, accessories, and vehicle components',
    examples: ['Car Electronics', 'Interior Accessories', 'Exterior Parts', 'Engine Components', 'Tires & Wheels', 'Car Care Products'],
  },
  {
    icon: Lightbulb,
    name: 'Lights & Lighting',
    description: 'All types of lighting products and components',
    examples: ['LED Lights', 'Smart Lighting', 'Commercial Lighting', 'Light Fixtures', 'LED Strips', 'Bulbs & Tubes'],
  },
  {
    icon: Package,
    name: 'Health & Beauty',
    description: 'Beauty products, personal care items, and health accessories',
    examples: ['Skincare Products', 'Hair Care', 'Makeup Tools', 'Health Supplements', 'Fitness Equipment', 'Massage Devices'],
  },
  {
    icon: Box,
    name: 'Sports & Outdoors',
    description: 'Sports equipment, outdoor gear, and fitness products',
    examples: ['Fitness Equipment', 'Camping Gear', 'Water Sports', 'Cycling Accessories', 'Outdoor Furniture', 'Sports Apparel'],
  },
  {
    icon: Cpu,
    name: 'Medical Devices',
    description: 'Medical supplies, equipment, and health-related products',
    examples: ['Medical Instruments', 'Hospital Furniture', 'Diagnostic Equipment', 'Protective Equipment', 'Rehabilitation Devices', 'Healthcare Supplies'],
  },
];

const capabilities = [
  {
    title: 'OEM/ODM Manufacturing',
    description: 'We can connect you with factories that offer original equipment manufacturing and design services.',
  },
  {
    title: 'Custom Specifications',
    description: 'Factories can produce according to your exact specifications, drawings, and technical requirements.',
  },
  {
    title: 'Certification Support',
    description: 'We help navigate certifications required for your market (CE, FCC, RoHS, ISO, etc.).',
  },
  {
    title: 'Sample Development',
    description: 'Quick sample development to test your product ideas before mass production.',
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive quality control processes to ensure consistent product quality.',
  },
  {
    title: 'Flexible Quantities',
    description: 'From small test orders to large-scale production, we find factories that match your volume needs.',
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-xl text-white/80">
              We have established relationships with verified manufacturers across a wide range of product categories. Find the right supplier for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle mx-auto">
              Explore the industries we serve
            </p>
          </div>
          
          <div className="grid-3">
            {productCategories.map((category, index) => (
              <div key={index} className="card group hover:border-[var(--accent)] border-2 border-transparent">
                <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{category.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.slice(0, 3).map((example, idx) => (
                    <span key={idx} className="badge">{example}</span>
                  ))}
                  {category.examples.length > 3 && (
                    <span className="badge">+{category.examples.length - 3} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Sourcing Capabilities</h2>
            <p className="section-subtitle mx-auto">
              Beyond basic sourcing, we offer these capabilities to support your product development
            </p>
          </div>
          
          <div className="grid-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold mb-3 text-[var(--primary)]">{capability.title}</h3>
                <p className="text-[var(--text-secondary)]">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="card bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Product Category?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We have connections across many industries. Contact us with your specific requirements and we'll find the right suppliers for you.
            </p>
            <a href="/contact" className="btn btn-white text-lg px-8 py-4">
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;