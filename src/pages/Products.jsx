import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Shirt, Wrench, Sofa, Package, Heart, Gamepad2, Car } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Cpu,
      name: 'Electronics',
      description: 'Consumer electronics, components, gadgets, and smart devices',
      products: [
        'Smartphones and tablets',
        'Consumer electronics',
        'Electronic components',
        'LED lighting',
        'Power banks and batteries',
        'Audio and video equipment',
      ],
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, accessories, and fashion items',
      products: [
        'Casual and formal wear',
        'Sports and outdoor apparel',
        'Fabrics and textiles',
        'Accessories (bags, hats, belts)',
        'Custom manufacturing',
        'Private label production',
      ],
    },
    {
      icon: Wrench,
      name: 'Machinery',
      description: 'Industrial equipment, parts, tools, and mechanical components',
      products: [
        'Industrial machinery',
        'Power tools',
        'Mechanical parts',
        'Agricultural equipment',
        'Construction tools',
        'OEM manufacturing',
      ],
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Home furniture, office furniture, and outdoor furniture',
      products: [
        'Living room furniture',
        'Office furniture',
        'Outdoor furniture',
        'Kitchen cabinets',
        'Custom furniture',
        'Furniture components',
      ],
    },
    {
      icon: Package,
      name: 'Packaging',
      description: 'Boxes, labels, custom packaging, and printing solutions',
      products: [
        'Cardboard boxes',
        'Paper bags',
        'Labels and stickers',
        'Custom packaging',
        'Gift boxes',
        'Eco-friendly packaging',
      ],
    },
    {
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Cosmetics, personal care, wellness, and healthcare products',
      products: [
        'Skincare products',
        'Hair care products',
        'Makeup and cosmetics',
        'Personal care items',
        'Health supplements',
        'Wellness products',
      ],
    },
    {
      icon: Gamepad2,
      name: 'Toys & Games',
      description: 'Educational toys, games, puzzles, and entertainment products',
      products: [
        'Educational toys',
        'Board games',
        'Electronic toys',
        'Puzzles and brain teasers',
        'Outdoor play equipment',
        'Party supplies',
      ],
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Parts, accessories, components, and vehicle accessories',
      products: [
        'Auto parts',
        'Car accessories',
        'Electronics for vehicles',
        'Tools and equipment',
        'Interior accessories',
        'Performance parts',
      ],
    },
  ];

  const capabilities = [
    'OEM (Original Equipment Manufacturer)',
    'ODM (Original Design Manufacturer)',
    'Custom specifications',
    'Private label production',
    'Small batch production',
    'Large scale manufacturing',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Products We Source</h1>
            <p className="text-xl text-white/90">
              We have expertise across a wide range of product categories, connecting you with verified manufacturers in China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h2 className="text-xl mb-2">{category.name}</h2>
                      <p className="text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-[var(--border)] pt-4 mt-4">
                    <h3 className="text-sm font-semibold mb-3">Common Products:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, idx) => (
                        <span key={idx} className="text-xs bg-[var(--background)] px-3 py-1 rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Manufacturing Capabilities</h2>
            <p className="max-w-2xl mx-auto">
              We work with factories that offer various manufacturing options to meet your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-[var(--background)] rounded-lg">
                <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0" />
                <span className="text-sm font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Don't See Your Product Category?</h2>
            <p className="text-white/90 mb-8 text-lg">
              We have a broad network of suppliers and can source products across many categories. Contact us to discuss your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;