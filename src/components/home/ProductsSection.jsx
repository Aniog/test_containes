import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'PCBs, cables, LED lighting, consumer electronics', imgId: 'prod-img-elec-a1b2', titleId: 'prod-title-elec', descId: 'prod-desc-elec' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions', imgId: 'prod-img-furn-c3d4', titleId: 'prod-title-furn', descId: 'prod-desc-furn' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, fabrics, accessories', imgId: 'prod-img-appr-e5f6', titleId: 'prod-title-appr', descId: 'prod-desc-appr' },
  { id: 'machinery', title: 'Machinery & Equipment', desc: 'Industrial tools, manufacturing equipment, spare parts', imgId: 'prod-img-mach-g7h8', titleId: 'prod-title-mach', descId: 'prod-desc-mach' },
  { id: 'plastics', title: 'Plastics & Packaging', desc: 'Injection molded parts, packaging materials, containers', imgId: 'prod-img-plas-i9j0', titleId: 'prod-title-plas', descId: 'prod-desc-plas' },
  { id: 'hardware', title: 'Hardware & Tools', desc: 'Fasteners, hand tools, power tools, construction hardware', imgId: 'prod-img-hard-k1l2', titleId: 'prod-title-hard', descId: 'prod-desc-hard' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Products We Source"
          title="50+ Product Categories Covered"
          subtitle="We have experience sourcing across a wide range of industries and product types from China's major manufacturing regions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2340]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 id={cat.titleId} className="text-white font-bold text-sm">{cat.title}</h3>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p id={cat.descId} className="text-gray-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all"
          >
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
