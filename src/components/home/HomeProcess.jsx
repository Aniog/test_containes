import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, target price range, order volume, and quality standards.',
  },
  {
    step: '02',
    title: 'Supplier Identification',
    desc: 'We search our verified factory database and trade networks to find the best-matched manufacturers.',
  },
  {
    step: '03',
    title: 'Factory Audit & Sampling',
    desc: 'We visit factories, verify credentials, review samples, and provide detailed audit reports.',
  },
  {
    step: '04',
    title: 'Negotiation & Contracting',
    desc: 'We negotiate pricing, payment terms, and delivery schedules on your behalf.',
  },
  {
    step: '05',
    title: 'Quality Control & Production',
    desc: 'Regular inspections during production to catch issues early and maintain quality standards.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight, handle customs paperwork, and track shipment until it reaches you.',
  },
]

export default function HomeProcess() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            How We Work
          </h2>
          <p id="process-subtitle" className="mt-4 text-gray-600 text-lg">
            A structured six-step process designed to minimize risk and maximize efficiency in China sourcing.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white rounded-xl border border-gray-100 p-6 md:p-7">
              <span className="text-4xl font-bold text-brand-orange/15">{s.step}</span>
              <h3 className="text-lg font-semibold text-brand-navy mt-2 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
          <div
            className="aspect-[16/9] rounded-xl overflow-hidden shadow-md"
            data-strk-bg-id="process-image-3c7b1d"
            data-strk-bg="[process-subtitle] [process-heading]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="800"
          />
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-brand-navy">We work on-site in China — so you don&apos;t have to</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team is based in Shenzhen, the heart of China&apos;s manufacturing hub. We visit factories in person, 
              inspect production lines, and handle issues face-to-face. No remote guessing, no middleman delays.
            </p>
            <ul className="space-y-3">
              {[
                'Bilingual team fluent in English and Mandarin',
                'Physical presence in major industrial zones',
                'Real-time communication via WeChat, WhatsApp, and email',
                'Transparent reporting with photos and videos from factory floor',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}