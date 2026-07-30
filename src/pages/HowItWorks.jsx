import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Package, Search, CheckCircle, ClipboardCheck, Truck,
  Phone, Mail, Shield, Clock, Users, Globe, Star, ArrowDown
} from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    subtitle: 'Tell Us What You Need',
    description: 'Start by sharing your product specifications, target price, quantity requirements, and quality standards. The more details you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and technical requirements',
      'Target price range and budget considerations',
      'Minimum order quantity and delivery timeline',
      'Quality standards and certifications needed',
      'Packaging and labeling requirements',
      'Destination country and shipping preferences',
    ],
    icon: Package,
    imageQuery: 'business meeting requirements discussion',
    imageId: 'how-step1-img',
  },
  {
    step: '02',
    title: 'Supplier Identification & Verification',
    subtitle: 'We Find the Best Match',
    description: 'Our sourcing team searches our verified supplier network to identify manufacturers that match your requirements. We conduct thorough background checks and factory audits before presenting options.',
    details: [
      'Search our database of 500+ pre-vetted suppliers',
      'Evaluate suppliers against your specific requirements',
      'Conduct background checks and license verification',
      'Assess production capabilities and capacity',
      'Request initial pricing and MOQ information',
      'Present you with a shortlist of qualified suppliers',
    ],
    icon: Search,
    imageQuery: 'supplier verification factory audit',
    imageId: 'how-step2-img',
  },
  {
    step: '03',
    title: 'Sample Evaluation & Negotiation',
    subtitle: 'Test Before You Commit',
    description: 'We arrange product samples for your evaluation and negotiate pricing, payment terms, and production timelines with your chosen supplier. You approve before we proceed.',
    details: [
      'Coordinate sample production and shipping',
      'Facilitate sample evaluation and feedback',
      'Negotiate pricing and payment terms',
      'Finalize production specifications and timeline',
      'Draft and review supplier contracts',
      'Obtain your final approval before production',
    ],
    icon: CheckCircle,
    imageQuery: 'product samples evaluation quality check',
    imageId: 'how-step3-img',
  },
  {
    step: '04',
    title: 'Production & Quality Control',
    subtitle: 'Monitored Every Step',
    description: 'We oversee the entire production process with regular quality inspections at key milestones. You receive weekly progress reports with photos and status updates.',
    details: [
      'Create detailed production schedule',
      'Conduct pre-production sample verification',
      'Perform in-line inspections during production',
      'Execute pre-shipment quality inspection',
      'Provide weekly progress reports with photos',
      'Manage any quality issues or deviations',
    ],
    icon: ClipboardCheck,
    imageQuery: 'production line manufacturing quality control',
    imageId: 'how-step4-img',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    subtitle: 'To Your Doorstep',
    description: 'We coordinate the entire logistics process including freight forwarding, customs clearance, and final delivery. You receive tracking information and delivery updates.',
    details: [
      'Coordinate freight forwarding (sea, air, or express)',
      'Prepare all export and import documentation',
      'Manage customs clearance process',
      'Arrange cargo insurance',
      'Provide real-time shipment tracking',
      'Coordinate final delivery to your location',
    ],
    icon: Truck,
    imageQuery: 'container shipping logistics delivery',
    imageId: 'how-step5-img',
  },
]

const timeline = [
  { week: 'Week 1', activity: 'Requirements gathering and supplier identification' },
  { week: 'Week 2-3', activity: 'Supplier verification and initial pricing' },
  { week: 'Week 3-4', activity: 'Sample production and evaluation' },
  { week: 'Week 4-5', activity: 'Negotiation and contract finalization' },
  { week: 'Week 5-10', activity: 'Production and quality inspections' },
  { week: 'Week 10-12', activity: 'Shipping and delivery' },
]

const faqs = [
  {
    question: 'How long does the entire process take?',
    answer: 'The timeline varies depending on product complexity and quantity. Simple products can be completed in 6-8 weeks, while complex or custom items may take 10-14 weeks. We provide a detailed timeline after evaluating your specific requirements.'
  },
  {
    question: 'What if I am not satisfied with the samples?',
    answer: 'We work with the supplier to address your feedback and arrange revised samples at no additional cost. If we cannot find a satisfactory solution, we will identify alternative suppliers that better meet your needs.'
  },
  {
    question: 'Do I need to visit China?',
    answer: 'No, you do not need to visit China. Our local team handles everything on the ground, from factory visits to quality inspections. We provide regular updates with photos and videos so you have complete visibility without the travel.'
  },
  {
    question: 'What happens if there are quality issues after delivery?',
    answer: 'We work with you and the supplier to resolve any quality issues. Depending on the situation, this may include replacements, refunds, or corrective actions for future orders. Our goal is to ensure your complete satisfaction.'
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-full mb-6 text-sm font-medium">
              <Globe className="w-4 h-4" />
              How It Works
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Simple 5-Step Sourcing Process
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              From initial inquiry to final delivery, we make sourcing from China straightforward 
              and transparent. Here is exactly how we work with you.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={step.step} id={`step-${step.step}`} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[50%] bottom-0 translate-y-full w-0.5 h-32 bg-gray-200 z-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <ArrowDown className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{step.title}</h2>
                    <p className="text-lg text-red-600 mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Do:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} bg-gray-100 rounded-2xl overflow-hidden`}>
                    <img
                      data-strk-img-id={step.imageId}
                      data-strk-img={`[step-title-${step.step}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <span id={`step-title-${step.step}`} className="sr-only">{step.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-gray-600">
              A general overview of what to expect during a standard sourcing project.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-24 shrink-0 text-center">
                  <div className="text-lg font-bold text-red-600">{item.week}</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium">{item.activity}</p>
                </div>
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            * Timelines are estimates and may vary based on product complexity and quantity.
          </p>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Receive Throughout the Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete transparency and documentation at every stage of your sourcing project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Supplier Reports', description: 'Detailed profiles of each verified supplier including capabilities, certifications, and client references.' },
              { title: 'Factory Audit Reports', description: 'Comprehensive on-site inspection reports with photos, findings, and recommendations.' },
              { title: 'Sample Evaluation', description: 'Detailed assessment of product samples with quality metrics and improvement suggestions.' },
              { title: 'Progress Updates', description: 'Weekly reports with photos showing production status, milestones achieved, and upcoming activities.' },
              { title: 'QC Inspection Reports', description: 'Detailed quality inspection reports with defect analysis, photos, and pass/fail criteria.' },
              { title: 'Shipping Documentation', description: 'Complete set of shipping documents including invoices, packing lists, and certificates.' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our sourcing process.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Submit your requirements today and receive a free sourcing proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8612345678900"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors text-lg border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
