import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product type, quantity, target price, and any specific requirements. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We search our vetted supplier network and identify 3–5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    description: 'Our team visits shortlisted factories to verify capacity, certifications, and production quality before you commit.',
  },
  {
    number: '04',
    title: 'Sample & Approval',
    description: 'We arrange samples, review them against your specs, and coordinate revisions until you approve.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description: 'We follow up during production, conduct mid-production checks, and report progress to you regularly.',
  },
  {
    number: '06',
    title: 'QC Inspection & Shipping',
    description: 'Pre-shipment inspection is conducted. Once approved, we coordinate freight and send you all shipping documents.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            How We Source for You
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-bg-light rounded-xl p-6 h-full border border-border hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-border z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
