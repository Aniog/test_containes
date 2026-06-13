import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu, Shirt, Factory, Box, Sofa, Palette, Watch, Plug, FlaskConical,
  ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Technology',
    desc: 'Consumer electronics, gadgets, mobile accessories, charging cables, Bluetooth devices, smart home products, and IoT devices.',
    products: ['Bluetooth Speakers', 'USB Cables & Chargers', 'Smart Watch Bands', 'LED Lighting', 'Power Banks', 'Earbuds & Headphones'],
    hubs: ['Shenzhen', 'Dongguan'],
    imgQuery: 'electronics manufacturing factory china',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    desc: 'Clothing, bags, fabrics, footwear, and fashion accessories sourced from China major garment manufacturing regions.',
    products: ['T-Shirts & Polo Shirts', 'Workwear & Uniforms', 'Bags & Backpacks', 'Sportswear', 'Shoes & Footwear', 'Scarves & Accessories'],
    hubs: ['Guangzhou', 'Hangzhou'],
    imgQuery: 'textile factory clothing manufacturing china',
  },
  {
    icon: Factory,
    name: 'Machinery & Industrial Parts',
    desc: 'Industrial equipment, automotive parts, hardware, tools, and precision components for B2B buyers.',
    products: ['Auto Parts & Accessories', 'Power Tools', 'Metal Hardware', 'CNC Machined Parts', 'Hydraulic Components', 'Conveyor Systems'],
    hubs: ['Ningbo', 'Wuxi'],
    imgQuery: 'machinery factory industrial parts china',
  },
  {
    icon: Box,
    name: 'Packaging Materials',
    desc: 'Custom packaging solutions including boxes, bags, bottles, labels, and branded packaging for consumer products.',
    products: ['Cardboard Boxes', 'Plastic Bottles & Jars', 'Paper Bags & Pouches', 'Labels & Stickers', 'Foam Inserts', 'Retail Display Packaging'],
    hubs: ['Shenzhen', 'Wenzhou'],
    imgQuery: 'packaging factory box manufacturing china',
  },
  {
    icon: Sofa,
    name: 'Home, Garden & Furniture',
    desc: 'Furniture, home decor, kitchenware, lighting, garden tools, and outdoor products from furniture manufacturing clusters.',
    products: ['Metal & Wood Furniture', 'Kitchenware & Cookware', 'Garden Tools', 'Home Decor Items', 'Bathroom Accessories', 'Outdoor Furniture'],
    hubs: ['Foshan', 'Ningbo'],
    imgQuery: 'furniture factory home goods manufacturing china',
  },
  {
    icon: Palette,
    name: 'Custom OEM & Private Label',
    desc: 'Full OEM manufacturing services for buyers who need custom-designed products with their own branding and specifications.',
    products: ['Custom Product Design', 'Private Label Manufacturing', 'Branded Packaging', 'Logo Printing & Engraving', 'Product Prototyping', 'Mold Development'],
    hubs: ['Shenzhen', 'Dongguan'],
    imgQuery: 'custom OEM product design factory china',
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of product categories from China top manufacturing hubs. If you do not see your product here, reach out — we probably source it already.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <div key={cat.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={`prod-${i}-img`}
                      data-strk-img={`[prod-${i}-name] [prod-${i}-desc]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <h2 id={`prod-${i}-name`} className="text-2xl sm:text-3xl font-bold text-slate-900">{cat.name}</h2>
                  </div>
                  <p id={`prod-${i}-desc`} className="text-slate-500 leading-relaxed mb-6">{cat.desc}</p>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-slate-700 mb-2.5">Popular products we source:</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.products.map((p) => (
                        <span key={p} className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm font-medium text-slate-700">Key manufacturing hubs:</span>
                    <div className="flex gap-2">
                      {cat.hubs.map((h) => (
                        <span key={h} className="text-xs font-medium px-2.5 py-1 rounded bg-blue-50 text-blue-700">{h}</span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-800 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Source {cat.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Do Not See Your Product?</h2>
          <p className="text-slate-300 mb-8">We source across dozens of product categories. Tell us what you need and we will let you know if we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Request a Product Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
