import SectionHeader from '@/components/site/SectionHeader.jsx'
import { services } from '@/content.js'

const ServicesSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Services" title="Sourcing support from supplier search to shipment" description="Choose full project support or specific services when you need local help at key sourcing stages." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, text, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-brand-blue"><Icon className="h-6 w-6" /></div>
            <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesSection
