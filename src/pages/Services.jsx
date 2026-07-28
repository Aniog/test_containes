import { Link } from 'react-router-dom'
import PageHero from '@/components/site/PageHero'
import SectionHeader from '@/components/site/SectionHeader'
import { services } from '@/siteData'

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="China sourcing services built around practical execution"
        description="We support overseas buyers with supplier sourcing, verification, quality control, production follow-up, and shipping coordination in China."
        titleId="services-hero-title"
        descriptionId="services-hero-desc"
        imageId="services-hero-buyer-meeting-91ac34"
        imageContext="China sourcing buyer meeting with product samples, supplier comparison sheets, factory planning, and import export procurement discussion."
        imageAlt="China sourcing buyer meeting with product samples"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="Core services for buyers managing supplier risk and execution"
            description="Each service is designed to give buyers clearer information, better follow-up, and more control over sourcing decisions and order execution."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">{service.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm md:flex md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">Need a tailored sourcing plan?</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">Tell us what product you need and where the sourcing process feels uncertain.</p>
            </div>
            <Link
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 md:mt-0"
              to="/contact"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
