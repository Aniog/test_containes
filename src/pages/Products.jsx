import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, and electronic accessories.',
    examples: ['LED lighting fixtures', 'USB cables & chargers', 'PCB assemblies', 'Smart home devices'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-s1t2u3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    desc: 'Office furniture, home furnishings, outdoor furniture, decorative items, and custom woodwork.',
    examples: ['Office desks & chairs', 'Sofas & upholstery', 'Outdoor patio sets', 'Custom cabinetry'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-v4w5x6',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, fabrics, home textiles, uniforms, sportswear, and custom garment manufacturing.',
    examples: ['Custom apparel', 'Workwear & uniforms', 'Bed linens & towels', 'Technical fabrics'],
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
    imgId: 'prod-textiles-img-y7z8a9',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, packaging equipment, CNC machines, and manufacturing tools.',
    examples: ['Packaging machines', 'CNC equipment', 'Food processing machinery', 'Printing equipment'],
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    imgId: 'prod-machinery-img-b1c2d3',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Tiles, sanitary ware, steel structures, glass, doors, windows, and construction hardware.',
    examples: ['Ceramic tiles', 'Steel structures', 'Aluminum profiles', 'Plumbing fixtures'],
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
    imgId: 'prod-building-img-e4f5g6',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, and promotional materials.',
    examples: ['Custom boxes & cartons', 'Plastic bottles & containers', 'Labels & stickers', 'Shopping bags'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-h7i8j9',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, accessories, tires, batteries, and vehicle electronics.',
    examples: ['Brake pads & rotors', 'Car electronics', 'Body parts & panels', 'Interior accessories'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-k1l2m3',
  },
  {
    id: 'consumer-goods',
    title: 'Consumer & Household Goods',
    desc: 'Kitchenware, toys, pet products, garden tools, and everyday consumer products.',
    examples: ['Kitchen utensils', 'Toys & games', 'Pet supplies', 'Garden tools'],
    titleId: 'prod-consumer-title',
    descId: 'prod-consumer-desc',
    imgId: 'prod-consumer-img-n4o5p6',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Products We Source"
        subtitle="We source across a wide range of industries. If it is made in China, we can find the right supplier for you."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-neutral-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-neutral-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-neutral-600 mb-3">{cat.desc}</p>
                  <ul className="space-y-1">
                    {cat.examples.map((ex, idx) => (
                      <li key={idx} className="text-xs text-neutral-500 flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-secondary rounded-full flex-shrink-0"></div>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-50 rounded-xl border border-neutral-200 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
              We source products across virtually every industry. Contact us with your specific requirements and we will assess feasibility within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline"
            >
              Tell Us What You Need <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Products;
