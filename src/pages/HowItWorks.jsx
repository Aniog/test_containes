import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import CTAButton from '../components/shared/CTAButton.jsx';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target quantity, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    points: ['Product description and specs', 'Target price and MOQ', 'Destination country', 'Timeline requirements'],
    imgId: 'hiw-img-step1-a1b2',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database, trade platforms, and industry contacts to identify 3–5 manufacturers that match your requirements. We screen each one before presenting them to you.',
    points: ['Database and trade platform search', 'Initial supplier screening', 'Capacity and certification check', 'Shortlist report within 48 hours'],
    imgId: 'hiw-img-step2-c3d4',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
  },
  {
    num: '03',
    title: 'Quotation & Sample Coordination',
    desc: 'We request detailed quotations from shortlisted suppliers, negotiate pricing on your behalf, and coordinate sample production. You receive a clear comparison report to help you decide.',
    points: ['Detailed RFQ to each supplier', 'Price negotiation', 'Sample request and review', 'Comparative quotation report'],
    imgId: 'hiw-img-step3-e5f6',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
  },
  {
    num: '04',
    title: 'Factory Audit',
    desc: 'Before you place an order, our team visits the factory in person to verify their legitimacy, production capacity, equipment, and working conditions. You receive a full audit report with photos.',
    points: ['On-site factory visit', 'Business license verification', 'Production capacity assessment', 'Detailed audit report with photos'],
    imgId: 'hiw-img-step4-g7h8',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
  },
  {
    num: '05',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve a supplier, we assist with order placement and monitor production from start to finish. We conduct quality inspections at key stages and report any issues immediately.',
    points: ['Order placement support', 'Production schedule tracking', 'In-line and pre-shipment inspection', 'Issue escalation and resolution'],
    imgId: 'hiw-img-step5-i9j0',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
  },
  {
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most suitable shipping option for your goods. We handle export documentation and keep you updated until your shipment arrives.',
    points: ['Freight forwarder coordination', 'Sea, air, or express options', 'Export documentation support', 'Shipment tracking updates'],
    imgId: 'hiw-img-step6-k1l2',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
  },
];

const HowItWorks = () => {
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
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            A transparent, step-by-step process from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="text-5xl font-bold mb-4" style={{ color: '#e2e8f0' }}>{step.num}</div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a2e4a' }}>{step.title}</h2>
                    <p id={step.descId} className="text-base leading-relaxed mb-6" style={{ color: '#4a5568' }}>{step.desc}</p>
                    <ul className="space-y-2">
                      {step.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                          <span className="text-sm" style={{ color: '#4a5568' }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Typical Timeline"
            title="How Long Does It Take?"
            subtitle="Timelines vary by product complexity, but here's a general guide."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Supplier Shortlisting', time: '2–5 business days', note: 'From inquiry submission to shortlist report' },
              { phase: 'Samples & Audit', time: '1–3 weeks', note: 'Depending on sample production time and factory location' },
              { phase: 'Production & Shipping', time: '4–12 weeks', note: 'Varies by product type, quantity, and shipping method' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0] text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#c0392b' }}>{item.time}</div>
                <div className="font-semibold mb-2" style={{ color: '#1a2e4a' }}>{item.phase}</div>
                <div className="text-sm" style={{ color: '#4a5568' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#c0392b' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Submit your sourcing inquiry and we'll get back to you within 24 hours.
          </p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Submit a Sourcing Inquiry
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
