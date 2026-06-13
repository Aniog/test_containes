import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import ContactCTASection from '../components/sections/ContactCTASection'
import strkImgConfig from '../strk-img-config.json'

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <main ref={containerRef}>
      <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Case studies</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Practical sourcing examples without exaggerated claims</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Representative examples of how supplier comparison, verification, production tracking, and inspection support can help overseas buyers make clearer decisions.</p>
        </div>
      </section>
      <CaseStudiesSection />
      <ContactCTASection />
    </main>
  )
}
