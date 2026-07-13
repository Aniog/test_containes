import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/home/InquiryForm';

const allCategories = [
  {
    id: 'electronics',
    category: 'Electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, and electronic accessories.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & connectors', 'Power banks', 'Surveillance cameras'],
    imgId: 'prod-page-electronics-4a2b1c',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    category: 'Furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, soft furnishings, and household products.',
    examples: ['Office chairs & desks', 'Sofas & beds', 'Storage shelving', 'Home décor', 'Kitchen accessories', 'Bathroom fittings'],
    imgId: 'prod-page-furniture-7d3e2f',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    category: 'Apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, fashion accessories, and private label garments.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & accessories', 'Fabrics & yarn', 'Footwear'],
    imgId: 'prod-page-apparel-5f7a3c',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    category: 'Machinery',
    title: 'Industrial Machinery & Tools',
    desc: 'Manufacturing equipment, power tools, hand tools, spare parts, and industrial components.',
    examples: ['CNC machines', 'Power tools', 'Hand tools', 'Hydraulic equipment', 'Spare parts', 'Safety equipment'],
    imgId: 'prod-page-machinery-1b4e9d',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    category: 'Packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, branded packaging, and printed marketing materials.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Blister packaging', 'Gift boxes', 'Printed materials'],
    imgId: 'prod-page-packaging-9e3f7a',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'toys',
    category: 'Toys & Sports',
    title: 'Toys & Sporting Goods',
    desc: 'Children\'s toys, outdoor equipment, fitness gear, hobby products, and recreational items.',
    examples: ['Children\'s toys', 'Outdoor furniture', 'Fitness equipment', 'Bicycles', 'Camping gear', 'Board games'],
    imgId: 'prod-page-toys-2d5c8b',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'health',
    category: 'Health & Beauty',
    title: 'Health & Beauty Products',
    desc: 'Personal care products, cosmetics, medical devices, wellness products, and supplements.',
    examples: ['Skincare products', 'Hair care', 'Medical devices', 'Wellness supplements', 'Massage tools', 'Beauty tools'],
    imgId: 'prod-page-health-6a1b4e',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'automotive',
    category: 'Automotive',
    title: 'Automotive Parts & Accessories',
    desc: 'Car parts, accessories, motorcycle components, and vehicle maintenance products.',
    examples: ['Car accessories', 'Spare parts', 'Motorcycle parts', 'Tires & wheels', 'Car care products', 'EV components'],
    imgId: 'prod-page-auto-3c7f2a',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    id: 'construction',
    category: 'Construction',
    title: 'Construction & Building Materials',
    desc: 'Building materials, hardware, flooring, tiles, and construction equipment.',
    examples: ['Flooring & tiles', 'Hardware & fasteners', 'Pipes & fittings', 'Insulation materials', 'Doors & windows', 'Safety equipment'],
    imgId: 'prod-page-construction-8b2e5f',
    titleId: 'prod-page-construction-title',
    descId: 'prod-page-construction-desc',
  },
];

const categoryFilters = ['All', 'Electronics', 'Furniture', 'Apparel', 'Machinery', 'Packaging', 'Toys & Sports', 'Health & Beauty', 'Automotive', 'Construction'];

export default function Products() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allCategories
    : allCategories.filter((c) => c.category === activeFilter || c.title.includes(activeFilter));

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeFilter]);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Products We Source from China
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier and manage the process end to end.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categoryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  activeFilter === f
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-blue-light text-brand-blue hover:bg-brand-blue hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((cat) => (
              <div key={cat.id} className="card-base flex flex-col">
                <div className="rounded-lg overflow-hidden mb-5 h-44">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full self-start mb-3">
                  {cat.category}
                </span>
                <h3 id={cat.titleId} className="text-brand-navy font-bold text-base mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="bg-brand-gray text-brand-text text-xs px-2.5 py-1 rounded-md">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </div>
  );
}
