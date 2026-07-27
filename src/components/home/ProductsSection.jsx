import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { id: 'electronics', label: 'Electronics & Components', imgId: 'prod-img-ss001', titleId: 'prod-title-electronics', descId: 'prod-desc-electronics', desc: 'Consumer electronics, PCBs, cables, LED lighting' },
  { id: 'furniture', label: 'Furniture & Home Decor', imgId: 'prod-img-ss002', titleId: 'prod-title-furniture', descId: 'prod-desc-furniture', desc: 'Wood furniture, metal frames, home accessories' },
  { id: 'apparel', label: 'Apparel & Textiles', imgId: 'prod-img-ss003', titleId: 'prod-title-apparel', descId: 'prod-desc-apparel', desc: 'Clothing, sportswear, fabrics, accessories' },
  { id: 'machinery', label: 'Industrial Machinery', imgId: 'prod-img-ss004', titleId: 'prod-title-machinery', descId: 'prod-desc-machinery', desc: 'Manufacturing equipment, tools, spare parts' },
  { id: 'packaging', label: 'Packaging & Printing', imgId: 'prod-img-ss005', titleId: 'prod-title-packaging', descId: 'prod-desc-packaging', desc: 'Custom boxes, labels, bags, display materials' },
  { id: 'health', label: 'Health & Beauty', imgId: 'prod-img-ss006', titleId: 'prod-title-health', descId: 'prod-desc-health', desc: 'Cosmetics, supplements, medical devices, wellness' },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Categories"
          title="Products We Source from China"
          subtitle="We have experience sourcing across a wide range of industries. If your product is manufactured in China, we can find the right supplier."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
              <div className="relative h-40 md:h-52">
                <img
                  alt={cat.label}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-navy/50 group-hover:bg-brand-navy/65 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 id={cat.titleId} className="text-white font-bold text-sm md:text-base leading-tight">{cat.label}</h3>
                  <p id={cat.descId} className="text-white/75 text-xs mt-1 hidden md:block">{cat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors"
          >
            See All Product Categories →
          </Link>
        </div>
      </div>
      <span id="products-section-title" className="sr-only">China manufacturing product sourcing categories</span>
    </section>
  );
};

export default ProductsSection;
