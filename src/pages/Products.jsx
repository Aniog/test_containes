import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, and electronic components.',
    examples: ['LED Lights', 'Smart Speakers', 'Power Banks', 'PCB Assemblies', 'Cables & Connectors'],
    hubs: 'Shenzhen, Dongguan',
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, and storage solutions.',
    examples: ['Office Chairs', 'Sofas', 'Outdoor Furniture', 'Wall Art', 'Storage Units'],
    hubs: 'Foshan, Guangzhou',
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, fabrics, and accessories for fashion and private label brands.',
    examples: ['T-Shirts', 'Sportswear', 'Workwear', 'Bags', 'Hats & Caps'],
    hubs: 'Guangzhou, Hangzhou',
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, machine parts, and manufacturing machinery for B2B buyers.',
    examples: ['CNC Machines', 'Pumps', 'Conveyor Systems', 'Welding Equipment', 'Compressors'],
    hubs: 'Wenzhou, Ningbo',
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and children\'s accessories.',
    examples: ['Educational Toys', 'Plush Toys', 'Baby Strollers', 'Ride-on Toys', 'Puzzles'],
    hubs: 'Shantou, Dongguan',
    imgId: 'prod-toys-img-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness devices, and health supplements.',
    examples: ['Skincare Products', 'Hair Tools', 'Massage Devices', 'Supplements', 'Medical Devices'],
    hubs: 'Guangzhou, Shanghai',
    imgId: 'prod-health-img-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, and sporting goods.',
    examples: ['Gym Equipment', 'Camping Gear', 'Bicycles', 'Yoga Mats', 'Water Sports'],
    hubs: 'Xiamen, Quanzhou',
    imgId: 'prod-sports-img-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials for brands and retailers.',
    examples: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Hang Tags', 'Mailer Boxes'],
    hubs: 'Shenzhen, Dongguan',
    imgId: 'prod-packaging-img-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto',
    title: 'Auto Parts',
    desc: 'Automotive components, accessories, and replacement parts for distributors and workshops.',
    examples: ['Brake Parts', 'Filters', 'Lighting', 'Interior Accessories', 'Engine Parts'],
    hubs: 'Guangzhou, Wenzhou',
    imgId: 'prod-auto-img-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial supplies.',
    examples: ['Power Tools', 'Hand Tools', 'Fasteners', 'Locks & Hinges', 'Safety Equipment'],
    hubs: 'Yongkang, Wenzhou',
    imgId: 'prod-hardware-img-b1c2d3',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'pet',
    title: 'Pet Products',
    desc: 'Pet accessories, food products, grooming tools, and pet care items.',
    examples: ['Pet Beds', 'Collars & Leashes', 'Grooming Tools', 'Pet Toys', 'Feeding Bowls'],
    hubs: 'Guangzhou, Shenzhen',
    imgId: 'prod-pet-img-e4f5g6',
    titleId: 'prod-pet-title',
    descId: 'prod-pet-desc',
  },
  {
    id: 'led',
    title: 'LED Lighting',
    desc: 'Commercial and residential LED lighting solutions, smart lighting, and lighting components.',
    examples: ['LED Bulbs', 'Strip Lights', 'Downlights', 'Street Lights', 'Smart Lighting'],
    hubs: 'Zhongshan, Shenzhen',
    imgId: 'prod-led-img-h7i8j9',
    titleId: 'prod-led-title',
    descId: 'prod-led-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-red/20 text-red-300 mb-6">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Products We Source</h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            We have established supplier networks across China's major manufacturing hubs, covering a wide range of product categories.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="12 Categories"
            title="Our Sourcing Coverage"
            subtitle="Don't see your product category? Contact us — we source across many more industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.id} hover className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-navy-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Examples</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="font-medium text-brand-blue">Main hubs:</span>
                    <span>{cat.hubs}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for a Specific Product?"
        subtitle="Tell us what you need and we will find the right supplier for you."
        buttonText="Submit a Sourcing Request"
      />
    </div>
  );
}
