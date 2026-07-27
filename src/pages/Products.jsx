import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    imgId: 'prod-page-img-ss001',
    titleId: 'prod-page-title-electronics',
    descId: 'prod-page-desc-electronics',
    description: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & connectors', 'Batteries', 'Consumer electronics'],
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    imgId: 'prod-page-img-ss002',
    titleId: 'prod-page-title-furniture',
    descId: 'prod-page-desc-furniture',
    description: 'Solid wood and engineered furniture, metal frames, upholstered pieces, home accessories, and decorative items.',
    examples: ['Solid wood furniture', 'Metal frame furniture', 'Upholstered sofas', 'Home accessories', 'Wall decor', 'Storage solutions'],
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    imgId: 'prod-page-img-ss003',
    titleId: 'prod-page-title-apparel',
    descId: 'prod-page-desc-apparel',
    description: 'Clothing, sportswear, workwear, fabrics, accessories, and private label fashion for all markets.',
    examples: ['Casual clothing', 'Sportswear', 'Workwear & uniforms', 'Fabrics & textiles', 'Bags & accessories', 'Private label fashion'],
  },
  {
    id: 'machinery',
    name: 'Industrial Machinery',
    imgId: 'prod-page-img-ss004',
    titleId: 'prod-page-title-machinery',
    descId: 'prod-page-desc-machinery',
    description: 'Manufacturing equipment, CNC machines, hydraulic tools, spare parts, and industrial automation components.',
    examples: ['CNC machines', 'Hydraulic equipment', 'Conveyor systems', 'Spare parts', 'Power tools', 'Automation components'],
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    imgId: 'prod-page-img-ss005',
    titleId: 'prod-page-title-packaging',
    descId: 'prod-page-desc-packaging',
    description: 'Custom boxes, retail packaging, labels, bags, display materials, and branded printing for all industries.',
    examples: ['Custom boxes', 'Retail packaging', 'Labels & stickers', 'Shopping bags', 'Display stands', 'Branded printing'],
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    imgId: 'prod-page-img-ss006',
    titleId: 'prod-page-title-health',
    descId: 'prod-page-desc-health',
    description: 'Cosmetics, skincare, supplements, medical devices, wellness products, and personal care items.',
    examples: ['Skincare products', 'Cosmetics', 'Supplements', 'Medical devices', 'Wellness products', 'Personal care'],
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    imgId: 'prod-page-img-ss007',
    titleId: 'prod-page-title-toys',
    descId: 'prod-page-desc-toys',
    description: 'Educational toys, outdoor play equipment, baby gear, and children\'s products with full safety certification support.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Baby gear', 'Plush toys', 'Board games', 'Safety-certified products'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    imgId: 'prod-page-img-ss008',
    titleId: 'prod-page-title-sports',
    descId: 'prod-page-desc-sports',
    description: 'Fitness equipment, outdoor gear, camping products, sports accessories, and activewear.',
    examples: ['Fitness equipment', 'Camping gear', 'Outdoor furniture', 'Sports accessories', 'Activewear', 'Cycling products'],
  },
  {
    id: 'auto',
    name: 'Automotive Parts',
    imgId: 'prod-page-img-ss009',
    titleId: 'prod-page-title-auto',
    descId: 'prod-page-desc-auto',
    description: 'OEM and aftermarket auto parts, accessories, tools, and components for passenger and commercial vehicles.',
    examples: ['OEM auto parts', 'Aftermarket accessories', 'Car care products', 'Lighting systems', 'Interior accessories', 'Tools & equipment'],
  },
];

const Products = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Products We Source from China
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              We have hands-on experience sourcing across a wide range of industries. If it's manufactured in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Source"
            title="Browse by Product Category"
            subtitle="Click any category to see what we source and how we can help."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-xl border overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                  selected?.id === cat.id ? 'border-brand-blue shadow-md ring-2 ring-brand-blue/20' : 'border-neutral-200'
                }`}
                onClick={() => setSelected(selected?.id === cat.id ? null : cat)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 id={cat.titleId} className="font-bold text-neutral-900 mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed">{cat.description}</p>

                  {selected?.id === cat.id && (
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <p className="text-xs font-semibold text-brand-sky uppercase tracking-wider mb-2">Examples we source:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.examples.map((ex) => (
                          <span key={ex} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full">{ex}</span>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center gap-1 text-sm text-brand-blue font-semibold hover:text-brand-navy transition-colors"
                      >
                        Request a Quote for {cat.name} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <span id="products-page-title" className="sr-only">China manufacturing product sourcing categories</span>
      </section>

      {/* Not Listed */}
      <section className="py-12 bg-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">Don't See Your Product?</h2>
          <p className="text-neutral-600 mb-6">
            We source a wide variety of products beyond the categories listed above. If it's made in China, we can likely help. Contact us with your requirements and we'll let you know.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Products;
