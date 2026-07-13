import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'

export default function CaseStudiesSection({ showCta = true, limit }) {
  const items = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES

  return (
    <Section id="case-studies" className="bg-slate-50">
      <SectionHeader
        eyebrow="Case Studies"
        title="Real results for global buyers"
        description="A look at how we helped importers solve quality, supplier, and logistics challenges."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((cs) => (
          <article key={cs.id} className="card group overflow-hidden">
            <div className="relative aspect-[3/2] overflow-hidden">
              <img
                alt={cs.client}
                data-strk-img-id={cs.imgId}
                data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <Badge key={tag} variant="brand">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 id={cs.titleId} className="mt-3 text-lg font-bold text-slate-900">
                {cs.client}
              </h3>
              <p id={cs.descId} className="mt-2 text-sm text-slate-600">
                {cs.challenge}
              </p>
              <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
                <span className="font-semibold">Result: </span>
                {cs.result}
              </div>
            </div>
          </article>
        ))}
      </div>

      {showCta && (
        <div className="mt-10 text-center">
          <Link to="/case-studies" className="btn-outline">
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  )
}
