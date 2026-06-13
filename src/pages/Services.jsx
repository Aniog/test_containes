import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ServicesSection from '../components/sections/ServicesSection'
import ContactCTASection from '../components/sections/ContactCTASection'
import { supportAreas } from '../data/siteContent'
import strkImgConfig from '../strk-img-config.json'

export default function Services() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])
  return (
    <main ref={containerRef}>
      <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Services</p><h1 id="services-page-title" className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">Supplier search, factory checks, QC, production follow-up, and shipping coordination</h1><p id="services-page-desc" className="mt-6 text-lg leading-8 text-brand-subtle">Use SSourcing China when you need practical, on-the-ground help to compare suppliers, reduce quality risk, and coordinate order details from China.</p></div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-muted shadow-xl"><img alt="Factory inspection and production review" className="h-full w-full object-cover" data-strk-img-id="services-factory-review-12af9c" data-strk-img="[services-page-desc] [services-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
        </div>
      </section>
      <ServicesSection showIntro={false} />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{supportAreas.map((area) => { const Icon = area.icon; return (<article className="rounded-3xl border border-slate-200 bg-brand-surface p-6 text-brand-ink" key={area.title}><Icon className="h-8 w-8 text-brand-blue" /><h2 className="mt-4 text-xl font-bold text-brand-navy">{area.title}</h2><p className="mt-3 text-sm leading-6 text-brand-subtle">{area.text}</p></article>) })}</div></section>
      <ContactCTASection />
    </main>
  )
}
