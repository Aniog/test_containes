import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const cases = [
  {
    id: 'us-led-retailer',
    category: 'Electronics',
    country: 'United States',
    title: 'US Retailer Reduces LED Lighting Costs by 22%',
    challenge: 'A mid-size US home improvement retailer was sourcing LED lighting from a trading company at high margins. They suspected they were overpaying and had experienced quality inconsistencies across batches.',
    solution: 'We identified 4 direct manufacturers in Zhongshan, conducted factory audits, and arranged sample testing. We negotiated directly with the best-fit factory and set up a pre-shipment inspection protocol.',
    results: ['22% reduction in unit cost vs. previous supplier', 'Zero defects on first 50,000-unit order', 'Consistent quality across 3 subsequent orders', 'Direct factory relationship established'],
    imgId: 'cs-led-img-a1b2c3',
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
    desc: 'LED lighting factory sourcing and quality inspection for US home improvement retailer',
  },
  {
    id: 'uk-furniture-brand',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Brand Launches Private Label Furniture Line',
    challenge: 'A UK interior design brand wanted to launch a private label furniture collection but had no experience sourcing from China. They needed a reliable partner to manage the entire process.',
    solution: 'We sourced 3 furniture manufacturers in Foshan, conducted audits, and managed sample development over 6 weeks. We coordinated production follow-up and arranged sea freight to the UK.',
    results: ['First order of 200 units delivered on time', '3 new SKUs successfully launched', 'Private label packaging developed and approved', 'Ongoing relationship with 2 factories established'],
    imgId: 'cs-furniture-img-d4e5f6',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    desc: 'Private label furniture sourcing and production management for UK interior design brand',
  },
  {
    id: 'au-apparel-brand',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production',
    challenge: 'An Australian activewear brand was struggling with inconsistent quality and long lead times from their existing Chinese supplier. They needed to diversify and scale production.',
    solution: 'We audited their existing supplier and identified quality management gaps. We also sourced 2 alternative factories in Guangzhou with better capacity and quality systems.',
    results: ['Production capacity doubled within 6 months', 'Lead time reduced from 90 to 63 days', 'Quality rejection rate dropped from 8% to under 1%', 'Two reliable factory relationships established'],
    imgId: 'cs-apparel-img-g7h8i9',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    desc: 'Apparel factory audit and production scaling for Australian activewear brand',
  },
  {
    id: 'de-machinery',
    category: 'Machinery',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Pumps',
    challenge: 'A German industrial distributor needed to source centrifugal pumps meeting EU standards. They had concerns about CE certification authenticity and production consistency.',
    solution: 'We identified 5 pump manufacturers in Wenzhou, verified CE certifications with the issuing bodies, and conducted technical audits. We arranged third-party lab testing of samples.',
    results: ['3 certified suppliers qualified and approved', 'CE certification authenticity confirmed', 'First order of 500 units passed EU customs without issues', 'Ongoing quarterly orders established'],
    imgId: 'cs-machinery-img-j1k2l3',
    titleId: 'cs-machinery-title',
    descId: 'cs-machinery-desc',
    desc: 'Industrial pump sourcing with CE certification verification for German distributor',
  },
  {
    id: 'ca-toys',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Importer Passes Safety Audit',
    challenge: 'A Canadian toy importer had a shipment rejected at customs due to ASTM F963 compliance issues. They needed to find a compliant supplier and establish proper QC procedures.',
    solution: 'We sourced 4 toy manufacturers in Shantou with documented ASTM compliance. We set up a pre-shipment inspection protocol and arranged third-party safety testing before each shipment.',
    results: ['New compliant supplier identified and qualified', 'Zero customs rejections in 18 months since switch', 'Pre-shipment inspection protocol established', 'ASTM F963 compliance maintained across all orders'],
    imgId: 'cs-toys-img-m4n5o6',
    titleId: 'cs-toys-title',
    descId: 'cs-toys-desc',
    desc: 'Toy supplier sourcing with ASTM safety compliance for Canadian importer',
  },
  {
    id: 'sg-packaging',
    category: 'Packaging',
    country: 'Singapore',
    title: 'Singapore E-commerce Brand Gets Custom Packaging',
    challenge: 'A Singapore-based e-commerce brand needed custom branded packaging at competitive prices. They had received poor quality samples from multiple suppliers found online.',
    solution: 'We sourced 3 packaging manufacturers in Shenzhen, managed the design approval process, and arranged sample production. We conducted quality checks on the first production run.',
    results: ['Custom packaging delivered 15% below initial budget', 'First production run approved with minor revisions', 'Consistent quality maintained across 4 orders', 'Packaging design protected under NDA with factory'],
    imgId: 'cs-packaging-img-p7q8r9',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    desc: 'Custom branded packaging sourcing and quality control for Singapore e-commerce brand',
  },
];

export default function CaseStudies() {
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
            Client Results
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Real projects, real outcomes. See how we have helped global buyers source from China with confidence.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {cases.map((cs, i) => (
              <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? '' : ''}`}>
                <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="blue">{cs.category}</Badge>
                    <span className="text-sm text-gray-400">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-navy-900 mb-4">{cs.title}</h2>
                  <p id={cs.descId} className="text-gray-500 text-xs mb-4 hidden">{cs.desc}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">The Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Our Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Results</h4>
                    <ul className="flex flex-col gap-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing project and we will show you how we can help."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
