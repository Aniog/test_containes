import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Search, Eye, Truck, ArrowRight, CheckCircle,
  Clock, Shield, FileText, Phone, Mail, Package, Globe
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Initial Consultation & Requirements',
      description: 'Share your product requirements, specifications, target price, and order quantity with our team.',
      details: [
        'Fill out our simple inquiry form or schedule a call',
        'Provide product specifications, drawings, or samples',
        'Discuss target pricing and order quantities',
        'Set quality standards and compliance requirements',
        'Receive a detailed quote within 24 hours'
      ],
      timeline: '1-2 Days'
    },
    {
      number: '02',
      icon: Search,
      title: 'Supplier Identification & Verification',
      description: 'We search our network and market to find the best suppliers for your needs and verify their capabilities.',
      details: [
        'Research and identify potential suppliers',
        'Verify business licenses and registrations',
        'Conduct on-site factory audits',
        'Evaluate production capacity and capabilities',
        'Check references and past performance',
        'Provide detailed supplier comparison reports'
      ],
      timeline: '3-5 Days'
    },
    {
      number: '03',
      icon: FileText,
      title: 'Sample Development & Approval',
      description: 'We coordinate product samples and iterate until they meet your exact specifications.',
      details: [
        'Request initial samples from selected suppliers',
        'Evaluate samples against your specifications',
        'Provide detailed feedback and revision requests',
        'Manage sample iterations until approval',
        'Document final specifications and golden sample'
      ],
      timeline: '7-14 Days'
    },
    {
      number: '04',
      icon: Package,
      title: 'Order Placement & Production',
      description: 'We place orders, negotiate terms, and monitor production to ensure everything stays on track.',
      details: [
        'Negotiate final pricing and payment terms',
        'Place order with detailed specifications',
        'Coordinate production timeline and milestones',
        'Conduct pre-production meetings with factory',
        'Arrange initial production samples'
      ],
      timeline: '1-3 Days'
    },
    {
      number: '05',
      icon: Eye,
      title: 'Quality Control & Inspection',
      description: 'Multiple inspection points throughout production to ensure quality meets your standards.',
      details: [
        'During production (DUPRO) inspections',
        'Pre-shipment inspection (PSI)',
        'Defect classification and reporting',
        'Corrective action implementation',
        'Final quality approval before shipping'
      ],
      timeline: 'Ongoing'
    },
    {
      number: '06',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, documentation, and customs clearance to deliver your products safely.',
      details: [
        'Arrange optimal shipping method and carrier',
        'Prepare all export documentation',
        'Handle customs clearance procedures',
        'Coordinate door-to-door delivery',
        'Provide real-time shipment tracking',
        'Confirm delivery and order completion'
      ],
      timeline: '15-45 Days'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our streamlined 6-step process makes sourcing from China simple, transparent, and risk-free. 
              Here's how we work with you from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-brand-100 hidden md:block"></div>
                )}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-brand-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                            <span className="text-sm text-brand-500 font-medium">{step.timeline}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, dIndex) => (
                            <div key={dIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700">{detail}</span>
                            </div>
                          ))}
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

      {/* Timeline Summary */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-slate-600">
              Timelines vary based on product complexity and order size
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Planning', duration: '1-2 weeks', icon: FileText },
              { phase: 'Sampling', duration: '2-3 weeks', icon: Package },
              { phase: 'Production', duration: '4-8 weeks', icon: Clock },
              { phase: 'Shipping', duration: '2-6 weeks', icon: Truck }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <phase.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{phase.phase}</h4>
                <p className="text-2xl font-bold text-brand-500">{phase.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We stand behind our work with clear guarantees and commitments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: 'Products that don\'t meet specifications will be replaced or refunded. We conduct thorough inspections to prevent issues.'
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                description: 'We commit to agreed timelines and provide regular updates. If delays occur, we\'ll work to minimize impact.'
              },
              {
                icon: Globe,
                title: 'Transparent Communication',
                description: 'Regular updates, clear reporting, and direct access to your dedicated account manager throughout the process.'
              }
            ].map((guarantee, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <guarantee.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{guarantee.title}</h3>
                <p className="text-slate-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us about your sourcing needs and we'll create a customized plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+8613800138000"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/30"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
