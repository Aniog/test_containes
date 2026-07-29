import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, Beaker, Factory, ClipboardCheck, Ship, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right supplier.',
    imgId: 'hiw-step1-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlist',
    description: 'Our team searches our database and visits markets and industrial zones to identify 3-5 qualified suppliers. We compare pricing, MOQ, lead time, and capabilities.',
    imgId: 'hiw-step2-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    description: 'We visit shortlisted factories to verify production capacity, quality systems, certifications, and business legitimacy. You receive a detailed audit report.',
    imgId: 'hiw-step3-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    icon: Beaker,
    title: 'Sample Development & Approval',
    description: 'We coordinate sample production, review quality, and ship samples to you for approval. We manage revisions until the sample meets your standards.',
    imgId: 'hiw-step4-j0k1l2',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    icon: Factory,
    title: 'Production & Monitoring',
    description: 'Once you approve the sample and place the order, we monitor production with regular factory visits. You receive weekly progress reports with photos.',
    imgId: 'hiw-step5-m3n4o5',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Before shipment, our QC team conducts a thorough inspection following AQL standards. We check dimensions, function, appearance, packaging, and labeling.',
    imgId: 'hiw-step6-p6q7r8',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    number: '07',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We arrange freight (sea, air, or rail), handle export documentation, supervise container loading, and track shipment until delivery at your warehouse.',
    imgId: 'hiw-step7-s9t0u1',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="Our structured 7-step process takes the complexity out of sourcing from China. Here is exactly what happens after you contact us."
      />

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-5">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        data-strk-img-id={step.imgId}
                        data-strk-img={`[${step.descId}] [${step.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">Step {step.number}</span>
                    </div>
                    <h2 id={step.titleId} className="text-xl md:text-2xl font-bold text-neutral-800 mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-neutral-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Ready to Get Started?"
        subtitle="Submit your requirements and receive a free sourcing plan within 24 hours."
      />
    </>
  )
}

export default HowItWorks
