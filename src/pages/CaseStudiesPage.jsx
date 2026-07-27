import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-shenzhen',
    tag: 'Electronics',
    title: 'Consumer Electronics Sourcing for US Retailer',
    challenge: 'A US-based retailer needed a reliable manufacturer for a line of consumer electronics. Previous suppliers had a defect rate of 12%, causing returns and customer complaints.',
    solution: 'We identified three potential manufacturers in Shenzhen, conducted on-site audits, and coordinated sample production. After evaluation, we recommended a factory with ISO 9001 certification and strong quality control processes.',
    result: 'Defect rate reduced from 12% to under 2%. The client placed repeat orders and expanded their product line with the same supplier.',
    metrics: [
      { label: 'Defect rate reduction', value: '12% → <2%' },
      { label: 'Order volume', value: '50,000+ units' },
      { label: 'Timeline', value: '8 weeks from inquiry to first shipment' },
    ],
  },
  {
    id: 'textiles-zhejiang',
    tag: 'Textiles',
    title: 'Fashion Brand Production Coordination in Zhejiang',
    challenge: 'A European fashion brand needed to produce 50,000 units of apparel across multiple styles. They required strict quality control and on-time delivery for a seasonal launch.',
    solution: 'We managed the entire production process: supplier selection, sample approval, production scheduling, during-production inspections, and pre-shipment quality checks. We provided weekly progress reports throughout.',
    result: 'All 50,000 units were delivered on time with a quality pass rate of 98.5%. The client renewed the partnership for the following season.',
    metrics: [
      { label: 'Units delivered', value: '50,000' },
      { label: 'Quality pass rate', value: '98.5%' },
      { label: 'On-time delivery', value: '100%' },
    ],
  },
  {
    id: 'machinery-dongguan',
    tag: 'Machinery',
    title: 'Industrial Parts Sourcing for Australian Engineering Firm',
    challenge: 'An Australian engineering firm needed precision-machined components for industrial equipment. They required certified manufacturers with experience in tight-tolerance machining.',
    solution: 'We identified a certified manufacturer in Dongguan with CNC capabilities and ISO 9001 certification. We coordinated sample production, verified dimensional accuracy, and managed quality inspections before shipment.',
    result: 'The supplier met all specifications and delivered on schedule. The client established a long-term supply agreement.',
    metrics: [
      { label: 'Tolerance achieved', value: '±0.01mm' },
      { label: 'Certification', value: 'ISO 9001' },
      { label: 'Outcome', value: 'Long-term supply agreement' },
    ],
  },
  {
    id: 'packaging-guangdong',
    tag: 'Packaging',
    title: 'Custom Packaging for E-commerce Brand',
    challenge: 'An e-commerce brand needed custom packaging for their product line, including branded boxes, inserts, and protective materials. They required consistent quality across large volumes.',
    solution: 'We sourced a packaging manufacturer in Guangdong, coordinated design proofs, and managed production with regular quality checks. We also consolidated packaging with product shipments to reduce logistics costs.',
    result: 'The client received consistent, high-quality packaging on time. Consolidated shipping reduced their overall logistics costs by 15%.',
    metrics: [
      { label: 'Cost savings', value: '15% on logistics' },
      { label: 'Order volume', value: '100,000+ units' },
      { label: 'Quality consistency', value: '99% pass rate' },
    ],
  },
  {
    id: 'automotive-jiangsu',
    tag: 'Automotive',
    title: 'Aftermarket Parts Verification for UK Distributor',
    challenge: 'A UK automotive parts distributor needed to verify the quality and authenticity of aftermarket components from a new supplier in Jiangsu.',
    solution: 'We conducted a comprehensive factory audit, verified material certifications, and performed pre-shipment inspections on the first three orders. We also coordinated third-party lab testing for critical components.',
    result: 'The supplier passed all verification checks. The distributor placed ongoing orders with confidence, and no quality issues were reported.',
    metrics: [
      { label: 'Audit score', value: '92/100' },
      { label: 'Lab tests passed', value: '100%' },
      { label: 'Ongoing orders', value: '12+ shipments' },
    ],
  },
  {
    id: 'home-garden-fujian',
    tag: 'Home & Garden',
    title: 'Furniture Sourcing for Scandinavian Retailer',
    challenge: 'A Scandinavian furniture retailer needed a manufacturer capable of producing solid wood furniture meeting European quality and sustainability standards.',
    solution: 'We identified a manufacturer in Fujian with FSC certification and experience exporting to Europe. We managed sample development, production follow-up, and pre-shipment inspections.',
    result: 'The supplier met all quality and sustainability requirements. The retailer placed a standing order for their core product range.',
    metrics: [
      { label: 'Certification', value: 'FSC certified' },
      { label: 'Market', value: 'European standards' },
      { label: 'Outcome', value: 'Standing order established' },
    ],
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Real examples of how we have helped buyers source from China.
            Each case shows the challenge, our approach, and the outcome.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded mb-4">
                  {cs.tag}
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">{cs.title}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">Challenge</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">Our Solution</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">Result</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((m, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-sm font-semibold text-slate-800">{m.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let Us Help You Source from China</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you are sourcing for the first time or looking for a more reliable partner, we are here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
