import { ArrowRight, CheckCircle2, ClipboardList, PackageSearch, ShieldCheck, ShipWheel, Waypoints } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '../components/contact/InquiryForm.jsx'
import FaqList from '../components/common/FaqList.jsx'
import ImagePageShell from '../components/common/ImagePageShell.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import StatsBand from '../components/common/StatsBand.jsx'
import TrustCards from '../components/common/TrustCards.jsx'
import {
  caseStudies,
  faqs,
  problemPoints,
  processSteps,
  services,
  sourcedProducts,
  trustPoints,
} from '../siteContent.js'

const serviceIcons = [PackageSearch, ShieldCheck, ClipboardList, Waypoints, ShipWheel, CheckCircle2]

const stats = [
  { value: 'China-based', label: 'Local sourcing support for overseas buyers who need direct follow-up inside China.' },
  { value: 'Practical', label: 'Clear working communication focused on supplier fit, quality, production, and shipping.' },
  { value: 'B2B-focused', label: 'Built for buyers who need reliable execution rather than broad marketplace browsing.' },
]

function Home() {
  return (
    <ImagePageShell>
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-slate-50">
          <div
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="home-hero-bg-8f2a9c"
            data-strk-bg="[home-hero-subtitle] [home-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-blue-100 ring-1 ring-white/15">
                China sourcing support for overseas buyers
              </span>
              <div className="space-y-5">
                <h1 id="home-hero-title" className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                  China Sourcing Agent for Global Buyers
                </h1>
                <p id="home-hero-subtitle" className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical support on the ground in China.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact#quote-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
              <div className="grid gap-3 text-sm text-slate-200 md:grid-cols-3">
                {['Supplier verification', 'Quality inspection', 'Production & shipping follow-up'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                alt="Factory sourcing and quality inspection in China"
                className="h-[360px] w-full rounded-[1.5rem] object-cover"
                data-strk-img-id="home-hero-img-5d17ac"
                data-strk-img="[home-hero-subtitle] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="grid gap-3 p-4 md:grid-cols-2">
                {[
                  'Shortlist suppliers that match your product and target market',
                  'Verify whether the supplier is suitable before you move forward',
                  'Check quality before shipment leaves the factory',
                  'Keep communication organized across production and shipping',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm leading-6 text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <StatsBand items={stats} />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="Services"
              title="Support across the key parts of the sourcing process"
              description="We help buyers reduce uncertainty at the stages where mistakes are most expensive: supplier selection, verification, quality checks, production follow-up, and shipment coordination."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index]
                return (
                  <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="How it works"
                title="A clearer sourcing process for remote buyers"
                description="We keep the process practical and structured so you can make decisions with better information at each stage."
              />
              <img
                alt="Production follow-up and supplier coordination"
                className="h-[320px] w-full rounded-[2rem] object-cover"
                data-strk-img-id="home-process-img-4b7c1d"
                data-strk-img="[home-process-desc] [home-process-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid gap-4">
              <h3 id="home-process-title" className="sr-only">Sourcing process</h3>
              <p id="home-process-desc" className="sr-only">
                Buyer briefing supplier verification production tracking and shipping coordination in China.
              </p>
              {processSteps.map((step) => (
                <article key={step.step} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Step {step.step}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="max-w-xl text-base leading-7 text-slate-600">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="Products we source"
                title="Common product categories we support"
                description="We work with buyers across multiple practical categories, especially where supplier screening, communication, and execution matter as much as price."
              />
              <Link to="/products-we-source" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                View product categories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sourcedProducts.map((product) => (
                <div key={product} className="rounded-[2rem] border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-800 shadow-sm">
                  {product}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="Problems we solve"
                title="Common sourcing concerns we help buyers manage"
                description="Good sourcing decisions depend on visibility, follow-up, and the right checks before problems grow."
              />
            </div>
            <div className="grid gap-4">
              {problemPoints.map((item) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="Trust points"
              title="Why buyers use a China-side sourcing partner"
              description="When you are managing suppliers remotely, local follow-up and clear communication can make the process more reliable and easier to control."
            />
            <TrustCards items={trustPoints} />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="flex flex-col gap-10">
              <SectionIntro
                eyebrow="Case studies"
                title="Examples of sourcing support in practice"
                description="We focus on clear execution, supplier fit, and keeping sourcing decisions practical for overseas teams."
              />
              <div className="grid gap-6 lg:grid-cols-3">
                {caseStudies.map((study) => (
                  <article key={study.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
                    <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                      <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                      <p><span className="font-semibold text-slate-900">Support:</span> {study.support}</p>
                      <p><span className="font-semibold text-slate-900">Result:</span> {study.result}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionIntro
                eyebrow="FAQ"
                title="Questions buyers often ask before starting"
                description="If you are comparing sourcing support options, these are common starting points."
              />
            </div>
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-24">
          <InquiryForm sourcePage="home" />
        </section>
      </main>
    </ImagePageShell>
  )
}

export default Home
