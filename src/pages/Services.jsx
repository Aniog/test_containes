import { ClipboardList, PackageSearch, ShieldCheck, ShipWheel, Waypoints, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImagePageShell from '../components/common/ImagePageShell.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { services } from '../siteContent.js'

const icons = [PackageSearch, ShieldCheck, ClipboardList, Workflow, ShipWheel, Waypoints]

function Services() {
  return (
    <ImagePageShell>
      <main>
        <PageHero
          eyebrow="Services"
          title="Sourcing services for overseas buyers working with China suppliers"
          description="Choose focused support for one stage of the sourcing process or combine services when you need broader execution in China."
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="What we do"
              title="Flexible support based on your sourcing stage"
              description="Some buyers need a verified supplier shortlist. Others already have a supplier and need factory checks, inspection, or production follow-up."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = icons[index]
                return (
                  <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="When to use us"
                title="Useful when your sourcing project needs stronger local follow-up"
                description="Remote buying usually becomes harder when suppliers are difficult to compare, production updates are inconsistent, or shipment details are moving too slowly."
              />
              <div className="grid gap-4">
                {[
                  'You need help screening suppliers before investing time in samples or negotiations.',
                  'You want practical confirmation of factory legitimacy and suitability.',
                  'You need more confidence in quality before shipment.',
                  'You want clearer production or shipment communication with a China-side contact.',
                ].map((item) => (
                  <div key={item} className="rounded-[2rem] border border-slate-200 bg-slate-50 px-5 py-4 text-base leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <img
              alt="Supplier evaluation and production coordination"
              className="h-[420px] w-full rounded-[2rem] object-cover"
              data-strk-img-id="services-side-img-4fd819"
              data-strk-img="[services-side-desc] [services-side-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <h2 id="services-side-title" className="sr-only">China sourcing service support</h2>
            <p id="services-side-desc" className="sr-only">Factory sourcing supplier verification and production communication in China.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-slate-50 shadow-sm md:px-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Need a quote for your sourcing requirement?</h2>
              <p className="text-base leading-7 text-slate-300">
                Share the product category, current stage, and support you need. We will review whether we are a fit and come back with the next step.
              </p>
              <Link to="/contact#quote-form" className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </ImagePageShell>
  )
}

export default Services
