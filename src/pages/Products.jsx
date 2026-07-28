import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      description: 'Consumer electronics, electronic components, cables, and related accessories.',
      examples: ['Power banks and chargers', 'LED lighting products', 'Cables and connectors', 'Small appliances', 'Audio equipment'],
    },
    {
      name: 'Home & Garden',
      description: 'Household goods, furniture, kitchenware, and outdoor products.',
      examples: ['Kitchen tools and cookware', 'Home textiles and bedding', 'Garden tools and equipment', 'Storage and organization', 'Decorative items'],
    },
    {
      name: 'Apparel & Textiles',
      description: 'Clothing, fabrics, and textile products for various markets.',
      examples: ['Casual and workwear', 'Home textiles', 'Bags and accessories', 'Uniforms and workwear', 'Fabric and materials'],
    },
    {
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and equipment for industrial and commercial use.',
      examples: ['Hand tools and power tools', 'Material handling equipment', 'Safety equipment', 'Workshop supplies', 'Maintenance products'],
    },
    {
      name: 'Consumer Goods',
      description: 'Everyday consumer products across multiple retail categories.',
      examples: ['Personal care items', 'Pet products', 'Toys and games', 'Sports and fitness', 'Seasonal merchandise'],
    },
    {
      name: 'Automotive Parts',
      description: 'Aftermarket parts, accessories, and components for vehicles.',
      examples: ['Interior accessories', 'Exterior trim and parts', 'Maintenance supplies', 'Tools and equipment', 'Electrical components'],
    },
    {
      name: 'Medical & Health',
      description: 'Medical supplies, health products, and related equipment.',
      examples: ['Disposable medical supplies', 'Personal protective equipment', 'Health monitoring devices', 'Rehabilitation products', 'Wellness items'],
    },
    {
      name: 'Packaging & Materials',
      description: 'Packaging solutions and raw materials for manufacturing.',
      examples: ['Custom packaging', 'Shipping supplies', 'Industrial materials', 'Labels and tags', 'Protective packaging'],
    },
  ];

  const capabilities = [
    'Custom manufacturing and OEM production',
    'Private label development',
    'Product modification and customization',
    'Packaging design and sourcing',
    'Regulatory compliance guidance',
    'Multi-supplier consolidation',
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-[#0A2540] mb-4">Products We Source</h1>
            <p className="text-lg text-[#4B5563] mb-6">
              We work across a broad range of product categories. Our experience spans consumer goods, industrial products, and specialized equipment.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{category.name}</h3>
                <p className="text-sm text-[#4B5563] mb-4">{category.description}</p>
                <div className="space-y-1.5">
                  {category.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#1F2937]">
                      <Check className="w-4 h-4 text-[#059669] flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-8 text-center">Sourcing Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg border border-gray-200">
                <Check className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#1F2937]">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-6 text-center">Our Approach to Product Sourcing</h2>
          <div className="prose prose-sm max-w-none text-[#4B5563]">
            <p className="mb-4">
              We begin by understanding your specific requirements: technical specifications, quality standards, target pricing, and volume expectations. This information guides our supplier search and qualification process.
            </p>
            <p className="mb-4">
              For each category, we maintain relationships with suppliers across different regions and capability levels. This allows us to present options that match your priorities, whether that is lowest cost, highest quality, or fastest delivery.
            </p>
            <p>
              We do not maintain exclusive supplier relationships. Our recommendations are based on which supplier best meets your stated requirements for the specific project.
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-[#4B5563] mb-4">Have a product in mind that is not listed?</p>
            <Link to="/contact" className="text-[#1E40AF] font-medium text-sm hover:underline">
              Contact us to discuss your requirements →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2540] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to source a product?</h2>
          <p className="text-gray-300 mb-6">Tell us what you need and we'll provide an initial assessment.</p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default Products;
