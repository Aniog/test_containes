import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const STEPS = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: 'Share your product specs, target price, and order quantity. We sign an NDA if requested.',
  },
  {
    n: '02',
    title: 'We shortlist suppliers',
    desc: 'We compare 5-10 factories, request samples and quotations, and recommend the best 2-3 matches.',
  },
  {
    n: '03',
    title: 'Factory verification',
    desc: 'We visit the factory in person, audit capability, verify business license, and report back with photos.',
  },
  {
    n: '04',
    title: 'Negotiation & contract',
    desc: 'We negotiate price, MOQ, payment terms, and lead time in Chinese, then sign a clear contract.',
  },
  {
    n: '05',
    title: 'Production follow-up',
    desc: 'Weekly progress reports from material to packing. We catch delays early and keep you informed.',
  },
  {
    n: '06',
    title: 'Quality inspection',
    desc: 'AQL pre-shipment inspection with photo and video. We only ship goods that pass.',
  },
  {
    n: '07',
    title: 'Shipping & delivery',
    desc: 'Booking, consolidation, customs, and door-to-door delivery. You get the tracking, we handle the rest.',
  },
]

export default function Process() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p id="process-eyebrow" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">
              Sourcing Process
            </p>
            <h2 id="process-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
              A clear 7-step process, from inquiry to delivery
            </h2>
            <p id="process-subtitle" className="mt-4 text-base text-slate-600 leading-relaxed">
              No back-and-forth with anonymous trading companies. One project manager owns your order
              from the first quote to the final container.
            </p>

            <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                alt="Quality control inspection at a Chinese factory"
                className="w-full aspect-[4/3] object-cover"
                data-strk-img-id="process-card-qc-inspection-4b8e2c"
                data-strk-img="[process-subtitle] [process-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <ol className="lg:col-span-8 relative">
            <span aria-hidden="true" className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block" />
            <div className="space-y-6">
              {STEPS.map((step) => (
                <li key={step.n} className="relative flex gap-4 sm:gap-6">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2545] text-white text-sm font-bold ring-4 ring-slate-50">
                    {step.n}
                  </span>
                  <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 lg:p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0B2545]">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  )
}
