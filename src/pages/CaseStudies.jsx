import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, Globe, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-defect',
    category: 'Electronics',
    country: 'United States',
    title: 'US Electronics Importer Reduces Defect Rate by 60%',
    challenge: 'A California-based electronics distributor was receiving shipments with defect rates of 8–10%, causing costly returns and customer complaints. They had no visibility into the factory\'s QC process.',
    solution: 'We implemented a structured quality control program including in-line inspections at 30% and 70% production completion, plus a final pre-shipment inspection using AQL 2.5 standards. We also trained the factory\'s QC team on the buyer\'s specific requirements.',
    result: 'Defect rate dropped from 8% to under 3% within two production cycles. The buyer saved an estimated $45,000 in return costs in the first year.',
    metrics: ['Defect rate: 8% → 2.8%', 'Return costs reduced by ~$45K/year', '2 production cycles to achieve results'],
    titleId: 'cs-electronics-pg-title',
    descId: 'cs-electronics-pg-desc',
    imgId: 'cs-electronics-pg-img-a1b2c3',
  },
  {
    id: 'furniture-private-label',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Furniture Brand Launches Private Label Line',
    challenge: 'A UK home goods brand wanted to launch a private label furniture range but had no existing supplier relationships in China and no experience managing overseas production.',
    solution: 'We identified and audited 5 furniture factories, shortlisted 3 for sampling, and managed the entire sample approval process. We coordinated branding, packaging, and compliance documentation, then oversaw the first production run and shipping.',
    result: 'The brand launched its private label range on schedule. The first container was delivered within the agreed timeline with zero quality rejections.',
    metrics: ['5 factories audited', 'First container delivered on time', '0 quality rejections on first order'],
    titleId: 'cs-furniture-pg-title',
    descId: 'cs-furniture-pg-desc',
    imgId: 'cs-furniture-pg-img-d4e5f6',
  },
  {
    id: 'apparel-scaling',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production Across 5 Seasons',
    challenge: 'An Australian fashion startup had found a factory independently but was struggling with inconsistent quality, missed deadlines, and communication breakdowns as they tried to scale from 500 to 5,000 units per season.',
    solution: 'We took over as the buyer\'s representative in China, establishing clear production schedules, quality standards, and communication protocols with the factory. We conducted in-line inspections each season and managed all shipping logistics.',
    result: 'The brand successfully scaled to 5,000 units per season with consistent quality across 5 consecutive seasons. On-time delivery rate improved from 60% to 95%.',
    metrics: ['Scaled from 500 to 5,000 units/season', 'On-time delivery: 60% → 95%', '5 consecutive seasons managed'],
    titleId: 'cs-apparel-pg-title',
    descId: 'cs-apparel-pg-desc',
    imgId: 'cs-apparel-pg-img-g7h8i9',
  },
  {
    id: 'industrial-tools',
    category: 'Industrial',
    country: 'Germany',
    title: 'German Distributor Sources Certified Industrial Tools',
    challenge: 'A German industrial distributor needed to source power tools that met CE certification requirements. Previous attempts had resulted in suppliers providing fake certifications.',
    solution: 'We conducted thorough factory audits specifically focused on certification authenticity, tested samples at an accredited third-party lab, and verified CE documentation directly with the certification bodies.',
    result: 'The distributor successfully launched a new product line with fully verified CE-certified tools, passing German customs inspection without issues.',
    metrics: ['100% certification verified', 'Passed German customs first time', 'New product line launched on schedule'],
    titleId: 'cs-industrial-pg-title',
    descId: 'cs-industrial-pg-desc',
    imgId: 'cs-industrial-pg-img-j1k2l3',
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
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Real results from real buyers. These case studies illustrate how we've helped businesses source smarter from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {caseStudies.map(({ id, category, country, title, challenge, solution, result, metrics, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-slate-100 aspect-video lg:aspect-auto min-h-48">
                    <img
                      alt={title}
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                      <span className="flex items-center gap-1 text-slate-500 text-xs">
                        <Globe className="w-3 h-3" /> {country}
                      </span>
                    </div>
                    <h2 id={titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug">{title}</h2>

                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</h4>
                        <p id={descId} className="text-slate-600 text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Result</h4>
                        <p className="text-slate-700 text-sm leading-relaxed font-medium">{result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {metrics.map((m) => (
                        <div key={m} className="flex items-center gap-1.5 bg-brand-gold/10 text-brand-navy text-xs font-medium px-3 py-1.5 rounded-full">
                          <TrendingUp className="w-3 h-3 text-brand-gold" />
                          {m}
                        </div>
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
      <section className="py-16 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-red font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
