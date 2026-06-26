import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHeader from "../components/shared/PageHeader"
import { processSteps } from "../data/siteData"

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A predictable sourcing workflow"
        description="Every project moves through the same six stages. You always know what is happening, what we need from you, and what comes next."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-dark"
        >
          Start your project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-10 border-l border-brand-line pl-8 md:pl-12">
            {processSteps.map((step) => (
              <li key={step.step} className="relative">
                <span className="absolute -left-[42px] flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white md:-left-[60px] md:h-12 md:w-12 md:text-base">
                  {step.step}
                </span>
                <div className="rounded-xl border border-brand-line bg-white p-6 shadow-sm md:p-8">
                  <h2 className="text-xl font-semibold text-brand-ink md:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-body md:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-soft py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <Card title="Typical timeline">
            1–2 weeks supplier shortlist · 2–4 weeks samples · 4–10 weeks production
            · 1–6 weeks shipping depending on destination and freight mode.
          </Card>
          <Card title="What we need from you">
            Product specifications or reference samples, target price and quantity,
            certification requirements and your destination country.
          </Card>
          <Card title="What you receive">
            Quotation comparison, supplier audit reports, AQL inspection reports,
            production photos, and shipping documents.
          </Card>
        </div>
      </section>
    </>
  )
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-brand-line bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-lg font-semibold text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-body">{children}</p>
    </div>
  )
}
