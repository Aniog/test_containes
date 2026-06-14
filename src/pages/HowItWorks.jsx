import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, FileCheck, Factory, Truck, CheckCircle, ArrowRight, Clock, MessageSquare, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Submit Your Inquiry',
      description: 'Fill out our inquiry form with details about the products you need, quantities, specifications, and timeline.',
      details: [
        'Product description and specifications',
        'Target quantity and frequency',
        'Required delivery date',
        'Quality standards and requirements',
        'Budget range (optional)'
      ]
    },
    {
      number: '02',
      icon: <Search className="w-6 h-6" />,
      title: 'Supplier Matching',
      description: 'We identify and verify suitable factories from our network based on your specific requirements.',
      details: [
        'Factory capability assessment',
        'Business license verification',
        'Production capacity check',
        'Quality systems evaluation',
        'Reference verification'
      ]
    },
    {
      number: '03',
      icon: <Building2 className="w-6 h-6" />,
      title: 'Sample Approval',
      description: 'We coordinate sample production and shipping for your review and approval before mass production begins.',
      details: [
        'Sample request coordination',
        'Quality verification',
        'Shipping to your location',
        'Feedback collection',
        'Specification refinement'
      ]
    },
    {
      number: '04',
      icon: <Factory className="w-6 h-6" />,
      title: 'Production & Quality Control',
      description: 'We monitor production closely, conduct inspections at key stages, and ensure quality standards are met.',
      details: [
        'Production schedule tracking',
        'During-production inspection',
        'Pre-shipment inspection',
        'Photo documentation',
        'Issue resolution'
      ]
    },
    {
      number: '05',
      icon: <Truck className="w-6 h-6" />,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics from factory to your destination, handling documentation and customs clearance.',
      details: [
        'Freight forwarding',
        'Customs documentation',
        'Cargo tracking',
        'Delivery coordination',
        'Final confirmation'
      ]
    }
  ];

  const timeline = [
    { stage: 'Initial Response', time: 'Within 24 hours' },
    { stage: 'Supplier Matching', time: '3-5 business days' },
    { stage: 'Sample Cycle', time: '2-4 weeks' },
    { stage: 'Production', time: 'Varies by product' },
    { stage: 'Shipping', time: '2-6 weeks depending on destination' }
  ];

  const faqs = [
    {
      question: 'How long does the complete sourcing process take?',
      answer: 'A typical sourcing cycle takes 6-12 weeks from initial inquiry to delivery. The timeline depends on product complexity, supplier availability, sample approval, and shipping method. We provide estimated timelines during the supplier matching phase.'
    },
    {
      question: 'What information do you need to start?',
      answer: 'To begin the sourcing process, we need: product description or specifications, estimated quantity, target delivery date, and any quality requirements. The more details you provide, the better we can match you with suitable suppliers.'
    },
    {
      question: 'Can I visit factories?',
      answer: 'Yes, we can arrange factory visits for serious buyers. We coordinate the visit logistics, provide translation services, and accompany you to ensure productive meetings. Contact us to discuss visit arrangements.'
    },
    {
      question: 'What if I am not satisfied with the samples?',
      answer: 'If samples do not meet your requirements, we work with the supplier to make necessary adjustments. We provide detailed feedback and coordinate revision samples until you are satisfied before proceeding with production.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300">
              A transparent, step-by-step approach to help you source products from China with confidence. From initial inquiry to final delivery, we guide you through every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm text-primary-600 font-semibold mb-1">Step {step.number}</div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3">{step.title}</h2>
                        <p className="text-lg text-neutral-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 lg:pl-12">
                    <div className="bg-neutral-50 rounded-xl p-6 lg:p-8">
                      <h3 className="font-semibold text-neutral-900 mb-4">What We Do:</h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 w-px h-12 bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Typical Timeline</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              While timelines vary by project, here is a general overview of what to expect at each stage.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-5 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.stage}</h3>
                  <p className="text-sm text-neutral-600">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Submit your inquiry and our team will respond within 24 hours with a customized plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
