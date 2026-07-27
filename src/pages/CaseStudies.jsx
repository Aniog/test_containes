import { PageContainer } from "@/components/shared/PageContainer"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Badge } from "@/components/ui/Badge"
import { StockImage } from "@/components/shared/StockImage"

const cases = [
  {
    id: "us-retailer",
    client: "US Outdoor Retailer",
    industry: "Sporting Goods",
    location: "North America",
    title: "Cutting lead time by 30% for a seasonal product line",
    challenge:
      "The client faced repeated stock-outs on a seasonal SKU because their single supplier could not scale quickly.",
    approach: [
      "Mapped 12 alternative factories with relevant product experience.",
      "Verified production capacity, export licenses, and social compliance.",
      "Negotiated staggered production slots to smooth seasonal spikes.",
    ],
    result:
      "Lead time dropped by 30%, stock-out rate fell below 3%, and the client added a second approved supplier.",
  },
  {
    id: "eu-brand",
    client: "EU Home Brand",
    industry: "Home & Furniture",
    location: "Europe",
    title: "Reducing defect rates through on-site QC",
    challenge:
      "A furniture line arrived with inconsistent finishes and loose hardware, driving returns and negative reviews.",
    approach: [
      "Introduced inline inspections at 30% and 70% completion.",
      "Created a detailed QC checklist with photos and tolerance limits.",
      "Worked with the factory on a corrective action plan.",
    ],
    result:
      "Defect rate fell by more than 50% within two production cycles and return costs dropped significantly.",
  },
  {
    id: "startup",
    client: "UK Electronics Startup",
    industry: "Electronics",
    location: "United Kingdom",
    title: "From prototype to first mass order",
    challenge:
      "The startup had a working prototype but no supplier network and tight cash-flow constraints.",
    approach: [
      "Sourced a PCBA partner and plastic-injection supplier willing to work on low initial MOQs.",
      "Managed tooling payments tied to milestone approvals.",
      "Coordinated a 5,000-unit first production run and sea shipment.",
    ],
    result:
      "First order delivered on time and within budget, allowing the startup to launch on its crowdfunding schedule.",
  },
]

export default function CaseStudies() {
  return (
    <PageContainer>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel>Case Studies</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-5xl">Client Results</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Real projects for buyers in North America, Europe, and beyond.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((c) => {
              const titleId = `cs-${c.id}-title`
              const descId = `cs-${c.id}-desc`
              return (
                <article
                  key={c.id}
                  className="grid gap-8 rounded-2xl bg-slate-50 p-6 lg:grid-cols-2 lg:p-10"
                >
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{c.industry}</Badge>
                      <Badge variant="outline">{c.location}</Badge>
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                      {c.client}
                    </p>
                    <h2
                      id={titleId}
                      className="mt-2 text-2xl font-bold text-slate-900"
                    >
                      {c.title}
                    </h2>
                    <p id={descId} className="mt-4 text-slate-600">
                      {c.challenge}
                    </p>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {c.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-lg border-l-4 border-secondary bg-white p-4">
                      <p className="text-sm font-semibold text-slate-900">
                        Result:
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{c.result}</p>
                    </div>
                  </div>
                  <div>
                    <StockImage
                      imgId={`cs-img-${c.id}-m4n5o6`}
                      query={`[${descId}] [${titleId}]`}
                      ratio="4x3"
                      width="700"
                      alt={c.title}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
