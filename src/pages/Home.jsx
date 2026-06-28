import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Container,
  Factory,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CallToActionBanner from '@/components/CallToActionBanner'
import SectionHeader from '@/components/SectionHeader'
import InquiryForm from '@/components/forms/InquiryForm'
import {
  blogPosts,
  caseStudies,
  coreServices,
  faqItems,
  problemPoints,
  processSteps,
  productCategories,
  trustPoints,
} from '@/data/siteContent'

const serviceIcons = [SearchCheck, ShieldCheck, Factory, ClipboardCheck, Boxes, Container]

const Home = () => {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr,0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
              China-based sourcing support
            </span>
            <h1 id="home-hero-title" className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-description" className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              SSourcing China helps overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical on-the-ground support in China.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Supplier sourcing', 'Quality inspection', 'Shipping coordination'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <img
                alt="Factory quality control and supplier review in China"
                className="h-full min-h-96 w-full rounded-[1.5rem] object-cover"
                data-strk-img-id="home-hero-image-8j2s4k"
                data-strk-img="[home-hero-description] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  Practical support
                </p>
                <p className="mt-4 text-sm leading-7 text-emerald-900">
                  Clear communication, supplier checks, and sourcing follow-up designed for buyers who need practical decisions, not vague updates.
                </p>
              </div>
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
                  International focus
                </p>
                <p className="mt-4 text-sm leading-7 text-amber-900">
                  Suitable for importers, brands, wholesalers, and procurement teams working across time zones and overseas delivery schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Sourcing support that covers the full buying process"
            description="From supplier search to final shipment readiness, SSourcing China helps overseas buyers make more informed sourcing decisions in China."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service, index) => {
              const Icon = serviceIcons[index]

              return (
                <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="A practical sourcing process for overseas buyers"
            description="Keep the project moving with clear checkpoints, better supplier visibility, and support on the China side."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:min-h-72">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Step {step.step}</p>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Products we source"
              title="Common product categories and custom sourcing projects"
              description="We support a wide range of everyday consumer products, private label projects, packaging needs, and practical factory-based buying requirements."
            />
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
            >
              View product categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <article key={category.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr,0.9fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Problems we solve"
              title="Common sourcing problems that need local follow-up"
              description="Many issues come from incomplete supplier information, delayed quality feedback, or weak coordination across time zones."
              theme="dark"
            />
            <div className="mt-8 grid gap-4">
              {problemPoints.map((problem) => (
                <div key={problem} className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-sm leading-7 text-slate-200">
                  {problem}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
              <img
                alt="Factory inspection and shipping preparation"
                className="h-full min-h-80 w-full rounded-[1.5rem] object-cover"
                data-strk-img-id="home-trust-image-p9v3n2"
                data-strk-img="[home-trust-description] [home-trust-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <p id="home-trust-title" className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Trust points
              </p>
              <p id="home-trust-description" className="mt-4 text-2xl font-bold tracking-tight text-white">
                Practical reporting and sourcing support that keeps your next step clear.
              </p>
              <div className="mt-6 grid gap-4">
                {trustPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-sm leading-7 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of sourcing support buyers ask us for"
            description="The work varies by product and order stage, but the goal stays the same: reduce avoidable risk and keep the project moving."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-7 text-emerald-900">
                  {study.outcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr,1.05fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions buyers often ask before starting"
              description="Clear expectations make sourcing easier, especially when projects involve multiple suppliers, inspections, or shipping deadlines."
            />
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Blog"
              title="Useful sourcing articles for international buyers"
              description="Simple guidance on supplier verification, sampling, inspection timing, and preparing better sourcing briefs."
            />
            <div className="mt-10 grid gap-5">
              {blogPosts.map((post) => (
                <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{post.category}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InquiryForm
            pageContext="home"
            description="Tell us what you need to source, what services you want, and where you need help. We will review the request and reply with practical next steps."
          />
        </div>
      </section>

      <CallToActionBanner />
    </main>
  )
}

export default Home
