import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react"
import PageShell from "@/components/shared/PageShell"
import { Container, Section, Badge } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { CASE_STUDIES } from "@/data/content"

const EXTENDED = {
  "home-furniture-us-importer": {
    challenge:
      "The buyer's existing furniture supplier in China was consistently running 3 weeks behind agreed production schedules, pushing every shipment past the US retail season. Lead time had grown from 35 to 52 days for the same product spec.",
    approach:
      "We visited four alternative workshops in Yiwu and Hangzhou, comparing woodworking equipment, finishing capacity and finishing-room conditions. We shortlisted two workshops with the closest match to the buyer's existing spec, then negotiated pricing on identical SKUs.",
    outcome:
      "The buyer moved two of their three SKUs to a Yiwu workshop with the same finish and material spec, but a more modern production schedule. After two production runs, lead time stabilised at 38 days and on-time shipment rose to 96%.",
  },
  "consumer-electronics-eu-brand": {
    challenge:
      "The brand needed a wireless earbuds factory with CE, RoHS and FCC documentation experience — and a real willingness to share test reports before shipment. Their previous supplier had provided certificates that turned out to be outdated.",
    approach:
      "We identified two factories with active CE / RoHS certificates and an in-house test lab. We collected recent test reports, requested a 200-unit trial run, and ran two rounds of pre-shipment inspection using AQL 2.5 sampling.",
    outcome:
      "Two production runs of 5,000 units were delivered with zero defect reports from the retailer's warehouse. The third run was added six months later with an expanded SKU range, all container-shipped to Rotterdam on the agreed schedule.",
  },
  "skincare-startup-australia": {
    challenge:
      "A new Australian skincare startup needed a manufacturer with GMP certification, willing to support small initial batches and to run stability and microbiological tests before launch.",
    approach:
      "We matched the founder with a GMP-certified skincare manufacturer in Guangdong, supported formula fine-tuning for two moisturiser SKUs and one serum SKU, and coordinated stability and microbiological tests through a third-party lab.",
    outcome:
      "All three SKUs launched within six months. The first re-order came three months after launch, and the manufacturer is now producing four additional SKUs in the same product family.",
  },
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = CASE_STUDIES.find((c) => c.slug === slug)

  useEffect(() => {
    document.title = study
      ? `${study.title} | Case Studies | SSourcing China`
      : "Case Study | SSourcing China"
    window.scrollTo({ top: 0 })
  }, [slug, study])

  if (!study) {
    return (
      <PageShell>
        <Section className="bg-white">
          <Container className="max-w-2xl text-center py-20">
            <h1 className="text-2xl font-bold text-slate-900">
              Case study not found
            </h1>
            <p className="mt-3 text-slate-700">
              The case study you're looking for doesn't exist or has been moved.
            </p>
            <Button as={Link} to="/case-studies" variant="secondary" className="mt-6">
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Button>
          </Container>
        </Section>
      </PageShell>
    )
  }

  const extra = EXTENDED[study.slug] || {}

  return (
    <PageShell>
      <Section className="bg-slate-50 border-b border-slate-200">
        <Container className="pt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All case studies
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge tone="navy">{study.category}</Badge>
            <span className="text-sm text-slate-500">Client: {study.client}</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl">
            {study.title}
          </h1>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <img
                  alt={study.imgAlt}
                  data-strk-img-id={study.imgId}
                  data-strk-img="[case-study-detail-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <article className="prose prose-slate mt-8 max-w-none">
                <h2 className="text-2xl font-bold text-slate-900">
                  Background
                </h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  {study.summary}
                </p>

                {extra.challenge && (
                  <>
                    <h2 className="mt-8 text-2xl font-bold text-slate-900">
                      The challenge
                    </h2>
                    <p className="mt-3 text-slate-700 leading-relaxed">
                      {extra.challenge}
                    </p>
                  </>
                )}

                {extra.approach && (
                  <>
                    <h2 className="mt-8 text-2xl font-bold text-slate-900">
                      Our approach
                    </h2>
                    <p className="mt-3 text-slate-700 leading-relaxed">
                      {extra.approach}
                    </p>
                  </>
                )}

                {extra.outcome && (
                  <>
                    <h2 className="mt-8 text-2xl font-bold text-slate-900">
                      The outcome
                    </h2>
                    <p className="mt-3 text-slate-700 leading-relaxed">
                      {extra.outcome}
                    </p>
                  </>
                )}
              </article>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sticky top-24">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Results
                </h2>
                <ul className="mt-4 space-y-3">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-start gap-2.5">
                      <BadgeCheck className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-slate-900">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Have a similar project?
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Send us your spec and we'll reply within one business day.
                  </p>
                  <Button
                    as={Link}
                    to="/contact"
                    variant="accent"
                    size="md"
                    className="mt-4 w-full"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}