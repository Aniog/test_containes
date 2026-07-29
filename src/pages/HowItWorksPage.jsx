import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Clock, FileText, MessageSquare,
  Shield, Search, ClipboardCheck, Factory, Package, Truck
} from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Requirements',
    description: 'Tell us what product you need, your specifications, target price range, order quantity, and any special requirements. The more detail you provide, the more accurate our sourcing will be.',
    icon: FileText,
    details: [
      'Product description and specifications',
      'Target price range and order quantity',
      'Quality standards and certifications needed',
      'Preferred shipping terms (FOB, CIF, DDP)',
      'Timeline and deadline requirements',
    ],
    tip: 'Tip: Include photos, technical drawings, or reference products if available.',
  },
  {
    step: '02',
    title: 'Supplier Search & Initial Screening',
    description: 'Our team searches for potential suppliers using our network, trade databases, and industry knowledge. We screen each supplier against our verification criteria.',
    icon: Search,
    details: [
      'Identify 3-5 potential suppliers',
      'Verify business licenses and registration',
      'Assess production capacity and capabilities',
      'Check trade history and references',
      'Initial communication with suppliers',
    ],
    tip: 'We typically complete this step within 5-10 business days.',
  },
  {
    step: '03',
    title: 'Quotation & Supplier Comparison',
    description: 'We collect detailed quotations from shortlisted suppliers and present them to you with a clear comparison, including pricing, lead times, and our assessment of each supplier.',
    icon: ClipboardCheck,
    details: [
      'Detailed price breakdowns from each supplier',
      'Lead time and minimum order quantity comparison',
      'Our assessment of supplier strengths and weaknesses',
      'Recommendations based on your priorities',
      'Negotiation support for better pricing',
    ],
    tip: 'You choose which supplier to proceed with. We do not make this decision for you.',
  },
  {
    step: '04',
    title: 'Sample Collection & Evaluation',
    description: 'Before you commit to a production order, we arrange samples from your chosen supplier. We evaluate the samples and ship them to you for your own quality check.',
    icon: Package,
    details: [
      'Sample request and collection from supplier',
      'Initial quality evaluation by our team',
      'Sample consolidation and international shipping',
      'Your evaluation and feedback',
      'Sample revision coordination if needed',
    ],
    tip: 'Sample approval is an important step. Do not skip it even if the price looks good.',
  },
  {
    step: '05',
    title: 'Production & Quality Control',
    description: 'Once you approve the sample and place your order, we monitor production progress and conduct quality inspections at key stages to ensure everything meets your standards.',
    icon: Factory,
    details: [
      'Production schedule tracking',
      'Regular progress updates with photos',
      'During-production inspection (optional)',
      'Pre-shipment inspection (recommended)',
      'Issue resolution with the supplier',
    ],
    tip: 'We recommend pre-shipment inspection for every order, regardless of supplier relationship.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate the shipping process, handle export documentation, and work with freight forwarders to ensure your goods arrive safely and on time.',
    icon: Truck,
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Container loading supervision (optional)',
      'Shipment tracking and updates',
      'Delivery confirmation and follow-up',
    ],
    tip: 'We can arrange shipping under FOB, CIF, or DDP terms based on your preference.',
  },
]

const timeline = [
  { phase: 'Requirements to Quotation', duration: '5-10 business days' },
  { phase: 'Sample Collection & Shipping', duration: '1-2 weeks' },
  { phase: 'Production (typical)', duration: '20-45 days' },
  { phase: 'Shipping to Destination', duration: '15-35 days' },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Our Sourcing Process Works</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, step-by-step process designed to minimize risk and keep you informed at every stage. You maintain control over all decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                    {step.tip}
                  </div>
                </div>
                <div className="lg:w-1/2 bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <step.icon className="w-16 h-16 mx-auto mb-3 text-slate-300" />
                    <p className="text-sm text-slate-500">Step {step.step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Typical Timeline</h2>
            <p className="section-subtitle">
              Actual timelines vary depending on product complexity, order quantity, and supplier capacity.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-slate-900">{item.phase}</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Submit your requirements and we will get back to you with a free sourcing plan within 24 hours.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
