import { ArrowRight, CheckCircle, Search, FileText, Package, Truck, ClipboardCheck, MessageCircle, Phone, Mail } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description: 'Fill out our inquiry form with your product requirements, including specifications, quantity, target price, and any special needs.',
    details: [
      'Product specifications and technical drawings',
      'Estimated order quantity',
      'Target price range',
      'Required certifications',
      'Packaging requirements',
      'Shipping destination',
    ],
    icon: Search,
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We identify and verify suitable suppliers from our network of pre-vetted factories. You receive detailed profiles with capabilities, certifications, and pricing.',
    details: [
      '2-4 supplier options presented',
      'Factory verification reports',
      'Production capacity information',
      'Price comparisons',
      'Certification documentation',
      'Previous client references',
    ],
    icon: FileText,
  },
  {
    number: '03',
    title: 'Sample Evaluation',
    description: 'We arrange samples from selected suppliers, conduct evaluations, and provide detailed feedback on quality, specifications, and manufacturing feasibility.',
    details: [
      'Sample procurement and shipping',
      'Quality assessment reports',
      'Specification compliance check',
      'Price negotiation support',
      'Sample modification suggestions',
      'Decision support analysis',
    ],
    icon: Package,
  },
  {
    number: '04',
    title: 'Production & Quality Control',
    description: 'During production, we conduct regular factory visits, provide progress updates, and perform quality inspections to ensure everything meets your standards.',
    details: [
      'Pre-production inspection',
      'During production inspections',
      'Weekly progress reports',
      'Quality issue resolution',
      'Timeline management',
      'Pre-shipment inspection',
    ],
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, handle customs documentation, and ensure your products arrive safely at your designated location.',
    details: [
      'Freight forwarding',
      'Customs clearance support',
      'Documentation handling',
      'Cargo tracking',
      'Insurance coordination',
      'Delivery confirmation',
    ],
    icon: Truck,
  },
];

const timeline = [
  { stage: 'Inquiry Submission', time: 'Day 1' },
  { stage: 'Supplier Matching', time: 'Days 2-5' },
  { stage: 'Sample Phase', time: 'Days 6-20' },
  { stage: 'Production', time: 'Days 21-45' },
  { stage: 'Shipping', time: 'Days 46-55' },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-white/80">
              Our proven 5-step process ensures smooth, reliable sourcing from China. From inquiry to delivery, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Process Timeline</h2>
            <p className="section-subtitle mx-auto">
              Typical timeline from inquiry to delivery
            </p>
          </div>
          
          <div className="flex items-center justify-between max-w-4xl mx-auto overflow-x-auto pb-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center min-w-[120px]">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="text-sm font-medium text-[var(--primary)]">{item.stage}</div>
                  <div className="text-xs text-[var(--text-secondary)]">{item.time}</div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-16 lg:w-24 h-0.5 bg-[var(--border)] mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="card">
                <div className="grid-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--primary)]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-[var(--text-secondary)] mb-6">{step.description}</p>
                    <h4 className="font-semibold text-[var(--primary)] mb-3">What you get:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-[var(--success)] flex-shrink-0" />
                          <span className="text-sm text-[var(--text-primary)]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl h-64 flex items-center justify-center">
                    <step.icon className="w-20 h-20 text-white/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Common Questions About Our Process</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">How long does the entire process take?</h4>
              <p className="text-[var(--text-secondary)]">The timeline varies based on product complexity and order size. Typically, the complete process takes 6-10 weeks from inquiry to delivery. Sample phase usually takes 2-3 weeks, production 3-6 weeks, and shipping 1-3 weeks depending on destination.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">Can I skip certain steps?</h4>
              <p className="text-[var(--text-secondary)]">Yes, our services are modular. You can choose which steps you need based on your experience and requirements. Some clients only need supplier verification, while others prefer full-service support.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">What if I'm not satisfied with the suppliers?</h4>
              <p className="text-[var(--text-secondary)]">We present multiple verified options, and if none meet your requirements, we continue searching until we find suitable matches. Our goal is ensuring you have confidence in your supplier choice.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-[var(--primary)] mb-2">How do you handle quality issues?</h4>
              <p className="text-[var(--text-secondary)]">If quality issues arise during production, we immediately notify you and work with the factory to implement corrective actions. Our inspectors document all findings, and we ensure problems are resolved before shipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Submit your inquiry today and let us help you find the right suppliers in China.
          </p>
          <a href="/contact" className="btn btn-white text-lg px-8 py-4">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;