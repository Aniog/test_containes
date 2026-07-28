import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-uk-furniture',
    title: 'UK Furniture Retailer Reduces Defect Rate by 60%',
    category: 'Quality Control',
    country: 'United Kingdom',
    industry: 'Furniture & Home Goods',
    challenge: 'A UK-based furniture retailer was receiving shipments with a 15–20% defect rate from their existing Chinese supplier. Customer complaints were increasing and returns were costly.',
    solution: 'We conducted a full factory audit of their existing supplier, identified root causes of quality issues, and implemented a structured QC checklist. We also sourced two alternative manufacturers as backup options.',
    result: '60% reduction in defect rate within two orders. The retailer saved approximately £18,000 in returns and rework costs in the first year.',
    metrics: ['60% defect reduction', '£18,000 cost saving', '2 backup suppliers identified'],
    imgId: 'cs-uk-furniture-img-1a2b3c',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
  },
  {
    id: 'case-us-electronics',
    title: 'US Electronics Brand Launches Smart Home Product Line',
    category: 'Supplier Sourcing',
    country: 'United States',
    industry: 'Consumer Electronics',
    challenge: 'A US consumer electronics startup needed to source a new line of smart home devices with specific FCC and CE certifications. They had no existing supplier relationships in China.',
    solution: 'We researched the Shenzhen electronics manufacturing ecosystem, shortlisted 4 qualified manufacturers, arranged factory visits, and managed the sample and certification process.',
    result: 'Successfully launched 3 new SKUs on time. All products passed FCC and CE certification on the first submission. First production run of 5,000 units delivered on schedule.',
    metrics: ['3 SKUs launched on time', 'FCC & CE certified', '5,000 units first run'],
    imgId: 'cs-us-electronics-img-4d5e6f',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
  },
  {
    id: 'case-au-apparel',
    title: 'Australian Fashion Brand Scales Production Safely',
    category: 'Production Follow-up',
    country: 'Australia',
    industry: 'Apparel & Textiles',
    challenge: 'An Australian fashion brand needed to scale from 500 to 5,000 units per order across two factories. Previous attempts to scale had resulted in quality inconsistencies and missed deadlines.',
    solution: 'We managed supplier negotiations, set up a production monitoring schedule with weekly updates, and conducted DUPRO and pre-shipment inspections at both factories.',
    result: 'Successful scale-up with zero shipment rejections. Production timelines were met for all three orders. The brand expanded to a third factory in the following season.',
    metrics: ['Zero shipment rejections', '3 orders on schedule', 'Expanded to 3 factories'],
    imgId: 'cs-au-apparel-img-7g8h9i',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
  },
  {
    id: 'case-de-machinery',
    title: 'German Distributor Sources Industrial Equipment',
    category: 'Factory Verification',
    country: 'Germany',
    industry: 'Industrial Machinery',
    challenge: 'A German industrial equipment distributor wanted to add Chinese-manufactured machinery to their product range but had concerns about quality standards and CE compliance.',
    solution: 'We identified 3 manufacturers with existing CE certifications, conducted on-site audits, and arranged technical inspections by a third-party engineering firm.',
    result: 'Two manufacturers approved for the distributor\'s supplier list. First order of 20 units delivered with full CE documentation. Ongoing sourcing relationship established.',
    metrics: ['2 approved suppliers', 'Full CE documentation', 'Ongoing partnership'],
    imgId: 'cs-de-machinery-img-1j2k3l',
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
  },
  {
    id: 'case-ca-packaging',
    title: 'Canadian Brand Launches Custom Packaging Line',
    category: 'Supplier Sourcing',
    country: 'Canada',
    industry: 'Packaging & Printing',
    challenge: 'A Canadian health and wellness brand needed custom-printed packaging for a product launch. They required food-safe materials, specific Pantone colors, and a tight 8-week timeline.',
    solution: 'We sourced a specialized packaging manufacturer in Guangdong, managed the artwork approval process, and coordinated express sea freight to meet the launch deadline.',
    result: 'Packaging delivered 3 days ahead of schedule. Color accuracy matched Pantone specifications. The brand reordered within 6 weeks of the initial delivery.',
    metrics: ['Delivered 3 days early', 'Pantone color match', 'Immediate reorder'],
    imgId: 'cs-ca-packaging-img-4m5n6o',
    titleId: 'cs-ca-packaging-title',
    descId: 'cs-ca-packaging-desc',
  },
  {
    id: 'case-ae-toys',
    title: 'UAE Toy Importer Passes Safety Certification',
    category: 'Quality Control',
    country: 'UAE',
    industry: 'Toys & Baby Products',
    challenge: 'A UAE toy importer had a shipment rejected at customs due to missing EN71 safety certifications. They needed a new supplier who could provide compliant products quickly.',
    solution: 'We identified two EN71-certified toy manufacturers, arranged samples within 10 days, and managed the production and inspection process for a replacement order.',
    result: 'Replacement order produced and shipped within 6 weeks. All products passed EN71 testing. The importer avoided a second customs rejection and maintained their retail contracts.',
    metrics: ['6-week turnaround', 'EN71 certified', 'Retail contracts maintained'],
    imgId: 'cs-ae-toys-img-7p8q9r',
    titleId: 'cs-ae-toys-title',
    descId: 'cs-ae-toys-desc',
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
      {/* Header */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Case Studies
          </span>
          <h1 id="cs-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results for Real Buyers
          </h1>
          <p id="cs-page-subtitle" className="text-gray-300 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across industries and countries source smarter from China.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c) => (
              <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [cs-page-subtitle] [cs-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                    <span className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                      {c.industry}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-1.5 text-brand-mid text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {c.country}
                  </div>
                  <h2 id={c.titleId} className="font-bold text-brand-dark text-lg mb-4 leading-snug">{c.title}</h2>

                  <div className="space-y-4 mb-5">
                    <div>
                      <h4 className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">Challenge</h4>
                      <p id={c.descId} className="text-brand-mid text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">Our Solution</h4>
                      <p className="text-brand-mid text-sm leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-brand-green" />
                      <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">Results</span>
                    </div>
                    <p className="text-brand-dark text-sm leading-relaxed mb-3">{c.result}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.metrics.map((m) => (
                        <span key={m} className="flex items-center gap-1 bg-white text-brand-green text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">
                          <CheckCircle className="w-3 h-3" />
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-blue-200 mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
