import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation & Requirements',
    description: 'Share your product details, target pricing, order quantity, quality requirements, and delivery timeline. We review your requirements and schedule a call to discuss specifics if needed.',
    details: [
      'Free consultation with no obligation',
      'Product specification review',
      'Target price and volume discussion',
      'Timeline and logistics planning',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our sourcing team researches potential suppliers across our verified network and industry contacts. We evaluate each candidate on price, capacity, quality history, certifications, and export experience.',
    details: [
      'Research across 500+ verified factories',
      'Compare 3-5 qualified suppliers',
      'Price, quality, and capacity comparison',
      'Detailed supplier profiles and recommendations',
    ],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    description: 'We visit the shortlisted factories in person to verify their legitimacy, inspect production lines, review quality management systems, and confirm they can meet your requirements.',
    details: [
      'On-site factory visits by our team',
      'Business license verification',
      'Production capability assessment',
      'Quality system review with photos',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Specification Approval',
    description: 'Product samples are produced and shipped to you for review. We coordinate any revisions with the factory until the sample meets your exact specifications and quality expectations.',
    details: [
      'Initial sample production and shipping',
      'Detailed specification comparison',
      'Revision coordination as needed',
      'Final approval before mass production',
    ],
  },
  {
    number: '05',
    icon: Truck,
    title: 'Production, QC & Shipping',
    description: 'Once the sample is approved, mass production begins. We monitor production progress, conduct quality inspections at key stages, and coordinate all shipping logistics to your destination.',
    details: [
      'Production monitoring with weekly updates',
      'In-line and pre-shipment quality inspections',
      'Container loading supervision',
      'Sea, air, or rail freight coordination',
    ],
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Delivery & Ongoing Support',
    description: 'After delivery, we remain available for any follow-up needs including reorders, quality questions, new product sourcing, or scaling up existing product lines.',
    details: [
      'Post-delivery quality feedback',
      'Reorder coordination and pricing',
      'New product development support',
      'Long-term sourcing partnership',
    ],
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            How Our Sourcing Process Works
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            A clear, structured approach from your initial inquiry to product delivery. Six steps, direct communication, and full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex gap-6 lg:gap-10 pb-12 last:pb-0"
              >
                {/* Vertical line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 lg:left-7 top-16 bottom-0 w-px bg-navy-100" />
                )}

                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-navy-500 rounded-full flex items-center justify-center shadow-lg shadow-navy-500/30">
                    <span className="text-sm lg:text-base font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-6 lg:p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-accent-500" />
                    <h3 className="text-xl font-bold text-navy-500">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{step.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline expectation */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <SectionHeading
            badge="Timeline"
            title="What to Expect"
            description="Typical timelines for a standard sourcing project, from initial inquiry to first delivery."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { time: '48 Hours', label: 'Initial response with supplier recommendations' },
              { time: '5-7 Days', label: 'Complete supplier shortlist with pricing' },
              { time: '2-3 Weeks', label: 'Factory audit and sample arrangement' },
              { time: '30-60 Days', label: 'Production, inspection, and shipping' },
            ].map((item) => (
              <div key={item.time} className="bg-white rounded-xl p-6 border border-gray-100">
                <p className="text-2xl font-extrabold text-accent-500 mb-2">{item.time}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
