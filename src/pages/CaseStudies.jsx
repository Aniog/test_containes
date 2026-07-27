import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'cs-uk-furniture',
    titleId: 'cs-title-uk-furniture',
    descId: 'cs-desc-uk-furniture',
    imgId: 'cs-img-uk-furniture-a1b2c3',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A UK home goods retailer was sourcing furniture through a trading company and paying inflated prices with no visibility into the actual factory.',
    solution: 'We audited 8 factories in Foshan, shortlisted 2 direct manufacturers, negotiated pricing, and managed QC across 3 production runs.',
    results: ['22% reduction in unit cost', 'Zero defect shipments across 3 orders', 'Direct factory relationship established', 'Lead time reduced by 2 weeks'],
    quote: 'SSourcing gave us direct access to factories we never could have found on our own. The cost savings paid for their service many times over.',
    author: 'Operations Director, UK Home Goods Retailer',
  },
  {
    id: 'cs-us-electronics',
    titleId: 'cs-title-us-electronics',
    descId: 'cs-desc-us-electronics',
    imgId: 'cs-img-us-electronics-d4e5f6',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Electronics Line',
    challenge: 'An American e-commerce brand needed a certified electronics manufacturer for a private label smart home product, with CE and FCC compliance requirements.',
    solution: 'We sourced 4 qualified manufacturers, coordinated compliance testing, managed sample iterations, and oversaw production of the first 2,000-unit run.',
    results: ['CE & FCC certification achieved', 'Product launched on schedule', '3 sample iterations managed', 'Ongoing production relationship established'],
    quote: 'The compliance process was complex, but SSourcing handled every step. We launched on time and within budget.',
    author: 'Founder, US E-Commerce Brand',
  },
  {
    id: 'cs-au-apparel',
    titleId: 'cs-title-au-apparel',
    descId: 'cs-desc-au-apparel',
    imgId: 'cs-img-au-apparel-g7h8i9',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production',
    challenge: 'An Australian fashion brand needed to scale from 500 to 5,000 units per style while maintaining consistent quality across 12 SKUs.',
    solution: 'We identified a Guangzhou factory with the right capacity, managed the transition from their previous supplier, and implemented a QC checklist for each style.',
    results: ['On-time delivery for all 12 SKUs', 'Consistent quality across all styles', 'MOQ reduced through negotiation', '15% cost saving vs. previous supplier'],
    quote: 'Scaling production is always risky. SSourcing made the transition smooth and kept quality consistent throughout.',
    author: 'CEO, Australian Fashion Brand',
  },
  {
    id: 'cs-de-industrial',
    titleId: 'cs-title-de-industrial',
    descId: 'cs-desc-de-industrial',
    imgId: 'cs-img-de-industrial-j1k2l3',
    category: 'Industrial',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Components',
    challenge: 'A German industrial distributor needed a reliable source for hydraulic fittings that met DIN standards, with consistent quality and reliable delivery.',
    solution: 'We identified 3 manufacturers with DIN certification experience, conducted factory audits, and managed a pilot order with full inspection.',
    results: ['DIN-compliant supplier identified', 'Factory audit completed', 'Pilot order passed inspection', 'Ongoing supply agreement in place'],
    quote: 'Finding a Chinese supplier that truly understands European standards is not easy. SSourcing found us exactly what we needed.',
    author: 'Procurement Manager, German Industrial Distributor',
  },
  {
    id: 'cs-ca-toys',
    titleId: 'cs-title-ca-toys',
    descId: 'cs-desc-ca-toys',
    imgId: 'cs-img-ca-toys-m4n5o6',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Passes Safety Certification',
    challenge: 'A Canadian toy startup needed to source educational toys that met ASTM F963 and Health Canada safety requirements for their retail launch.',
    solution: 'We sourced certified toy manufacturers, coordinated third-party safety testing, and managed the production and inspection process for the launch order.',
    results: ['ASTM F963 compliance achieved', 'Health Canada requirements met', 'Retail launch completed on time', 'Repeat order placed within 3 months'],
    quote: 'Safety compliance was non-negotiable for us. SSourcing understood that and made sure every step was done right.',
    author: 'Co-Founder, Canadian Toy Brand',
  },
  {
    id: 'cs-uae-packaging',
    titleId: 'cs-title-uae-packaging',
    descId: 'cs-desc-uae-packaging',
    imgId: 'cs-img-uae-packaging-p7q8r9',
    category: 'Packaging',
    country: 'UAE',
    title: 'UAE Retailer Develops Custom Branded Packaging',
    challenge: 'A UAE retail chain needed custom-printed packaging for a private label product line, with tight deadlines and specific branding requirements.',
    solution: 'We sourced packaging manufacturers in Shenzhen, managed artwork approval, coordinated sample production, and oversaw the bulk print run.',
    results: ['Custom packaging delivered on time', 'Brand standards maintained', '3 packaging formats produced', 'Cost 30% below local sourcing'],
    quote: 'The packaging quality exceeded our expectations. SSourcing managed the entire process professionally.',
    author: 'Brand Manager, UAE Retail Chain',
  },
];

const allCategories = ['All', ...new Set(caseStudies.map((cs) => cs.category))];

export default function CaseStudies() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses across industries source smarter from China.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-slate-200 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {filtered.map((cs, idx) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${idx % 2 === 1 ? '' : ''}`}>
                  <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="bg-white text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">{cs.country}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{cs.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</h4>
                        <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Results</h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.results.map((r) => (
                          <span key={r} className="flex items-center gap-1.5 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium">
                            <CheckCircle className="w-3 h-3" />
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-blue-600 pl-4 py-1">
                      <p className="text-slate-700 text-sm italic mb-1">"{cs.quote}"</p>
                      <cite className="text-slate-500 text-xs not-italic">— {cs.author}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Submit your sourcing inquiry and let us show you what we can do for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
