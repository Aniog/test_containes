import { Link } from 'react-router-dom'
import {
  MessageSquare, Search, Package, Eye, Truck,
  ArrowRight, CheckCircle, Clock, FileText, Users
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Start by telling us what you need. Share your product specifications, target price, order quantity, quality standards, and desired delivery timeline through our inquiry form.',
    timeline: 'Day 1',
    deliverables: [
      'Product specification review',
      'Requirements clarification call',
      'Project scope confirmation',
      'Pricing proposal',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    desc: 'Our team searches our vetted supplier network and identifies manufacturers that match your criteria. We conduct background checks, verify licenses, and assess production capabilities.',
    timeline: 'Days 2-7',
    deliverables: [
      'Supplier shortlist (3-5 options)',
      'Factory profiles and capabilities',
      'Price comparison analysis',
      'Initial sample requests',
    ],
  },
  {
    step: '03',
    icon: Package,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples from your preferred suppliers, evaluate them against your specifications, and negotiate pricing and terms on your behalf.',
    timeline: 'Days 8-20',
    deliverables: [
      'Product samples shipped to you',
      'Quality assessment report',
      'Negotiated pricing and MOQs',
      'Draft contract terms',
    ],
  },
  {
    step: '04',
    icon: FileText,
    title: 'Order Placement & Production',
    desc: 'Once you approve samples and terms, we help place the order and begin monitoring production. You receive regular updates with photos and progress reports.',
    timeline: 'Days 21-50',
    deliverables: [
      'Purchase order finalization',
      'Weekly production updates',
      'In-line quality inspections',
      'Issue alerts and resolution',
    ],
  },
  {
    step: '05',
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team performs a comprehensive pre-shipment inspection using AQL standards. You receive a detailed report with photos and test results.',
    timeline: 'Days 51-55',
    deliverables: [
      'Pre-shipment inspection report',
      'Defect classification and photos',
      'Quantity verification',
      'Packaging and labeling check',
    ],
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We arrange freight forwarding, prepare customs documentation, and coordinate delivery to your warehouse or designated port. You receive tracking updates throughout.',
    timeline: 'Days 56-70',
    deliverables: [
      'Freight booking confirmation',
      'Customs documentation',
      'Shipment tracking updates',
      'Delivery confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Our Sourcing Process, Step by Step
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A transparent, structured approach to sourcing products from China. Here is exactly what happens from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="relative lg:pl-24">
                    {/* Step number circle */}
                    <div className="hidden lg:flex absolute left-0 w-16 h-16 bg-accent rounded-full items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="bg-surface-light rounded-2xl p-8 border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="lg:hidden w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-accent font-bold text-sm">STEP {step.step}</span>
                          <span className="text-text-muted text-sm ml-3">
                            <Clock className="w-3.5 h-3.5 inline mr-1" />
                            {step.timeline}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed mb-6">{step.desc}</p>

                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Key Deliverables</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.deliverables.map((d) => (
                            <div key={d} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                              <span className="text-text-secondary text-sm">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why this process works */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Why Our Process Works</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Built over a decade of sourcing experience, our process minimizes risk at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Local Expertise',
                desc: 'Our team is on the ground in China\'s major manufacturing regions, giving us direct access to factories and real-time production visibility.',
              },
              {
                icon: FileText,
                title: 'Documented at Every Step',
                desc: 'You receive written reports, photos, and data at each stage. Nothing is verbal or assumed. Every decision is documented.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Built In',
                desc: 'We do not wait until the end to check quality. Our inspections happen throughout production to catch issues early.',
              },
            ].map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="bg-white rounded-xl p-8 border border-border text-center">
                  <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{point.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-white/90 text-lg mb-8">
            Tell us what you need and we will get back to you within 24 hours with a sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent hover:bg-gray-100 font-semibold rounded-lg transition-colors"
          >
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
