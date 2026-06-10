import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, MessageSquare, Search, 
  FileText, Factory, ClipboardCheck, Truck, Package, ChevronDown, ChevronUp
} from 'lucide-react';

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Share your product requirements, specifications, target pricing, and timeline. The more details you provide, the better we can match you with suitable suppliers.',
      details: [
        'Product specifications and technical drawings',
        'Target price range and quantity',
        'Required certifications and standards',
        'Timeline and delivery requirements'
      ],
      icon: MessageSquare
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and vet 3-5 verified suppliers that match your criteria. Each supplier is thoroughly checked for legitimacy, production capacity, and quality standards.',
      details: [
        'Comprehensive supplier research',
        'Business license verification',
        'Production capacity assessment',
        'Quality management evaluation',
        'Customer reference checks'
      ],
      icon: Search
    },
    {
      number: '03',
      title: 'Negotiation & Agreement',
      description: 'We negotiate pricing, payment terms, and production conditions on your behalf. Our team ensures clear communication and favorable terms.',
      details: [
        'Price negotiation',
        'Payment term structuring',
        'Production scheduling',
        'Quality specification finalization',
        'Contract review and advice'
      ],
      icon: FileText
    },
    {
      number: '04',
      title: 'Production Monitoring',
      description: 'Throughout the manufacturing process, we provide regular updates and conduct on-site inspections to ensure quality standards and timeline adherence.',
      details: [
        'Weekly production progress updates',
        'On-site production monitoring',
        'Quality inspections at key stages',
        'Issue identification and resolution',
        'Timeline tracking and reporting'
      ],
      icon: Factory
    },
    {
      number: '05',
      title: 'Quality Control & Shipping',
      description: 'Final quality inspection before shipment ensures products meet specifications. We coordinate shipping logistics for smooth delivery to your location.',
      details: [
        'Pre-shipment inspection',
        'Quality verification report',
        'Freight forwarding coordination',
        'Customs documentation',
        'Door-to-door delivery'
      ],
      icon: Truck
    }
  ];

  const faqs = [
    { 
      question: 'How long does the entire sourcing process take?', 
      answer: 'Timeline varies based on product complexity and supplier availability. Typically: supplier identification takes 1-2 weeks, negotiation takes 1-2 weeks, and production takes 4-8 weeks. Total cycle is usually 6-12 weeks.' 
    },
    { 
      question: 'What information do I need to provide for a quote?', 
      answer: 'To provide an accurate quote, we need: product specifications or technical drawings, estimated order quantity, target price range, required certifications, and delivery timeline. The more details you provide, the more accurate our quote will be.' 
    },
    { 
      question: 'Do you charge success fees?', 
      answer: 'No, we do not charge success fees. Our pricing is transparent and based on the specific services you need. We provide detailed quotes before starting any work, with no hidden costs.' 
    },
    { 
      question: 'Can you source products not listed on your website?', 
      answer: 'Yes, we can source virtually any product from China. Our network and expertise allow us to find suppliers for a wide range of product categories beyond what is listed on our website.' 
    },
    { 
      question: 'How do you ensure product quality?', 
      answer: 'We ensure quality through multiple steps: supplier verification before engagement, quality inspections at pre-production, during production, and pre-shipment stages. We follow AQL standards and provide detailed inspection reports.' 
    },
    { 
      question: 'What happens if there are quality issues?', 
      answer: 'If quality issues arise, we work with the supplier to identify the root cause and implement corrective actions. Our on-site inspections help catch issues early, and we facilitate communication to resolve problems efficiently.' 
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Path to Successful China Sourcing
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A proven 5-step process to help you find verified suppliers and source products with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex'} gap-8 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{step.title}</h2>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-card shadow-card p-8 h-full min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="w-24 h-24 text-primary/20 mx-auto mb-4" />
                      <div className="text-6xl font-bold text-primary/10">{step.number}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Process Overview</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From inquiry to delivery, we guide you through every step
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-card shadow-card text-center relative z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-text-primary text-sm">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">
              Common questions about our sourcing process
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-card overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-surface-alt transition-colors"
                >
                  <span className="font-medium text-text-primary pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-surface-alt">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Sourcing Request</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tell us about your product needs and we'll get back to you within 24 hours
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-button hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;