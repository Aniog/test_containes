import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card"
import { caseStudies } from "@/data/siteData"

export default function CaseStudies() {
  useDocumentTitle("Case Studies | SSourcing China")

  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="container-main text-center">
          <span
            id="case-studies-hero-subtitle"
            className="text-sm font-semibold uppercase tracking-wide text-primary"
          >
            Case Studies
          </span>
          <h1
            id="case-studies-hero-title"
            className="mt-3 text-4xl font-extrabold text-slate-900 lg:text-5xl"
          >
            Results that speak for themselves
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Real projects where our sourcing process helped buyers improve
            quality, reduce costs, and launch faster.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className={`overflow-hidden p-0 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      alt={study.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`${study.imgId}-page`}
                      data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-hero-subtitle] [case-studies-hero-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-xs font-bold uppercase tracking-wide text-accent">
                      {study.industry}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{study.client}</p>
                    <CardTitle id={study.titleId} className="mt-4 text-2xl lg:text-3xl">
                      {study.title}
                    </CardTitle>
                    <CardDescription id={study.descId} className="mt-4 text-base">
                      {study.description}
                    </CardDescription>
                    <div className="mt-6 inline-flex w-fit items-center rounded-lg bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                      {study.result}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
