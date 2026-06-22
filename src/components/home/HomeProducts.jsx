import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, and electronic accessories.' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, and custom wood products.' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, uniforms, fabrics, and fashion accessories.' },
  { id: 'machinery', title: 'Industrial Machinery', desc: 'Manufacturing equipment, tools, spare parts, and industrial components.' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, bags, and promotional materials.' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Toys, games, baby gear, and children\'s educational products.' },
];

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-light-blue text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Products We Source
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have experience sourcing across a wide range of product categories from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={`product-cat-${cat.id}-img-7g8h9i`}
                  data-strk-img={`[product-cat-${cat.id}-desc] [product-cat-${cat.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-cat-${cat.id}-title`} className="font-semibold text-primary-dark mb-1">{cat.title}</h3>
                <p id={`product-cat-${cat.id}-desc`} className="text-gray-600 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
