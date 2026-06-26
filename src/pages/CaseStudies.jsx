import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import CTAButton from '../components/shared/CTAButton.jsx';

const cases = [
  {
    id: 'case-led',
    titleId: 'case-title-led',
    descId: 'case-desc-led',
    imgId: 'case-img-led-a1b2',
    category: 'Electronics',
    country: 'United States',
    title: 'US Lighting Distributor Reduces Unit Cost by 22%',
    challenge: 'A US-based lighting distributor was sourcing LED products from a middleman at inflated prices. They needed a direct factory relationship with verified quality.',
    solution: 'We identified 4 LED factories in Zhongshan, conducted on-site audits, and negotiated direct pricing. We also set up a pre-shipment inspection protocol.',
    result: '22% cost reduction, 3 new verified factory relationships, consistent product quality across 6 shipments.',
    metrics: ['22% cost reduction', '3 verified factories', '6 successful shipments'],
  },
  {
    id: 'case-furniture',
    titleId: 'case-title-furniture',
    descId: 'case-desc-furniture',
    imgId: 'case-img-furniture-c3d4',
    category: 'Furniture',
    country: 'Germany',
    title: 'German Brand Launches Private Label Furniture Range',
    challenge: 'A German home goods brand wanted to launch a private label furniture range but had no China sourcing experience and needed OEM development support.',
    solution: 'We managed the full OEM process: factory selection, prototype development, packaging design coordination, quality inspection, and sea freight to Hamburg.',
    result: 'On-time delivery of first production run, zero defect rate on inspection, brand successfully launched in 3 European markets.',
    metrics: ['On-time delivery', '0% defect rate', '3 markets launched'],
  },
  {
    id: 'case-apparel',
    titleId: 'case-title-apparel',
    descId: 'case-desc-apparel',
    imgId: 'case-img-apparel-e5f6',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Activewear Brand Scales Production 3x',
    challenge: 'An Australian activewear brand was struggling to scale production with their existing factory, which couldn\'t meet growing demand without quality issues.',
    solution: 'We sourced a compliant factory with higher capacity, managed the transition, and implemented a DUPRO inspection process for each production run.',
    result: 'Production scaled from 500 to 1,500 units per style, defect rate reduced from 8% to under 1%, 3 seasons managed successfully.',
    metrics: ['3x production scale', 'Defects reduced to <1%', '3 seasons managed'],
  },
  {
    id: 'case-hardware',
    titleId: 'case-title-hardware',
    descId: 'case-desc-hardware',
    imgId: 'case-img-hardware-g7h8',
    category: 'Hardware',
    country: 'United Kingdom',
    title: 'UK Hardware Retailer Diversifies Supplier Base',
    challenge: 'A UK hardware retailer was over-reliant on a single Chinese supplier and needed to diversify to reduce supply chain risk.',
    solution: 'We identified and audited 6 alternative suppliers across Zhejiang and Guangdong, providing a detailed comparison report and facilitating sample orders.',
    result: 'Retailer now works with 3 verified suppliers, reducing single-source dependency and achieving better pricing through competition.',
    metrics: ['3 new verified suppliers', 'Reduced supply risk', 'Improved pricing'],
  },
  {
    id: 'case-packaging',
    titleId: 'case-title-packaging',
    descId: 'case-desc-packaging',
    imgId: 'case-img-packaging-i9j0',
    category: 'Packaging',
    country: 'Canada',
    title: 'Canadian E-commerce Brand Sources Custom Packaging',
    challenge: 'A Canadian e-commerce brand needed custom-printed packaging at scale but found local prices prohibitive. They needed a reliable China packaging supplier.',
    solution: 'We sourced 3 packaging factories in Dongguan, managed sample development, and coordinated a consolidated sea freight shipment to Vancouver.',
    result: '40% cost saving vs. local suppliers, consistent print quality, 4 successful shipments over 18 months.',
    metrics: ['40% cost saving', 'Consistent quality', '4 shipments completed'],
  },
  {
    id: 'case-toys',
    titleId: 'case-title-toys',
    descId: 'case-desc-toys',
    imgId: 'case-img-toys-k1l2',
    category: 'Toys',
    country: 'France',
    title: 'French Toy Importer Achieves EN71 Compliance',
    challenge: 'A French toy importer needed to ensure their Chinese-made products met EU EN71 safety standards but lacked the local expertise to verify compliance.',
    solution: 'We identified factories with existing EN71 certification, coordinated third-party lab testing, and implemented a pre-shipment inspection checklist.',
    result: 'Full EN71 compliance achieved, zero customs rejections, ongoing relationship with 2 certified toy factories.',
    metrics: ['Full EN71 compliance', '0 customs rejections', '2 certified factories'],
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
    <div ref={containerRef}>
      {/* Header */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#e88a80' }}>
            Client Results
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Real sourcing projects, real results. Here's how we've helped buyers across different industries source from China successfully.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {cases.map((cs, idx) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="overflow-hidden">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#fef2f2', color: '#c0392b' }}>
                        {cs.category}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#f4f6f9', color: '#4a5568' }}>
                        {cs.country}
                      </span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1a2e4a' }}>{cs.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#c0392b' }}>Challenge</div>
                        <p id={cs.descId} className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#2980b9' }}>Our Solution</div>
                        <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{cs.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#27ae60' }}>Result</div>
                        <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{cs.result}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-[#e2e8f0]">
                      {cs.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4" style={{ color: '#27ae60' }} />
                          <span className="text-sm font-medium" style={{ color: '#27ae60' }}>{m}</span>
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
      <section className="py-16 md:py-20" style={{ backgroundColor: '#c0392b' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Tell us about your sourcing challenge and we'll put together a plan.
          </p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
