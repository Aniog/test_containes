import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTASection from '@/components/home/CTASection';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    icon: '🔌',
    description: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, and electronic components.',
    examples: ['Wireless earbuds', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies'],
    imgId: 'prod-img-e1f2',
    titleId: 'prod-title-e',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    icon: '🪑',
    description: 'Solid wood, MDF, and metal furniture for residential and commercial use. Home accessories and decorative items.',
    examples: ['Dining sets', 'Office chairs', 'Shelving units', 'Wall art', 'Decorative vases'],
    imgId: 'prod-img-f3g4',
    titleId: 'prod-title-f',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    icon: '👕',
    description: 'Clothing, activewear, workwear, and textile products. OEM and private label manufacturing available.',
    examples: ['T-shirts & hoodies', 'Activewear sets', 'Workwear uniforms', 'Bags & accessories', 'Home textiles'],
    imgId: 'prod-img-a5b6',
    titleId: 'prod-title-a',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    icon: '⚙️',
    description: 'Manufacturing equipment, tools, and industrial machinery for various production applications.',
    examples: ['CNC machines', 'Hydraulic tools', 'Conveyor systems', 'Packaging machines', 'Welding equipment'],
    imgId: 'prod-img-m7n8',
    titleId: 'prod-title-m',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    icon: '🧸',
    description: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories.',
    examples: ['Educational toys', 'Plush toys', 'Baby monitors', 'Strollers', 'Play mats'],
    imgId: 'prod-img-t9u0',
    titleId: 'prod-title-t',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    icon: '💄',
    description: 'Cosmetics, skincare, hair care, and personal care products. OEM formulation and private label available.',
    examples: ['Skincare sets', 'Hair tools', 'Makeup brushes', 'Essential oils', 'Nail products'],
    imgId: 'prod-img-b1c2',
    titleId: 'prod-title-b',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    icon: '🏋️',
    description: 'Fitness equipment, outdoor gear, sporting goods, and recreational products.',
    examples: ['Gym equipment', 'Yoga mats', 'Camping gear', 'Cycling accessories', 'Water sports gear'],
    imgId: 'prod-img-s3d4',
    titleId: 'prod-title-s',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    icon: '📦',
    description: 'Custom packaging solutions including boxes, bags, labels, and printed materials for retail and e-commerce.',
    examples: ['Custom boxes', 'Poly mailers', 'Hang tags', 'Product labels', 'Gift packaging'],
    imgId: 'prod-img-p5q6',
    titleId: 'prod-title-p',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    icon: '🚗',
    description: 'Aftermarket auto parts, accessories, and components for passenger and commercial vehicles.',
    examples: ['LED headlights', 'Car seat covers', 'Dash cams', 'Brake pads', 'Suspension parts'],
    imgId: 'prod-img-au7v8',
    titleId: 'prod-title-au',
  },
  {
    id: 'kitchenware',
    title: 'Kitchenware & Cookware',
    icon: '🍳',
    description: 'Kitchen tools, cookware sets, small appliances, and food storage solutions.',
    examples: ['Non-stick cookware', 'Kitchen gadgets', 'Food containers', 'Coffee makers', 'Cutlery sets'],
    imgId: 'prod-img-k9w0',
    titleId: 'prod-title-k',
  },
  {
    id: 'medical',
    title: 'Medical & Health Devices',
    icon: '🏥',
    description: 'Non-prescription health devices, wellness products, and medical accessories.',
    examples: ['Blood pressure monitors', 'Thermometers', 'Massage devices', 'Fitness trackers', 'First aid supplies'],
    imgId: 'prod-img-md1x2',
    titleId: 'prod-title-md',
  },
  {
    id: 'pet',
    title: 'Pet Products',
    icon: '🐾',
    description: 'Pet accessories, food products, grooming tools, and pet care equipment.',
    examples: ['Pet beds', 'Grooming tools', 'Feeding bowls', 'Pet toys', 'Carriers & crates'],
    imgId: 'prod-img-pt3y4',
    titleId: 'prod-title-pt',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Products We Source from China
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If it's manufactured in China, we can find the right supplier for you.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-bg-light rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                <div className="h-44 bg-bg-surface overflow-hidden">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h2 id={cat.titleId} className="text-base font-bold text-text-primary">{cat.title}</h2>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-primary-light text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-light border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-text-primary mb-3">Don't See Your Product Category?</h3>
            <p className="text-text-secondary mb-5 max-w-xl mx-auto">
              We source virtually any product manufactured in China. Contact us with your requirements and we'll assess feasibility within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Submit a Custom Inquiry
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Products;
