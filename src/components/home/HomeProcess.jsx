import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description:
      'Tell us what you need — product type, specifications, target price, and quantity. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research',
    description:
      'Our team searches our verified supplier network and identifies 3–5 qualified manufacturers that match your requirements.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    description:
      'We visit shortlisted factories in person to verify credentials, capacity, and quality systems before you receive samples.',
  },
  {
    number: '04',
    title: 'Sample & Approval',
    description:
      'Samples are arranged, inspected, and shipped to you for approval. We coordinate revisions with the factory as needed.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description:
      'Once you confirm the order, we monitor production progress and conduct quality inspections at key milestones.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description:
      'We coordinate with freight forwarders, prepare export documents, and ensure your goods are shipped on schedule.',
  },
];

export default function HomeProcess() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing Process"
          title="How We Work With You"
          subtitle="A structured, transparent process from first inquiry to final delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="text-4xl font-bold text-gray-100 mb-3">{step.number}</div>
              <h3 className="text-brand-navy font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-brand-slate text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
