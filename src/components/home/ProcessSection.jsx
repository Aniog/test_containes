import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product type, specifications, target price, quantity, and timeline. We review your requirements within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team searches our verified supplier network and conducts initial screening to identify 3–5 qualified manufacturers for your product.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description: 'We visit shortlisted factories in person to verify their capabilities, certifications, and production quality before recommending them.',
  },
  {
    number: '04',
    title: 'Sampling & Approval',
    description: 'We coordinate sample production and ship samples to you for review. We manage revisions until you approve the final sample.',
  },
  {
    number: '05',
    title: 'Order Placement & Production Monitoring',
    description: 'Once you confirm the order, we place it on your behalf and provide regular production updates and milestone reports.',
  },
  {
    number: '06',
    title: 'Quality Inspection & Shipping',
    description: 'We conduct pre-shipment inspection, verify packaging, and coordinate with your freight forwarder to ensure on-time delivery.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing Process"
          title="How We Work With You"
          subtitle="A clear, step-by-step process designed to reduce risk and give you full visibility at every stage."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-gray-300 text-xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
