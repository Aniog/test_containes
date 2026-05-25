import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTASection from '@/components/home/CTASection';

const cases = [
  {
    id: 'case-1',
    client: 'HomeStyle Retail Group',
    country: 'United States',
    flag: '🇺🇸',
    industry: 'Furniture & Home Decor',
    product: 'Solid Wood Dining Sets',
    challenge: 'The client had received two consecutive shipments with significant quality defects — warped tabletops and mismatched stain colors — from a supplier found independently on Alibaba. They needed a reliable alternative and a process to prevent recurrence.',
    approach: 'We audited 8 furniture factories in Guangdong and Fujian provinces, focusing on wood drying processes and finishing quality. We selected a factory with ISO 9001 certification and implemented a 3-stage QC process: raw material check, mid-production inspection, and pre-shipment inspection.',
    result: 'Zero quality defects across 4 subsequent orders totaling $380,000 in goods. The client also achieved a 23% cost reduction compared to their previous supplier.',
    metrics: ['23% cost reduction', '$380K in orders managed', '4 defect-free shipments', '0 quality complaints'],
    titleId: 'case-title-1',
    descId: 'case-desc-1',
    imgId: 'case-img-1a2b',
  },
  {
    id: 'case-2',
    client: 'SoundWave Electronics',
    country: 'Australia',
    flag: '🇦🇺',
    industry: 'Consumer Electronics',
    product: 'Wireless Earbuds (OEM)',
    challenge: 'A startup brand needed to launch a private label wireless earbud product with CE and FCC certifications, custom packaging, and a 90-day time-to-market target.',
    approach: 'We identified a Shenzhen manufacturer with an existing certified earbud platform that could be customized. We coordinated packaging design, firmware branding, and certification testing in parallel to compress the timeline.',
    result: 'First batch of 5,000 units delivered within 84 days — 6 days ahead of target. The product launched successfully on Amazon AU and achieved a 4.3-star rating within 3 months.',
    metrics: ['84-day time to market', '5,000 units first batch', 'CE & FCC certified', '4.3★ Amazon rating'],
    titleId: 'case-title-2',
    descId: 'case-desc-2',
    imgId: 'case-img-2c3d',
  },
  {
    id: 'case-3',
    client: 'ProFit Sports GmbH',
    country: 'Germany',
    flag: '🇩🇪',
    industry: 'Sports & Fitness',
    product: 'Commercial Fitness Equipment',
    challenge: 'The client was over-reliant on a single supplier and experiencing 3–4 week delays on seasonal orders. They needed supply chain diversification and faster lead times.',
    approach: 'We identified and audited 3 backup suppliers capable of producing the same product range. We negotiated staggered production agreements and established a rolling order system to reduce peak-season bottlenecks.',
    result: 'Average lead time reduced from 65 days to 47 days. The client now has 3 active suppliers and has not experienced a stockout in 18 months.',
    metrics: ['18-day lead time reduction', '3 qualified backup suppliers', '0 stockouts in 18 months', '28% lower freight costs'],
    titleId: 'case-title-3',
    descId: 'case-desc-3',
    imgId: 'case-img-3e4f',
  },
  {
    id: 'case-4',
    client: 'NaturaCare Beauty',
    country: 'United Kingdom',
    flag: '🇬🇧',
    industry: 'Beauty & Personal Care',
    product: 'Private Label Skincare Range',
    challenge: 'A UK beauty brand wanted to launch a 12-SKU private label skincare range with custom formulations, compliant with EU cosmetics regulations, within a limited budget.',
    approach: 'We sourced a Guangzhou cosmetics manufacturer with EU export experience and in-house formulation capabilities. We managed the entire process from formula development to CPNP registration support and custom packaging production.',
    result: 'Full 12-SKU range launched within 5 months. The brand secured listings in 3 UK retail chains within 6 months of launch.',
    metrics: ['12 SKUs launched', '5-month development cycle', '3 retail chain listings', 'EU compliant formulations'],
    titleId: 'case-title-4',
    descId: 'case-desc-4',
    imgId: 'case-img-4g5h',
  },
];

const CaseStudies = () => {
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
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Case Studies
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we've helped global buyers source smarter from China.
          </p>
        </div>
      </div>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((c, index) => (
              <div key={c.id} className="bg-bg-light rounded-2xl border border-border overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 h-56 lg:h-auto bg-bg-surface overflow-hidden">
                    <img
                      alt={c.product}
                      className="w-full h-full object-cover"
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {c.industry}
                      </span>
                      <span className="text-text-muted text-sm flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {c.flag} {c.country}
                      </span>
                    </div>

                    <h2 id={c.titleId} className="text-xl font-bold text-text-primary mb-1">{c.client}</h2>
                    <p className="text-text-muted text-sm mb-4">Product: {c.product}</p>

                    <div className="space-y-3 mb-5">
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Challenge</h4>
                        <p id={c.descId} className="text-text-secondary text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Our Approach</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">{c.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Result</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">{c.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {c.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-2 bg-success/10 text-success text-xs font-semibold px-3 py-2 rounded-lg">
                          <Star className="w-3.5 h-3.5 fill-success flex-shrink-0" />
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CaseStudies;
