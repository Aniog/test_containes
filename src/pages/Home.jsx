import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { caseStudies, faqs, heroStats, problems, processSteps, productCategories, services, trustPoints } from '../data/siteData.js'

const Home = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p id="home-hero-eyebrow" className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">China-based sourcing support for overseas buyers</p>
            <h1 id="home-hero-title" className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">China Sourcing Agent for Global Buyers</h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">SSourcing China helps overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear English communication.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton />
              <CTAButton to="/how-it-works" variant="secondary">See How It Works</CTAButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative pb-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img
                className="h-[430px] w-full object-cover"
                data-strk-img-id="home-hero-factory-qc-82ad1f"
                data-strk-img="[home-hero-subtitle] [home-hero-title] [home-hero-eyebrow]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory quality control and sourcing coordination in China"
              />
            </div>
            <div className="absolute bottom-0 left-6 right-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Practical buying support</p>
              <p className="mt-1 text-sm text-slate-600">Supplier search, QC checkpoints, production updates, and shipment coordination in one workflow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Services" title="Sourcing support from RFQ to shipment" description="Choose individual services or a complete order support workflow based on your product, supplier risk, and buying stage." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" id="process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" eyebrow="Process" title="A structured sourcing process for remote buyers" description="We keep the workflow practical, documented, and focused on reducing supplier, quality, timing, and shipping risks." />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
                <p className="text-sm font-bold text-amber-600">{step.number}</p>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="products">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Products we source" title="Common product categories we support" description="We work best with physical products where supplier screening, specifications, samples, QC, and shipping details matter." />
            <div className="mt-8"><CTAButton to="/products">Explore Products We Source</CTAButton></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {productCategories.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" aria-hidden="true" />
                <span className="text-sm font-medium leading-6 text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white sm:py-20" id="problems">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">Problems we solve</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Reduce the common risks of buying from China remotely</h2>
            <p className="mt-4 text-base leading-7 text-white/75">We help buyers clarify supplier options, product details, quality expectations, production timing, and shipment coordination before issues become expensive.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-medium leading-6 text-white">{problem}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="trust">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" eyebrow="Trust points" title="Built for clear, practical sourcing decisions" description="Our role is to provide local coordination, supplier visibility, and organized follow-up so you can make better buying decisions from overseas." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <article key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
                  <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{point.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" id="case-studies">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Examples of practical sourcing support" description="Typical situations where overseas buyers benefit from local supplier screening, follow-up, inspection, and logistics coordination." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
                <p className="text-sm font-semibold text-amber-600">{item.industry}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600"><strong className="text-slate-800">Challenge:</strong> {item.challenge}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600"><strong className="text-slate-800">Support:</strong> {item.solution}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600"><strong className="text-slate-800">Outcome:</strong> {item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" eyebrow="FAQ" title="Common questions from overseas buyers" description="Clear answers before you start a sourcing project with SSourcing China." />
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900">
                  {faq.q}
                  <ArrowRight className="h-5 w-5 text-blue-700 transition group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Start a project" title="Tell us what you want to source" description="The more specific your inquiry, the faster we can assess supplier options, risks, and practical next steps." />
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img
                className="h-72 w-full object-cover"
                data-strk-img-id="home-inquiry-shipping-qc-34c91b"
                data-strk-img="[contact-section-desc] [contact-section-title] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Shipping coordination and quality inspection support"
              />
            </div>
            <h3 id="contact-section-title" className="sr-only">Tell us what you want to source</h3>
            <p id="contact-section-desc" className="sr-only">China sourcing inquiry with supplier verification quality control production follow up and shipping coordination</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}

export default Home
