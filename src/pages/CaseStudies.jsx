import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 'uk-furniture',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Home Goods Retailer Cuts Sourcing Costs by 32%',
    challenge: 'A UK-based home goods retailer was sourcing solid wood furniture through a trading company and paying high margins. They needed to connect directly with manufacturers to reduce costs and improve quality control.',
    solution: 'We identified 4 verified solid wood furniture factories in Guangdong province, conducted on-site audits, and negotiated direct pricing. We managed QC inspections across 3 production runs and coordinated sea freight to the UK.',
    results: [
      '32% reduction in unit cost vs. previous supplier',
      'Zero defect shipments across all 3 production runs',
      'Lead time reduced from 90 to 65 days',
      'Direct factory relationship established',
    ],
    duration: '8 months',
    imgId: 'cs-uk-furniture-img-a1b2c3',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
  },
  {
    id: 'us-electronics',
    category: 'Electronics',
    country: 'United States',
    title: 'US Startup Launches Private Label Bluetooth Speakers',
    challenge: 'An American consumer electronics startup needed to find an OEM manufacturer for Bluetooth speakers, manage sample development, and ensure CE and FCC certification compliance for their launch.',
    solution: 'We sourced 3 qualified OEM factories in Shenzhen, managed 2 rounds of sample development, coordinated certification testing with an accredited lab, and oversaw production of the first 2,000-unit order.',
    results: [
      'Product launched within 14 weeks of initial inquiry',
      'CE and FCC certifications obtained',
      'Sample development completed in 3 rounds',
      'First production order delivered on schedule',
    ],
    duration: '5 months',
    imgId: 'cs-us-electronics-img-d4e5f6',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 10x',
    challenge: 'An Australian fashion brand was producing 500 units per style but needed to scale to 5,000 units to meet retail demand. Their existing factory could not handle the volume and quality was inconsistent.',
    solution: 'We identified a Guangzhou factory with the right capacity and quality management systems. We managed inline QC inspections for 6 consecutive seasons and implemented a production tracking system.',
    results: [
      'Successfully scaled from 500 to 5,000 units per style',
      'On-time delivery maintained for 6 consecutive seasons',
      'Defect rate reduced to under 1%',
      'Cost per unit reduced by 18% at higher volumes',
    ],
    duration: '18 months ongoing',
    imgId: 'cs-au-apparel-img-g7h8i9',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
  },
  {
    id: 'de-machinery',
    category: 'Industrial',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Safety Equipment',
    challenge: 'A German industrial distributor needed to source CE-certified safety equipment at competitive prices to expand their product range. They had no existing China contacts and needed full compliance documentation.',
    solution: 'We identified 2 factories with existing CE certifications for the required product categories, conducted factory audits, verified all compliance documentation, and managed the first container shipment.',
    results: [
      'CE-certified products sourced and verified',
      'Full compliance documentation provided',
      'First container delivered within agreed timeline',
      '24% cost advantage vs. European alternatives',
    ],
    duration: '4 months',
    imgId: 'cs-de-machinery-img-j1k2l3',
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
  },
  {
    id: 'ca-toys',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Passes ASTM Safety Testing',
    challenge: 'A Canadian toy brand needed to source educational toys that met ASTM F963 safety standards for the North American market. Previous suppliers had failed safety testing, causing costly delays.',
    solution: 'We pre-screened factories based on their experience with ASTM-compliant products, arranged pre-production material testing, and managed a rigorous QC process including third-party lab testing before shipment.',
    results: [
      'All products passed ASTM F963 testing first time',
      'Zero safety-related rejections at customs',
      'Supplier with proven ASTM track record secured',
      'Testing and compliance process documented for future orders',
    ],
    duration: '6 months',
    imgId: 'cs-ca-toys-img-m4n5o6',
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
  },
  {
    id: 'fr-packaging',
    category: 'Packaging',
    country: 'France',
    title: 'French Cosmetics Brand Develops Custom Packaging',
    challenge: 'A French cosmetics brand needed custom-printed packaging boxes and inserts that matched their brand standards. They required Pantone color matching, specific paper grades, and food-safe inks.',
    solution: 'We sourced 3 packaging factories in Guangdong, managed color matching samples, verified paper certifications, and coordinated a 50,000-unit production run with strict quality standards.',
    results: [
      'Pantone color matching achieved within 2 sample rounds',
      'Food-safe ink certification verified',
      'Production completed 5 days ahead of schedule',
      '40% cost saving vs. European packaging suppliers',
    ],
    duration: '3 months',
    imgId: 'cs-fr-packaging-img-p7q8r9',
    titleId: 'cs-fr-packaging-title',
    descId: 'cs-fr-packaging-desc',
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
      <section className="bg-navy-900 text-white py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Case Studies
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real results from global buyers who sourced through SSourcing China. Each case study reflects a genuine client engagement with documented outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className={`lg:col-span-2 rounded-2xl overflow-hidden bg-gray-100 h-64 lg:h-80 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`lg:col-span-3 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gold-100 text-gold-700 text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                    <span className="bg-navy-50 text-navy-700 text-xs font-semibold px-2.5 py-1 rounded-full">{cs.country}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {cs.duration}
                    </span>
                  </div>
                  <h2 id={cs.titleId} className="text-navy-800 text-xl font-bold mb-3">{cs.title}</h2>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                    <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Our Approach</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Results</p>
                    <ul className="flex flex-col gap-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
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

      {/* CTA */}
      <section className="bg-navy-800 py-16">
        <div className="container-xl text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Get a free sourcing consultation and find out how we can help your business source from China more effectively.
          </p>
          <Link to="/contact" className="btn-gold">
            Get a Free Sourcing Quote <ArrowRight className="inline w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
