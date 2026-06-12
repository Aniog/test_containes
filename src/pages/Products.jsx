import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, connectors, LED products, smart home devices, and electronic components from certified manufacturers.',
    items: ['Consumer Electronics', 'PCBs & Components', 'LED & Lighting', 'Smart Home Devices', 'Cables & Connectors', 'Power Banks & Chargers'],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-ab12cd',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Décor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, and storage solutions from Foshan and other major furniture hubs.',
    items: ['Indoor Furniture', 'Outdoor Furniture', 'Home Accessories', 'Storage Solutions', 'Lighting Fixtures', 'Rugs & Textiles'],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-ef34gh',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories from experienced garment factories with compliance certifications.',
    items: ['Casual Wear', 'Sportswear', 'Workwear & Uniforms', 'Fabrics & Yarn', 'Bags & Accessories', 'Underwear & Socks'],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-ij56kl',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial machinery, tools, equipment, and components for manufacturing, construction, and agricultural applications.',
    items: ['Industrial Machinery', 'Power Tools', 'Hand Tools', 'Construction Equipment', 'Agricultural Machinery', 'Pumps & Valves'],
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
    imgId: 'cat-machinery-img-mn78op',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Toys, games, baby gear, and educational products from EN71 and ASTM certified factories with full safety compliance.',
    items: ['Plastic Toys', 'Wooden Toys', 'Educational Toys', 'Baby Gear', 'Outdoor Play', 'Board Games'],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-qr90st',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, health devices, and wellness products with FDA, CE, and relevant compliance certifications.',
    items: ['Skincare Products', 'Hair Care', 'Health Devices', 'Supplements', 'Fitness Equipment', 'Medical Supplies'],
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-uv12wx',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories from specialized manufacturers.',
    items: ['Fitness Equipment', 'Camping Gear', 'Cycling Products', 'Water Sports', 'Team Sports', 'Outdoor Apparel'],
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-yz34ab',
  },
  {
    id: 'packaging',
    title: 'Packaging & Labels',
    desc: 'Custom packaging, printed boxes, labels, bags, and branded packaging solutions for retail and e-commerce.',
    items: ['Custom Boxes', 'Printed Labels', 'Poly Bags', 'Retail Packaging', 'Gift Boxes', 'Eco Packaging'],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-cd56ef',
  },
  {
    id: 'auto',
    title: 'Auto Parts',
    desc: 'Automotive components, accessories, and aftermarket parts from ISO-certified manufacturers.',
    items: ['Engine Parts', 'Body Parts', 'Electrical Components', 'Tires & Wheels', 'Car Accessories', 'Truck Parts'],
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-gh78ij',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Fasteners, fittings, hand tools, power tools, and construction hardware from specialized hardware manufacturers.',
    items: ['Fasteners & Bolts', 'Hinges & Fittings', 'Hand Tools', 'Power Tools', 'Safety Equipment', 'Locks & Keys'],
    titleId: 'cat-hardware-title',
    descId: 'cat-hardware-desc',
    imgId: 'cat-hardware-img-kl90mn',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Products We Source from China
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We source across a wide range of product categories from China's major manufacturing regions. If you don't see your product here, contact us — we likely source it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl border border-borderColor overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-textDark mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-textBody text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-bgLight text-textBody text-xs font-medium px-3 py-1 rounded-full border border-borderColor">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-textDark mb-4">Don't See Your Product?</h2>
          <p className="text-textBody text-lg mb-8 max-w-2xl mx-auto">
            We source a much wider range of products than listed here. Contact us with your product details and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-md"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
