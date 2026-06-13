import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, Search, Shield, ClipboardCheck, Factory, Ship, CheckCircle, MessageCircle, FileText, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what products you need, your specifications, target price, and quantity. The more details you provide, the better we can match you with the right suppliers.',
    icon: Send,
    details: [
      'Product description and specifications',
      'Target price range and quantity',
      'Quality requirements and certifications needed',
      'Timeline and delivery expectations'
    ]
  },
  {
    number: '02',
    title: 'Supplier Research & Matching',
    description: 'Our team searches through our verified supplier network and identifies the best manufacturers for your specific product needs.',
    icon: Search,
    details: [
      'Search our database of 2,000+ verified suppliers',
      'Evaluate capabilities, certifications, and capacity',
      'Compare pricing and lead times',
      'Shortlist 3-5 qualified suppliers'
    ]
  },
  {
    number: '03',
    title: 'Supplier Verification',
    description: 'Before recommending any supplier, we conduct thorough verification to ensure they are legitimate and capable of meeting your requirements.',
    icon: Shield,
    details: [
      'Business license and registration verification',
      'Factory audit with photos and video',
      'Production capacity assessment',
      'Reference checks with existing clients'
    ]
  },
  {
    number: '04',
    title: 'Sample Evaluation',
    description: 'We arrange samples from shortlisted suppliers so you can evaluate quality before committing to a full order.',
    icon: FileText,
    details: [
      'Sample procurement from multiple suppliers',
      'Quality comparison and analysis',
      'Feedback coordination with factories',
      'Sample revision if needed'
    ]
  },
  {
    number: '05',
    title: 'Price Negotiation & Order Placement',
    description: 'We negotiate the best pricing and terms on your behalf, then help you place the order with your chosen supplier.',
    icon: MessageCircle,
    details: [
      'Market price analysis and benchmarking',
      'Direct negotiation with suppliers',
      'Payment term optimization',
      'Contract review and confirmation'
    ]
  },
  {
    number: '06',
    title: 'Production Monitoring',
    description: 'We monitor your production progress with regular factory visits and updates to ensure everything stays on track.',
    icon: Factory,
    details: [
      'Regular factory visits and progress reports',
      'Production timeline tracking',
      'Issue identification and early resolution',
      'Milestone verification'
    ]
  },
  {
    number: '07',
    title: 'Quality Inspection',
    description: 'Our QC team conducts thorough inspections at key production stages to ensure your products meet specifications.',
    icon: ClipboardCheck,
    details: [
      'Pre-production inspection (materials check)',
      'During-production inspection (process monitoring)',
      'Pre-shipment inspection (final quality check)',
      'Detailed inspection reports with photos'
    ]
  },
  {
    number: '08',
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire shipping process to ensure your goods arrive safely and on time at your destination.',
    icon: Ship,
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Cargo consolidation from multiple suppliers',
      'Real-time shipment tracking'
    ]
  }
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">How It Works</h1>
            <p className="text-lg text-slate-300">A clear, step-by-step process designed to make sourcing from China simple, transparent, and reliable.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200" />
                )}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 card">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{step.title}</h2>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">While timelines vary by product and order size, here is a general overview of the sourcing process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1-3 days</div>
              <h3 className="font-semibold text-slate-900 mb-1">Request & Research</h3>
              <p className="text-sm text-slate-600">Submit request and supplier matching</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1-2 weeks</div>
              <h3 className="font-semibold text-slate-900 mb-1">Verification & Samples</h3>
              <p className="text-sm text-slate-600">Supplier audit and sample evaluation</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-6 weeks</div>
              <h3 className="font-semibold text-slate-900 mb-1">Production</h3>
              <p className="text-sm text-slate-600">Manufacturing with monitoring and QC</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1-4 weeks</div>
              <h3 className="font-semibold text-slate-900 mb-1">Shipping</h3>
              <p className="text-sm text-slate-600">Logistics and delivery coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
            <p className="text-blue-100 text-lg mb-8">Submit your sourcing request and we will get back to you within 24 hours.</p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
