import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { CASE_STUDIES } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { StrkImage } from "@/components/shared/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"

export function HomeCaseStudies() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="How buyers source smarter with us"
          description="Real examples of how verification, inspection, and coordination made a measurable difference."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <StrkImage
                  imgId={cs.imgId}
                  query={`[${cs.descId}] [${cs.titleId}]`}
                  ratio="16x9"
                  width={800}
                  alt={cs.client}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <Badge variant="brand">{cs.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {cs.location}
                  </span>
                </div>
                <h3
                  id={cs.titleId}
                  className="mt-3 text-lg font-semibold text-brand-900"
                >
                  {cs.client}
                </h3>
                <p id={cs.descId} className="mt-2 flex-1 text-sm text-slate-600">
                  {cs.result}
                </p>
                <Link
                  to="/case-studies"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeCaseStudies
