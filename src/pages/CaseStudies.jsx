import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, ArrowRight, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-electronics-us',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-img-electronics-us-a1b2c3',
    category: 'Electronics',
    country: 'United States',
    title: 'US Retailer Cuts PCB Sourcing Costs by 22%',
    challenge: 'A mid-size US electronics retailer was paying above-market prices for PCBs from a single supplier with no backup. They needed a verified alternative with competitive pricing.',
    solution: 'We audited 8 PCB manufacturers in Shenzhen and Dongguan, verified their ISO 9001 certifications, and negotiated pricing with 3 shortlisted factories. The client received samples within 2 weeks.',
    result: 'The client switched to a new certified supplier at 22% below their previous cost, with a backup supplier identified. Lead times improved from 45 to 30 days.',
    metrics: ['22% cost reduction', '30-day lead time', 'ISO 9001 certified supplier', 'Backup supplier secured'],
    fullDesc: 'A mid-size US electronics retailer needed a reliable PCB manufacturer. We audited 8 factories and secured a certified supplier at 22% below their previous cost.',
  },
  {
    id: 'cs-furniture-eu',
    titleId: 'cs-furniture-eu-title',
    descId: 'cs-furniture-eu-desc',
    imgId: 'cs-img-furniture-eu-d4e5f6',
    category: 'Furniture',
    country: 'Germany',
    title: 'German Brand Launches Private Label Furniture Line',
    challenge: 'A German home brand wanted to launch a private label furniture range but had no China sourcing experience. They needed OEM factories capable of custom designs and European compliance.',
    solution: 'We sourced 3 OEM furniture factories in Guangdong, managed sample development across 12 SKUs, reviewed EN 71 and REACH compliance, and coordinated the first container shipment.',
    result: 'The brand launched on schedule with 12 SKUs, zero defects on first shipment, and a 35% margin improvement over their previous European supplier.',
    metrics: ['12 SKUs launched', '0 defects on delivery', '35% margin improvement', 'EN 71 compliant'],
    fullDesc: 'A European home brand wanted to launch a private label furniture range. We sourced 3 OEM factories, managed sampling, and coordinated the first container shipment.',
  },
  {
    id: 'cs-apparel-au',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    imgId: 'cs-img-apparel-au-g7h8i9',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 10x',
    challenge: 'An Australian fashion startup needed to scale from 500 to 5,000 units per run while maintaining consistent quality. Their existing factory was struggling with capacity.',
    solution: 'We identified a compliant garment factory in Guangzhou with social audit certification, managed quality across 3 production runs, and implemented an inline inspection process.',
    result: 'The brand scaled 10x in 6 months with consistent quality across all runs. Defect rate dropped from 4.2% to under 0.8%.',
    metrics: ['10x production scale', '0.8% defect rate', 'SA8000 compliant factory', '6-month timeline'],
    fullDesc: 'An Australian fashion startup needed to scale from 500 to 5,000 units. We found a compliant garment factory and managed quality across 3 production runs.',
  },
  {
    id: 'cs-toys-uk',
    titleId: 'cs-toys-uk-title',
    descId: 'cs-toys-uk-desc',
    imgId: 'cs-img-toys-uk-j1k2l3',
    category: 'Toys',
    country: 'United Kingdom',
    title: 'UK Toy Brand Achieves EN71 Compliance',
    challenge: 'A UK toy brand was struggling to find Chinese manufacturers capable of meeting EN71 and UKCA requirements. Previous suppliers had failed compliance testing.',
    solution: 'We audited 6 toy factories in Guangdong, verified their EN71 testing capabilities, and coordinated third-party lab testing before bulk production.',
    result: 'The brand passed EN71 compliance on first submission, launched on time for the Christmas season, and reduced per-unit cost by 18%.',
    metrics: ['EN71 first-pass compliance', 'On-time Christmas launch', '18% cost reduction', 'UKCA certified'],
    fullDesc: 'A UK toy brand needed EN71-compliant Chinese manufacturers. We audited 6 factories, verified compliance capabilities, and coordinated lab testing.',
  },
  {
    id: 'cs-sports-ca',
    titleId: 'cs-sports-ca-title',
    descId: 'cs-sports-ca-desc',
    imgId: 'cs-img-sports-ca-m4n5o6',
    category: 'Sports & Outdoor',
    country: 'Canada',
    title: 'Canadian Outdoor Brand Diversifies Supply Chain',
    challenge: 'A Canadian outdoor gear brand was over-reliant on a single supplier. They needed to diversify their supply chain across 2–3 factories to reduce risk.',
    solution: 'We identified and audited 4 outdoor gear manufacturers, ran parallel sample development, and helped the client establish a dual-sourcing strategy with clear quality benchmarks.',
    result: 'The brand now sources from 2 verified factories, reducing supply chain risk and achieving a 12% blended cost saving through competitive pricing.',
    metrics: ['2 verified factories', '12% cost saving', 'Supply chain diversified', 'Risk significantly reduced'],
    fullDesc: 'A Canadian outdoor gear brand needed to diversify their supply chain. We identified 4 manufacturers and established a dual-sourcing strategy.',
  },
  {
    id: 'cs-health-sg',
    titleId: 'cs-health-sg-title',
    descId: 'cs-health-sg-desc',
    imgId: 'cs-img-health-sg-p7q8r9',
    category: 'Health & Beauty',
    country: 'Singapore',
    title: 'Singapore Beauty Brand Launches OEM Skincare Line',
    challenge: 'A Singapore beauty brand wanted to develop a private label skincare range with GMP-certified Chinese manufacturers. They needed help with formulation sourcing and packaging.',
    solution: 'We connected the brand with 2 GMP-certified cosmetics manufacturers, managed formulation development, coordinated custom packaging sourcing, and oversaw stability testing.',
    result: 'The brand launched 8 SKUs within 5 months, all GMP and ISO 22716 compliant, with custom packaging that matched their brand identity.',
    metrics: ['8 SKUs launched', 'GMP & ISO 22716 compliant', '5-month development', 'Custom packaging'],
    fullDesc: 'A Singapore beauty brand wanted to launch a private label skincare range. We connected them with GMP-certified manufacturers and managed the full development process.',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1A3C6E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for Real Clients
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              See how we've helped global buyers source smarter, reduce costs, and build reliable supply chains from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, idx) => (
            <div key={cs.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1 bg-[#EEF2F7] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover min-h-48"
                  />
                </div>
                <div className="lg:col-span-2 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold px-2 py-1 rounded">{cs.category}</span>
                    <span className="bg-[#F7F9FC] text-[#4A5568] text-xs px-2 py-1 rounded border border-[#E2E8F0]">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-[#1A1A2E] mb-4">{cs.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Challenge', text: cs.challenge },
                      { label: 'Solution', text: cs.solution },
                      { label: 'Result', text: cs.result },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#1A3C6E] mb-1">{label}</p>
                        <p id={label === 'Result' ? cs.descId : undefined} className="text-sm text-[#4A5568] leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="flex items-center gap-1 text-xs font-semibold text-[#C0392B] bg-red-50 border border-red-100 px-2 py-1 rounded">
                        <TrendingUp className="w-3 h-3" />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#C0392B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us what you need and we'll put together a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#C0392B] hover:bg-red-50 font-bold px-10 py-4 rounded-lg transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
