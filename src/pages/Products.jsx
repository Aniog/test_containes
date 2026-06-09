import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader, { CTAButton } from '@/components/ui/SectionHeader';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, batteries, cables, smart devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'PCB assemblies', 'Power banks', 'Cables & connectors'],
    imgId: 'prod-img-1-a1b2c3',
    titleId: 'prod-1-title',
    descId: 'prod-1-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, kitchenware, storage solutions, and household products.',
    examples: ['Office chairs', 'Storage furniture', 'Kitchen accessories', 'Home décor', 'Bedding & textiles'],
    imgId: 'prod-img-2-d4e5f6',
    titleId: 'prod-2-title',
    descId: 'prod-2-desc',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories for fashion and industrial use.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Bags & accessories', 'Fabrics & yarn'],
    imgId: 'prod-img-3-g7h8i9',
    titleId: 'prod-3-title',
    descId: 'prod-3-desc',
  },
  {
    id: 'industrial',
    name: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, safety equipment, and industrial components for manufacturing and construction.',
    examples: ['Power tools', 'Safety equipment', 'Hardware & fasteners', 'Machinery parts', 'Hydraulic components'],
    imgId: 'prod-img-4-j0k1l2',
    titleId: 'prod-4-title',
    descId: 'prod-4-desc',
  },
  {
    id: 'consumer',
    name: 'Consumer Products',
    desc: 'Health & beauty, toys, sports equipment, outdoor gear, and general consumer goods.',
    examples: ['Health & beauty', 'Toys & games', 'Sports equipment', 'Outdoor gear', 'Pet products'],
    imgId: 'prod-img-5-m3n4o5',
    titleId: 'prod-5-title',
    descId: 'prod-5-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Labels',
    desc: 'Custom packaging, printed boxes, labels, bags, and branded packaging solutions.',
    examples: ['Custom printed boxes', 'Paper bags', 'Labels & stickers', 'Foam inserts', 'Eco packaging'],
    imgId: 'prod-img-6-p6q7r8',
    titleId: 'prod-6-title',
    descId: 'prod-6-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, and replacement parts for global markets.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Interior accessories', 'Tools & equipment'],
    imgId: 'prod-img-7-s9t0u1',
    titleId: 'prod-7-title',
    descId: 'prod-7-desc',
  },
  {
    id: 'medical',
    name: 'Medical & Health Supplies',
    desc: 'Medical devices, health monitoring equipment, PPE, and wellness products.',
    examples: ['PPE & masks', 'Health monitors', 'Medical devices', 'Wellness products', 'Hospital supplies'],
    imgId: 'prod-img-8-v2w3x4',
    titleId: 'prod-8-title',
    descId: 'prod-8-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Source"
            title="Product Categories"
            subtitle="Browse our main sourcing categories. Don't see yours? Contact us — we source across many more product types."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-border-color rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-44 bg-neutral-bg overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-primary-dark text-base mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-text-muted text-xs leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.examples.slice(0, 3).map((ex) => (
                      <span key={ex} className="text-xs bg-light-blue text-primary px-2 py-0.5 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-text-muted mb-8">
            We source across many more product types. If it's manufactured in China, we can likely help. Contact us to discuss your specific product.
          </p>
          <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
            Discuss Your Product
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
