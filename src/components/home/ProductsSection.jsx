import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, and electronic assemblies.',
    imgId: 'products-electronics-d4e5f6',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, garden tools, home textiles, and decorative items.',
    imgId: 'products-home-garden-g7h8i9',
    titleId: 'products-home-garden-title',
    descId: 'products-home-garden-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, sportswear, bags, and textile accessories.',
    imgId: 'products-textiles-j1k2l3',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'Processing equipment, CNC machines, pumps, valves, and industrial parts.',
    imgId: 'products-machinery-m4n5o6',
    titleId: 'products-machinery-title',
    descId: 'products-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bottles, and printing materials.',
    imgId: 'products-packaging-p7q8r9',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, motorcycle components, and vehicle accessories.',
    imgId: 'products-auto-parts-s1t2u3',
    titleId: 'products-auto-parts-title',
    descId: 'products-auto-parts-desc',
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Products We Source
          </h2>
          <p id="products-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories. If your product is made in China, we can help you find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[3x2] overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-neutral-900 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-neutral-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="text-primary-500 hover:text-primary-600 font-semibold text-sm no-underline inline-flex items-center gap-1"
          >
            View all product categories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
