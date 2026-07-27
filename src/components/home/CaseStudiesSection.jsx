import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import { CASE_STUDIES } from "@/data/site"
import useStrkImages from "@/hooks/useStrkImages"

const CaseStudiesSection = () => {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#F4F6F9]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="Case studies"
            title="Recent projects from real buyers"
            subtitle="A snapshot of three recent client engagements, with measurable outcomes."
          />
          <Link
            to="/case-studies"
            className="text-sm font-semibold text-[#0B2545] hover:text-[#133B6F] inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            All case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:gap-7 md:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((c) => (
            <article
              key={c.id}
              className="rounded-xl bg-white border border-line overflow-hidden flex flex-col"
            >
              <div
                className="aspect-[16/10] w-full bg-[#EDF1F7] bg-cover bg-center"
                data-strk-bg-id={`case-${c.id}-bg-5a8e21`}
                data-strk-bg={`[case-${c.id}-summary] [case-${c.id}-headline]`}
                data-strk-bg-ratio="16x10"
                data-strk-bg-width="800"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="navy">{c.industry}</Badge>
                  <Badge variant="outline">{c.region}</Badge>
                </div>
                <h3
                  id={`case-${c.id}-headline`}
                  className="text-lg font-bold text-ink mb-2 leading-snug"
                >
                  {c.headline}
                </h3>
                <p
                  id={`case-${c.id}-summary`}
                  className="text-sm text-ink-subtle leading-relaxed mb-5 flex-1"
                >
                  {c.summary}
                </p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-line">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <div className="text-sm font-bold text-[#0B2545]">{r.value}</div>
                      <div className="text-[10px] text-ink-muted leading-tight mt-0.5">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CaseStudiesSection
