import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileText, Users, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Globe } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'Share your product requirements, quantity, budget, and timeline. We analyze your needs and create a customized sourcing strategy.',
    details: [
      'Product specifications review',
      'Target price analysis',
      'Timeline assessment',
      'Sourcing strategy development',
    ],
    icon: MessageSquare,
  },
  {
    number: 2,
    title: 'Supplier Search & Verification',
    description: 'We identify suitable manufacturers, conduct thorough background checks, and present you with verified options.',
    details: [
      'Multi-supplier shortlisting',
      'Business license verification',
      'Factory audits and visits',
      'Capability assessment',
      'Reference checks',
    ],
    icon: Search,
  },
  {
    number: 3,
    title: 'Negotiation & Contracts',
    description: 'We negotiate pricing and terms on your behalf, ensuring favorable conditions before you sign any agreements.',
    details: [
      'Price negotiation',
      'MOQ discussions',
      'Payment terms agreement',
      'Contract review',
      'Sample coordination',
    ],
    icon: FileText,
  },
  {
    number: 4,
    title: 'Sample Approval',
    description: 'We coordinate sample production, conduct quality checks, and manage the approval process before mass production.',
    details: [
      'Sample request management',
      'Quality assessment',
      'Modification requests',
      'Final approval',
      'Reference sample creation',
    ],
    icon: Users,
  },
  {
    number: 5,
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections at key stages to ensure everything meets your standards.',
    details: [
      'Production tracking',
      'Inline inspections',
      'Pre-shipment inspections',
      'Issue resolution',
      'Progress reporting',
    ],
    icon: ClipboardCheck,
  },
  {
    number: 6,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, handle documentation, and track your shipment until it arrives at your destination.',
    details: [
      'Freight coordination',
      'Customs clearance',
      'Documentation management',
      'Shipment tracking',
      'Final delivery confirmation',
    ],
    icon: Truck,
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'We reduce risks associated with supplier fraud, quality issues, and shipping delays through careful verification and monitoring.',
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Our established supplier relationships and negotiation expertise help you get competitive pricing without compromising quality.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Skip the time-consuming research and travel. We handle supplier search, verification, and coordination efficiently.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We work with manufacturers across China and ship to over 50 countries worldwide.',
  },
];

const timeline = {
  standard: {
    title: 'Standard Timeline',
    items: [
      'Supplier search: 3-7 days',
      'Verification: 5-10 days',
      'Negotiation: 3-7 days',
      'Sample production: 2-4 weeks',
      'Mass production: 3-8 weeks',
      'Shipping: 2-6 weeks',
    ],
    total: '8-16 weeks total',
  },
  rush: {
    title: 'Rush Timeline',
    items: [
      'Supplier search: 1-3 days',
      'Verification: 3-5 days',
      'Negotiation: 1-3 days',
      'Sample production: 1-2 weeks',
      'Mass production: 2-6 weeks',
      'Shipping: 1-4 weeks (air freight)',
    ],
    total: '4-10 weeks total',
  },
};

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How We Help You Source from China
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Our proven 6-step process simplifies China sourcing and minimizes risks for your business.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Start Your Sourcing Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.number}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Step Number & Icon */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-2'}`}>
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center text-white">
                          <Icon className="w-10 h-10" />
                        </div>
                        <span className="absolute -top-3 -right-3 w-8 h-8 bg-accent-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                          {step.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                          {step.title}
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1 lg:col-start-2'}`}>
                    <div className="bg-neutral-50 rounded-xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                            <span className="text-neutral-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-primary mb-4">Timeline</span>
            <h2 className="section-heading mb-4">
              How Long Does It Take?
            </h2>
            <p className="section-subheading mx-auto">
              Project timelines vary based on product complexity and order volume. Here's a general overview.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.values(timeline).map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">{t.title}</h3>
                <ul className="space-y-3 mb-6">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-600">
                      <Clock className="w-4 h-4 text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-neutral-100">
                  <span className="text-sm text-neutral-500">Estimated Total:</span>
                  <p className="text-xl font-bold text-primary-700">{t.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-accent mb-4">Why Work With Us</span>
            <h2 className="section-heading mb-4">
              The Benefits of Our Process
            </h2>
            <p className="section-subheading mx-auto">
              Our structured approach delivers measurable advantages for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex gap-5 p-6 bg-neutral-50 rounded-xl">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a customized timeline and quote for your specific sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Quote
            </Link>
            <Link to="/services" className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-800 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
