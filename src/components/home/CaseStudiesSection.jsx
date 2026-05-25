import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'cs1',
    client: 'US Furniture Retailer',
    country: 'United States',
    flag: '🇺🇸',
    product: 'Solid Wood Dining Sets',
    challenge: 'Client had received two shipments with quality defects from a supplier found on Alibaba.',
    result: 'We audited 8 factories, selected a certified manufacturer, and implemented a 3-stage QC process. Zero defects in 4 subsequent orders.',
    saving: '23% cost reduction',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
  },
  {
    id: 'cs2',
    client: 'Australian Electronics Brand',
    country: 'Australia',
    flag: '🇦🇺',
    product: 'Wireless Earbuds (OEM)',
    challenge: 'Needed a factory capable of CE/FCC certification and custom packaging for a private label launch.',
    result: 'Sourced a Shenzhen manufacturer with full certification support. First batch of 5,000 units delivered on time.',
    saving: '6-week faster launch',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
  },
  {
    id: 'cs3',
    client: 'German Sporting Goods Importer',
    country: 'Germany',
    flag: '🇩🇪',
    product: 'Fitness Equipment',
    challenge: 'Needed to diversify from a single supplier and reduce lead times for seasonal orders.',
    result: 'Identified 3 backup suppliers, negotiated staggered production schedules, and reduced average lead time by 18 days.',
    saving: '18-day lead time reduction',
    titleId: 'cs-title-3',
    descId: 'cs-desc-3',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Client Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            Case Studies
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we've helped global buyers source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
              <div
                className="h-44 bg-cover bg-center bg-bg-surface"
                data-strk-bg-id={`cs-bg-${cs.id}`}
                data-strk-bg={`[${cs.descId}] [${cs.titleId}]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.product}
                  </span>
                  <span className="text-sm">{cs.flag} {cs.country}</span>
                </div>
                <h3 id={cs.titleId} className="text-base font-bold text-text-primary mb-2">{cs.client}</h3>
                <p id={cs.descId} className="text-text-secondary text-sm leading-relaxed mb-3">
                  <strong className="text-text-primary">Challenge:</strong> {cs.challenge}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  <strong className="text-text-primary">Result:</strong> {cs.result}
                </p>
                <div className="flex items-center gap-2 bg-success/10 text-success text-sm font-semibold px-3 py-2 rounded-lg">
                  <Star className="w-4 h-4 fill-success" />
                  {cs.saving}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
