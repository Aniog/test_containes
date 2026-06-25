import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';

const categories = [
  {
    id: 'cat-electronics',
    titleId: 'cat-title-electronics',
    descId: 'cat-desc-electronics',
    imgId: 'cat-img-electronics-a1b2c3',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components from Shenzhen and Guangdong manufacturers.',
    examples: ['Bluetooth speakers', 'LED lighting', 'Power banks', 'Smart home devices', 'PCB assemblies'],
    region: 'Shenzhen, Guangdong',
  },
  {
    id: 'cat-furniture',
    titleId: 'cat-title-furniture',
    descId: 'cat-desc-furniture',
    imgId: 'cat-img-furniture-d4e5f6',
    title: 'Furniture & Home Decor',
    desc: 'Solid wood, MDF, and metal furniture, home accessories, decorative items, and soft furnishings from Foshan, Guangzhou, and surrounding areas.',
    examples: ['Office chairs', 'Dining tables', 'Sofas', 'Decorative accessories', 'Storage solutions'],
    region: 'Foshan, Guangzhou',
  },
  {
    id: 'cat-apparel',
    titleId: 'cat-title-apparel',
    descId: 'cat-desc-apparel',
    imgId: 'cat-img-apparel-g7h8i9',
    title: 'Clothing & Textiles',
    desc: 'Garments, fabrics, sportswear, workwear, and accessories from manufacturers in Guangzhou, Hangzhou, and Jiangsu with OEM and private label capabilities.',
    examples: ['T-shirts and hoodies', 'Sportswear', 'Workwear', 'Fabrics and yarn', 'Bags and accessories'],
    region: 'Guangzhou, Hangzhou, Jiangsu',
  },
  {
    id: 'cat-machinery',
    titleId: 'cat-title-machinery',
    descId: 'cat-desc-machinery',
    imgId: 'cat-img-machinery-j1k2l3',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, and machinery components from manufacturers in Zhejiang, Jiangsu, and Shandong.',
    examples: ['Power tools', 'Industrial pumps', 'CNC parts', 'Hardware fittings', 'Safety equipment'],
    region: 'Zhejiang, Jiangsu, Shandong',
  },
  {
    id: 'cat-toys',
    titleId: 'cat-title-toys',
    descId: 'cat-desc-toys',
    imgId: 'cat-img-toys-m4n5o6',
    title: 'Toys & Baby Products',
    desc: 'Plastic and wooden toys, educational products, baby gear, and children\'s accessories from certified manufacturers in Guangdong and Zhejiang.',
    examples: ['Educational toys', 'Wooden toys', 'Baby gear', 'Outdoor play equipment', 'Puzzles and games'],
    region: 'Guangdong, Zhejiang',
  },
  {
    id: 'cat-health',
    titleId: 'cat-title-health',
    descId: 'cat-desc-health',
    imgId: 'cat-img-health-p7q8r9',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness devices, and health accessories from manufacturers with GMP and ISO certifications.',
    examples: ['Skincare products', 'Massage devices', 'Fitness accessories', 'Medical devices', 'Supplements packaging'],
    region: 'Guangzhou, Shanghai',
  },
  {
    id: 'cat-sports',
    titleId: 'cat-title-sports',
    descId: 'cat-desc-sports',
    imgId: 'cat-img-sports-s1t2u3',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories from manufacturers across China.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
    region: 'Xiamen, Zhejiang',
  },
  {
    id: 'cat-packaging',
    titleId: 'cat-title-packaging',
    descId: 'cat-desc-packaging',
    imgId: 'cat-img-packaging-v4w5x6',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, and printed materials for retail and e-commerce brands.',
    examples: ['Custom boxes', 'Paper bags', 'Labels and stickers', 'Retail packaging', 'Gift packaging'],
    region: 'Guangdong, Zhejiang',
  },
  {
    id: 'cat-auto',
    titleId: 'cat-title-auto',
    descId: 'cat-desc-auto',
    imgId: 'cat-img-auto-y7z8a9',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, and vehicle components from manufacturers in Guangdong and Zhejiang.',
    examples: ['Car accessories', 'Lighting systems', 'Interior parts', 'Exterior accessories', 'Tools and equipment'],
    region: 'Guangdong, Zhejiang',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Products We Source from China"
        subtitle="We source across a wide range of product categories. If you don't see your product listed, contact us — we likely have relevant supplier connections."
        breadcrumb="Products We Source"
        cta="Get a Free Sourcing Quote"
      />

      {/* Categories Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[3x2] bg-[#e8f0fb] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 id={cat.titleId} className="text-lg font-semibold text-[#1a202c]">{cat.title}</h3>
                  </div>
                  <p className="text-[#64748b] text-xs mb-1">Main sourcing region: <span className="font-medium text-[#1a4f8a]">{cat.region}</span></p>
                  <p id={cat.descId} className="text-[#64748b] text-sm leading-relaxed mt-3 mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-[#f4f6f9] text-[#64748b] text-xs px-2 py-1 rounded-md">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="bg-[#f4f6f9] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-4">Don't See Your Product?</h2>
          <p className="text-[#64748b] mb-8">
            We source across many more categories than listed here. If you have a specific product in mind, contact us and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBanner
        title="Ready to Source Your Product?"
        subtitle="Submit your inquiry and we'll identify the right suppliers within 5–10 business days."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
};

export default Products;
