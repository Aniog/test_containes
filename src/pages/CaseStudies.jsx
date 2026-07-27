import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const cases = [
  {
    id: 'uk-furniture',
    title: 'UK Furniture Retailer Cuts Sourcing Costs by 28%',
    category: 'Furniture',
    country: 'United Kingdom',
    result: '28% cost reduction',
    imgId: 'case-page-img-ss001',
    titleId: 'case-page-title-uk-furniture',
    descId: 'case-page-desc-uk-furniture',
    challenge: 'A UK-based furniture retailer was sourcing from a single supplier in Guangdong with no price leverage and recurring quality issues on upholstered pieces.',
    solution: 'We audited 6 factories in Foshan and Guangzhou, shortlisted 3 verified manufacturers, and negotiated a competitive pricing structure. We also implemented a pre-shipment inspection protocol.',
    outcome: '28% reduction in unit costs, zero quality rejections over 12 months, and a reliable dual-supplier setup.',
    highlights: ['3 verified factories audited', 'Pre-shipment QC on every order', '12-month zero-defect record'],
    desc: 'Furniture sourcing cost reduction quality control China Foshan Guangdong',
  },
  {
    id: 'us-electronics',
    title: 'US Electronics Brand Launches Private Label Line',
    category: 'Electronics',
    country: 'United States',
    result: 'On-time delivery, 0 defects',
    imgId: 'case-page-img-ss002',
    titleId: 'case-page-title-us-electronics',
    descId: 'case-page-desc-us-electronics',
    challenge: 'A US consumer electronics brand wanted to launch a private label smart home product line but had no existing China supplier relationships or QC processes.',
    solution: 'We managed the full OEM process — factory selection, sample development, mold coordination, compliance testing (FCC/CE), pre-shipment inspection, and freight coordination.',
    outcome: 'First production run delivered on time with zero defects. The brand successfully launched 4 SKUs within 8 months.',
    highlights: ['Full OEM coordination', 'FCC & CE compliance managed', '4 SKUs launched on schedule'],
    desc: 'Electronics OEM private label smart home China factory compliance',
  },
  {
    id: 'au-apparel',
    title: 'Australian Apparel Brand Scales Production 3x',
    category: 'Apparel',
    country: 'Australia',
    result: '3x production volume',
    imgId: 'case-page-img-ss003',
    titleId: 'case-page-title-au-apparel',
    descId: 'case-page-desc-au-apparel',
    challenge: 'An Australian fashion brand was growing rapidly but their single factory in Guangzhou could not keep up with demand, causing stockouts and delayed launches.',
    solution: 'We identified and audited 4 additional apparel factories, established a multi-supplier network with consistent quality standards, and implemented a production monitoring system.',
    outcome: 'Production capacity tripled within 6 months. Consistent quality across all suppliers maintained through standardized QC checklists.',
    highlights: ['4 new factories onboarded', 'Standardized QC across suppliers', '6-month scale-up timeline'],
    desc: 'Apparel fashion sourcing scale production China Guangzhou multi-supplier',
  },
  {
    id: 'de-packaging',
    title: 'German Brand Overhauls Packaging Supply Chain',
    category: 'Packaging',
    country: 'Germany',
    result: '40% lead time reduction',
    imgId: 'case-page-img-ss004',
    titleId: 'case-page-title-de-packaging',
    descId: 'case-page-desc-de-packaging',
    challenge: 'A German consumer goods brand was experiencing long lead times and inconsistent print quality from their existing Chinese packaging supplier.',
    solution: 'We sourced 3 alternative packaging manufacturers, conducted print quality audits, and negotiated improved lead times and payment terms.',
    outcome: '40% reduction in lead times, consistent Pantone color matching, and a backup supplier relationship established.',
    highlights: ['3 packaging suppliers audited', 'Pantone color matching verified', '40% faster lead times'],
    desc: 'Packaging printing sourcing China lead time quality color matching',
  },
  {
    id: 'ca-health',
    title: 'Canadian Health Brand Sources Compliant Supplements',
    category: 'Health & Beauty',
    country: 'Canada',
    result: 'Full regulatory compliance',
    imgId: 'case-page-img-ss005',
    titleId: 'case-page-title-ca-health',
    descId: 'case-page-desc-ca-health',
    challenge: 'A Canadian health brand needed to source dietary supplements from China that met Health Canada and FDA requirements, with full traceability documentation.',
    solution: 'We identified GMP-certified manufacturers, coordinated third-party lab testing, and managed the full documentation process for import compliance.',
    outcome: 'Successful import of 6 supplement SKUs with full regulatory compliance. Ongoing supplier relationship established.',
    highlights: ['GMP-certified factories only', 'Third-party lab testing', 'Full import documentation'],
    desc: 'Health supplements sourcing China GMP compliance FDA Health Canada',
  },
  {
    id: 'nl-industrial',
    title: 'Dutch Distributor Sources Industrial Equipment',
    category: 'Machinery',
    country: 'Netherlands',
    result: '35% below market price',
    imgId: 'case-page-img-ss006',
    titleId: 'case-page-title-nl-industrial',
    descId: 'case-page-desc-nl-industrial',
    challenge: 'A Dutch industrial distributor needed to source hydraulic equipment at competitive prices but lacked contacts in China\'s machinery manufacturing regions.',
    solution: 'We identified manufacturers in Zhejiang and Jiangsu, conducted technical audits, arranged factory acceptance testing, and coordinated sea freight with proper export documentation.',
    outcome: 'Equipment sourced at 35% below European market price with full CE certification and 12-month warranty.',
    highlights: ['Technical factory audits', 'CE certification verified', '35% cost advantage'],
    desc: 'Industrial machinery hydraulic equipment sourcing China Zhejiang CE certification',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Real Results for Real Buyers
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              See how we've helped businesses across industries source smarter, reduce costs, and eliminate supply chain risk.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c) => (
              <div key={c.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [case-studies-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">{c.category}</span>
                    <span className="bg-white text-neutral-700 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{c.country}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={c.titleId} className="text-xl font-bold text-neutral-900 mb-4 leading-snug">{c.title}</h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-sm text-neutral-700 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Our Approach</p>
                      <p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Outcome</p>
                      <p id={c.descId} className="text-sm text-neutral-700 leading-relaxed">{c.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1 text-xs bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full font-medium">
                        <CheckCircle className="w-3 h-3" />{h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                    <div className="flex items-center gap-1 text-brand-blue font-semibold text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {c.result}
                    </div>
                    <Link
                      to="/contact"
                      className="text-sm text-brand-blue font-semibold hover:text-brand-navy transition-colors flex items-center gap-1"
                    >
                      Similar Project? <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span id="case-studies-page-title" className="sr-only">China sourcing case studies results buyers industries</span>
      </section>

      <CTABanner />
    </div>
  );
};

export default CaseStudies;
