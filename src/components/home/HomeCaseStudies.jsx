import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'furniture-uk',
    client: 'UK Furniture Retailer',
    product: 'Office Chairs',
    result: 'Reduced unit cost by 22% while maintaining EN 1335 certification compliance.',
    country: '🇬🇧 United Kingdom',
    imgId: 'case-furniture-uk-a1b2',
    titleId: 'case-furniture-uk-title',
    descId: 'case-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    product: 'LED Lighting Products',
    result: 'Sourced UL-certified LED fixtures and scaled from 500 to 10,000 units in 6 months.',
    country: '🇺🇸 United States',
    imgId: 'case-electronics-us-c3d4',
    titleId: 'case-electronics-us-title',
    descId: 'case-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    client: 'Australian Sportswear Brand',
    product: 'Private Label Activewear',
    result: 'Developed a full private label line with custom branding, delivered on schedule.',
    country: '🇦🇺 Australia',
    imgId: 'case-apparel-au-e5f6',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
  },
];

const HomeCaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Results"
          title="Case Studies"
          subtitle="Real sourcing projects, real outcomes. See how we've helped businesses like yours."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-bg-light rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={c.product}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-1">{c.country}</p>
                <h3 id={c.titleId} className="font-semibold text-blue-navy mb-1">{c.client}</h3>
                <p className="text-sm text-red-china font-medium mb-2">{c.product}</p>
                <p id={c.descId} className="text-gray-600 text-sm leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-block border-2 border-blue-navy text-blue-navy hover:bg-blue-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
