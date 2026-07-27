import PageHero from '@/components/shared/PageHero.jsx'
import ServicesSection from '@/components/home/ServicesSection.jsx'
import ProblemsTrustSection from '@/components/home/ProblemsTrustSection.jsx'
import CtaBand from '@/components/home/CtaBand.jsx'
import { services } from '@/data/siteData.js'

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for careful overseas buyers"
        description="Use SSourcing China for a full sourcing project or focused support at the points where buyer risk is highest: supplier selection, verification, quality control, production follow-up, and shipment coordination."
      />
      <ServicesSection />
      <section className="bg-white py-16 text-sourcing-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-sourcing-line bg-sourcing-soft p-6 md:p-10">
            <h2 className="text-3xl font-bold text-sourcing-navy">What can be included in a sourcing project</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl bg-white p-5 text-sourcing-ink shadow-sm">
                  <h3 className="font-bold text-sourcing-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-sourcing-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ProblemsTrustSection />
      <CtaBand />
    </main>
  )
}
