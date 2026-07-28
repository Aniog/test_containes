import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, components, and accessories.',
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial Parts',
    desc: 'CNC parts, molds, industrial equipment, and hardware.',
    imgId: 'prod-machinery-b2c3d4',
    titleId: 'prod-title-machinery',
    descId: 'prod-desc-machinery',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, home decor, garden tools, and kitchenware.',
    imgId: 'prod-home-c3d4e5',
    titleId: 'prod-title-home',
    descId: 'prod-desc-home',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, bags, shoes, and fashion accessories.',
    imgId: 'prod-textiles-d4e5f6',
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, and branded packaging.',
    imgId: 'prod-packaging-e5f6g7',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
  },
  {
    id: 'medical',
    title: 'Medical & Health Supplies',
    desc: 'PPE, medical devices, health equipment, and consumables.',
    imgId: 'prod-medical-f6g7h8',
    titleId: 'prod-title-medical',
    descId: 'prod-desc-medical',
  },
];

const ProductsPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="products-section-title" className="section-heading">Products We Source</h2>
          <p id="products-section-subtitle" className="section-subheading">
            From electronics to industrial machinery, we source across 50+ product categories through our verified supplier network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-navy-900">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-slate-500 mt-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary gap-2">
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
