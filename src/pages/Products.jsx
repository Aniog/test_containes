import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Cpu, Cog, Shirt, Home, Box, Wrench,
  Car, Zap, Paintbrush, ShoppingBag, Thermometer, Monitor
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, electronic components, cables, chargers, power banks, smart home devices, and IoT products.',
    products: ['Smartphones & accessories', 'PCBs & electronic components', 'Power adapters & chargers', 'Smart home devices', 'LED lighting', 'Audio equipment'],
    imgId: 'prod-electronics-a1b2c3',
  },
  {
    id: 'machinery',
    icon: Cog,
    title: 'Machinery & Industrial Equipment',
    description: 'Manufacturing machinery, industrial equipment, CNC machines, packaging machinery, construction equipment, and spare parts.',
    products: ['CNC machining equipment', 'Packaging machinery', 'Construction equipment', 'Industrial pumps & valves', 'Agricultural machinery', 'Spare parts & components'],
    imgId: 'prod-machinery-b2c3d4',
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Garments, fabrics, home textiles, sportswear, workwear, bags, shoes, and fashion accessories from qualified manufacturers.',
    products: ['Casual & fashion apparel', 'Sportswear & activewear', 'Workwear & uniforms', 'Home textiles & bedding', 'Bags & luggage', 'Footwear'],
    imgId: 'prod-textiles-c3d4e5',
  },
  {
    id: 'home-kitchen',
    icon: Home,
    title: 'Home & Kitchen Products',
    description: 'Houseware, kitchenware, furniture, home decor, storage solutions, bathroom accessories, and garden products.',
    products: ['Kitchenware & cookware', 'Furniture & home decor', 'Storage & organization', 'Bathroom accessories', 'Garden tools & outdoor', 'Pet supplies'],
    imgId: 'prod-home-d4e5f6',
  },
  {
    id: 'packaging',
    icon: Box,
    title: 'Packaging & Printing',
    description: 'Custom packaging, boxes, bags, labels, printing services, and promotional materials for brands of all sizes.',
    products: ['Custom boxes & cartons', 'Paper & plastic bags', 'Labels & stickers', 'Gift packaging', 'Food packaging', 'Promotional materials'],
    imgId: 'prod-packaging-e5f6g7',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts & Accessories',
    description: 'Auto parts, motorcycle parts, car accessories, EV components, and aftermarket automotive products.',
    products: ['Engine & transmission parts', 'Brake systems & components', 'Car electronics & lighting', 'Interior & exterior accessories', 'Motorcycle parts', 'EV charging equipment'],
    imgId: 'prod-auto-f6g7h8',
  },
  {
    id: 'hardware',
    icon: Wrench,
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, building materials, plumbing supplies, and electrical components.',
    products: ['Hand tools & tool sets', 'Power tools & accessories', 'Fasteners & fixings', 'Building materials', 'Plumbing supplies', 'Electrical components'],
    imgId: 'prod-hardware-g7h8i9',
  },
  {
    id: 'sports',
    icon: Zap,
    title: 'Sports & Outdoor Equipment',
    description: 'Fitness equipment, sports gear, outdoor recreation products, camping equipment, and cycling accessories.',
    products: ['Fitness & gym equipment', 'Camping & hiking gear', 'Cycling accessories', 'Water sports equipment', 'Team sports gear', 'Outdoor furniture'],
    imgId: 'prod-sports-h8i9j0',
  },
  {
    id: 'beauty',
    icon: Paintbrush,
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, beauty tools, personal care appliances, hair products, and grooming accessories.',
    products: ['Skincare & cosmetics', 'Beauty tools & brushes', 'Hair dryers & styling tools', 'Personal care appliances', 'Nail care products', 'Grooming accessories'],
    imgId: 'prod-beauty-i9j0k1',
  },
  {
    id: 'medical',
    icon: Thermometer,
    title: 'Medical & Healthcare',
    description: 'Medical devices, healthcare supplies, personal protective equipment, diagnostic tools, and rehabilitation products.',
    products: ['Medical consumables', 'PPE & protective equipment', 'Diagnostic devices', 'Rehabilitation equipment', 'Hospital furniture', 'First aid supplies'],
    imgId: 'prod-medical-j0k1l2',
  },
  {
    id: 'toys',
    icon: ShoppingBag,
    title: 'Toys & Games',
    description: 'Educational toys, electronic toys, plush toys, board games, outdoor play equipment, and collectibles.',
    products: ['Educational & STEM toys', 'Plush & stuffed toys', 'Electronic & RC toys', 'Board games & puzzles', 'Outdoor play equipment', 'Collectibles & figurines'],
    imgId: 'prod-toys-k1l2m3',
  },
  {
    id: 'promotional',
    icon: Monitor,
    title: 'Promotional Products & Gifts',
    description: 'Corporate gifts, promotional merchandise, custom-branded items, and trade show giveaways.',
    products: ['Custom promotional items', 'Corporate gifts', 'Branded merchandise', 'Trade show giveaways', 'Eco-friendly products', 'Tech accessories'],
    imgId: 'prod-promo-l2m3n4',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We have experience sourcing a wide range of products across multiple industries
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                id={`prod-${cat.id}`}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] bg-gray-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-${cat.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-navy-600" />
                    </div>
                    <h3
                      id={`prod-${cat.id}-title`}
                      className="text-lg font-semibold text-navy-600"
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.products.slice(0, 4).map((p) => (
                      <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                    {cat.products.length > 4 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{cat.products.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We source products across many more industries. If your product category isn't listed, 
            contact us — we likely have experience sourcing it or can find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors shadow-sm"
          >
            Tell Us What You Need <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}