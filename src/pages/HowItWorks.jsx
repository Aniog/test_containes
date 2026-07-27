import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, FileText, Eye, Truck, Package, Search } from 'lucide-react';
import { processSteps } from '@/lib/data';

const detailedSteps = [
  {
    step: 1,
    title: 'Submit Your Inquiry',
    icon: MessageSquare,
    description: 'Start by telling us what you need. Provide details about the products you\'re looking for, estimated quantities, target prices, and your timeline.',
    details: [
      'Fill out our inquiry form or send an email',
      'Include product specifications if available',
      'Share any existing supplier contacts',
      'Mention your target price range'
    ],
    timeline: '5-10 minutes'
  },
  {
    step: 2,
    title: 'Supplier Matching',
    icon: Search,
    description: 'Based on your requirements, we identify and evaluate potential suppliers. We visit factories, verify credentials, and shortlist the best options.',
    details: [
      'Identify 3-5 qualified suppliers',
      'Conduct factory visits and audits',
      'Verify business licenses and capabilities',
      'Provide detailed supplier profiles'
    ],
    timeline: '1-2 weeks'
  },
  {
    step: 3,
    title: 'Sample Evaluation',
    icon: Package,
    description: 'Before committing to bulk orders, we help you evaluate product quality through samples. We coordinate ordering, quality checks, and shipping.',
    details: [
      'Request samples from shortlisted suppliers',
      'Conduct quality inspections on samples',
      'Ship samples to your location',
      'Facilitate communication for revisions'
    ],
    timeline: '2-4 weeks'
  },
  {
    step: 4,
    title: 'Production & Quality Control',
    icon: Eye,
    description: 'Once you approve samples and place orders, we monitor production closely. Our QC team performs inspections at key stages to ensure quality.',
    details: [
      'Monitor production schedule',
      'Conduct pre-production inspections',
      'Perform during-production checks',
      'Execute pre-shipment inspections'
    ],
    timeline: '3-8 weeks (varies by product)'
  },
  {
    step: 5,
    title: 'Shipping & Delivery',
    icon: Truck,
    description: 'We handle all logistics coordination, from factory to your doorstep. This includes documentation, customs clearance, and shipping arrangement.',
    details: [
      'Coordinate pickup from factory',
      'Handle export documentation',
      'Arrange freight (sea, air, or land)',
      'Manage customs clearance'
    ],
    timeline: '1-6 weeks (depending on destination)'
  }
];

const faqs = [
  {
    question: 'How long does the entire process take?',
    answer: 'The total timeline varies based on product complexity and order size. A typical project takes 6-16 weeks from initial inquiry to delivery. Sample evaluation alone takes 2-4 weeks.'
  },
  {
    question: 'What information do you need from me?',
    answer: 'We need: product description/specifications, estimated quantities, target price range, timeline requirements, and any existing supplier information if available.'
  },
  {
    question: 'Can I visit factories myself?',
    answer: 'Absolutely. We can arrange factory visits and accompany you as interpreters and guides. This is often valuable for building relationships and understanding production capabilities.'
  },
  {
    question: 'What if quality issues arise during production?',
    answer: 'We have protocols in place: our QC team identifies issues early, documents them with photo/video evidence, communicates with the factory, and oversees corrective actions.'
  }
];

const HowItWorks = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4F7C] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our streamlined 5-step process makes China sourcing straightforward and risk-free. Here's what to expect from start to finish.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">The Sourcing Process</h2>
            <p className="section-subtitle">
              A clear, structured approach to getting your products from China reliably.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 relative z-10 text-center">
                    <div className="w-12 h-12 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {detailedSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-3">
                    <div className="bg-[#1E3A5F] text-white p-8">
                      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="text-5xl font-bold opacity-20 mb-2">0{step.step}</div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm">Timeline: {step.timeline}</p>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Submit your first inquiry today and discover how we can simplify your China sourcing.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
            Submit Your Inquiry
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
