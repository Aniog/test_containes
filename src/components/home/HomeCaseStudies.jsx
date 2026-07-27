import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '@/data/content'

const featured = CASE_STUDIES.slice(0, 3)

const HomeCaseStudies = () => (
  <section className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">Case studies</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Recent sourcing programs, with real numbers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            A selection of projects across e-commerce, retail, and industrial clients.
            Client names are withheld for confidentiality.
          </p>
        </div>
        <Link
          to="/case-studies"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-900"
        >
          All case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((study) => (
          <article
            key={study.id}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
              <img
                alt={study.title}
                className="h-full w-full object-cover"
                data-strk-img-id={`home-case-${study.id}-b2`}
                data-strk-img={`[home-case-label-${study.id}] [home-case-title-${study.id}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                {study.tag}
              </span>
              <h3 id={`home-case-title-${study.id}`} className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                {study.title}
              </h3>
              <p id={`home-case-label-${study.id}`} className="sr-only">{study.productLabel}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {study.results[0]}
              </p>
              <Link
                to={`/case-studies#${study.id}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-800 hover:text-blue-900"
              >
                Read the case <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default HomeCaseStudies
