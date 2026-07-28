import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);
  const categories = [
    {
      name: 'Electronics & Components',
      examples: ['LED lighting and fixtures', 'Power supplies and adapters', 'PCB assemblies', 'Consumer electronics', 'Cables and connectors'],
      industries: 'Retail, OEM, Distribution',
    },
    {
      name: 'Mechanical Parts & Assemblies',
      examples: ['Precision machined components', 'Sheet metal fabrication', 'Castings and forgings', 'Fasteners and hardware', 'Custom assemblies'],
      industries: 'Industrial, Automotive, Equipment',
    },
    {
      name: 'Consumer Goods',
      examples: ['Kitchenware and housewares', 'Home organization products', 'Personal care items', 'Pet products', 'Seasonal merchandise'],
      industries: 'Retail, E-commerce, Wholesale',
    },
    {
      name: 'Home & Garden',
      examples: ['Outdoor furniture', 'Garden tools and equipment', 'Home textiles', 'Decorative items', 'Storage solutions'],
      industries: 'Retail, Home Improvement, E-commerce',
    },
    {
      name: 'Industrial Equipment',
      examples: ['Material handling equipment', 'Workshop machinery', 'Safety equipment', 'Tools and instruments', 'Maintenance supplies'],
      industries: 'Manufacturing, Construction, Maintenance',
    },
    {
      name: 'Textiles & Apparel',
      examples: ['Workwear and uniforms', 'Home textiles', 'Fashion accessories', 'Technical fabrics', 'Promotional items'],
      industries: 'Retail, Corporate, Promotional',
    },
    {
      name: 'Packaging Materials',
      examples: ['Custom boxes and cartons', 'Protective packaging', 'Retail display packaging', 'Shipping supplies', 'Sustainable packaging'],
      industries: 'Manufacturing, Retail, Logistics',
    },
    {
      name: 'Automotive Components',
      examples: ['Aftermarket parts', 'OEM components', 'Accessories', 'Maintenance items', 'Specialty equipment'],
      industries: 'Automotive, Distribution, Service',
    },
  ];

  const industries = [
    'Retail & E-commerce',
    'Industrial Distribution',
    'Automotive',
    'Construction & Building',
    'Healthcare & Medical',
    'Agriculture & Equipment',
    'Hospitality & Foodservice',
    'Promotional Products',
  ];

  return (
    <div ref={containerRef}>
      <section className="relative text-white py-16 overflow-hidden">
        <div
          data-strk-bg-id="products-hero-bg"
          data-strk-bg="[products-hero-subtitle] [products-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 id="products-hero-title" className="text-4xl font-semibold text-white mb-4">Products We Source</h1>
          <p id="products-hero-subtitle" className="text-lg text-slate-200 max-w-2xl mx-auto">
            We work across diverse product categories. Our experience spans consumer goods, 
            industrial components, and specialized equipment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-brand-navy mb-3">{cat.name}</h2>
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Examples</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {cat.examples.map((ex, j) => (
                      <li key={j}>• {ex}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs text-slate-500">Common industries: {cat.industries}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-brand-navy mb-8 text-center">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white border border-slate-200 px-5 py-2 rounded-full text-sm text-slate-700">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 mb-6">
            We source many specialized and custom products. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact">
            <Button size="lg">Discuss Your Sourcing Needs</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
