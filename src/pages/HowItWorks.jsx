import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CTABanner from '@/components/shared/CTABanner'
import { MessageSquare, Search, ShieldCheck, FileCheck, Factory, ClipboardCheck, Ship, ThumbsUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Request',
    description: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and timeline. The more detail you provide, the faster we can find the right match.',
    detail: 'We respond within 24-48 hours with an initial assessment and service proposal.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our sourcing team searches our database and the market to identify 3-5 qualified suppliers that match your requirements. We evaluate each on price, quality, capacity, and reliability.',
    detail: 'You receive a detailed comparison report with our recommendations.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    description: 'We visit the top candidates in person to verify their facilities, production capabilities, certifications, and business legitimacy. You get a full audit report with photos.',
    detail: 'This step eliminates 90% of sourcing risks before you commit.',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Sample Development & Approval',
    description: 'We coordinate sample production with the selected factory. You review the samples, request modifications if needed, and approve the final version before mass production begins.',
    detail: 'Typical sample turnaround: 7-15 days depending on product complexity.',
  },
  {
    number: '05',
    icon: Factory,
    title: 'Production & Monitoring',
    description: 'Once you approve the sample and place the order, we monitor production progress with regular factory visits. You receive weekly updates with photos and milestone tracking.',
    detail: 'Any issues are flagged immediately so we can resolve them early.',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Before shipment, our QC team conducts a thorough pre-shipment inspection following AQL standards. We check dimensions, functionality, appearance, packaging, and labeling.',
    detail: 'You receive a detailed inspection report. Shipment only proceeds with your approval.',
  },
  {
    number: '07',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We arrange freight (sea, air, or express), handle export documentation, coordinate customs clearance, and track your shipment until it arrives at your warehouse.',
    detail: 'Full door-to-door service with real-time tracking updates.',
  },
  {
    number: '08',
    icon: ThumbsUp,
    title: 'After-Sales Support',
    description: 'Our relationship doesn\'t end at delivery. We help with any post-delivery issues, coordinate reorders, and continue managing your supplier relationship for future orders.',
    detail: 'Most clients become long-term partners with repeat orders.',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">How It Works</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Our proven 8-step sourcing process takes the guesswork and risk out of importing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-10">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative flex gap-6 md:gap-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {step.number}</span>
                      <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed mb-2">{step.description}</p>
                      <p className="text-sm text-text-muted italic">{step.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Makes Our Process Different"
            subtitle="We don't just find suppliers — we manage the entire sourcing lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">48h</div>
              <p className="text-sm text-text-secondary">Average response time for new inquiries</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-text-secondary">On-time delivery rate across all projects</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm text-text-secondary">Successful sourcing projects completed</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default HowItWorks
