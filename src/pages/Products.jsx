import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, Factory, Truck, ClipboardCheck } from 'lucide-react';
import { products } from '@/lib/data';

const productDetails = {
  'electronics': {
    description: 'We work with certified manufacturers for a wide range of electronic products and components.',
    items: ['Consumer electronics', 'PCBs and components', 'LED products', 'Sensors and controllers', 'Power supplies', 'Cables and connectors'],
    minOrder: '500-1,000 units',
    timeline: '4-8 weeks'
  },
  'machinery': {
    description: 'Access to industrial machinery manufacturers with export experience.',
    items: ['Industrial equipment', 'Agricultural machinery', 'Mechanical parts', 'Industrial tools', 'Factory equipment', 'Custom machinery'],
    minOrder: '10-100 units',
    timeline: '6-12 weeks'
  },
  'textiles': {
    description: 'Established relationships with factories specializing in fabrics and garments.',
    items: ['Fabrics and materials', 'Garments and apparel', 'Home textiles', 'Sportswear', 'Workwear', 'Accessories'],
    minOrder: '500-2,000 units',
    timeline: '3-6 weeks'
  },
  'home-goods': {
    description: 'Wide network of home product manufacturers with competitive pricing.',
    items: ['Furniture', 'Home decor', 'Kitchenware', 'Bathroom products', 'Outdoor furniture', 'Storage solutions'],
    minOrder: '200-500 units',
    timeline: '4-8 weeks'
  },
  'packaging': {
    description: 'Sustainable packaging solutions from verified suppliers.',
    items: ['Corrugated boxes', 'Paper packaging', 'Plastic containers', 'Eco-friendly options', 'Labels and tags', 'Custom printing'],
    minOrder: '1,000-5,000 units',
    timeline: '2-4 weeks'
  },
  'promotional': {
    description: 'Quality promotional products with custom branding capabilities.',
    items: ['Branded merchandise', 'Trade show items', 'Corporate gifts', 'Apparel accessories', 'Drinkware', 'Stationery'],
    minOrder: '200-1,000 units',
    timeline: '3-5 weeks'
  },
  'toys': {
    description: 'Safety-compliant toy manufacturers with international certifications.',
    items: ['Children toys', 'Board games', 'Educational products', 'Puzzles', 'Plush toys', 'Electronic toys'],
    minOrder: '500-2,000 units',
    timeline: '4-8 weeks'
  },
  'sports': {
    description: 'Sports and fitness equipment from specialized manufacturers.',
    items: ['Fitness equipment', 'Sports apparel', 'Outdoor gear', 'Camping equipment', 'Cycling products', 'Water sports gear'],
    minOrder: '200-1,000 units',
    timeline: '4-8 weeks'
  }
};

const capabilities = [
  {
    icon: Search,
    title: 'Supplier Network',
    description: 'Access to 50+ verified factories across all major product categories.'
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'Every supplier undergoes rigorous verification including on-site audits.'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Comprehensive QC at every stage from samples to shipment.'
  },
  {
    icon: Truck,
    title: 'Logistics Support',
    description: 'Complete shipping coordination to destinations worldwide.'
  }
];

const Products = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4F7C] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We have established supplier networks across diverse product categories. Whether you're looking for electronics, textiles, machinery, or consumer goods, we can help.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
              Request Product Sourcing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Sourcing Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const IconComponent = cap.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-[#1E3A5F]" />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-600">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle">
              Explore the product categories we specialize in sourcing.
            </p>
          </div>
          <div className="space-y-8">
            {products.map((product, index) => {
              const details = productDetails[product.id];
              const isEven = index % 2 === 1;
              
              return (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    <div className={`p-8 ${isEven ? '' : 'lg:order-2'}`}>
                      <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{details.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Products Include:</h4>
                        <div className="flex flex-wrap gap-2">
                          {details.items.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-1">Min Order</div>
                          <div className="font-semibold text-[#1E3A5F]">{details.minOrder}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-1">Timeline</div>
                          <div className="font-semibold text-[#1E3A5F]">{details.timeline}</div>
                        </div>
                      </div>
                      
                      <Link to="/contact" className="inline-flex items-center text-[#0891B2] font-medium hover:underline">
                        Request Quote for {product.name}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                    <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center h-48 lg:h-auto ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="text-8xl opacity-30">
                        {product.id === 'electronics' && '📱'}
                        {product.id === 'machinery' && '⚙️'}
                        {product.id === 'textiles' && '👕'}
                        {product.id === 'home-goods' && '🏠'}
                        {product.id === 'packaging' && '📦'}
                        {product.id === 'promotional' && '🎁'}
                        {product.id === 'toys' && '🧸'}
                        {product.id === 'sports' && '⚽'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="section bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't See Your Product?</h2>
            <p className="text-lg text-gray-300 mb-8">
              We source a wide variety of products beyond these categories. Contact us with your specific requirements and we'll find the right suppliers for you.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
              Tell Us What You Need
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
