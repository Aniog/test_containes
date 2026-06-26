import { useEffect, useRef } from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const caseStudies = [
  {
    id: 'cs-1',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
    imgId: 'cs-img-1-a3f9b2',
    category: 'Electronics',
    country: 'United States',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A mid-size US electronics retailer was paying above-market prices for Bluetooth speakers from a supplier they found online. They had no visibility into the factory and had experienced two quality failures in the past year.',
    solution: 'We sourced 4 alternative factories, conducted on-site audits at 2 shortlisted suppliers, and negotiated a new supply agreement. We also implemented a pre-shipment inspection protocol.',
    result: '22% cost reduction, zero quality failures in 18 months, and a reliable supply chain with full factory visibility.',
    metrics: ['22% cost reduction', '0 quality failures', '18 months of smooth supply'],
  },
  {
    id: 'cs-2',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
    imgId: 'cs-img-2-b7e1c4',
    category: 'Furniture',
    country: 'Germany',
    title: 'German Brand Launches Outdoor Furniture Line in 14 Weeks',
    challenge: 'A German home goods brand wanted to launch a new outdoor furniture line but had no existing China supplier relationships. They needed a manufacturer capable of producing to European quality standards.',
    solution: 'We identified 3 qualified furniture manufacturers in Guangdong, conducted factory audits, arranged samples, and managed the full production and shipping process.',
    result: 'First shipment delivered in 14 weeks from initial inquiry. Product passed all EU compliance checks. The client has since placed 3 repeat orders.',
    metrics: ['14-week launch', 'EU compliance passed', '3 repeat orders placed'],
  },
  {
    id: 'cs-3',
    titleId: 'cs-title-3',
    descId: 'cs-desc-3',
    imgId: 'cs-img-3-d2a8f5',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Reduces Defect Rate from 8% to 0.5%',
    challenge: 'An Australian fashion brand was experiencing recurring quality defects — wrong colors, stitching failures, and incorrect sizing — that were damaging their brand reputation and increasing return rates.',
    solution: 'Our QC team implemented a 3-stage inspection protocol: pre-production material check, mid-production inspection, and pre-shipment final inspection. We also worked with the factory to improve their internal QC process.',
    result: 'Defect rate dropped from 8% to under 0.5% within two production cycles. Customer return rates fell by 60%.',
    metrics: ['0.5% defect rate', '60% fewer returns', '3-stage QC protocol'],
  },
  {
    id: 'cs-4',
    titleId: 'cs-title-4',
    descId: 'cs-desc-4',
    imgId: 'cs-img-4-e5c9d1',
    category: 'Hardware',
    country: 'Canada',
    title: 'Canadian Distributor Finds Certified Hardware Supplier',
    challenge: 'A Canadian hardware distributor needed a supplier for power tools that could provide UL and CSA certifications. Previous suppliers had failed to deliver compliant products.',
    solution: 'We sourced 5 factories with existing UL/CSA certification experience, audited 3, and coordinated third-party lab testing for the selected supplier\'s product range.',
    result: 'Compliant product range launched on schedule. All certifications obtained within the project timeline. The client now sources 4 product lines through us.',
    metrics: ['Full UL/CSA compliance', 'On-schedule launch', '4 product lines sourced'],
  },
  {
    id: 'cs-5',
    titleId: 'cs-title-5',
    descId: 'cs-desc-5',
    imgId: 'cs-img-5-f1b7e3',
    category: 'Toys',
    country: 'United Kingdom',
    title: 'UK Toy Brand Passes EN71 Safety Testing First Time',
    challenge: 'A UK toy startup needed to source a range of wooden educational toys that would pass EN71 safety standards. They had no prior China sourcing experience.',
    solution: 'We guided them through the full process: supplier sourcing, factory audit, sample review, EN71 testing coordination, and production monitoring.',
    result: 'All products passed EN71 testing on the first submission. First order delivered on time and within budget. The client has since expanded their product range.',
    metrics: ['EN71 passed first time', 'On-time delivery', 'Range expanded to 12 SKUs'],
  },
  {
    id: 'cs-6',
    titleId: 'cs-title-6',
    descId: 'cs-desc-6',
    imgId: 'cs-img-6-g4d2a8',
    category: 'Packaging',
    country: 'France',
    title: 'French Cosmetics Brand Sources Eco-Friendly Packaging',
    challenge: 'A French cosmetics brand needed to transition to sustainable packaging but struggled to find Chinese suppliers with genuine eco-credentials and the right certifications.',
    solution: 'We sourced and audited 4 packaging manufacturers with FSC and biodegradable material certifications. We also arranged material testing to verify eco-claims.',
    result: 'Sustainable packaging range launched successfully. All materials verified as compliant with EU eco-labeling requirements. 15% cost saving vs. European suppliers.',
    metrics: ['FSC certified materials', 'EU eco-label compliant', '15% cost saving'],
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
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real results from real buyers. See how we've helped businesses across industries
              source smarter, reduce risk, and grow their supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56 bg-brand-light overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-2 py-1 rounded">{cs.category}</span>
                    <span className="bg-brand-navy/80 text-white text-xs font-semibold px-2 py-1 rounded">{cs.country}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 id={cs.titleId} className="text-xl font-bold text-brand-navy mb-3">{cs.title}</h2>

                  <div className="space-y-3 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-brand-gray text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">Our Solution</p>
                      <p className="text-brand-gray text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p id={cs.descId} className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">Result</p>
                      <p className="text-brand-gray text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {cs.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-1 bg-brand-light text-brand-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                        <TrendingUp className="w-3 h-3 text-brand-blue" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
