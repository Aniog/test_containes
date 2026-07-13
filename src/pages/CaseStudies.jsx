import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/home/InquiryForm';

const caseStudies = [
  {
    id: 'uk-led-lighting',
    title: 'UK LED Lighting Distributor — Supplier Switch & Cost Reduction',
    category: 'Electronics',
    country: 'United Kingdom',
    challenge: 'A UK-based LED lighting distributor had been working with a supplier for 2 years but was experiencing increasing defect rates and inconsistent product quality. They needed to switch suppliers without disrupting their supply chain.',
    solution: 'We identified 4 alternative LED manufacturers in Guangdong, conducted on-site audits at each facility, and evaluated their quality management systems. We negotiated samples and pricing, and helped the client transition to a new supplier over 3 months.',
    results: [
      '15% reduction in unit cost',
      'Defect rate dropped from 4.2% to under 0.5%',
      'Smooth supplier transition with no supply chain disruption',
      'Ongoing QC inspection service established',
    ],
    timeline: '3 months',
    imgId: 'cs-uk-led-4a2b1c',
    titleId: 'cs-uk-led-title',
    descId: 'cs-uk-led-desc',
  },
  {
    id: 'au-furniture-startup',
    title: 'Australian Furniture Startup — First OEM Order',
    category: 'Furniture',
    country: 'Australia',
    challenge: 'A Melbourne-based furniture startup wanted to launch their first product line with custom-designed office chairs. They had no prior experience sourcing from China and needed end-to-end support.',
    solution: 'We managed the full process: product specification development, factory sourcing, sample production, quality review, and production monitoring. We also coordinated sea freight to Melbourne.',
    results: [
      'First 500-unit order delivered on time',
      '2 long-term supplier relationships established',
      'Custom branding and packaging implemented',
      'Product launched on schedule for trade show',
    ],
    timeline: '5 months',
    imgId: 'cs-au-furniture-7d3e2f',
    titleId: 'cs-au-furniture-title',
    descId: 'cs-au-furniture-desc',
  },
  {
    id: 'us-apparel-brand',
    title: 'US Fashion Brand — Private Label Apparel Line',
    category: 'Apparel',
    country: 'United States',
    challenge: 'A US-based fashion brand wanted to develop a private label activewear line with custom fabrics, branding, and packaging. They needed a sourcing partner who could manage the complexity of apparel production.',
    solution: 'We sourced fabric suppliers and garment manufacturers in Fujian, managed sample development across 3 rounds, coordinated custom packaging production, and oversaw final inspection before air freight to the US.',
    results: [
      'Custom activewear line launched on schedule',
      '20% under initial budget estimate',
      'Consistent sizing and quality across all SKUs',
      'Repeat order placed within 6 months',
    ],
    timeline: '4 months',
    imgId: 'cs-us-apparel-5f7a3c',
    titleId: 'cs-us-apparel-title',
    descId: 'cs-us-apparel-desc',
  },
  {
    id: 'de-industrial-tools',
    title: 'German Industrial Distributor — Tool Sourcing Program',
    category: 'Machinery',
    country: 'Germany',
    challenge: 'A German industrial tools distributor wanted to add a private label range of hand tools and power tools to their catalog. They needed suppliers who could meet CE certification requirements.',
    solution: 'We identified certified manufacturers in Zhejiang and Jiangsu, verified CE documentation, managed sample testing, and set up a quarterly inspection program to maintain quality standards.',
    results: [
      'CE-certified supplier network established',
      'Private label tool range launched in 6 months',
      'Quarterly inspection program in place',
      'Consistent quality across 12 SKUs',
    ],
    timeline: '6 months',
    imgId: 'cs-de-tools-1b4e9d',
    titleId: 'cs-de-tools-title',
    descId: 'cs-de-tools-desc',
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
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">Real Results</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Case Studies
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Real examples of how we've helped global buyers source successfully from China — from first-time importers to established distributors.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Sourcing Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div ref={containerRef} className="section-container flex flex-col gap-12 md:gap-16">
          {caseStudies.map((cs, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={cs.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <span className="text-brand-muted text-xs">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-brand-navy font-bold text-xl md:text-2xl mb-4">{cs.title}</h2>

                  <div className="mb-4">
                    <h4 className="text-brand-text font-semibold text-sm mb-1.5">The Challenge</h4>
                    <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-5">
                    <h4 className="text-brand-text font-semibold text-sm mb-1.5">Our Approach</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <h4 className="text-emerald-700 font-semibold text-sm">Results</h4>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-emerald-700 text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <p className="text-emerald-600 text-xs mt-3 font-medium">Timeline: {cs.timeline}</p>
                  </div>
                </div>

                <div className={`rounded-2xl overflow-hidden shadow-md ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <InquiryForm />
    </div>
  );
}
