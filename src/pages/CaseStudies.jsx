import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, ArrowRight, TrendingDown, Clock, Shield } from 'lucide-react';

const caseStudies = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for European Retailer',
    client: 'Major European home improvement chain',
    challenge: 'Needed to find a reliable LED panel light manufacturer with CE/RoHS certification, competitive pricing, and capacity for 100,000+ units per year.',
    solution: 'We identified 5 qualified factories in Zhongshan, conducted on-site audits, arranged samples, and negotiated pricing 40% below their previous supplier.',
    results: ['40% cost reduction vs. previous supplier', 'Zero defects across first 3 shipments', 'On-time delivery for all orders', 'Long-term supplier relationship established'],
    stats: { savings: '40%', units: '100K+', timeline: '6 weeks' },
    category: 'Electronics',
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
    imgId: 'cs-led-img-c4d5',
  },
  {
    id: 'furniture-us',
    title: 'Custom Furniture for US Importer',
    client: 'Mid-size US furniture distributor',
    challenge: 'Required custom-designed office furniture with specific materials and finishes. Previous supplier had quality issues and missed deadlines.',
    solution: 'We sourced 4 factories in Foshan, verified their capabilities, managed sample development, and supervised production of 3 container loads.',
    results: ['3 containers delivered on schedule', 'Quality passed all US safety standards', 'Consistent finish quality across all units', '25% cost improvement'],
    stats: { savings: '25%', units: '3 containers', timeline: '8 weeks' },
    category: 'Furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-e6f7',
  },
  {
    id: 'textiles-au',
    title: 'Textile Sourcing for Australian Brand',
    client: 'Australian activewear brand',
    challenge: 'Needed a factory capable of producing high-quality performance fabrics with custom prints, meeting OEKO-TEX standards, for a new product line launch.',
    solution: 'We found specialized sportswear manufacturers in Dongguan, verified their certifications, managed 3 rounds of sampling, and inspected 50,000 units.',
    results: ['Zero defects across 50,000 units', 'OEKO-TEX Standard 100 certified', 'Product launched on schedule', 'Repeat orders placed within 3 months'],
    stats: { savings: '30%', units: '50K', timeline: '10 weeks' },
    category: 'Textiles',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    imgId: 'cs-textiles-img-g8h9',
  },
  {
    id: 'packaging-uk',
    title: 'Custom Packaging for UK E-commerce',
    client: 'UK-based subscription box company',
    challenge: 'Required unique custom packaging with specific structural design, printing quality, and eco-friendly materials at scale.',
    solution: 'We sourced packaging specialists in Shenzhen, managed structural design iterations, verified material certifications, and coordinated monthly shipments.',
    results: ['FSC-certified materials sourced', 'Consistent print quality maintained', 'Monthly deliveries on schedule', '35% cost reduction vs. UK suppliers'],
    stats: { savings: '35%', units: '200K/mo', timeline: '4 weeks' },
    category: 'Packaging',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    imgId: 'cs-packaging-img-i0j1',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Real Results for Real Buyers
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              See how we've helped businesses around the world source successfully from China — 
              with verified suppliers, quality products, and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-2/5 h-64 lg:h-auto">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-3/5 p-6 md:p-10">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                      {cs.category}
                    </span>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-neutral-900 mb-2">{cs.title}</h2>
                    <p className="text-sm text-neutral-500 mb-4">{cs.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-1">Our Solution</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 rounded-lg">
                      <div className="text-center">
                        <TrendingDown className="w-5 h-5 text-success mx-auto mb-1" />
                        <p className="text-lg font-bold text-neutral-900">{cs.stats.savings}</p>
                        <p className="text-xs text-neutral-500">Cost Savings</p>
                      </div>
                      <div className="text-center">
                        <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold text-neutral-900">{cs.stats.units}</p>
                        <p className="text-xs text-neutral-500">Units</p>
                      </div>
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-accent mx-auto mb-1" />
                        <p className="text-lg font-bold text-neutral-900">{cs.stats.timeline}</p>
                        <p className="text-xs text-neutral-500">To First Ship</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {cs.results.map((r, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
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

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Want Similar Results?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Every project starts with a conversation. Tell us what you need and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
