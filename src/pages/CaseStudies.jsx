import { CheckCircle2, MapPin, Building2 } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import CtaBanner from "@/components/sections/CtaBanner"
import { useStrkImages } from "@/lib/useStrkImages"
import { caseStudies } from "@/data/content"

function CaseStudyDetail({ cs, index }) {
  const ref = useStrkImages([cs.id])
  const reversed = index % 2 === 1
  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2">
      <div className={reversed ? "lg:order-2" : ""}>
        <img
          alt={cs.title}
          data-strk-img-id={cs.imgId}
          data-strk-img={`[cs-${cs.id}-summary] [cs-${cs.id}-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-sm"
        />
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
            <Building2 className="h-4 w-4" />
            {cs.industry}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {cs.location}
          </span>
        </div>
        <h2 className="heading-2 mt-3" id={`cs-${cs.id}-title`}>
          {cs.title}
        </h2>
        <p className="lead mt-3" id={`cs-${cs.id}-summary`}>
          {cs.summary}
        </p>
        <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="flex items-start gap-2 font-semibold text-green-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <span>Result: {cs.result}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Sourcing projects with measurable results"
        description="Real examples of how structured sourcing, verification, and QC changed the outcome for overseas buyers."
      />
      <Section className="space-y-20">
        {caseStudies.map((cs, i) => (
          <CaseStudyDetail key={cs.id} cs={cs} index={i} />
        ))}
      </Section>

      <Section className="bg-white pt-0">
        <SectionHeader
          eyebrow="What Clients Say"
          title="Trusted by overseas buyers"
          description="Feedback from buyers who rely on us as their on-the-ground team in China."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "Having a single contact who actually visits the factories changed everything. We stopped guessing and started getting real answers.",
              name: "Operations Manager",
              company: "US consumer electronics brand",
            },
            {
              quote:
                "The pre-shipment inspection reports are detailed and honest. We know exactly what is shipping before it leaves China.",
              name: "Procurement Lead",
              company: "German home goods retailer",
            },
            {
              quote:
                "They recovered a season our previous supplier had nearly ruined. Fast, practical, and no drama.",
              name: "Founder",
              company: "UK apparel label",
            },
          ].map((t) => (
            <figure
              key={t.company}
              className="flex flex-col rounded-xl border border-line bg-surface p-6"
            >
              <blockquote className="text-body">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="block text-muted">{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
