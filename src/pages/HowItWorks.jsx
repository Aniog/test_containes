import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Search, 
  Factory, 
  MessageCircle, 
  ClipboardCheck, 
  Truck,
  Clock,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Fill out our inquiry form with details about the products you want to source, including specifications, quantity, target price, and any special requirements.',
      details: [
        'Product specifications and technical drawings',
        'Target price range',
        'Required certifications',
        'Quality standards',
        'Packaging requirements',
        'Delivery timeline',
      ],
    },
    {
      number: '02',
      icon: Search,
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers in China that match your criteria. We leverage our extensive network and database of pre-vetted suppliers.',
      details: [
        'Market research and supplier identification',
        'Capability matching',
        'Price comparison',
        'MOQ (Minimum Order Quantity) assessment',
        'Production lead time evaluation',
        'Initial supplier shortlisting',
      ],
    },
    {
      number: '03',
      icon: Factory,
      title: 'Supplier Verification',
      description: 'We conduct comprehensive factory audits to verify supplier legitimacy, assess production capabilities, and ensure quality standards are met.',
      details: [
        'On-site factory inspection',
        'Business license verification',
        'Production capacity assessment',
        'Quality management system audit',
        'Financial stability check',
        'Reference verification',
      ],
    },
    {
      number: '04',
      icon: MessageCircle,
      title: 'Sample & Negotiation',
      description: 'We request samples from shortlisted suppliers, evaluate them against your requirements, and negotiate the best terms for your order.',
      details: [
        'Sample request coordination',
        'Sample quality evaluation',
        'Price negotiation',
        'Payment terms negotiation',
        'Contract drafting and review',
        'MOQ discussion',
      ],
    },
    {
      number: '05',
      icon: ClipboardCheck,
      title: 'Production & QC',
      description: 'We monitor production progress closely and conduct quality inspections at key stages to ensure products meet your specifications.',
      details: [
        'Production progress tracking',
        'Pre-production sample approval',
        'During production inspection',
        'Pre-shipment inspection',
        'Defect reporting and resolution',
        'Compliance verification',
      ],
    },
    {
      number: '06',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate the entire logistics process, from factory to your designated delivery address, handling all documentation and customs.',
      details: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Insurance coordination',
        'Door-to-door delivery',
        'Shipment tracking',
      ],
    },
  ];

  const timeline = [
    { stage: 'Request Submission', time: 'Day 1' },
    { stage: 'Supplier Research', time: 'Days 1-7' },
    { stage: 'Factory Verification', time: 'Days 7-14' },
    { stage: 'Sample & Negotiation', time: 'Days 14-30' },
    { stage: 'Production', time: 'Days 30-60' },
    { stage: 'Quality Control', time: 'Days 50-60' },
    { stage: 'Shipping', time: 'Days 60-75' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk-Free Sourcing',
      description: 'Every supplier goes through our rigorous verification process',
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'We handle all the legwork so you can focus on your business',
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Our expertise helps you get the best prices from suppliers',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Native Mandarin speakers with deep China business knowledge',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our transparent, step-by-step process ensures you get quality products from verified suppliers in China. Here's what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Number & Icon */}
                  <div className="lg:col-span-3 bg-primary/5 p-8 flex flex-col items-center justify-center text-center lg:border-r border-border">
                    <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4 p-8 lg:border-r border-border">
                    <p className="text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5 p-8">
                    <h4 className="font-semibold text-text-dark mb-4">What happens in this stage:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-dark text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Typical Timeline
            </h2>
            <p className="text-text-muted text-lg">
              While timelines vary based on product complexity, here's a general overview of what to expect.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 right-0 h-1 bg-border">
                  <div className="h-full bg-primary w-3/4" />
                </div>

                {timeline.map((item, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      index < 5 ? 'bg-primary text-white' : 'bg-border text-text-muted'
                    }`}>
                      <span className="text-sm font-semibold">{index + 1}</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-text-dark mb-1">{item.stage}</p>
                      <p className="text-xs text-text-muted">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-text-muted text-sm mt-8">
            * Timeline is approximate and may vary based on product complexity and supplier availability
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our Process Works
            </h2>
            <p className="text-white/80 text-lg">
              Our systematic approach minimizes risks and maximizes success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/70 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote. Tell us what you need, and we'll handle the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;