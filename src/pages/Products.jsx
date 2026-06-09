import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';
import CTABannerSection from '@/components/home/CTABannerSection';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    titleId: 'prod-pg-title-electronics',
    descId: 'prod-pg-desc-electronics',
    imgId: 'prod-pg-img-electronics-a1b2c3',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, batteries, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'USB hubs', 'Smart plugs', 'PCB assemblies', 'Power banks'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    titleId: 'prod-pg-title-furniture',
    descId: 'prod-pg-desc-furniture',
    imgId: 'prod-pg-img-furniture-b2c3d4',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, bathroom accessories, and garden products.',
    examples: ['Office chairs', 'Bamboo kitchenware', 'Storage racks', 'Decorative items', 'Candles', 'Garden tools'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    titleId: 'prod-pg-title-apparel',
    descId: 'prod-pg-desc-apparel',
    imgId: 'prod-pg-img-apparel-c3d4e5',
    desc: 'Clothing, sportswear, bags, shoes, fabrics, and accessories for private label and OEM brands.',
    examples: ['Activewear', 'T-shirts', 'Tote bags', 'Sneakers', 'Hats', 'Socks'],
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    titleId: 'prod-pg-title-machinery',
    descId: 'prod-pg-desc-machinery',
    imgId: 'prod-pg-img-machinery-d4e5f6',
    desc: 'Manufacturing equipment, hand tools, power tools, spare parts, and industrial automation components.',
    examples: ['CNC machines', 'Power drills', 'Hydraulic tools', 'Conveyor systems', 'Welding equipment', 'Pumps'],
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    titleId: 'prod-pg-title-toys',
    descId: 'prod-pg-desc-toys',
    imgId: 'prod-pg-img-toys-e5f6a7',
    desc: 'Plastic toys, educational products, baby gear, outdoor play equipment, and licensed merchandise.',
    examples: ['Building blocks', 'Stuffed animals', 'Baby strollers', 'Puzzles', 'Ride-on toys', 'Art supplies'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    titleId: 'prod-pg-title-packaging',
    descId: 'prod-pg-desc-packaging',
    imgId: 'prod-pg-img-packaging-f6a7b8',
    desc: 'Custom boxes, labels, bags, promotional materials, and branded packaging for retail and e-commerce.',
    examples: ['Custom gift boxes', 'Kraft paper bags', 'Product labels', 'Hang tags', 'Tissue paper', 'Mailer boxes'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty Products',
    titleId: 'prod-pg-title-health',
    descId: 'prod-pg-desc-health',
    imgId: 'prod-pg-img-health-a7b8c9',
    desc: 'Skincare, personal care, wellness products, fitness equipment, and health accessories.',
    examples: ['Skincare sets', 'Massage tools', 'Yoga mats', 'Resistance bands', 'Supplements packaging', 'Hair accessories'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    titleId: 'prod-pg-title-auto',
    descId: 'prod-pg-desc-auto',
    imgId: 'prod-pg-img-auto-b8c9d0',
    desc: 'Aftermarket auto parts, car accessories, motorcycle parts, and vehicle maintenance products.',
    examples: ['Car seat covers', 'LED headlights', 'Brake pads', 'Car chargers', 'Dash cams', 'Motorcycle helmets'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    titleId: 'prod-pg-title-sports',
    descId: 'prod-pg-desc-sports',
    imgId: 'prod-pg-img-sports-c9d0e1',
    desc: 'Sporting goods, outdoor gear, camping equipment, and fitness accessories for retail and wholesale.',
    examples: ['Camping tents', 'Hiking backpacks', 'Gym equipment', 'Cycling accessories', 'Water bottles', 'Fishing gear'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 bg-white/10 px-3 py-1 rounded-full">
            Products We Source
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Categories We Source
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We source across major manufacturing sectors in China. If your product isn't listed, contact us — we likely have relevant supplier connections.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-brand-navy mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-brand-light text-brand-blue px-2.5 py-1 rounded-full font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-light rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">Don't See Your Product?</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              We source a wide range of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
            </p>
            <CTAButton to="/contact" variant="primary">
              Send Us Your Product Inquiry
              <ArrowRight className="w-4 h-4 ml-2" />
            </CTAButton>
          </div>
        </div>
      </section>

      <CTABannerSection />
    </div>
  );
}
