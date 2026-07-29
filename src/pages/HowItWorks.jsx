import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    duration: 'Day 1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our team searches our database and manufacturing regions to identify 3-5 qualified suppliers. We request quotes, check backgrounds, and prepare a comparison report for you.',
    duration: '5-10 days',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    description: 'We visit the top candidates in person. We check production lines, quality systems, certifications, and worker conditions. You receive a detailed audit report with photos.',
    duration: '3-5 days',
  },
  {
    number: '04',
    icon: Package,
    title: 'Sample Development & Approval',
    description: 'We coordinate sample production, review quality, and ship samples to you for approval. We manage revisions until the product meets your exact specifications.',
    duration: '1-3 weeks',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    description: 'Once you approve the sample and place the order, we monitor production progress with regular factory visits. We conduct inspections at key stages to catch issues early.',
    duration: '2-6 weeks',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'After final inspection approval, we arrange freight, handle export documentation, and coordinate delivery to your warehouse. We keep you updated until goods arrive.',
    duration: '2-5 weeks',
  },
]

const HowItWorks = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hiw-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Our structured 6-step process takes you from initial inquiry to delivered goods.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-0.5 flex-1 bg-border mt-3" />
                  </div>
                  <div className="pb-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">{step.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">
                      <span className="text-accent mr-2">{step.number}.</span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-body leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 id="hiw-cta-title" className="text-2xl md:text-3xl font-bold text-text-primary">
                Ready to Source from China?
              </h2>
              <p id="hiw-cta-desc" className="mt-4 text-text-body leading-relaxed">
                Submit your product requirements and our team will start working on your sourcing project within 24 hours. No commitment required for the initial consultation.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                data-strk-img-id="hiw-cta-img-3x4y5z"
                data-strk-img="[hiw-cta-desc] [hiw-cta-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing process"
                className="w-full rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
