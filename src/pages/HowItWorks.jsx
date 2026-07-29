import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, MessageSquare, Search, Package, Truck, CheckCircle2,
  FileText, Shield, Eye, Clock, Users, Globe
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our sourcing inquiry form with your product specifications, target price, order quantity, and desired timeline. The more detail you provide, the better we can match your needs.',
    details: [
      'Product specifications and drawings',
      'Target price range and budget',
      'Required quantity and delivery timeline',
      'Quality standards and certifications needed',
    ],
    timeline: 'Day 1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Verification',
    desc: 'Our team searches our network of 500+ verified suppliers to find 3–5 qualified matches. We verify each supplier\'s business license, production capacity, and quality certifications.',
    details: [
      'Database search and supplier outreach',
      'Business license and registration verification',
      'Factory capability assessment',
      'Initial pricing and MOQ collection',
    ],
    timeline: 'Days 2–5',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Proposal & Comparison',
    desc: 'We present you with a detailed comparison of qualified suppliers, including pricing, MOQ, lead times, certifications, and our recommendation based on your priorities.',
    details: [
      'Side-by-side supplier comparison',
      'Detailed pricing breakdown',
      'Lead time and MOQ details',
      'Our expert recommendation',
    ],
    timeline: 'Days 5–7',
  },
  {
    number: '04',
    icon: Package,
    title: 'Sample Arrangement',
    desc: 'Once you select your preferred supplier, we arrange product samples. We evaluate samples against your specifications and provide detailed feedback before you approve production.',
    details: [
      'Sample ordering and tracking',
      'Quality evaluation against specifications',
      'Photo and video documentation',
      'Revision coordination if needed',
    ],
    timeline: 'Days 7–21',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Order Placement & Production Start',
    desc: 'We help negotiate final terms, draft contracts, and manage the production kick-off. Payment terms are structured to protect your interests.',
    details: [
      'Contract drafting and review',
      'Payment term negotiation',
      'Production timeline agreement',
      'Quality standard documentation',
    ],
    timeline: 'Days 21–25',
  },
  {
    number: '06',
    icon: Eye,
    title: 'Production Monitoring & QC',
    desc: 'Throughout production, we conduct regular factory visits, send progress reports, and perform quality inspections at key milestones to ensure everything stays on track.',
    details: [
      'Weekly progress reports with photos',
      'In-line quality inspections',
      'Pre-shipment inspection (AQL sampling)',
      'Issue identification and resolution',
    ],
    timeline: 'Days 25–60',
  },
  {
    number: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We handle all logistics — packing verification, container loading, customs documentation, freight booking, and delivery coordination to your specified destination.',
    details: [
      'Final packing and labeling verification',
      'Container loading supervision',
      'Customs documentation preparation',
      'Freight booking and tracking',
    ],
    timeline: 'Days 60–90',
  },
]

const benefits = [
  { icon: Clock, title: 'Save Time', desc: 'No need to spend weeks searching for suppliers online. We deliver qualified options in days.' },
  { icon: Shield, title: 'Reduce Risk', desc: 'Every supplier is verified on-site. Every shipment is inspected before it leaves the factory.' },
  { icon: Users, title: 'Local Expertise', desc: 'Our bilingual team handles all communication, negotiation, and problem-solving in China.' },
  { icon: Globe, title: 'Full Transparency', desc: 'Regular reports, photos, and direct access to our team. You always know the status of your order.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How Our Sourcing Process Works
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
            A structured, transparent process that takes you from product idea to delivered goods — with full visibility at every step.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-brand-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                        {step.number}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-accent-500 uppercase tracking-wide">{step.timeline}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{step.title}</h2>
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-6 text-lg">{step.desc}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-neutral-50 rounded-2xl p-8 border border-neutral-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`how-it-works-step-${step.number}-img`}
                      data-strk-img={`[step-${step.number}-title] china sourcing process manufacturing`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                    <span id={`step-${step.number}-title`} className="sr-only">{step.title}</span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-8">
                    <div className="w-px h-12 bg-neutral-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why This Process Works
            </h2>
            <p className="text-lg text-neutral-600">
              Our structured approach eliminates guesswork and reduces the risks of sourcing from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-8 border border-neutral-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-neutral-600">
              From initial inquiry to delivery, most projects take 60–90 days depending on product complexity and shipping method.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-brand-500 mb-2">1 Week</div>
                <div className="font-semibold text-neutral-900 mb-1">Supplier Sourcing</div>
                <div className="text-sm text-neutral-500">Identification & verification</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-brand-500 mb-2">2–3 Weeks</div>
                <div className="font-semibold text-neutral-900 mb-1">Sampling</div>
                <div className="text-sm text-neutral-500">Samples & approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-accent-500 mb-2">4–8 Weeks</div>
                <div className="font-semibold text-neutral-900 mb-1">Production</div>
                <div className="text-sm text-neutral-500">Manufacturing & QC</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-accent-500 mb-2">2–5 Weeks</div>
                <div className="font-semibold text-neutral-900 mb-1">Shipping</div>
                <div className="text-sm text-neutral-500">Freight & delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">
            Submit your requirements today and receive a detailed sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg text-lg"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
