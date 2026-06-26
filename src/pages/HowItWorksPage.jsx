import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, ClipboardCheck, MessageSquare, Package, Ship, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Share your product specifications, target quantity, quality standards, and budget. The more details you provide, the more accurate our sourcing will be.',
    details: [
      'Product specifications and technical requirements',
      'Target quantity and order frequency',
      'Quality standards and certifications needed',
      'Budget range and target pricing',
      'Preferred timeline and delivery schedule',
    ],
    tip: 'Tip: Include photos, drawings, or reference products if available.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching & Shortlisting',
    description: 'We search our verified supplier network and identify manufacturers that match your requirements. We present you with a shortlist of 3-5 qualified suppliers.',
    details: [
      'Database search across 500+ verified suppliers',
      'Capability assessment and quotation comparison',
      'Initial background checks on shortlisted factories',
      'Detailed supplier profiles with capabilities and pricing',
    ],
    tip: 'Tip: We recommend reviewing at least 3 suppliers before making a decision.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample Evaluation & Factory Audit',
    description: 'We arrange samples from shortlisted suppliers and conduct on-site factory audits to verify capabilities, quality systems, and production conditions.',
    details: [
      'Sample request coordination and quality evaluation',
      'On-site factory audit with detailed report',
      'Production capacity and equipment verification',
      'Quality management system assessment',
    ],
    tip: 'Tip: Factory audits are recommended for orders above $10,000.',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'Negotiation & Order Placement',
    description: 'We negotiate pricing, payment terms, and production schedules on your behalf. Once agreed, we help place the order and manage the contract.',
    details: [
      'Price negotiation with shortlisted suppliers',
      'Payment terms and schedule arrangement',
      'Contract review and order confirmation',
      'Production timeline agreement',
    ],
    tip: 'Tip: We recommend a 30% deposit with 70% balance before shipment.',
  },
  {
    icon: Package,
    step: '05',
    title: 'Production Monitoring & Quality Control',
    description: 'We monitor production progress with regular updates and conduct quality inspections at key stages to ensure your products meet specifications.',
    details: [
      'Weekly production progress reports',
      'During-production inspection at 20-30% completion',
      'Pre-shipment inspection (AQL sampling standard)',
      'Issue resolution and corrective action support',
    ],
    tip: 'Tip: Pre-shipment inspection is essential before final payment.',
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire shipping process including freight forwarding, customs documentation, and delivery tracking to your destination.',
    details: [
      'Freight forwarding (sea, air, or express)',
      'Customs documentation and clearance support',
      'Container loading supervision',
      'Real-time shipment tracking and delivery confirmation',
    ],
    tip: 'Tip: Sea freight is most cost-effective for large orders.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A transparent, step-by-step process designed to minimize risk and maximize value for your China sourcing projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Start Your Sourcing Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200" />
                )}
                
                <div className="flex gap-6 lg:gap-8">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-4">
                      <step.icon className="w-6 h-6 text-blue-700" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm font-medium">{step.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Typical Timeline</h2>
              <div className="space-y-4">
                {[
                  { phase: 'Supplier Sourcing', duration: '1-2 weeks' },
                  { phase: 'Sample Evaluation', duration: '1-2 weeks' },
                  { phase: 'Factory Audit (optional)', duration: '1 week' },
                  { phase: 'Negotiation & Order', duration: '1 week' },
                  { phase: 'Production', duration: '4-8 weeks' },
                  { phase: 'Quality Inspection', duration: '1 week' },
                  { phase: 'Shipping', duration: '2-6 weeks' },
                ].map((item) => (
                  <div key={item.phase} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                    <span className="font-medium text-gray-900">{item.phase}</span>
                    <span className="text-gray-600">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Our Process</h2>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: 'Time Savings', desc: 'We handle all supplier communication and coordination, saving you weeks of research and negotiation.' },
                  { icon: DollarSign, title: 'Cost Efficiency', desc: 'Our local knowledge and supplier relationships help you get better pricing and avoid costly mistakes.' },
                  { icon: CheckCircle, title: 'Risk Reduction', desc: 'Factory verification and quality inspections protect you from unreliable suppliers and defective products.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Submit your sourcing requirements and we will begin finding the right suppliers for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Submit Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
