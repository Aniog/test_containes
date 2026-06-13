import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import { CheckCircle2, ArrowRight, TrendingDown, ShieldCheck, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-electronics-eu',
    title: 'Electronics Sourcing for EU Distributor',
    client: 'European Electronics Distributor',
    location: 'Germany',
    category: 'Electronics',
    challenge: 'A German electronics distributor was experiencing high defect rates (8%) from their existing Chinese suppliers. They needed a sourcing partner who could find reliable PCB manufacturers and implement consistent quality control.',
    solution: 'We identified 5 qualified PCB suppliers, conducted factory audits, and implemented a 3-stage inspection program (incoming materials, during production, pre-shipment). We also negotiated better pricing by consolidating orders.',
    results: [
      'Defect rate reduced from 8% to under 1%',
      '15% cost reduction through supplier consolidation',
      'On-time delivery rate improved to 97%',
      'Ongoing QC program established across 3 suppliers',
    ],
    imgId: 'cs-electronics-a1b2c3',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'cs-furniture-us',
    title: 'Furniture Quality Control Program',
    client: 'US Furniture Brand',
    location: 'United States',
    category: 'Home & Garden',
    challenge: 'A US furniture brand was receiving inconsistent quality from multiple Chinese factories. They had no on-the-ground presence and relied solely on factory-provided photos, leading to frequent customer complaints.',
    solution: 'We deployed a dedicated QC team to conduct weekly inspections across 4 factories. We created detailed inspection checklists specific to each product line and implemented a defect classification system with photo documentation.',
    results: [
      '23 critical defects caught before shipment in 6 months',
      'Customer complaint rate dropped by 72%',
      'Return rate reduced from 5.2% to 1.1%',
      'Quality standards documented and enforced across all factories',
    ],
    imgId: 'cs-furniture-d4e5f6',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'cs-apparel-au',
    title: 'Apparel Production Management',
    client: 'Australian Fashion Retailer',
    location: 'Australia',
    category: 'Textiles & Apparel',
    challenge: 'An Australian fashion retailer needed to coordinate production across 4 factories for a seasonal launch. Previous seasons had been plagued by delays, miscommunication, and inconsistent sizing.',
    solution: 'We assigned a dedicated project manager who coordinated production schedules, conducted size set reviews, and managed the critical path across all 4 factories. We implemented weekly progress calls aligned with Australian business hours.',
    results: [
      'All 4 factories delivered on time for seasonal launch',
      'Sizing consistency improved across production runs',
      'Production lead time reduced by 12 days',
      'Seasonal collection launched on schedule with full stock',
    ],
    imgId: 'cs-apparel-g7h8i9',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
  {
    id: 'cs-auto-uk',
    title: 'Auto Parts Supplier Verification',
    client: 'UK Auto Parts Importer',
    location: 'United Kingdom',
    category: 'Auto Parts',
    challenge: 'A UK auto parts importer needed to verify potential suppliers for compliance with European safety standards. They had been approached by several factories but had no way to verify claims about certifications and production capabilities.',
    solution: 'We conducted on-site audits at 6 factories, verified ISO/TS 16949 certifications, tested sample batches against European standards, and provided detailed audit reports with recommendations.',
    results: [
      '3 of 6 factories failed verification — saving client from potential issues',
      '2 qualified suppliers selected and onboarded',
      'All products passed EU compliance testing on first submission',
      'Ongoing verification program established for new suppliers',
    ],
    imgId: 'cs-auto-j1k2l3',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
  },
];

const metrics = [
  { icon: TrendingDown, value: '85%', label: 'Average defect rate reduction' },
  { icon: ShieldCheck, value: '100%', label: 'Suppliers verified on-site' },
  { icon: Clock, value: '97%', label: 'On-time delivery rate' },
  { icon: DollarSign, value: '10-25%', label: 'Typical cost savings' },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Case Studies"
        subtitle="Real examples of how we've helped international buyers source better, reduce risks, and improve quality."
        breadcrumb="Case Studies"
      />

      {/* Metrics */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-center justify-center mb-2">
                  <m.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-slate-900">{m.value}</span>
                </div>
                <div className="text-sm text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="aspect-[16/7] bg-slate-100 overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                    <span className="text-sm text-slate-500">{cs.client}</span>
                    <span className="text-sm text-slate-400">|</span>
                    <span className="text-sm text-slate-500">{cs.location}</span>
                  </div>
                  <h3 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{cs.title}</h3>
                  <div id={cs.descId} className="hidden">{cs.category} sourcing case study for {cs.location} client</div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Challenge</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Solution</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Results</h4>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing challenge and we'll propose a solution."
      />
    </div>
  );
}
