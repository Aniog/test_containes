import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui/SharedComponents';

const caseStudies = [
  {
    id: 'cs-us-furniture',
    category: 'Furniture & Home Decor',
    country: 'United States',
    client: 'US Home Goods Retailer',
    title: 'US Retailer Cuts Sourcing Costs by 28% with Verified Suppliers',
    challenge: 'A mid-sized US home goods retailer was sourcing furniture through a trading company and paying inflated prices. They had no visibility into the actual factories and had experienced two shipments with quality issues.',
    solution: 'We identified four verified furniture manufacturers in Foshan, conducted on-site audits, and negotiated directly with factories. We also implemented a pre-shipment inspection protocol.',
    results: [
      '28% reduction in unit costs',
      'Direct factory relationships established',
      'Zero quality rejections in 18 months',
      'Lead times reduced from 90 to 60 days',
    ],
    metric: '28%',
    metricLabel: 'Cost Reduction',
    icon: TrendingDown,
    imgId: 'cs-us-furniture-img-a1b2',
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
  },
  {
    id: 'cs-uk-electronics',
    category: 'Consumer Electronics',
    country: 'United Kingdom',
    client: 'UK Consumer Electronics Brand',
    title: 'UK Brand Launches New Product Line On Time and On Budget',
    challenge: 'A UK electronics brand needed to source a custom PCB assembly for a new product launch. They had no existing China supplier relationships and a tight 6-month timeline.',
    solution: 'We sourced and audited three PCB manufacturers in Shenzhen, managed sample development, and coordinated production monitoring throughout the manufacturing process.',
    results: [
      'Product launched on schedule',
      'Unit cost 18% below initial budget',
      'CE certification achieved',
      'Ongoing supplier relationship established',
    ],
    metric: '18%',
    metricLabel: 'Under Budget',
    icon: TrendingDown,
    imgId: 'cs-uk-electronics-img-c3d4',
    titleId: 'cs-uk-electronics-title',
    descId: 'cs-uk-electronics-desc',
  },
  {
    id: 'cs-au-apparel',
    category: 'Clothing & Textiles',
    country: 'Australia',
    client: 'Australian Fashion Importer',
    title: 'Australian Importer Reduces Defect Rate from 12% to Under 1%',
    challenge: 'An Australian clothing importer had been receiving shipments with a 12% defect rate, causing significant returns and customer complaints. They had no quality control process in place.',
    solution: 'We implemented an in-line and pre-shipment inspection program, introduced AQL sampling, and worked with the factory to address root causes of recurring defects.',
    results: [
      'Defect rate reduced from 12% to 0.8%',
      'Customer return rate dropped by 85%',
      'Factory quality management improved',
      'Inspection reports delivered within 24 hours',
    ],
    metric: '0.8%',
    metricLabel: 'Defect Rate',
    icon: ShieldCheck,
    imgId: 'cs-au-apparel-img-e5f6',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
  },
  {
    id: 'cs-de-machinery',
    category: 'Machinery & Industrial',
    country: 'Germany',
    client: 'German Industrial Equipment Distributor',
    title: 'German Distributor Sources Compliant Industrial Equipment',
    challenge: 'A German distributor needed to source industrial pumps that met EU CE certification requirements. Previous attempts had resulted in non-compliant products being rejected at customs.',
    solution: 'We identified manufacturers with existing CE certification experience, verified their technical documentation, and coordinated third-party testing before shipment.',
    results: [
      'CE-compliant products on first shipment',
      'No customs rejections',
      'Technical documentation fully prepared',
      'Ongoing supply relationship established',
    ],
    metric: '100%',
    metricLabel: 'Compliance Rate',
    icon: ShieldCheck,
    imgId: 'cs-de-machinery-img-g7h8',
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
  },
  {
    id: 'cs-ca-toys',
    category: 'Toys & Baby Products',
    country: 'Canada',
    client: 'Canadian Toy Importer',
    title: 'Canadian Toy Brand Achieves ASTM Compliance for US Market Entry',
    challenge: 'A Canadian toy company wanted to expand into the US market but needed ASTM F963-compliant products. Their existing Chinese supplier could not meet the required standards.',
    solution: 'We sourced three alternative toy manufacturers with ASTM compliance experience, managed sample testing through a certified lab, and oversaw production to ensure standards were maintained.',
    results: [
      'ASTM F963 compliance achieved',
      'US market entry completed on schedule',
      'Lab testing costs reduced by 30%',
      'New supplier relationship 15% cheaper',
    ],
    metric: '15%',
    metricLabel: 'Cost Saving',
    icon: TrendingDown,
    imgId: 'cs-ca-toys-img-i9j0',
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
  },
  {
    id: 'cs-sg-health',
    category: 'Health & Beauty',
    country: 'Singapore',
    client: 'Singapore Health Products Distributor',
    title: 'Singapore Distributor Launches Private Label Skincare Line',
    challenge: 'A Singapore health products distributor wanted to launch a private label skincare range but had no experience with OEM manufacturing in China or the required regulatory documentation.',
    solution: 'We identified OEM cosmetics manufacturers in Guangzhou, managed formulation development, coordinated safety testing, and prepared all required documentation for Singapore import.',
    results: [
      'Private label line launched in 5 months',
      'Full regulatory documentation prepared',
      'MOQ negotiated to fit startup budget',
      'Repeat orders placed within 3 months',
    ],
    metric: '5 mo',
    metricLabel: 'Time to Launch',
    icon: Clock,
    imgId: 'cs-sg-health-img-k1l2',
    titleId: 'cs-sg-health-title',
    descId: 'cs-sg-health-desc',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">Client Results</Badge>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              Sourcing Success Stories
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real results from real buyers. See how we have helped companies across industries source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="How We've Helped Global Buyers"
            subtitle="From cost reduction to compliance, our results speak for themselves."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => {
              const Icon = cs.icon;
              return (
                <Card key={cs.id} className="overflow-hidden p-0 flex flex-col">
                  <div className="overflow-hidden relative">
                    <img
                      alt={cs.title}
                      className="w-full h-48 object-cover"
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 text-center shadow-md">
                      <div className="text-brand-blue text-xl font-extrabold leading-none">{cs.metric}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{cs.metricLabel}</div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="blue">{cs.category}</Badge>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="w-3 h-3" />
                        {cs.country}
                      </div>
                    </div>
                    <h3 id={cs.titleId} className="text-brand-navy font-bold text-base mb-3 leading-snug">{cs.title}</h3>
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                        <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Key Results</p>
                        <ul className="space-y-1">
                          {cs.results.slice(0, 3).map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                              <Icon className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your sourcing challenge and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
