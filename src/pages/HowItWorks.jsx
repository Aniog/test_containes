import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirement',
    desc: 'Send us your mold requirement through our contact form or by email. You can share a drawing, product photo, physical sample reference, or a written description. Any format is acceptable — we will review it and ask follow-up questions if needed.',
    details: [
      'CAD files (.STEP, .IGES, .DWG, .STL)',
      'Product photos or sample images',
      'Hand-drawn sketches or concepts',
      'Written description with dimensions and material',
    ],
  },
  {
    number: '02',
    title: 'Requirement Review',
    desc: 'Our team reviews your submission and assesses the project scope. We check mold type, material requirements, cavity count, tolerance, surface finish, and production volume to ensure we understand your needs before sourcing begins.',
    details: [
      'Mold type and complexity assessment',
      'Material and process suitability check',
      'Clarification questions if needed',
      'Initial feasibility feedback',
    ],
  },
  {
    number: '03',
    title: 'Factory Matching',
    desc: 'Based on your project requirements, we identify suitable factory resources from our network. We verify factory capability, equipment, and relevant experience before making a recommendation.',
    details: [
      'Factory capability verification',
      'Equipment and capacity check',
      'Relevant project experience review',
      'Shortlist of suitable factories',
    ],
  },
  {
    number: '04',
    title: 'Quotation Collection & Comparison',
    desc: 'We collect quotations from multiple factories and present a clear comparison. You can review pricing, lead times, and factory profiles to make an informed decision.',
    details: [
      'Multiple factory quotations collected',
      'Side-by-side comparison provided',
      'Lead time and payment terms included',
      'Factory profile and capability summary',
    ],
  },
  {
    number: '05',
    title: 'Tooling & Sampling',
    desc: 'Once you confirm a factory, tooling begins. We follow up on mold development progress and coordinate sample production. Samples are reviewed and any modifications are addressed before mass production.',
    details: [
      'Tooling progress updates',
      'Sample coordination and review',
      'Modification follow-up',
      'Sample approval confirmation',
    ],
  },
  {
    number: '06',
    title: 'Production & Delivery',
    desc: 'After sample approval, mass production begins. We monitor production quality and timeline, conduct pre-shipment inspection, and coordinate international delivery to your destination.',
    details: [
      'Production monitoring and updates',
      'Pre-shipment quality inspection',
      'Shipping documentation support',
      'International delivery coordination',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">How It Works</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              A Clear Process From Inquiry to Delivery
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We follow a structured, transparent process so you always know where your project stands. From your first inquiry to final delivery, we manage every stage on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12">
            {steps.map(({ number, title, desc, details }, i) => (
              <div key={number} className="flex gap-6 md:gap-10">
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1B4F8A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#E2E8F0] mt-3 min-h-[40px]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-4 flex-1">
                  <h2 className="text-[#1A2332] font-bold text-xl mb-3">{title}</h2>
                  <p className="text-[#4A5568] leading-relaxed mb-4">{desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E87722] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1A2332] text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6', label: 'Structured Steps' },
              { value: '100%', label: 'English Communication' },
              { value: 'Multi-Factory', label: 'Quotation Comparison' },
              { value: 'End-to-End', label: 'Project Follow-up' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
                <div className="text-2xl font-bold text-[#1B4F8A] mb-1">{s.value}</div>
                <div className="text-[#4A5568] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background: '#1B4F8A'}} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your mold requirement and we'll begin the review process right away.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Submit Your Requirement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
