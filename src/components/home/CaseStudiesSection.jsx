import { Link } from "react-router-dom"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/data/siteData"

export function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span
              id="case-studies-subtitle"
              className="text-sm font-semibold uppercase tracking-wide text-primary"
            >
              Case Studies
            </span>
            <h2 id="case-studies-title" className="mt-2 section-title">
              Results for real buyers
            </h2>
            <p className="section-subtitle">
              See how we have helped companies improve quality, reduce costs,
              and bring products to market faster.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View all case studies
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden p-0">
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={study.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-subtitle] [case-studies-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  {study.industry}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {study.client}
                </p>
                <CardTitle id={study.titleId} className="mt-2">
                  {study.title}
                </CardTitle>
                <CardDescription id={study.descId} className="mt-2">
                  {study.description}
                </CardDescription>
                <div className="mt-4 inline-flex items-center rounded-lg bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
                  {study.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
