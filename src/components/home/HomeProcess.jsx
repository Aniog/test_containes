import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    title: 'Tell Us Your Requirements',
    desc: 'Share your product specs, target price, order quantity, and timeline. We analyze your needs and propose a sourcing strategy.',
    titleId: 'home-process-title-1',
    descId: 'home-process-desc-1',
    imgId: 'home-process-step1-a1b2c3',
  },
  {
    num: '02',
    title: 'Supplier Identification & Audit',
    desc: 'We search our database and trade networks, shortlist qualified suppliers, then conduct on-site factory audits.',
    titleId: 'home-process-title-2',
    descId: 'home-process-desc-2',
    imgId: 'home-process-step2-d4e5f6',
  },
  {
    num: '03',
    title: 'Sampling & Negotiation',
    desc: 'You receive samples from top candidates. We negotiate pricing, terms, and production schedules on your behalf.',
    titleId: 'home-process-title-3',
    descId: 'home-process-desc-3',
    imgId: 'home-process-step3-g7h8i9',
  },
  {
    num: '04',
    title: 'Production & Quality Control',
    desc: 'Our QC team monitors production with inline inspections and pre-shipment checks against AQL standards.',
    titleId: 'home-process-title-4',
    descId: 'home-process-desc-4',
    imgId: 'home-process-step4-j0k1l2',
  },
  {
    num: '05',
    title: 'Shipping & Doorstep Delivery',
    desc: 'We manage freight, customs clearance, and last-mile delivery so your order arrives on time and in full.',
    titleId: 'home-process-title-5',
    descId: 'home-process-desc-5',
    imgId: 'home-process-step5-m3n4o5',
  },
]

export default function HomeProcess() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">How It Works</p>
          <h2 id="home-process-heading" className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Our Proven 5-Step Sourcing Process
          </h2>
          <p id="home-process-sub" className="text-slate-600 text-lg leading-relaxed">
            A transparent, systematic approach that has delivered over 10,000 shipments
            for buyers across 40+ countries.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-4">
                <span className="text-5xl font-extrabold text-gold-400/30">{step.num}</span>
                <h3 id={step.titleId} className="text-2xl font-bold text-navy-800">{step.title}</h3>
                <p id={step.descId} className="text-slate-600 leading-relaxed max-w-xl">{step.desc}</p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-slate-200">
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] [home-process-heading]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-navy-800 text-white hover:bg-navy-900 transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
