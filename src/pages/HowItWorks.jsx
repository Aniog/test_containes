import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, MessageSquare, Search, 
  FileText, Factory, Package, Truck, Clock, Shield
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need. Provide product details, quantity, target price, timeline, and any specific requirements.',
      details: [
        'Product specifications and technical drawings',
        'Target price range (FOB or EXW)',
        'Required quantity and delivery timeline',
        'Quality standards and certifications needed',
        'Any special requirements or preferences',
      ],
    },
    {
      number: 2,
      icon: Search,
      title: 'Supplier Identification & Verification',
      description: 'We identify 3-5 suitable suppliers and conduct comprehensive verification to ensure legitimacy and capability.',
      details: [
        'Supplier search and shortlisting',
        'Business license verification',
        'Factory capacity assessment',
        'Certification verification',
        'Reference checks',
      ],
    },
    {
      number: 3,
      icon: FileText,
      title: 'Sample Evaluation',
      description: 'We arrange samples from shortlisted suppliers, evaluate quality, and help you make an informed decision.',
      details: [
        'Sample request and coordination',
        'Quality assessment and comparison',
        'Price and terms negotiation',
        'Supplier recommendation',
        'Sample report with photos/videos',
      ],
    },
    {
      number: 4,
      icon: Factory,
      title: 'Production & Quality Control',
      description: 'We monitor production, conduct inspections at key stages, and ensure quality standards are met.',
      details: [
        'Production progress monitoring',
        'During-production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Quality issue resolution',
        'Regular status updates',
      ],
    },
    {
      number: 5,
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and ensure smooth delivery to your destination.',
      details: [
        'Freight forwarding coordination',
        'Customs clearance assistance',
        'Documentation preparation',
        'Cargo tracking',
        'Delivery confirmation',
      ],
    },
  ];

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier identification and verification' },
    { phase: 'Week 3-4', activity: 'Sample evaluation and supplier selection' },
    { phase: 'Week 5-8', activity: 'Production (varies by order size)' },
    { phase: 'Week 9-10', activity: 'Quality inspection and final approval' },
    { phase: 'Week 11-12', activity: 'Shipping and delivery' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Minimize risks with verified suppliers and quality inspections',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save time with our expertise and established supplier network',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure product quality through systematic QC processes',
    },
    {
      icon: ArrowRight,
      title: 'Smooth Process',
      description: 'End-to-end support from inquiry to delivery',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">How It Works</h1>
            <p className="text-xl text-white/90">
              Our streamlined 5-step process makes sourcing from China simple, transparent, and risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {step.number}
                        </div>
                        <step.icon className="w-8 h-8 text-[var(--primary)]" />
                      </div>
                      <h2 className="text-2xl mb-3">{step.title}</h2>
                      <p className="text-[var(--text-secondary)]">{step.description}</p>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-lg font-semibold mb-4">What Happens:</h3>
                      <div className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Typical Timeline</h2>
            <p className="max-w-2xl mx-auto">
              While timelines vary based on product complexity and requirements, here's a general overview
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--border)]"></div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 w-5 h-5 bg-[var(--primary)] rounded-full border-4 border-white"></div>
                    <div className="bg-[var(--background)] p-4 rounded-lg">
                      <span className="font-semibold text-[var(--primary)]">{item.phase}</span>
                      <p className="text-sm mt-1">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Benefits of Our Process</h2>
            <p className="max-w-2xl mx-auto">
              Our systematic approach ensures transparency, quality, and reliability at every step
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[var(--border)]">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Start Your Sourcing Project?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Submit your inquiry today and let us help you find the right suppliers in China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;