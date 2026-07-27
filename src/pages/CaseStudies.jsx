import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Shield, Clock, Package, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'led-europe',
    title: 'LED Lighting for European Distributor',
    client: 'Mid-sized electrical distributor (Germany)',
    challenge: 'The client was sourcing LED panels and strip lights from a trading company with inconsistent quality and high prices. They needed direct factory access and reliable QC.',
    solution: 'We audited 5 LED factories in Shenzhen and Zhongshan, shortlisted 2, arranged sample runs, and implemented pre-shipment inspections for every order.',
    result: '23% cost reduction by cutting out the middleman. Defect rate dropped from 8% to under 1%. On-time delivery rate improved to 98%.',
    metrics: ['23% cost reduction', 'Under 1% defect rate', '98% on-time delivery'],
    icon: TrendingDown,
    titleId: 'cs-full-title-led-europe',
    descId: 'cs-full-desc-led-europe',
    imgId: 'cs-full-img-led-europe-a1b2',
  },
  {
    id: 'cnc-usa',
    title: 'CNC Machined Parts for US Manufacturer',
    client: 'Industrial equipment manufacturer (USA)',
    challenge: 'Needed precision CNC machined aluminum parts with tight tolerances (±0.01mm). Previous Chinese supplier had inconsistent quality and missed deadlines.',
    solution: 'We identified 3 ISO 9001-certified CNC shops in Dongguan, conducted on-site audits with dimensional testing, and implemented DUPRO inspections at 30% and 80% production milestones.',
    result: 'Successfully delivered 50,000+ units across 12 batches with zero critical defects. Established a long-term supply agreement with 15% annual volume growth.',
    metrics: ['50,000+ units delivered', 'Zero critical defects', '15% annual growth'],
    icon: Shield,
    titleId: 'cs-full-title-cnc-usa',
    descId: 'cs-full-desc-cnc-usa',
    imgId: 'cs-full-img-cnc-usa-c3d4',
  },
  {
    id: 'packaging-aus',
    title: 'Custom Packaging for Australian Brand',
    client: 'Health food brand (Australia)',
    challenge: 'The client needed custom-printed stand-up pouches and folding cartons with food-grade certification. Previous supplier took 12+ weeks for delivery.',
    solution: 'We found an FSC-certified packaging factory in Shanghai, managed the artwork approval process, and arranged consolidated air freight for initial orders with sea freight for reorders.',
    result: 'Time-to-market reduced from 12 weeks to 8 weeks. 30% savings on unit costs at scale. Successful FDA-compliant food-grade packaging across all batches.',
    metrics: ['30% faster delivery', '30% unit cost savings', 'Full FDA compliance'],
    icon: Clock,
    titleId: 'cs-full-title-packaging-aus',
    descId: 'cs-full-desc-packaging-aus',
    imgId: 'cs-full-img-packaging-aus-e5f6',
  },
  {
    id: 'furniture-uk',
    title: 'Flat-pack Furniture for UK Retailer',
    client: 'Online furniture retailer (UK)',
    challenge: 'The client wanted to develop a line of flat-pack office desks. They had design files but no manufacturing experience in China. Needed full ODM support.',
    solution: 'We identified a factory in Foshan specializing in engineered wood furniture, facilitated design-for-manufacturing revisions, oversaw prototyping, and managed the complete production cycle including assembly instruction creation.',
    result: 'Launched 3 SKUs that became top sellers. 40% gross margin achieved. Repeat orders every 6 weeks with consistent quality and packaging.',
    metrics: ['3 successful SKUs', '40% gross margin', 'Repeat orders every 6 weeks'],
    icon: Package,
    titleId: 'cs-full-title-furniture-uk',
    descId: 'cs-full-desc-furniture-uk',
    imgId: 'cs-full-img-furniture-uk-g7h8',
  },
  {
    id: 'hardware-canada',
    title: 'Stainless Steel Hardware for Canadian Distributor',
    client: 'Construction supply distributor (Canada)',
    challenge: 'The client needed 316-grade stainless steel fasteners and brackets with mill test certificates. Previous supplier shipped 304-grade instead of 316, causing a major quality dispute.',
    solution: 'We verified raw material certificates at source, arranged third-party spectrographic testing through SGS at the factory, and implemented raw material traceability protocols.',
    result: '100% material grade compliance verified by independent lab testing. 35% cost savings vs. domestic sourcing. Client expanded from 5 SKUs to 40+ SKUs.',
    metrics: ['100% grade compliance', '35% cost savings', 'Expanded to 40+ SKUs'],
    icon: Award,
    titleId: 'cs-full-title-hardware-canada',
    descId: 'cs-full-desc-hardware-canada',
    imgId: 'cs-full-img-hardware-canada-i9j0',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real results from real clients. See how we help businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-b border-slate-100 pb-16 last:border-0 last:pb-0">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-xl overflow-hidden shadow-md bg-slate-100 aspect-[4/3]">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                    <cs.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-brand-900 mb-3">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-brand-500 font-medium mb-4">{cs.client}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-900 uppercase tracking-wider mb-1">Challenge</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-900 uppercase tracking-wider mb-1">Our Solution</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-900 uppercase tracking-wider mb-1">Result</h4>
                      <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-5">
                    {cs.metrics.map((m) => (
                      <span key={m} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        <Award className="w-3 h-3" />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-slate-600 mb-8">
            Tell us about your sourcing challenge and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-accent gap-2 text-lg px-8 py-3.5">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
