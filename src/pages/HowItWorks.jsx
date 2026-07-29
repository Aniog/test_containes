import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Search, Building2, FileText, ClipboardCheck,
  Package, Ship, CheckCircle, ArrowRight, Clock, Users,
  Shield, DollarSign, Phone, Mail, FileCheck, Truck
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: 'Submit Your Inquiry',
      subtitle: 'Tell Us What You Need',
      description: 'Start by filling out our inquiry form with details about your product requirements, estimated quantities, budget range, and timeline.',
      details: [
        'Product specifications and requirements',
        'Target price range per unit',
        'Estimated order quantities',
        'Required delivery timeline',
        'Quality standards and certifications needed',
        'Any special requirements or preferences',
      ],
      timeline: '5-10 minutes',
      color: 'blue',
    },
    {
      step: 2,
      icon: Search,
      title: 'Supplier Matching',
      subtitle: 'We Find the Right Factories',
      description: 'Based on your requirements, we search our network and conduct research to identify qualified manufacturers that match your criteria.',
      details: [
        'Industry-specific factory database access',
        'Pre-vetting of all potential suppliers',
        'Capability and capacity verification',
        'Price benchmarking analysis',
        'Initial supplier shortlisting',
        'Background and reference checks',
      ],
      timeline: '3-5 business days',
      color: 'purple',
    },
    {
      step: 3,
      icon: Building2,
      title: 'Factory Verification',
      subtitle: 'We Verify Before You Commit',
      description: 'We conduct thorough on-site inspections to verify factory existence, legitimacy, production capabilities, and compliance.',
      details: [
        'Physical verification with photos and videos',
        'Business license and registration checks',
        'Production line and equipment inspection',
        'Workforce assessment',
        'Quality management system review',
        'Sample request and evaluation',
      ],
      timeline: '3-7 business days',
      color: 'green',
    },
    {
      step: 4,
      icon: ClipboardCheck,
      title: 'Negotiation & Agreement',
      subtitle: 'We Negotiate the Best Terms',
      description: 'Our team leverages local knowledge to negotiate competitive pricing and favorable terms on your behalf.',
      details: [
        'Price negotiation with multiple suppliers',
        'Payment terms arrangement',
        'Production timeline agreement',
        'Quality standards documentation',
        'Contract drafting and review assistance',
        'Sample approval workflow setup',
      ],
      timeline: '3-7 business days',
      color: 'orange',
    },
    {
      step: 5,
      icon: Package,
      title: 'Production & QC',
      subtitle: 'We Monitor Every Step',
      description: 'Throughout production, we provide regular updates, conduct quality inspections, and resolve any issues that arise.',
      details: [
        'Pre-production inspection (DUPRO)',
        'Weekly production progress reports',
        'During production inspection (DPI)',
        'Issue identification and resolution',
        'Pre-shipment inspection (PSI)',
        'Loading supervision if required',
      ],
      timeline: 'Ongoing throughout production',
      color: 'indigo',
    },
    {
      step: 6,
      icon: Ship,
      title: 'Shipping & Delivery',
      subtitle: 'Safe Delivery to Your Door',
      description: 'We handle all logistics, customs documentation, and coordinate shipping to ensure your products arrive safely.',
      details: [
        'Freight booking (sea, air, or express)',
        'Customs clearance documentation',
        'Cargo insurance coordination',
        'Shipment tracking and updates',
        'Last-mile delivery coordination',
        'Delivery confirmation and reporting',
      ],
      timeline: 'Varies by shipping method',
      color: 'teal',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Our verification and QC services significantly reduce the risks associated with sourcing from overseas.',
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Leverage our local presence and relationships to get competitive pricing without compromising quality.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip months of searching, vetting, and communicating. We handle it all efficiently.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access our team of sourcing experts with deep knowledge of Chinese manufacturing.',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'We handle all paperwork, contracts, and compliance documentation.',
    },
    {
      icon: Truck,
      title: 'Door-to-Door Service',
      description: 'From factory to your doorstep, we manage the entire logistics chain.',
    },
  ];

  const faqs = [
    {
      question: 'How long does the entire sourcing process take?',
      answer: 'The timeline varies depending on the complexity of your requirements. Typically, supplier matching takes 3-5 days, verification 3-7 days, negotiation 3-7 days, and production varies by order size. Most projects take 4-12 weeks from inquiry to delivery.',
    },
    {
      question: 'What information do I need to provide in my inquiry?',
      answer: 'The more details you provide, the better we can assist you. Essential information includes: product description, technical specifications, estimated quantities, target price range, required quality standards, and desired timeline. Photos or drawings are very helpful.',
    },
    {
      question: 'Do you work with small orders?',
      answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. Our minimum order quantities vary by supplier, but we can often accommodate smaller orders through consolidation services.',
    },
    {
      question: 'What if I\'m not satisfied with the suppliers you find?',
      answer: 'We provide multiple supplier options for comparison. If none meet your standards, we continue searching until we find suitable matches. Our goal is your complete satisfaction.',
    },
    {
      question: 'How do you handle quality control for large orders?',
      answer: 'We offer tiered inspection services: pre-production, during production, and pre-shipment inspections. Our inspectors follow AQL standards and provide detailed reports with photos and videos.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Simple 6-Step Process
            </h1>
            <p className="text-xl text-gray-600">
              From your initial inquiry to final delivery, we guide you through every step 
              of the China sourcing process with transparency and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full h-16 w-0.5 bg-gradient-to-b from-blue-300 to-transparent -translate-x-1/2"></div>
                )}
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        step.color === 'blue' ? 'bg-blue-600 text-white' :
                        step.color === 'purple' ? 'bg-purple-600 text-white' :
                        step.color === 'green' ? 'bg-green-600 text-white' :
                        step.color === 'orange' ? 'bg-orange-600 text-white' :
                        step.color === 'indigo' ? 'bg-indigo-600 text-white' :
                        'bg-teal-600 text-white'
                      }`}>
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Step {step.step}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-500 mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">What We Deliver:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-3xl font-bold text-blue-600">{step.step}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">{step.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Documentation</p>
                          <p className="font-medium text-gray-900">Complete records</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Quality</p>
                          <p className="font-medium text-gray-900">ISO standards</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Support</p>
                          <p className="font-medium text-gray-900">24/7 updates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Why Work With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Process
            </h2>
            <p className="text-lg text-gray-600">
              Our structured approach delivers measurable advantages at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="p-6 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Submit your inquiry today and receive a personalized response within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
