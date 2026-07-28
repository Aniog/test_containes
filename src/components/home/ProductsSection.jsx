import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCB assemblies, components, and accessories.', imgId: 'prod-electronics-9c3d01', titleId: 'prod-title-electronics', descId: 'prod-desc-electronics' },
  { id: 'home-kitchen', title: 'Home & Kitchen Products', desc: 'Housewares, kitchenware, small appliances, and home organization.', imgId: 'prod-home-kitchen-9c3d02', titleId: 'prod-title-home-kitchen', descId: 'prod-desc-home-kitchen' },
  { id: 'furniture', title: 'Furniture & Home Decor', desc: 'Indoor and outdoor furniture, lighting, decor, and custom pieces.', imgId: 'prod-furniture-9c3d03', titleId: 'prod-title-furniture', descId: 'prod-desc-furniture' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Garments, fabrics, home textiles, bags, and accessories.', imgId: 'prod-textiles-9c3d04', titleId: 'prod-title-textiles', descId: 'prod-desc-textiles' },
  { id: 'industrial', title: 'Industrial Parts & Hardware', desc: 'Machined parts, fasteners, tools, molds, and industrial supplies.', imgId: 'prod-industrial-9c3d05', titleId: 'prod-title-industrial', descId: 'prod-desc-industrial' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, bags, and promotional materials.', imgId: 'prod-packaging-9c3d06', titleId: 'prod-title-packaging', descId: 'prod-desc-packaging' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="mt-4 text-lg text-slate-600">
            We source across 20+ product categories. Whatever you need made in China, we can help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="500"
              >
                <div className="aspect-[4/3] bg-slate-100" />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-semibold text-slate-900">{cat.title}</h3>
                <p id={cat.descId} className="mt-1.5 text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}