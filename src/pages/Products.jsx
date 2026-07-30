import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    items: ['Consumer electronics', 'PCBs and electronic components', 'LED lighting', 'Smart home devices', 'Cables and connectors', 'Power supplies'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    items: ['Office furniture', 'Bedroom and living room furniture', 'Outdoor furniture', 'Decorative accessories', 'Mirrors and wall art', 'Storage solutions'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    items: ['Clothing and garments', 'Sportswear and activewear', 'Workwear and uniforms', 'Fabrics and materials', 'Bags and accessories', 'Footwear'],
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    imgId: 'prod-apparel-img-g7h8i9',
  },
  {
    id: 'industrial',
    name: 'Industrial & Machinery',
    items: ['Machine parts and components', 'Tools and hardware', 'Safety equipment', 'Hydraulic and pneumatic parts', 'Fasteners and fittings', 'Pumps and motors'],
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-j1k2l3',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    items: ['Custom packaging boxes', 'Paper and cardboard packaging', 'Plastic packaging', 'Labels and stickers', 'Promotional materials', 'Gift packaging'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-m4n5o6',
  },
  {
    id: 'consumer',
    name: 'Consumer Goods',
    items: ['Kitchenware and cookware', 'Toys and games', 'Sports and outdoor equipment', 'Health and beauty products', 'Pet products', 'Stationery and office supplies'],
    titleId: 'prod-consumer-title',
    descId: 'prod-consumer-desc',
    imgId: 'prod-consumer-img-p7q8r9',
  },
  {
    id: 'auto',
    name: 'Automotive Parts',
    items: ['Car accessories', 'Replacement parts', 'Tyres and wheels', 'Lighting and electrical', 'Interior accessories', 'Tools and equipment'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-s1t2u3',
  },
  {
    id: 'construction',
    name: 'Building & Construction',
    items: ['Building materials', 'Tiles and flooring', 'Doors and windows', 'Plumbing fittings', 'Electrical fittings', 'Insulation materials'],
    titleId: 'prod-construction-title',
    descId: 'prod-construction-desc',
    imgId: 'prod-construction-img-v4w5x6',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Source Across All Major Categories
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              From electronics and furniture to industrial parts and consumer goods, our team has experience sourcing a wide range of products from verified Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="What Can We Source for You?"
            subtitle="Select a category to explore the types of products we regularly source from China."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category List */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active === cat.id
                        ? 'bg-primary text-white'
                        : 'bg-lightblue text-darktext hover:bg-blue-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Detail */}
            {activeCategory && (
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="h-64 bg-lightblue overflow-hidden">
                    <img
                      alt={activeCategory.name}
                      data-strk-img-id={activeCategory.imgId}
                      data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 id={activeCategory.titleId} className="text-2xl font-bold text-darktext mb-2">
                      {activeCategory.name}
                    </h2>
                    <p id={activeCategory.descId} className="text-mutedtext text-sm mb-6">
                      We source a wide range of {activeCategory.name.toLowerCase()} products from verified Chinese manufacturers with competitive pricing and reliable quality.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {activeCategory.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-darktext">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <CTAButton to="/contact" variant="primary">
                      Source {activeCategory.name}
                    </CTAButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-lightblue border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-darktext mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-mutedtext mb-8">
            We source across a much broader range of products than listed here. If you have a specific product in mind, contact us and we will assess whether we can help.
          </p>
          <CTAButton to="/contact" variant="primary">Ask About Your Product</CTAButton>
        </div>
      </section>
    </div>
  );
}
