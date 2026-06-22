import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHero from '@/components/shared/SectionHero';
import CtaBanner from '@/components/shared/CtaBanner';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    products: ['Consumer electronics', 'LED lighting', 'PCBs & components', 'Cables & connectors', 'Smart home devices', 'Power banks & chargers'],
    desc: 'China is the world\'s largest electronics manufacturer. We source from certified factories in Shenzhen, Dongguan, and Suzhou.',
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Goods',
    products: ['Office furniture', 'Home décor', 'Storage solutions', 'Custom wood products', 'Metal furniture', 'Outdoor furniture'],
    desc: 'Foshan and Guangzhou are China\'s furniture capitals. We connect you with factories offering OEM and custom designs.',
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    products: ['Clothing & fashion', 'Sportswear', 'Uniforms & workwear', 'Fabrics & materials', 'Accessories', 'Bags & luggage'],
    desc: 'Guangzhou, Hangzhou, and Keqiao are major textile hubs. We source from factories with international compliance certifications.',
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    name: 'Industrial Machinery & Tools',
    products: ['Manufacturing equipment', 'Power tools', 'Hand tools', 'Spare parts', 'Industrial components', 'Safety equipment'],
    desc: 'We source industrial products from verified manufacturers in Zhejiang, Jiangsu, and Shandong provinces.',
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    products: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Promotional materials', 'Retail packaging', 'Eco-friendly packaging'],
    desc: 'Custom packaging from China offers significant cost savings. We work with factories that handle small and large print runs.',
    imgId: 'prod-packaging-img-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    products: ['Plastic toys', 'Educational toys', 'Baby gear', 'Outdoor play equipment', 'Board games', 'Stuffed animals'],
    desc: 'Shantou and Dongguan are China\'s toy manufacturing centers. We ensure factories meet EN71, ASTM, and CPSC standards.',
    imgId: 'prod-toys-img-p7q8r9',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    products: ['Skincare products', 'Cosmetics', 'Medical devices', 'Fitness equipment', 'Supplements packaging', 'Personal care items'],
    desc: 'We source health and beauty products from GMP-certified factories with proper regulatory documentation.',
    imgId: 'prod-health-img-s1t2u3',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'auto',
    name: 'Automotive Parts',
    products: ['Car accessories', 'Replacement parts', 'Lighting', 'Interior accessories', 'Tools & equipment', 'Motorcycle parts'],
    desc: 'China\'s automotive parts industry is vast. We verify factory certifications and quality systems before recommending suppliers.',
    imgId: 'prod-auto-img-v4w5x6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    products: ['Fitness equipment', 'Camping gear', 'Sports apparel', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
    desc: 'From gym equipment to outdoor gear, we source from factories with international quality certifications.',
    imgId: 'prod-sports-img-y7z8a9',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.title = 'Products We Source | SSourcing China';
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <div ref={containerRef}>
      <SectionHero
        badge="Product Categories"
        title="Products We Source from China"
        subtitle="We have hands-on experience sourcing across a wide range of product categories. If you don't see your product here, contact us — we likely can help."
        cta="Request a Sourcing Quote"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActive(active === cat.id ? null : cat.id)}
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-primary-dark mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm mb-3">{cat.desc}</p>
                  {active === cat.id && (
                    <ul className="grid grid-cols-2 gap-1 mb-3">
                      {cat.products.map((p) => (
                        <li key={p} className="text-xs text-gray-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {active === cat.id ? 'Show less' : 'View products'} <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-light-blue rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              We source a wide variety of products beyond the categories listed here. Tell us what you need and we'll assess whether we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Submit a Custom Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Source Your Product from China?"
        subtitle="Get a free sourcing assessment and supplier shortlist within 5–10 business days."
        cta="Get a Free Sourcing Quote"
      />
    </div>
  );
}
