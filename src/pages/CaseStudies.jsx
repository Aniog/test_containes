import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-us',
    country: 'United States',
    flag: '🇺🇸',
    category: 'Electronics',
    title: 'LED Lighting Supplier for US Home Improvement Retailer',
    challenge:
      'A US-based retailer needed a reliable LED lighting supplier for a 50,000-unit order. Their previous supplier had failed quality inspections and caused a costly recall.',
    solution:
      'We sourced 4 candidate factories, conducted on-site audits, and selected the best match based on certifications (UL, CE), production capacity, and pricing. We managed sampling, pre-shipment inspection, and sea freight coordination.',
    result: '99.2% pass rate on final inspection. 23% cost reduction vs. previous supplier. On-time delivery to Los Angeles port.',
    metrics: ['23% cost reduction', '99.2% QC pass rate', '50,000 units delivered'],
    imgId: 'cs-led-img-a1b2c3',
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
  },
  {
    id: 'furniture-de',
    country: 'Germany',
    flag: '🇩🇪',
    category: 'Furniture',
    title: 'Private Label Office Chair Line for German Brand',
    challenge:
      'A German furniture brand wanted to develop a private label ergonomic office chair line but had no existing supplier relationships in China and needed OEM capability.',
    solution:
      'We identified 3 OEM-capable factories in Guangdong, managed the design brief, coordinated 2 rounds of sampling, and arranged sea freight to Hamburg. We also handled CE certification documentation.',
    result: 'First production run of 800 units completed in 11 weeks. Product launched on schedule with zero quality claims in the first 6 months.',
    metrics: ['800 units, 11-week lead time', 'CE certified', '0 quality claims in 6 months'],
    imgId: 'cs-furniture-img-d4e5f6',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'apparel-au',
    country: 'Australia',
    flag: '🇦🇺',
    category: 'Apparel',
    title: 'Sportswear Sourcing for Australian Activewear Brand',
    challenge:
      'An Australian activewear startup needed a factory for custom-printed sportswear with specific fabric requirements and tight delivery windows for seasonal launches.',
    solution:
      'We sourced a factory specializing in performance fabrics, managed fabric testing, coordinated 3 rounds of sampling, and conducted pre-shipment inspections across 3 consecutive production runs.',
    result: 'Zero defect claims across all 3 orders. Consistent quality maintained across seasonal reorders. 15% lower unit cost than the brand\'s initial budget.',
    metrics: ['3 orders, zero defect claims', '15% below budget', 'Consistent seasonal delivery'],
    imgId: 'cs-apparel-img-g7h8i9',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
  {
    id: 'tools-uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    category: 'Tools & Hardware',
    title: 'Power Tool Sourcing for UK Distributor',
    challenge:
      'A UK hardware distributor needed a new power tool supplier after their existing one failed to meet CE and RoHS compliance requirements for the European market.',
    solution:
      'We identified 5 compliant factories, verified certifications, and conducted factory audits. We managed a 3-month trial order with full QC inspection and coordinated air freight for the initial shipment.',
    result: 'Fully compliant product range delivered within 8 weeks. Distributor expanded the relationship to cover 12 SKUs in the following quarter.',
    metrics: ['CE & RoHS compliant', '8-week delivery', '12 SKUs in follow-on order'],
    imgId: 'cs-tools-img-j0k1l2',
    titleId: 'cs-tools-title',
    descId: 'cs-tools-desc',
  },
  {
    id: 'packaging-ca',
    country: 'Canada',
    flag: '🇨🇦',
    category: 'Packaging',
    title: 'Custom Packaging for Canadian E-Commerce Brand',
    challenge:
      'A Canadian e-commerce brand needed custom-printed packaging boxes for their subscription box service. They required consistent print quality, fast turnaround, and competitive pricing.',
    solution:
      'We sourced a packaging factory in Guangzhou, managed artwork approval, coordinated print proofs, and arranged LCL sea freight consolidation to Vancouver.',
    result: 'First order of 10,000 boxes delivered in 6 weeks. Print quality approved on first proof. Reorder cycle established at 8-week intervals.',
    metrics: ['10,000 boxes, 6-week lead time', 'First-proof approval', 'Ongoing reorder relationship'],
    imgId: 'cs-packaging-img-m3n4o5',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
  },
  {
    id: 'health-nl',
    country: 'Netherlands',
    flag: '🇳🇱',
    category: 'Health & Beauty',
    title: 'Skincare OEM for Dutch Wellness Brand',
    challenge:
      'A Dutch wellness brand wanted to launch a private label skincare line manufactured in China, with EU-compliant formulations and custom packaging.',
    solution:
      'We identified an OEM cosmetics factory with EU export experience, managed formulation approval, coordinated safety testing, and handled all export documentation for EU customs.',
    result: 'Product range of 6 SKUs launched on schedule. All products passed EU cosmetics regulation compliance review. Reorder placed within 4 months.',
    metrics: ['6 SKUs launched on time', 'EU compliant', 'Reorder within 4 months'],
    imgId: 'cs-health-img-p6q7r8',
    titleId: 'cs-health-title',
    descId: 'cs-health-desc',
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
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Global Buyers
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Here's how we've helped buyers from around the world source successfully from China —
            with measurable outcomes and no exaggerated claims.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((c, index) => (
            <div
              key={c.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? '' : ''}`}
            >
              <div className={`rounded-2xl overflow-hidden shadow-md ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">
                    {c.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {c.flag} {c.country}
                  </span>
                </div>
                <h2 id={c.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {c.title}
                </h2>

                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p id={c.descId} className="text-sm text-slate-700 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Our Approach</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{c.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Want Results Like These?
          </h2>
          <p className="text-slate-600 mb-6">
            Tell us about your sourcing project and we'll put together a plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
