import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Search, Factory, ClipboardCheck, Truck, Package,
  CheckCircle, Clock, Users, Shield, ArrowRight, Phone, Mail
} from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: FileText,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need - product details, quantity, target price, and timeline.',
    details: [
      'Fill out our inquiry form with product specifications',
      'Upload any technical drawings, samples, or reference materials',
      'Specify quality requirements and standards',
      'Indicate your target price range and delivery timeline',
    ],
    timeline: '5-10 minutes',
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Matching & Verification',
    description: 'We identify and verify suitable factories from our pre-screened network.',
    details: [
      'Search our database of 1,200+ verified factories',
      'Match suppliers based on your product requirements',
      'Conduct factory verification visits',
      'Provide detailed supplier profiles and capability assessments',
    ],
    timeline: '3-7 days',
  },
  {
    step: 3,
    icon: Factory,
    title: 'Sample & Quote Review',
    description: 'Receive samples, compare quotes, and negotiate terms with our assistance.',
    details: [
      'Request samples from matched suppliers',
      'Receive and evaluate competitive quotes',
      'Negotiate pricing and terms on your behalf',
      'Facilitate communication and clarify specifications',
    ],
    timeline: '1-3 weeks',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    description: 'We monitor production, conduct inspections, and resolve any issues.',
    details: [
      'Establish production schedule and milestones',
      'Conduct regular factory visits and progress updates',
      'Perform quality inspections at key stages',
      'Address and resolve any production issues',
    ],
    timeline: '2-8 weeks (varies by product)',
  },
  {
    step: 5,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Coordinate shipping, documentation, and ensure smooth delivery.',
    details: [
      'Coordinate freight forwarding and logistics',
      'Handle customs documentation and clearance',
      'Track shipment from factory to destination',
      'Ensure smooth last-mile delivery',
    ],
    timeline: '1-4 weeks (varies by destination)',
  },
];

const keyBenefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Skip the research and verification phase. We already have relationships with verified factories.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Factory verification, quality inspections, and secure payment terms protect your investment.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our bilingual team provides communication support and negotiation expertise.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Multiple inspection stages ensure products meet your specifications before shipping.',
  },
];

const faqItems = [
  {
    question: 'How long does the entire sourcing process take?',
    answer: 'The timeline varies based on product complexity, quantity, and availability. A typical project takes 4-12 weeks from initial inquiry to delivery. Simple products may be faster, while custom-designed or complex products may take longer.',
  },
  {
    question: 'What if I\'m not satisfied with the supplier options?',
    answer: 'We present multiple supplier options with detailed profiles. If none meet your requirements, we continue searching until we find suitable matches. There\'s no obligation until you\'re satisfied with the selection.',
  },
  {
    question: 'How do you handle quality issues?',
    answer: 'We conduct inspections at multiple production stages. If issues are found, we work with the factory to resolve them. Our detailed inspection reports give you full transparency on product quality.',
  },
  {
    question: 'What payment terms do you recommend?',
    answer: 'We recommend secure payment terms such as 30% deposit with 70% paid before shipment after passing inspection. We can also arrange escrow services for additional security.',
  },
  {
    question: 'Can you help with custom product development?',
    answer: 'Yes, we offer product development support including technical drawing review, sample development, and factory selection for custom products.',
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-lg lg:text-xl text-blue-100">
              A clear, transparent process to help you source products from China with confidence. From initial inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                          Step {step.step}
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-bold">{step.title}</h2>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6">{step.description}</p>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="font-semibold mb-4">What Happens</h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`bg-blue-900 text-white p-6 lg:p-8 rounded-xl ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-orange-400" />
                      <span className="font-semibold">Typical Timeline</span>
                    </div>
                    <div className="text-3xl font-bold text-orange-400 mb-4">{step.timeline}</div>
                    <p className="text-blue-200 text-sm">
                      This is an estimate. Actual timelines may vary based on product complexity and supplier availability.
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-6 z-10">
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Use Our Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our structured approach provides clarity, reduces risk, and ensures quality at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">
                Common questions about our sourcing process.
              </p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Sourcing Journey?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Submit your inquiry today and receive a customized sourcing plan within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="mailto:info@ssourcingchina.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-lg transition-colors border border-white/30"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
