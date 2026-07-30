import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart devices, and electronic components.',
    examples: ['LED Lights & Fixtures', 'Consumer Electronics', 'PCBs & Components', 'Cables & Connectors', 'Smart Home Devices', 'Batteries & Power Banks'],
    titleId: 'prod-elec-title',
    descId: 'prod-elec-desc',
    imgId: 'prod-elec-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, kitchenware, and storage solutions.',
    examples: ['Office Furniture', 'Outdoor Furniture', 'Home Accessories', 'Kitchenware', 'Storage & Organization', 'Decorative Items'],
    titleId: 'prod-furn-title',
    descId: 'prod-furn-desc',
    imgId: 'prod-furn-img-d4e5f6',
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    desc: 'Apparel, sportswear, workwear, fabrics, bags, and accessories for retail and wholesale buyers.',
    examples: ['Casual Apparel', 'Sportswear & Activewear', 'Workwear & Uniforms', 'Bags & Accessories', 'Fabrics & Textiles', 'Footwear'],
    titleId: 'prod-cloth-title',
    descId: 'prod-cloth-desc',
    imgId: 'prod-cloth-img-g7h8i9',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial machinery, tools, hardware, construction materials, and manufacturing equipment.',
    examples: ['Industrial Machinery', 'Power Tools', 'Hardware & Fasteners', 'Construction Materials', 'Safety Equipment', 'Agricultural Equipment'],
    titleId: 'prod-mach-title',
    descId: 'prod-mach-desc',
    imgId: 'prod-mach-img-j1k2l3',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Children\'s toys, educational products, baby gear, and juvenile products with safety certification support.',
    examples: ['Educational Toys', 'Outdoor Play Equipment', 'Baby Gear & Accessories', 'Plush & Stuffed Toys', 'Board Games', 'Electronic Toys'],
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-m4n5o6',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, health devices, supplements packaging, and wellness products.',
    examples: ['Personal Care Products', 'Cosmetics & Skincare', 'Health Monitoring Devices', 'Fitness Equipment', 'Wellness Products', 'Medical Supplies'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-p7q8r9',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, fitness accessories, and recreational items.',
    examples: ['Fitness Equipment', 'Camping & Hiking Gear', 'Water Sports Products', 'Team Sports Equipment', 'Cycling Accessories', 'Outdoor Furniture'],
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    imgId: 'prod-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, bags, and promotional items for brands.',
    examples: ['Custom Boxes & Cartons', 'Printed Labels & Stickers', 'Promotional Products', 'Paper Bags', 'Plastic Packaging', 'Gift Packaging'],
    titleId: 'prod-pack-title',
    descId: 'prod-pack-desc',
    imgId: 'prod-pack-img-v4w5x6',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Automotive parts, car accessories, motorcycle components, and vehicle maintenance products.',
    examples: ['Car Accessories', 'Replacement Parts', 'Motorcycle Components', 'Car Care Products', 'Lighting & Electrical', 'Interior Accessories'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-y7z8a9',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source from China
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            We have established supplier networks across major manufacturing categories. If you don't see your product, contact us — we source across all industries.
          </p>
          <CTAButton to="/contact" variant="primary">
            Request a Sourcing Quote
          </CTAButton>
        </div>
      </section>

      {/* Category Browser */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Browse by Category"
            title="Select a Product Category"
            subtitle="Click a category to see what we source and example products."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  active === cat.id
                    ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {activeCategory && (
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                  {activeCategory.name}
                </h2>
                <p id={activeCategory.descId} className="text-gray-500 leading-relaxed mb-6">
                  {activeCategory.desc}
                </p>
                <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-3">Example Products</h3>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {activeCategory.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {ex}
                    </div>
                  ))}
                </div>
                <CTAButton to="/contact" variant="primary">
                  Source This Product
                </CTAButton>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-64 overflow-hidden">
                <img
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="All Categories"
            title="Our Full Product Range"
            subtitle="We source across all major manufacturing categories in China."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ id, name, desc, examples, titleId, descId, imgId }) => (
              <div
                key={id}
                className="bg-brand-bg rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => { setActive(id); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    data-strk-img-id={`grid-${imgId}`}
                    data-strk-img={`[grid-${descId}] [grid-${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`grid-${titleId}`} className="text-brand-dark font-bold text-base mb-1">{name}</h3>
                  <p id={`grid-${descId}`} className="text-gray-500 text-sm leading-relaxed line-clamp-2">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product?</h2>
          <p className="text-blue-100 mb-8">
            We source across all industries. Contact us with your product requirements and we'll find the right supplier for you.
          </p>
          <CTAButton to="/contact" variant="primary">
            Submit a Custom Sourcing Request
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
