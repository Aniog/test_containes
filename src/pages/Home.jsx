import { ArrowRight, BadgeCheck, Boxes, ClipboardCheck, Container, Factory, SearchCheck, ShieldCheck, ShipWheel } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '@/components/common/InquiryForm'
import SectionHeading from '@/components/common/SectionHeading'
import {
  caseStudies,
  faqItems,
  imagePlaceholder,
  problemsSolved,
  processSteps,
  productCategories,
  serviceCards,
  trustPoints,
} from '@/data/siteContent'

const serviceIcons = [SearchCheck, ShieldCheck, ClipboardCheck, Factory, ShipWheel]
const trustIcons = [BadgeCheck, Boxes, Container, ShieldCheck]

const Home = () => {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              China sourcing support for international buyers
            </p>
            <h1
              id="home-hero-title"
              className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-description"
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clearer visibility on the ground.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <span className="whitespace-nowrap text-white">Get a Free Sourcing Quote</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Supplier verification support',
                'Quality and production follow-up',
                'Shipment coordination visibility',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-4 shadow-sm">
              <img
                alt="Factory sourcing and inspection support"
                className="h-80 sm:h-96 w-full rounded-2xl object-cover"
                data-strk-img-id="home-hero-image-e31a5f"
                data-strk-img="[home-hero-description] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src={imagePlaceholder}
              />
              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/20 bg-white/95 p-5 text-slate-900 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                  What buyers need most
                </p>
                <p className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                  Clear supplier decisions, practical quality control, and shipment readiness support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Sourcing support that reduces uncertainty at each stage"
            description="Use SSourcing China for supplier search, verification, quality control follow-up, production visibility, and shipment coordination support in China."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceCards.map((service, index) => {
              const Icon = serviceIcons[index]
              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How the process works"
            title="A practical sourcing workflow for overseas buyers"
            description="The process is built to improve supplier visibility, communication clarity, and shipment readiness without overcomplicating decision-making."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                  Step {step.step}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Products we source"
              title="Product categories we commonly support"
              description="We support a range of practical categories for importers, distributors, brand owners, and online sellers working with China suppliers."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {productCategories.slice(0, 4).map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Problems we solve"
                title="Common sourcing issues buyers want to control earlier"
                description="Many sourcing risks come from low visibility, unclear supplier comparisons, and weak follow-up during production and shipment preparation."
              />
            </div>
            <div className="grid gap-4">
              {problemsSolved.map((problem) => (
                <div
                  key={problem}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base leading-7 text-slate-700"
                >
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why buyers work with us"
            title="Trust points that support better sourcing decisions"
            description="SSourcing China is positioned for practical execution, clear communication, and sourcing support focused on buyer risk reduction."
            tone="dark"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point, index) => {
              const Icon = trustIcons[index]
              return (
                <article
                  key={point.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{point.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected case studies"
            title="Examples of sourcing support buyers ask for"
            description="Illustrative project scenarios showing how supplier screening, quality visibility, and communication support can help overseas buyers move forward more confidently."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                  Case study
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {study.title}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Solution:</span> {study.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Result:</span> {study.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title={<span id="home-faq-title">Questions buyers often ask before starting</span>}
              description={<span id="home-faq-description">A clear sourcing inquiry usually helps us review your request faster and suggest the most relevant next steps.</span>}
            />
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-4 shadow-sm">
              <img
                alt="Quality control and shipping coordination"
                className="h-full min-h-80 w-full rounded-2xl object-cover"
                data-strk-img-id="home-faq-image-0a9b3d"
                data-strk-img="[home-faq-description] [home-faq-title] [home-hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={imagePlaceholder}
              />
            </div>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  )
}

export default Home
