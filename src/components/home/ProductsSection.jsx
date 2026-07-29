import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'PCBs, cables, adapters, consumer electronics, IoT devices.',
    imgId: 'cat-electronics-7g8h9i',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    description: 'Manufacturing equipment, tools, industrial parts, automation components.',
    imgId: 'cat-machinery-8h9i0j',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, bags, accessories, footwear materials.',
    imgId: 'cat-textiles-9i0j1k',
  },
  {
    id: 'home-goods',
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, decor, lighting, outdoor products.',
    imgId: 'cat-homegoods-0j1k2l',
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    description: 'Boxes, bags, labels, custom packaging solutions.',
    imgId: 'cat-packaging-1k2l3m',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'OEM and aftermarket auto parts, accessories, EV components.',
    imgId: 'cat-automotive-2l3m4n',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Products We Source</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Industries We Cover
          </h2>
          <p className="text-text-secondary text-lg">
            We source a wide range of products across major manufacturing categories in China.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const titleId = `cat-title-${cat.id}`;
            const descId = `cat-desc-${cat.id}`;
            return (
              <Link
                key={cat.id}
                to="/products"
                className="group block bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={titleId} className="text-lg font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p id={descId} className="text-text-secondary text-sm">{cat.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
