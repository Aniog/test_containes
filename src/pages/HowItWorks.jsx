import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, FileText, Package, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Initial Consultation',
    description: 'We discuss your product requirements, quality standards, budget, and timeline to understand your needs.',
    details: [
      'Product specifications and requirements',
      'Quality standards and expectations',
      'Budget and pricing targets',
      'Timeline and delivery expectations',
      'Any special requirements or constraints',
    ],
  },
  {
    number: '02',
    icon: <FileText className="w-8 h-8" />,
    title: 'Supplier Research',
    description: 'We identify and pre-screen potential manufacturers from our network and new sources.',
    details: [
      'Supplier database matching',
      'Background verification',
      'Capability assessment',
      'Initial supplier shortlisting',
      'Supplier presentation to you',
    ],
  },
  {
    number: '03',
    icon: <Package className="w-8 h-8" />,
    title: 'Verification & Sampling',
    description: 'We conduct factory audits and manage sample production to confirm quality and capabilities.',
    details: [
      'Factory visit and audit',
      'Production capability verification',
      'Sample production coordination',
      'Quality assessment of samples',
      'Price and MOQ negotiation',
    ],
  },
  {
    number: '04',
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections throughout the process.',
    details: [
      'Production schedule management',
      'Regular progress updates',
      'During-production inspection (optional)',
      'Pre-shipment inspection',
      'Issue resolution and quality assurance',
    ],
  },
  {
    number: '05',
    icon: <Truck className="w-8 h-8" />,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics from factory to your destination.',
    details: [
      'Freight coordination',
      'Customs documentation',
      'Container loading supervision',
      'Shipment tracking',
      'Final delivery coordination',
    ],
  },
];

const benefits = [
  'Dedicated account manager throughout the process',
  'Transparent communication and regular updates',
  'Quality inspections at key production stages',
  'Competitive pricing through supplier relationships',
  'Complete documentation handling',
  'Risk mitigation through verification',
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our systematic approach to China sourcing ensures reliability, quality, 
              and peace of mind at every step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Our Sourcing Process</h2>
          <p className="section-subtitle">
            A clear, step-by-step approach to ensure successful sourcing
          </p>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-lg flex items-center justify-center">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--color-text)]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[var(--color-text-secondary)] mb-4">
                        {step.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-[var(--color-text-secondary)]">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                What You Get With Our Process
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Our systematic approach provides numerous benefits compared to direct sourcing.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-[var(--color-text)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
                Typical Timeline
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[var(--color-text)]">Supplier Matching</span>
                    <span className="text-[var(--color-primary)] font-semibold">1-2 weeks</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[var(--color-text)]">Sampling</span>
                    <span className="text-[var(--color-primary)] font-semibold">2-4 weeks</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[var(--color-text)]">Production</span>
                    <span className="text-[var(--color-primary)] font-semibold">3-8 weeks</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[var(--color-text)]">Shipping</span>
                    <span className="text-[var(--color-primary)] font-semibold">2-6 weeks</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                * Timeline varies based on product complexity and order size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Let's discuss your sourcing needs and create a customized plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
