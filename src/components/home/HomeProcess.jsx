import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    desc: 'Tell us what you need — product type, specs, quantity, target price, and destination. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Identification',
    desc: 'Our team researches and shortlists 3–5 qualified suppliers from our vetted network and new market research.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify credentials, capacity, and quality systems before you receive samples.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    desc: 'We coordinate sample production, review quality, and negotiate pricing and terms on your behalf.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'Once you place an order, we follow up with the factory at key milestones to ensure on-time, on-spec production.',
  },
  {
    number: '06',
    title: 'Inspection & Shipping',
    desc: 'We conduct pre-shipment inspection, verify packaging, and coordinate with your freight forwarder for smooth delivery.',
  },
];

export default function HomeProcess() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing Process"
          title="How We Work With You"
          subtitle="A structured, transparent process designed to reduce risk and give you full visibility at every stage."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="text-5xl font-bold text-blue-100 mb-4 leading-none select-none">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
