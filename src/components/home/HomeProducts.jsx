import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, smart devices', imgId: 'prod-electronics-3a1b2c' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, kitchenware', imgId: 'prod-furniture-4d5e6f' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, uniforms, fabrics, accessories', imgId: 'prod-apparel-7g8h9i' },
  { id: 'machinery', title: 'Industrial Machinery', desc: 'Manufacturing equipment, tools, spare parts, automation systems', imgId: 'prod-machinery-1j2k3l' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, promotional materials', imgId: 'prod-packaging-4m5n6o' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Educational toys, outdoor play, baby gear, safety-certified products', imgId: 'prod-toys-7p8q9r' },
];

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-brand-light" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Product Categories
          </span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-brand-mid text-lg max-w-2xl mx-auto">
            We have established supplier networks across a wide range of product categories from China's major manufacturing regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow group">
              <div className="relative h-44 overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-${cat.id}-desc] [prod-${cat.id}-title] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={`prod-${cat.id}-title`} className="font-semibold text-brand-dark mb-1">{cat.title}</h3>
                <p id={`prod-${cat.id}-desc`} className="text-brand-mid text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            View All Product Categories <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
