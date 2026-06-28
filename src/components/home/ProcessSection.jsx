import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and delivery timeline. We accept sketches, samples, or detailed technical drawings.',
  },
  {
    num: '02',
    title: 'We Source & Verify Suppliers',
    desc: 'Our team identifies suitable suppliers, conducts factory audits, and provides you with a shortlist of verified manufacturers with pricing.',
  },
  {
    num: '03',
    title: 'Samples & Approval',
    desc: 'We arrange product samples, facilitate any modifications, and ensure the final prototype meets your exact requirements before mass production begins.',
  },
  {
    num: '04',
    title: 'Production & Quality Control',
    desc: 'We monitor production on-site, conduct inspections at key stages, and keep you updated with real-time progress reports and photos.',
  },
  {
    num: '05',
    title: 'Shipping & Delivery',
    desc: 'We handle export documentation, customs clearance, freight forwarding, and coordinate door-to-door delivery to your specified location.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Simple, Transparent Sourcing Process
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Five straightforward steps from initial inquiry to final delivery. You stay in control while we handle the complexity.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                } ${index > 0 ? 'lg:mt-12' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white rounded-lg border border-border p-6 md:p-8 relative">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {index % 2 === 0 && (
                  <div className="hidden lg:block">
                    <div className="rounded-lg overflow-hidden aspect-[4/3] bg-bg-card">
                      <img
                        data-strk-img-id={`process-step-${step.num}-img`}
                        data-strk-img={`[${step.title.replace(/\s+/g, '-').toLowerCase()}] china factory production manufacturing`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
