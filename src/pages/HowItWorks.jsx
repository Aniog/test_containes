import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Factory, FileCheck, Truck, ArrowRight,
  CheckCircle, Clock, Shield, Users, Phone, Mail
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Initial Consultation & Requirements',
      duration: '1-2 days',
      icon: MessageCircle,
      description: 'Share your product requirements, specifications, target pricing, quantity, and timeline. We review your needs and provide initial guidance on feasibility and sourcing strategy.',
      activities: [
        'Product specification review',
        'Market feasibility assessment',
        'Budget and timeline discussion',
        'Sourcing strategy recommendation'
      ]
    },
    {
      step: '02',
      title: 'Supplier Discovery & Verification',
      duration: '1-2 weeks',
      icon: Factory,
      description: 'Our team identifies potential suppliers from our verified network and conducts comprehensive factory audits to ensure they meet your requirements.',
      activities: [
        'Supplier identification and screening',
        'On-site factory audits',
        'Production capability assessment',
        'Quality system evaluation',
        'Reference and credential checks'
      ]
    },
    {
      step: '03',
      title: 'Sampling & Negotiation',
      duration: '1-3 weeks',
      icon: FileCheck,
      description: 'We arrange product samples for your evaluation, negotiate pricing and terms, and finalize supplier selection based on your feedback.',
      activities: [
        'Sample production and shipping',
        'Quality evaluation and feedback',
        'Price and term negotiation',
        'Contract finalization'
      ]
    },
    {
      step: '04',
      title: 'Production & Quality Control',
      duration: '2-8 weeks',
      icon: Shield,
      description: 'Once you approve the samples and terms, production begins. We monitor progress and conduct quality inspections at key stages.',
      activities: [
        'Production monitoring and updates',
        'Pre-production inspection',
        'During production (DUPRO) inspection',
        'Regular progress reports with photos'
      ]
    },
    {
      step: '05',
      title: 'Final Inspection & Shipping',
      duration: '1-2 weeks',
      icon: Truck,
      description: 'Before shipment, we conduct a thorough final inspection. Then we handle all logistics to deliver products to your specified destination.',
      activities: [
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'Customs documentation',
        'Freight forwarding coordination',
        'Door-to-door delivery'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              How We Work
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              A clear, step-by-step process designed to make sourcing from China simple, transparent, and risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-brand-200 hidden md:block"></div>
                )}
                
                <div className="flex gap-8">
                  {/* Step number */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 bg-brand-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl z-10">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="md:hidden w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Typical duration: {step.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While timelines vary by project complexity, here's a general overview of what to expect.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: 'Consultation', weeks: '1-2 days', color: 'bg-blue-100 text-blue-800' },
                { phase: 'Supplier Audit', weeks: '1-2 weeks', color: 'bg-emerald-100 text-emerald-800' },
                { phase: 'Sampling', weeks: '1-3 weeks', color: 'bg-purple-100 text-purple-800' },
                { phase: 'Production', weeks: '2-8 weeks', color: 'bg-amber-100 text-amber-800' },
                { phase: 'Shipping', weeks: '1-4 weeks', color: 'bg-rose-100 text-rose-800' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`${item.color} rounded-lg py-3 px-4 font-semibold text-sm mb-2`}>
                    {item.phase}
                  </div>
                  <div className="text-gray-600 text-sm">{item.weeks}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Total estimated time:</span> 6-18 weeks depending on product complexity and order size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Our Process Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Risk Mitigation',
                desc: 'Every step includes verification and quality checks to minimize your risk when sourcing from overseas manufacturers.'
              },
              {
                icon: Users,
                title: 'Transparent Communication',
                desc: 'Regular updates, detailed reports, and direct access to your dedicated account manager throughout the process.'
              },
              {
                icon: CheckCircle,
                title: 'Quality Guarantee',
                desc: 'We stand behind our work. If products don\'t meet agreed specifications, we work with suppliers to resolve issues at no extra cost.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-brand-200 mb-8">
            Tell us what you need, and we'll guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+862012345678"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;