import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  FileText, 
  Handshake, 
  Factory, 
  ClipboardCheck, 
  Truck,
  Clock,
  Shield,
  MessageCircle,
  CreditCard
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need. Provide details about the product you want to source, including specifications, quantity, target price, and any special requirements.',
      details: [
        'Product specifications and technical drawings',
        'Estimated order quantity',
        'Target price range',
        'Required certifications',
        'Packaging requirements',
        'Delivery timeline'
      ],
      timeline: 'Same day response'
    },
    {
      step: 2,
      icon: Search,
      title: 'Supplier Identification & Verification',
      description: 'We identify qualified suppliers matching your criteria and conduct thorough verification to ensure they are legitimate and capable.',
      details: [
        'Search our database of 5,000+ verified factories',
        'Match suppliers based on your requirements',
        'Conduct factory audits and verification',
        'Verify business licenses and certifications',
        'Assess production capacity and capabilities',
        'Check references and track record'
      ],
      timeline: '1-2 weeks'
    },
    {
      step: 3,
      icon: Handshake,
      title: 'Supplier Selection',
      description: 'We present you with detailed supplier profiles and recommendations. You evaluate and select the best match for your needs.',
      details: [
        'Detailed supplier comparison reports',
        'Factory photos and video tours',
        'Pricing analysis',
        'Capability assessments',
        'Risk evaluation',
        'Our expert recommendations'
      ],
      timeline: '3-5 business days'
    },
    {
      step: 4,
      icon: Factory,
      title: 'Sample Evaluation',
      description: 'We arrange for samples from selected suppliers. Our team evaluates samples against your specifications and provides detailed feedback.',
      details: [
        'Sample request coordination',
        'Quality evaluation against specs',
        'Lab testing if required',
        'Detailed sample reports',
        'Price and margin analysis',
        'Sample feedback and negotiations'
      ],
      timeline: '2-4 weeks'
    },
    {
      step: 5,
      icon: FileText,
      title: 'Order Placement',
      description: 'Once you approve the sample, we help negotiate terms and place the order with the selected supplier.',
      details: [
        'Contract and terms negotiation',
        'Payment terms arrangement',
        'Production scheduling',
        'Quality specifications finalization',
        'Packaging and labeling details',
        'Timeline confirmation'
      ],
      timeline: '1 week'
    },
    {
      step: 6,
      icon: Factory,
      title: 'Production Monitoring',
      description: 'We monitor production progress closely, providing regular updates and addressing any issues that arise.',
      details: [
        'Regular factory visits',
        'Production progress reports',
        'Quality checkpoints',
        'Issue identification and resolution',
        'Timeline management',
        'Material quality verification'
      ],
      timeline: '4-12 weeks (varies by product)'
    },
    {
      step: 7,
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC team conducts thorough inspections at your specified production stage to ensure quality standards are met.',
      details: [
        'Pre-shipment inspection',
        'During production inspection option',
        'AQL-based sampling',
        'Detailed inspection reports',
        'Photo and video documentation',
        'Compliance verification'
      ],
      timeline: '1-3 days'
    },
    {
      step: 8,
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We handle all logistics from factory to your doorstep, including freight forwarding and customs clearance.',
      details: [
        'Freight booking and coordination',
        'Customs documentation',
        'Container loading supervision',
        'Shipment tracking',
        'Insurance coordination',
        'Door-to-door delivery option'
      ],
      timeline: '2-6 weeks (varies by destination)'
    }
  ];

  const timeline = [
    { phase: 'Supplier Search', weeks: '1-2' },
    { phase: 'Sample Evaluation', weeks: '2-4' },
    { phase: 'Production', weeks: '4-12' },
    { phase: 'Shipping', weeks: '2-6' },
    { phase: 'Total (typical)', weeks: '9-24' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'We verify suppliers and inspect products so you don\'t get scammed or receive bad quality.'
    },
    {
      icon: CreditCard,
      title: 'Cost Savings',
      description: 'Our expertise helps negotiate better prices and avoid costly mistakes.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'We handle all the legwork - you focus on your core business.'
    },
    {
      icon: MessageCircle,
      title: 'Language Support',
      description: 'Bilingual team bridges communication gaps with Chinese suppliers.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our step-by-step process ensures a smooth, reliable sourcing experience 
              from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <div className="flex items-center text-sm text-slate-500 mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.timeline}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`bg-white rounded-2xl p-6 border border-slate-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                      <item.icon className="w-16 h-16 text-slate-400" />
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-6 top-full w-0.5 h-16 bg-slate-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-slate-600">
              Timeline varies based on product complexity, quantity, and customization requirements
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{item.weeks}</div>
                  <div className="text-sm text-slate-600">{item.phase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Our systematic approach addresses common sourcing challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free consultation and quote. We'll guide you through every step.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;