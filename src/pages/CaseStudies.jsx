import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, BarChart3, CheckCircle } from 'lucide-react';

const cases = [
  {
    id: 'furniture-eu',
    category: 'Furniture',
    region: 'Germany → China',
    title: 'EU Retailer Reduces Sourcing Cost by 22%',
    challenge: 'A German furniture importer was over-reliant on a single supplier and needed to diversify their supply chain while maintaining product quality and delivery timelines.',
    solution: 'We identified 4 qualified furniture factories in Guangdong, conducted on-site audits, arranged samples, and managed the transition over a 3-month period. Two factories were approved and onboarded.',
    results: ['22% reduction in unit cost', '2 new approved suppliers', 'Lead time reduced from 90 to 65 days', 'Zero quality rejections in first 3 orders'],
    titleId: 'cs-full-furniture-title',
    descId: 'cs-full-furniture-desc',
    imgId: 'cs-full-furniture-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    category: 'Electronics',
    region: 'USA → China',
    title: 'US Brand Passes Amazon Quality Standards',
    challenge: 'An American consumer electronics brand was experiencing high return rates on Amazon due to inconsistent product quality from their Chinese manufacturer.',
    solution: 'We implemented a structured pre-shipment inspection protocol using AQL 2.5 standards, introduced a DUPRO inspection at 50% production completion, and worked with the factory to address root causes.',
    results: ['Return rate dropped from 8% to 1.2%', 'Amazon listing quality score improved', 'Factory quality system upgraded', 'Ongoing inspection contract established'],
    titleId: 'cs-full-electronics-title',
    descId: 'cs-full-electronics-desc',
    imgId: 'cs-full-electronics-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    category: 'Apparel',
    region: 'Australia → China',
    title: 'Australian Brand Launches Private Label Line',
    challenge: 'A Sydney-based fashion startup needed to find a reliable factory for their first private label collection. They had no prior experience sourcing from China and needed end-to-end support.',
    solution: 'We sourced 3 apparel factories, arranged sample development, negotiated pricing and MOQ, and managed production and quality inspection for their 500-piece launch order.',
    results: ['On-time delivery achieved', '98% quality pass rate', 'MOQ negotiated down by 40%', 'Repeat order placed within 2 months'],
    titleId: 'cs-full-apparel-title',
    descId: 'cs-full-apparel-desc',
    imgId: 'cs-full-apparel-img-g7h8i9',
  },
  {
    id: 'industrial-uk',
    category: 'Industrial',
    region: 'UK → China',
    title: 'UK Distributor Qualifies New Component Supplier',
    challenge: 'A British industrial distributor needed to qualify a new Chinese supplier for precision metal components after their existing supplier failed a compliance audit.',
    solution: 'We identified 5 candidate factories, conducted technical audits with a focus on CNC machining capabilities and ISO 9001 compliance, and managed the qualification process including sample testing.',
    results: ['New supplier qualified in 6 weeks', 'ISO 9001 certified factory selected', 'Component cost reduced by 15%', 'Supply chain risk diversified'],
    titleId: 'cs-full-industrial-title',
    descId: 'cs-full-industrial-desc',
    imgId: 'cs-full-industrial-img-j1k2l3',
  },
  {
    id: 'homegoods-ca',
    category: 'Home Goods',
    region: 'Canada → China',
    title: 'Canadian Retailer Expands Private Label Range',
    challenge: 'A Canadian home goods retailer wanted to expand their private label range with 12 new SKUs across kitchenware and bathroom accessories, sourced from China within a 4-month timeline.',
    solution: 'We managed a parallel sourcing process across multiple product categories, coordinating with 6 factories simultaneously. We consolidated shipments to reduce freight costs.',
    results: ['12 SKUs sourced and approved', 'Consolidated shipment saved 18% on freight', 'All products delivered within timeline', 'Ongoing sourcing partnership established'],
    titleId: 'cs-full-homegoods-title',
    descId: 'cs-full-homegoods-desc',
    imgId: 'cs-full-homegoods-img-m4n5o6',
  },
  {
    id: 'toys-nl',
    category: 'Toys',
    region: 'Netherlands → China',
    title: 'Dutch Toy Brand Achieves CE Certification',
    challenge: 'A Dutch toy brand needed to source a new line of educational toys that met EU EN71 safety standards and CE certification requirements.',
    solution: 'We identified factories with existing CE certification experience, coordinated with a third-party testing lab, and managed the documentation process for CE marking.',
    results: ['CE certification achieved', 'EN71 compliant products delivered', 'Factory audit passed first time', 'Products launched on schedule'],
    titleId: 'cs-full-toys-title',
    descId: 'cs-full-toys-desc',
    imgId: 'cs-full-toys-img-p7q8r9',
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Case Studies</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Real projects, real outcomes. Here's how we've helped global buyers source more effectively from China.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((cs, i) => (
            <div key={cs.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                <div className="aspect-video lg:aspect-auto bg-slate-100 overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                    <span className="text-xs text-slate-500">{cs.region}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{cs.title}</h2>
                  <div className="space-y-4 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Challenge</p>
                      <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Our Approach</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-4 h-4 text-[#2563eb]" />
                      <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Results</span>
                    </div>
                    <ul className="space-y-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span className="text-sm text-slate-700 font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2563eb]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-blue-100 mb-7">Tell us about your sourcing project and we'll put together a plan tailored to your needs.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1a4f8a] font-bold px-7 py-3.5 rounded-lg transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
