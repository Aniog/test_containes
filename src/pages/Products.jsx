import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Package, Building2, Truck, BarChart3, Cpu, Wrench, Shirt, Home, Heart, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, electronic components, sensors, wiring harnesses, and industrial control systems.',
    imgId: 'products-electronics-1a2b3c',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment & Machinery',
    desc: 'Manufacturing equipment, machine tools, automation systems, pumps, valves, and industrial spare parts.',
    imgId: 'products-industrial-2b3c4d',
  },
  {
    icon: Truck,
    title: 'Auto Parts & Accessories',
    desc: 'Vehicle components, engine parts, aftermarket accessories, tires, lighting, and automotive electronics.',
    imgId: 'products-autoparts-3c4d5e',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, technical textiles, uniforms, footwear, and fashion accessories.',
    imgId: 'products-textiles-4d5e6f',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, labels, stickers, corrugated boxes, flexible packaging, and printed materials.',
    imgId: 'products-packaging-5e6f7a',
  },
  {
    icon: Building2,
    title: 'Building & Construction Materials',
    desc: 'Hardware, fittings, fixtures, piping, valves, electrical supplies, and construction consumables.',
    imgId: 'products-building-6f7a8b',
  },
  {
    icon: Home,
    title: 'Home & Lifestyle Products',
    desc: 'Furniture, kitchenware, home decor, tableware, storage solutions, and household items.',
    imgId: 'products-home-7a8b9c',
  },
  {
    icon: Heart,
    title: 'Medical & Safety Equipment',
    desc: 'PPE, medical devices, laboratory equipment, diagnostic tools, and occupational safety products.',
    imgId: 'products-medical-8b9c1d',
  },
  {
    icon: BarChart3,
    title: 'Promotional & Corporate Gifts',
    desc: 'Custom promotional items, corporate gifts, branded merchandise, and event giveaways.',
    imgId: 'products-promo-9c1d2e',
  },
  {
    icon: ShieldCheck,
    title: 'Raw Materials & Chemicals',
    desc: 'Industrial chemicals, raw materials, compounds, additives, and specialty ingredients.',
    imgId: 'products-raw-1d2e3f',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We source across a wide range of industries. If you can specify it, we can find a reliable supplier for it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-title-${idx}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span id={`cat-title-${idx}`} className="hidden">{cat.title}</span>
                <div className="p-6">
                  <cat.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Product Not Listed?</h2>
          <p className="text-lg text-gray-600 mb-8">We source across virtually all categories. Contact us with your requirements and we will find the right supplier.</p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Submit Your Product Inquiry
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}