import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';

const categories = [
  { id: 'electronics', label: 'Electronics & Components', titleId: 'prod-title-electronics', descId: 'prod-desc-electronics', imgId: 'prod-img-electronics-1a2b3c', desc: 'Consumer electronics, PCBs, cables, LED lighting, smart devices' },
  { id: 'furniture', label: 'Furniture & Home Goods', titleId: 'prod-title-furniture', descId: 'prod-desc-furniture', imgId: 'prod-img-furniture-2b3c4d', desc: 'Office furniture, home décor, storage solutions, kitchenware' },
  { id: 'apparel', label: 'Apparel & Textiles', titleId: 'prod-title-apparel', descId: 'prod-desc-apparel', imgId: 'prod-img-apparel-3c4d5e', desc: 'Clothing, sportswear, bags, shoes, fabrics and accessories' },
  { id: 'machinery', label: 'Industrial Machinery', titleId: 'prod-title-machinery', descId: 'prod-desc-machinery', imgId: 'prod-img-machinery-4d5e6f', desc: 'Manufacturing equipment, tools, spare parts, automation systems' },
  { id: 'toys', label: 'Toys & Baby Products', titleId: 'prod-title-toys', descId: 'prod-desc-toys', imgId: 'prod-img-toys-5e6f7a', desc: 'Plastic toys, educational products, baby gear, outdoor play' },
  { id: 'packaging', label: 'Packaging & Printing', titleId: 'prod-title-packaging', descId: 'prod-desc-packaging', imgId: 'prod-img-packaging-6f7a8b', desc: 'Custom boxes, labels, bags, promotional materials' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Products We Source"
          title="Wide Range of Product Categories"
          subtitle="We source across major manufacturing sectors in China, with deep supplier networks in each category."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 bg-slate-100 overflow-hidden">
                <img
                  alt={cat.label}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                <h3 id={cat.titleId} className="absolute bottom-3 left-3 text-white font-semibold text-sm">{cat.label}</h3>
              </div>
              <div className="p-4">
                <p id={cat.descId} className="text-gray-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <CTAButton to="/products" variant="secondary">
            View All Product Categories
            <ArrowRight className="w-4 h-4 ml-2" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
