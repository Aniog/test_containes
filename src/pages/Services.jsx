import { useStrkImages } from '@/lib/useStrkImages'
import { services } from '@/data/siteData'
import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'

export default function Services() {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for supplier control, QC, and shipment coordination"
        description="Use SSourcing China as a flexible local support layer for supplier search, verification, factory checks, production follow-up, quality inspection, and export handover."
      />
      <section className="bg-brand-ice py-16 text-brand-navy md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold tracking-tight">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{service.description}</p>
              </article>
            )
          })}
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Service fit</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">Tell us where you are in the buying process</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              Some buyers need supplier discovery. Others already have factories but need verification, inspection, or shipment support. The right service depends on your risk points and timeline.
            </p>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </main>
  )
}
