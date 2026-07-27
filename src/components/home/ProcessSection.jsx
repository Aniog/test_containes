import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '../shared/SectionHeader'
import {
  MessageSquare, Search, ShieldCheck, ClipboardCheck,
  Truck, CheckCircle
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, target price, quantity, and timeline. We respond within 24 hours with a sourcing plan.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Matching',
    description: 'We shortlist verified suppliers from our network, compare quotes, and present you with the best options — including factory details and samples.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Our team visits the factory to verify licenses, production capacity, certifications, and working conditions before you commit.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'We inspect raw materials, monitor production, and conduct pre-shipment checks to ensure products meet your specifications.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, customs clearance, and door-to-door logistics. You receive tracking updates throughout the journey.',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Follow-Up & Support',
    description: 'After delivery, we help with reorder management, quality feedback, and ongoing supplier relationship management.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-steel-50">
      <div className="container-wide mx-auto">
        <SectionHeader
          tag="How It Works"
          title="A Simple, Transparent Sourcing Process"
          subtitle="We follow a proven six-step process that keeps you informed and in control at every stage."
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative z-10">
                  <div className="card-base card-hover h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-4xl font-extrabold text-brand-100">{step.number}</span>
                    </div>
                    <h3 className="heading-card text-lg mb-3">{step.title}</h3>
                    <p className="text-body text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
