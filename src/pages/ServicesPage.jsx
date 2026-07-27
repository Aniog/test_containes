import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/shared/CTASection'
import PageHero from '@/components/shared/PageHero'
import SectionIntro from '@/components/shared/SectionIntro'
import { serviceItems } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'


export default function ServicesPage() {
  const pageRef = useRef(null)

  usePageMeta(
    'Services | SSourcing China',
    'Explore SSourcing China services including supplier verification, factory checks, quality inspection, production follow-up, and shipping coordination.'
  )

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow="Services"
        title="Services built for practical sourcing execution in China"
        description="We help overseas buyers reduce sourcing risk and improve execution with clear local follow-up across supplier selection, quality, production, and shipment readiness."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What we do"
            title="Support where buyers usually need local follow-up most"
            description="Each service can be used on its own or combined as part of a broader sourcing project."
          />
          <div className="mt-10 space-y-8">
            {serviceItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-8"
              >
                <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-3">
                  <img
                    alt={item.title}
                    className="h-64 w-full rounded-[1.2rem] object-cover"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div>
                  <h2 id={item.titleId} className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {item.title}
                  </h2>
                  <p id={item.descId} className="mt-4 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
