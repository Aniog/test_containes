import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Users, Factory, FlaskConical, Settings, Package, 
  Truck, CheckCircle, ArrowRight, Clock, Phone, Mail 
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Inquiry',
    description: 'Tell us about your product requirements, quantities, target pricing, and any specific criteria.',
    details: [
      'Product specifications and requirements',
      'Estimated order quantities',
      'Target price range',
      'Quality standards and certifications',
      'Timeline expectations',
      'Shipping destination',
    ],
    timeline: '5-10 minutes',
  },
  {
    number: '02',
    icon: Users,
    title: 'Supplier Matching',
    description: 'We identify and pre-screen qualified manufacturers that match your specific criteria.',
    details: [
      'Database of verified suppliers',
      'Capability matching',
      'Capacity assessment',
      'Preliminary price quotes',
      'Location considerations',
      'Certification verification',
    ],
    timeline: '1-2 weeks',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory legitimacy, capabilities, and business practices.',
    details: [
      'Business license verification',
      'Production facility inspection',
      'Quality systems assessment',
      'Worker conditions review',
      'Capacity verification',
      'Certification authentication',
    ],
    timeline: '1 week',
  },
  {
    number: '04',
    icon: FlaskConical,
    title: 'Sample Approval',
    description: 'Review and approve samples before committing to bulk production.',
    details: [
      'Sample request coordination',
      'Quality assessment',
      'Modification requests',
      'Final approval process',
      'Pricing confirmation',
      'Payment terms agreement',
    ],
    timeline: '2-4 weeks',
  },
  {
    number: '05',
    icon: Settings,
    title: 'Production & Quality Control',
    description: 'We monitor production progress and conduct quality inspections throughout the process.',
    details: [
      'Production schedule tracking',
      'Weekly progress updates',
      'Pre-production inspection',
      'During production inspection',
      'Pre-shipment inspection',
      'Issue resolution',
    ],
    timeline: '3-8 weeks',
  },
  {
    number: '06',
    icon: Package,
    title: 'Shipping Coordination',
    description: 'We handle all logistics, documentation, and coordination to deliver your goods.',
    details: [
      'Freight booking',
      'Customs documentation',
      'Export/import clearance',
      'Container tracking',
      'Final delivery coordination',
      'Delivery confirmation',
    ],
    timeline: '2-6 weeks',
  },
];

const timelineFeatures = [
  {
    icon: Clock,
    title: 'Transparent Timelines',
    description: 'Clear estimated timelines for each phase of the process, updated regularly.',
  },
  {
    icon: Phone,
    title: 'Direct Communication',
    description: 'Speak directly with your assigned project manager throughout the process.',
  },
  {
    icon: Mail,
    title: 'Regular Updates',
    description: 'Receive consistent progress updates via email and our online portal.',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Your Step-by-Step Sourcing Journey
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              From initial inquiry to final delivery, our transparent process keeps you informed 
              and in control at every stage. Here's what to expect when you work with SSourcing China.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">The Sourcing Process</h2>
            <p className="text-body">
              Click on each step to learn more about what happens during that phase of the process.
            </p>
          </div>

          {/* Mobile: Accordion Style */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={step.number} className="card-base">
                <button
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                  className="w-full flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-accent font-semibold">{step.number}</span>
                      <span className="text-sm text-text-secondary">•</span>
                      <span className="text-xs text-text-secondary">{step.timeline}</span>
                    </div>
                    <h3 className="font-semibold text-text-primary">{step.title}</h3>
                  </div>
                  <span className={`transform transition-transform ${activeStep === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeStep === index && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-text-secondary mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                  className={`card-base cursor-pointer transition-all duration-300 ${
                    activeStep === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-accent font-semibold">{step.number}</span>
                        <span className="text-sm text-text-secondary">•</span>
                        <span className="text-sm text-text-secondary">{step.timeline}</span>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary text-sm">{step.description}</p>
                    </div>
                  </div>
                  {activeStep === index && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <ul className="grid grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-text-secondary">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Features */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Stay Informed</span>
            <h2 className="heading-2 mt-3 mb-4">Communication Throughout</h2>
            <p className="text-body">
              We believe transparency is key to successful sourcing. Here's how we keep you 
              informed at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {timelineFeatures.map((feature) => (
              <div key={feature.title} className="card-base text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Getting Started</span>
              <h2 className="heading-2 mt-3 mb-6">What You'll Need</h2>
              <p className="text-body mb-8">
                To help us find the best suppliers for your project, please prepare the following 
                information when you reach out:
              </p>
              <div className="space-y-4">
                {[
                  'Product descriptions, specifications, or technical drawings',
                  'Estimated order quantities and target pricing',
                  'Quality requirements and certification needs',
                  'Preferred production timeline',
                  'Shipping destination and any port preferences',
                  'Any existing supplier relationships or preferences',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Don't Have All the Details?</h3>
              <p className="text-text-secondary mb-6">
                No problem. Even partial information helps us get started. Our team can guide you 
                through the process and help refine your requirements.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center">
                Get Started Anyway
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Submit your inquiry today and receive a detailed sourcing plan within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-10 py-4">
              Submit an Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-10 py-4">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
