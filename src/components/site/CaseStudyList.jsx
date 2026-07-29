import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CaseStudyList = ({ items }) => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.slug} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">{item.category}</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">{item.title}</h3>
          <p className="mt-4 text-base leading-7 text-brand-slate">{item.summary}</p>
          <div className="mt-5 rounded-2xl bg-brand-surface p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">Outcome</p>
            <p className="mt-2 text-sm leading-6 text-brand-slate">{item.outcome}</p>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
          >
            Discuss a similar project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      ))}
    </div>
  )
}

export default CaseStudyList
