import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Users, MessageSquare, FileCheck, ClipboardCheck, 
  Truck, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Star
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Submit Your Request',
      icon: FileText,
      description: 'Fill out our inquiry form with your product requirements, including specifications, quantity, target price, and timeline.',
      details: [
        'Describe the products you need',
        'Provide technical specifications if available',
        'Indicate your target price range',
        'Specify your timeline requirements',
        'Share any existing supplier information',
      ],
      timeline: '5-15 minutes',
    },
    {
      step: 2,
      title: 'Free Consultation',
      icon: MessageSquare,
      description: 'Our sourcing team reviews your request and contacts you within 24 hours to discuss your needs in detail.',
      details: [
        'Clarify product requirements',
        'Discuss quality standards',
        'Review timeline feasibility',
        'Explain our services and fees',
        'Answer your questions',
      ],
      timeline: '24 hours',
    },
    {
      step: 3,
      title: 'Supplier Matching',
      icon: Users,
      description: 'We identify and verify suitable factories from our network of 500+ vetted suppliers based on your specific requirements.',
      details: [
        'Match based on product type',
        'Verify factory capabilities',
        'Check production capacity',
        'Assess quality control systems',
        'Review past performance',
      ],
      timeline: '3-7 days',
    },
    {
      step: 4,
      title: 'Verification & Selection',
      icon: FileCheck,
      description: 'We conduct thorough verification of shortlisted suppliers and present detailed reports to help you make informed decisions.',
      details: [
        'Factory visit with documentation',
        'Business license verification',
        'Capability assessment',
        'Risk analysis',
        'Detailed comparison report',
      ],
      timeline: '5-10 days',
    },
    {
      step: 5,
      title: 'Samples & Negotiation',
      icon: ClipboardCheck,
      description: 'We facilitate sample requests, handle negotiations, and help finalize contracts with your chosen supplier.',
      details: [
        'Sample request coordination',
        'Quality verification',
        'Price negotiation',
        'Payment term discussion',
        'Contract finalization',
      ],
      timeline: '1-3 weeks',
    },
    {
      step: 6,
      title: 'Production & QC',
      icon: Shield,
      description: 'We monitor production through regular factory visits and conduct quality inspections at key stages.',
      details: [
        'Regular progress updates',
        'During-production inspections',
        'Pre-shipment verification',
        'Issue resolution',
        'Quality documentation',
      ],
      timeline: '2-8 weeks (varies by order)',
    },
    {
      step: 7,
      title: 'Shipping & Delivery',
      icon: Truck,
      description: 'We coordinate all shipping logistics, handle documentation, and ensure your products reach you safely.',
      details: [
        'Freight booking',
        'Customs documentation',
        'Container loading supervision',
        'Shipment tracking',
        'Delivery coordination',
      ],
      timeline: '1-6 weeks (varies by destination)',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'We handle supplier research, verification, and coordination — freeing you to focus on your core business.',
    },
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Our local expertise and supplier relationships help you get competitive pricing and avoid costly mistakes.',
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Thorough verification and quality inspections protect you from fraud and quality issues.',
    },
    {
      icon: Star,
      title: 'Better Quality',
      description: 'Professional QC services ensure your products meet specifications before shipping.',
    },
  ];

  const timelineEstimate = [
    { stage: 'Supplier Matching', time: '3-7 days' },
    { stage: 'Verification', time: '5-10 days' },
    { stage: 'Samples & Negotiation', time: '1-3 weeks' },
    { stage: 'Production', time: '2-8 weeks' },
    { stage: 'Shipping', time: '1-6 weeks' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our streamlined 7-step process takes you from initial inquiry to product delivery, 
              with transparent communication and professional support at every stage.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Sourcing Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 top-24 w-0.5 h-16 bg-blue-200 -translate-x-1/2 hidden md:block"></div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Step number and content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h2>
                        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">What happens at this step:</h3>
                      <div className="space-y-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className={`bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 flex items-center justify-center h-64 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <step.icon className="w-24 h-24 text-blue-600/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2>Typical Timeline</h2>
              <p>From inquiry to delivery — here's what to expect at each stage</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {timelineEstimate.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-6 ${
                    index < timelineEstimate.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <span className="font-medium text-gray-900">{item.stage}</span>
                  </div>
                  <span className="text-gray-500">{item.time}</span>
                </div>
              ))}
              <div className="bg-blue-600 p-6 flex items-center justify-between">
                <span className="font-semibold text-white">Total Estimated Time</span>
                <span className="text-white font-bold text-lg">4-14 weeks</span>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">
              * Timeline varies based on product complexity, order size, and supplier availability
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Why Use Our Process</h2>
            <p>Benefits of working with SSourcing China</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your first inquiry today and experience our professional sourcing services. 
            No commitment required for the initial consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Submit Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
