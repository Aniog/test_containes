import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { services } from '../data/siteContent.js'
import { useStrkImages } from '../hooks/useStrkImages.js'

const Services = () => {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <PageHero
        eyebrow="Services"
        title="Sourcing, verification, QC, production follow-up, and shipping support"
        description="Choose the support you need at each stage of China sourcing, from supplier search to final shipment coordination."
        imageId="services-hero-qc-line-8b72c4"
        imageAlt="Factory quality control team checking products"
        visualContext="professional quality inspector in a clean Chinese factory checking manufactured goods"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we handle"
            title="Practical services for overseas buyers"
            description="Each service is designed to give buyers clearer information, better supplier communication, and earlier visibility into production and quality risks."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-5 grid gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
