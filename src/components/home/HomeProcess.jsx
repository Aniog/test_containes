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
      'We search our network and verified databases to identify 3–5 qualified manufacturers that match your requirements.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    description:
      'We visit shortlisted factories in person to verify their capabilities, certifications, and production standards.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    description:
      'We request samples, review quality, and negotiate pricing and terms on your behalf to get the best deal.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description:
      'Once you place an order, we track production milestones and send regular updates with photos and reports.',
  },
  {
    number: '06',
    title: 'QC Inspection & Shipping',
    description:
      'We inspect finished goods before shipment and coordinate with freight forwarders to deliver to your destination.',
  },
];

export default function HomeProcess() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            How We Source for You
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and save you time
            when sourcing from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl border border-slate-200 p-6 hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
