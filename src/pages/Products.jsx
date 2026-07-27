import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    title: 'Consumer Electronics',
    description: 'Audio devices, wearables, smart home products, chargers, cables, and consumer electronics accessories.',
    examples: ['Wireless earbuds', 'Smart watches', 'Bluetooth speakers', 'USB-C accessories'],
  },
  {
    title: 'Home and Kitchen',
    description: 'Kitchen tools, storage organizers, home decor, bedding, and small appliances for everyday use.',
    examples: ['Food storage containers', 'Kitchen utensils', 'Bedding sets', 'Small appliances'],
  },
  {
    title: 'Industrial and Hardware',
    description: 'Fasteners, fittings, tools, hardware components, and industrial supplies for manufacturing and construction.',
    examples: ['Bolts and nuts', 'Pipe fittings', 'Hand tools', 'Hardware components'],
  },
  {
    title: 'Packaging and Labels',
    description: 'Custom packaging, boxes, labels, pouches, and shipping materials tailored to product and market requirements.',
    examples: ['Custom boxes', 'Printed labels', 'Stand-up pouches', 'Protective packaging'],
  },
  {
    title: 'Textiles and Apparel',
    description: 'Casual wear, home textiles, bags, and accessories with attention to fabric quality, sizing, and compliance.',
    examples: ['T-shirts and basics', 'Home textiles', 'Bags and backpacks', 'Fashion accessories'],
  },
  {
    title: 'Beauty and Personal Care',
    description: 'Skincare, haircare, cosmetics, and personal care devices with attention to formulas, packaging, and regulations.',
    examples: ['Facial cleansers', 'Hair tools', 'Cosmetic packaging', 'Personal care devices'],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Products We Source</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            We work across a wide range of product categories. If your product is not listed, tell us what you need and we will confirm feasibility.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{category.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Example items</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        <CheckCircle2 className="h-3 w-3 text-slate-900" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Looking for a specific product?</h2>
            <p className="mt-2 text-slate-600">Share your product specifications and we will confirm sourcing feasibility and provide a practical quote.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View case studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
