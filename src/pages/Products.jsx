import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED lighting, sensors, connectors, and electronic components.',
    examples: 'Smart home devices, power banks, USB cables, circuit boards, display modules',
    imgId: 'prod-page-electronics-o1p2q3',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, home textiles, garden tools, and decorative items for indoor and outdoor use.',
    examples: 'Kitchen utensils, storage organizers, garden furniture, planters, lighting fixtures',
    imgId: 'prod-page-home-r4s5t6',
    titleId: 'prod-page-home-title',
    descId: 'prod-page-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, sportswear, bags, and fashion accessories for men, women, and children.',
    examples: 'T-shirts, activewear, backpacks, scarves, custom uniforms, home textiles',
    imgId: 'prod-page-apparel-u7v8w9',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Machinery parts, tools, automotive components, and industrial equipment for manufacturing and construction.',
    examples: 'CNC parts, stamping components, castings, fasteners, pumps, valves',
    imgId: 'prod-page-industrial-x1y2z3',
    titleId: 'prod-page-industrial-title',
    descId: 'prod-page-industrial-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, medical supplies, and wellness items for retail and professional use.',
    examples: 'Skincare products, hair tools, first aid kits, massage devices, supplements',
    imgId: 'prod-page-health-a4b5c6',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and promotional products for branding and retail.',
    examples: 'Custom boxes, labels, shopping bags, brochures, promotional items',
    imgId: 'prod-page-packaging-d7e8f9',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    name: 'Sports & Outdoors',
    desc: 'Sporting goods, outdoor equipment, fitness accessories, and recreational products.',
    examples: 'Yoga mats, camping gear, bicycle accessories, water bottles, team sports equipment',
    imgId: 'prod-page-sports-g1h2i3',
    titleId: 'prod-page-sports-title',
    descId: 'prod-page-sports-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, and vehicle maintenance products.',
    examples: 'Car mats, LED headlights, motorcycle helmets, tire inflators, cleaning tools',
    imgId: 'prod-page-auto-j4k5l6',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    name: 'Toys & Baby Products',
    desc: 'Children\'s toys, educational products, baby gear, and nursery items meeting safety standards.',
    examples: 'STEM toys, baby monitors, strollers, feeding accessories, play mats',
    imgId: 'prod-page-toys-m7n8o9',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Products We Source</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We source across a wide range of product categories. If it's made in China, we can help you find a reliable supplier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-surface relative overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-text-primary text-lg mb-2">
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="text-text-secondary text-sm leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-text-secondary">
                      <span className="font-medium text-text-primary">Common items: </span>
                      {cat.examples}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Don't See Your Product Category?</h2>
          <p className="text-text-secondary mb-8">
            We source many more product types than listed here. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
