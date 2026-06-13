import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED lighting, sensors, and electronic components.',
    examples: ['Smart home devices', 'LED lighting', 'Circuit boards', 'Sensors & modules'],
    id: 'prod-electronics',
    imgId: 'prod-elec-h7i8j9',
  },
  {
    name: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, packaging machines, and manufacturing tools.',
    examples: ['CNC machines', 'Packaging equipment', 'Industrial tools', 'Automation systems'],
    id: 'prod-machinery',
    imgId: 'prod-mach-k1l2m3',
  },
  {
    name: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, home decor, garden tools, and household items.',
    examples: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools'],
    id: 'prod-home',
    imgId: 'prod-home-n4o5p6',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, sportswear, accessories, and custom textile products.',
    examples: ['Casual wear', 'Sportswear', 'Fabrics & textiles', 'Fashion accessories'],
    id: 'prod-apparel',
    imgId: 'prod-appa-q7r8s9',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, car accessories, and motorcycle components.',
    examples: ['Engine parts', 'Car accessories', 'Motorcycle parts', 'Lighting & electrical'],
    id: 'prod-auto',
    imgId: 'prod-auto-t1u2v3',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and promotional products.',
    examples: ['Custom boxes', 'Labels & stickers', 'Printing services', 'Promotional items'],
    id: 'prod-packaging',
    imgId: 'prod-pack-w4x5y6',
  },
  {
    name: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing fixtures, and building supplies.',
    examples: ['Tiles & flooring', 'Plumbing fixtures', 'Hardware', 'Building supplies'],
    id: 'prod-building',
    imgId: 'prod-buil-z7a8b9',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, medical supplies, and wellness items.',
    examples: ['Cosmetics', 'Personal care', 'Medical supplies', 'Wellness products'],
    id: 'prod-health',
    imgId: 'prod-heal-c1d2e3',
  },
  {
    name: 'Sports & Outdoors',
    desc: 'Sporting goods, outdoor equipment, fitness gear, and recreational products.',
    examples: ['Fitness equipment', 'Outdoor gear', 'Sporting goods', 'Camping supplies'],
    id: 'prod-sports',
    imgId: 'prod-spor-f4g5h6',
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const strkImgConfig = (await import('@/strk-img-config.json')).default;
        if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {
        console.log('Image loading skipped:', e.message);
      }
    };
    loadImages();
  }, []);

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We source across a wide range of industries. If it is made in China, we can find a qualified supplier for you.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-desc-${cat.id}] [prod-title-${cat.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-gray-200"
                />
                <div className="p-6">
                  <h3 id={`prod-title-${cat.id}`} className="text-lg font-semibold text-navy mb-2">{cat.name}</h3>
                  <p id={`prod-desc-${cat.id}`} className="text-gray-600 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-surface text-gray-700 px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-surface rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-navy mb-3">Do Not See Your Product Category?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We source many more product types than listed here. Contact us with your specific requirements and we will let you know how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-dark transition-colors no-underline"
            >
              Ask About Your Product
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
