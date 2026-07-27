import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Home, 
  Shirt, 
  Wrench, 
  Package, 
  Car, 
  Heart, 
  Dumbbell,
  Building,
  Box,
  Sparkles,
  Leaf,
  Zap
} from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      icon: Cpu,
      name: 'Electronics & Gadgets',
      description: 'Consumer electronics, smart devices, circuit boards, and electronic components.',
      products: [
        'Smartphones & Tablets',
        'Laptops & Computers',
        'Smart Home Devices',
        'Wearable Technology',
        'Audio Equipment',
        'Electronic Components',
        'LED Lighting',
        'Power Banks & Batteries'
      ]
    },
    {
      icon: Home,
      name: 'Home & Garden',
      description: 'Furniture, decor, kitchenware, and outdoor living products.',
      products: [
        'Furniture (Indoor/Outdoor)',
        'Kitchenware & Cookware',
        'Home Decor',
        'Bedding & Textiles',
        'Garden Tools & Equipment',
        'Storage Solutions',
        'Lighting Fixtures',
        'Home Organization'
      ]
    },
    {
      icon: Shirt,
      name: 'Apparel & Textiles',
      description: 'Clothing, fabrics, and fashion accessories for all markets.',
      products: [
        'Casual Wear',
        'Sportswear & Activewear',
        'Formal Attire',
        'Children\'s Clothing',
        'Fabric & Raw Materials',
        'Fashion Accessories',
        'Footwear',
        'Uniforms & Workwear'
      ]
    },
    {
      icon: Wrench,
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and industrial supplies for B2B buyers.',
      products: [
        'Power Tools',
        'Industrial Machinery',
        'Safety Equipment',
        'Measuring Instruments',
        'Hydraulic Components',
        'Electrical Equipment',
        'Welding Supplies',
        'Industrial Fasteners'
      ]
    },
    {
      icon: Package,
      name: 'Packaging Materials',
      description: 'Custom packaging solutions for retail and shipping needs.',
      products: [
        'Cardboard Boxes',
        'Plastic Packaging',
        'Paper Bags',
        'Gift Boxes',
        'Shipping Supplies',
        'Labels & Stickers',
        'Blister Packaging',
        'Eco-friendly Packaging'
      ]
    },
    {
      icon: Car,
      name: 'Automotive Parts',
      description: 'Vehicle components, accessories, and aftermarket parts.',
      products: [
        'Auto Body Parts',
        'Engine Components',
        'Electrical Systems',
        'Interior Accessories',
        'Tires & Wheels',
        'Car Electronics',
        'Maintenance Products',
        'Motorcycle Parts'
      ]
    },
    {
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Personal care products, cosmetics, and wellness items.',
      products: [
        'Skincare Products',
        'Hair Care Items',
        'Makeup & Cosmetics',
        'Personal Care Appliances',
        'Health Supplements',
        'Medical Supplies',
        'Fitness Equipment',
        'Wellness Products'
      ]
    },
    {
      icon: Dumbbell,
      name: 'Sports & Outdoors',
      description: 'Fitness equipment, outdoor gear, and recreational products.',
      products: [
        'Fitness Equipment',
        'Camping & Hiking Gear',
        'Water Sports Equipment',
        'Cycling Accessories',
        'Outdoor Furniture',
        'Sports Apparel',
        'Travel Accessories',
        'Recreational Products'
      ]
    },
    {
      icon: Building,
      name: 'Building Materials',
      description: 'Construction supplies, hardware, and renovation materials.',
      products: [
        'Construction Hardware',
        'Plumbing Supplies',
        'Electrical Fixtures',
        'Flooring Materials',
        'Roofing Products',
        'Insulation Materials',
        'Paint & Coatings',
        'Tools & Hardware'
      ]
    },
    {
      icon: Box,
      name: 'Toys & Gifts',
      description: 'Children\'s toys, promotional items, and gift products.',
      products: [
        'Educational Toys',
        'Electronic Toys',
        'Plush Toys',
        'Board Games',
        'Promotional Gifts',
        'Seasonal Decorations',
        'Craft Supplies',
        'Party Supplies'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Custom Manufacturing',
      description: 'We can help you find factories that offer OEM (Original Equipment Manufacturing) and ODM (Original Design Manufacturing) services for custom products.'
    },
    {
      title: 'Private Label',
      description: 'We assist with private labeling, including custom packaging, branding, and compliance with destination country regulations.'
    },
    {
      title: 'Quality Certification',
      description: 'We help obtain necessary certifications including CE, FCC, RoHS, UL, and country-specific standards for your products.'
    },
    {
      title: 'Product Development',
      description: 'From concept to production, we can connect you with factories that offer product development support and prototyping services.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Products We Source
            </h1>
            <p className="text-xl text-gray-200">
              We have experience sourcing a wide range of products from China. If you don't see your product category, just ask - we can likely help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{category.name}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.products.slice(0, 4).map((product, idx) => (
                        <span key={idx} className="text-xs bg-[var(--bg-secondary)] px-3 py-1 rounded-full">
                          {product}
                        </span>
                      ))}
                      {category.products.length > 4 && (
                        <span className="text-xs bg-[var(--secondary)]/10 text-[var(--secondary)] px-3 py-1 rounded-full">
                          +{category.products.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Sourcing Capabilities</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Beyond finding suppliers, we offer additional services to support your product needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="card flex items-start gap-4">
                <CheckCircle className="text-[var(--accent)] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="mb-2">{cap.title}</h3>
                  <p className="text-[var(--text-secondary)]">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">How Product Sourcing Works</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Whether you're looking for an existing product or need custom manufacturing, our process ensures quality and reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-2">Tell Us What You Need</h3>
              <p className="text-sm text-[var(--text-secondary)]">Share product specifications, target price, quantity, and any special requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-2">We Find & Verify</h3>
              <p className="text-sm text-[var(--text-secondary)]">We identify suitable factories, verify credentials, and present you with options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-2">We Manage Production</h3>
              <p className="text-sm text-[var(--text-secondary)]">We monitor production, conduct inspections, and coordinate shipping to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="bg-[var(--primary)] rounded-2xl p-12 text-center">
            <h2 className="text-white mb-4">Don't See Your Product?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We have connections across many industries. Contact us to discuss your specific sourcing needs.
            </p>
            <Link to="/contact" className="btn bg-[var(--secondary)] text-white hover:bg-[var(--secondary-hover)] inline-flex items-center gap-2">
              Tell Us About Your Product <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;