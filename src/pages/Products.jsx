import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Package, Building2, ClipboardCheck, Ship, Factory, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const productCategories = [
    {
      name: 'Electronics & Components',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Consumer electronics, PCBs, connectors, displays, and electronic components.',
      examples: ['Smartphones & accessories', 'LED displays', 'Circuit boards', 'Sensors', 'Power supplies']
    },
    {
      name: 'Machinery & Equipment',
      icon: <Factory className="w-8 h-8" />,
      description: 'Industrial machinery, agricultural equipment, and manufacturing tools.',
      examples: ['CNC machines', 'Packaging equipment', 'Textile machinery', 'Construction tools', 'Medical devices']
    },
    {
      name: 'Textiles & Garments',
      icon: <ClipboardCheck className="w-8 h-8" />,
      description: 'Apparel, fabrics, home textiles, and fashion accessories.',
      examples: ['Casual wear', 'Sportswear', 'Home linens', 'Industrial fabrics', 'Fashion accessories']
    },
    {
      name: 'Home & Garden',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Home goods, furniture, outdoor equipment, and garden supplies.',
      examples: ['Kitchenware', 'Furniture', 'Lighting', 'Garden tools', 'Pet supplies']
    },
    {
      name: 'Packaging Materials',
      icon: <Ship className="w-8 h-8" />,
      description: 'All types of packaging solutions for various industries.',
      examples: ['Paper packaging', 'Plastic containers', 'Metal cans', 'Glass bottles', 'Eco-friendly options']
    },
    {
      name: 'Industrial Parts',
      icon: <Package className="w-8 h-8" />,
      description: 'Hardware, fasteners, mechanical parts, and industrial components.',
      examples: ['Fasteners', 'Bearings', 'Gears', 'Valves', 'Hydraulic parts']
    }
  ];

  const capabilities = [
    'Factory verification and qualification',
    'Quality inspection at all stages',
    'Custom specification development',
    'Sample coordination and testing',
    'Production monitoring',
    'Shipping and logistics coordination'
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300">
              We have extensive experience sourcing a wide range of products from verified Chinese manufacturers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Product Categories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From electronics to industrial parts, we help you source quality products across diverse categories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{category.name}</h3>
                <p className="text-neutral-600 mb-6">{category.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-700">Common products:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Sourcing Capabilities</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Regardless of the product category, we apply the same rigorous sourcing standards to ensure quality and reliability.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-2xl aspect-square overflow-hidden">
              <div 
                className="w-full h-full"
                data-strk-bg-id="products-sourcing-img"
                data-strk-bg="[products-title]"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
              <h2 id="products-title" className="sr-only">Sourcing Capabilities</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Don't See Your Product?</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              We source products across many categories beyond what's listed here. Contact us with your requirements and we will find suitable suppliers for your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
