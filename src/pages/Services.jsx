import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/siteContent.js'

export default function Services() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <main ref={containerRef} className="bg-brand-surface text-brand-ink">
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading id="services-page-title" eyebrow="Services" title="Sourcing support for each stage of buying from China" desc="SSourcing China helps overseas buyers reduce uncertainty with supplier sourcing, verification, QC, production follow-up, and shipping coordination." /></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service} sectionTitleId="services-page-title" />)}</div></section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="rounded-3xl bg-brand-navy p-8 text-white"><h2 className="text-3xl font-extrabold">When to involve a sourcing agent</h2><p className="mt-4 leading-7 text-blue-100">A sourcing agent is useful when you need local supplier communication, verification, project follow-up, or quality checks before committing funds or releasing shipments.</p></div><div className="grid gap-4">{['You need to compare suppliers beyond price.', 'You cannot visit factories in China yourself.', 'Your order has custom packaging or quality requirements.', 'You need clearer production and shipping updates.'].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-brand-border bg-white p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-teal" /><p className="font-semibold text-brand-ink">{item}</p></div>)}</div></section>
    </main>
  )
}
