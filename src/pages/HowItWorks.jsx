import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, FileText, Search, Factory, Package, ClipboardCheck, Truck, CheckCircle,
  MessageSquare, Users, ShieldCheck, BarChart3
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    icon: FileText,
    duration: 'Day 1-3',
    description: 'You fill out a detailed brief or schedule a call with our team. We learn about your product specifications, target pricing, order volume, quality standards, and delivery timeline.',
    deliverables: ['Requirement summary document', 'Initial feasibility assessment', 'Project timeline proposal'],
    tips: 'The more detail you provide (photos, specs, target price), the faster and more accurate our sourcing will be.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlist',
    icon: Search,
    duration: 'Week 1-2',
    description: 'We tap into our database of 2,400+ verified suppliers and conduct targeted market research to identify 3-5 factories that match your requirements.',
    deliverables: ['Supplier comparison matrix', 'Factory capability profiles', 'Initial quotations'],
    tips: 'We prioritize factories we have personally visited and verified, reducing risk from day one.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    icon: ShieldCheck,
    duration: 'Week 2-3',
    description: 'For shortlisted factories, we conduct on-site or remote verification audits to confirm licenses, production capacity, equipment, quality systems, and compliance status.',
    deliverables: ['Factory audit report with photos', 'Risk assessment scorecard', 'Compliance documentation review'],
    tips: 'You can request a full on-site audit for critical suppliers or a remote audit for faster turnaround.',
  },
  {
    number: '04',
    title: 'Sampling & Negotiation',
    icon: Package,
    duration: 'Week 3-6',
    description: 'We coordinate sample production, manage revisions, and negotiate pricing, payment terms, and delivery schedules on your behalf.',
    deliverables: ['Physical samples for approval', 'Final negotiated quotation', 'Purchase agreement draft'],
    tips: 'Expect 2-3 sample rounds for custom products. We handle shipping samples to your door.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    icon: Factory,
    duration: 'Week 6-12',
    description: 'Once the order is placed, we monitor production progress with regular factory visits, milestone checks, and weekly status reports sent directly to you.',
    deliverables: ['Weekly production reports', 'Photo and video updates', 'Issue alerts and resolutions'],
    tips: 'Early involvement prevents late surprises. We flag delays or quality deviations immediately.',
  },
  {
    number: '06',
    title: 'Quality Inspection',
    icon: ClipboardCheck,
    duration: 'Before Shipment',
    description: 'We conduct pre-shipment inspections using internationally accepted AQL sampling standards. Defective units are flagged for rework before goods leave the factory.',
    deliverables: ['Detailed inspection report', 'Pass/fail recommendation', 'Photo evidence of defects (if any)'],
    tips: 'We recommend PSI for every shipment. For high-value orders, add during-production (DUPRO) checks.',
  },
  {
    number: '07',
    title: 'Shipping & Delivery',
    icon: Truck,
    duration: '2-6 Weeks',
    description: 'We coordinate with freight forwarders, prepare customs documentation, and track your shipment until it reaches your warehouse or designated port.',
    deliverables: ['Shipping schedule and tracking', 'Customs documentation', 'Delivery confirmation'],
    tips: 'We help optimize container loading to reduce freight costs and prevent damage in transit.',
  },
]

const whyWorkWithUs = [
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    description: 'Every client gets a bilingual project manager who knows your account inside and out.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Visibility',
    description: 'Access production dashboards, inspection reports, and shipment tracking 24/7.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'Talk to your project manager via email, phone, or messaging apps in your timezone.',
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with fixed service fees. No surprise charges or supplier kickbacks.',
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
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              How We Work
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A transparent, step-by-step process designed to minimize risk and deliver consistent results. From your first inquiry to final delivery, you are in control.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-hover transition-colors"
            >
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Number + Icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:w-48 shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800">{step.title}</h2>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-5">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Deliverables</h4>
                        <ul className="space-y-1.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-slate-500">
                              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary-light rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-primary mb-2">Pro Tip</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[1.75rem] top-[4.5rem] w-0.5 h-[calc(100%+2rem)] bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Work With SSourcing China
            </h2>
            <p className="text-slate-500 text-lg">
              We are not just a middleman. We are your on-the-ground team in China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to see this process in action?
          </h2>
          <p className="text-primary-light text-lg mb-8">
            Get started with a free sourcing consultation. We will review your requirements and outline a custom plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors"
          >
            Get Your Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}