import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const formatDate = (value) => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

const BlogGrid = ({ items }) => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.slug} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {item.category}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">{item.title}</h3>
          <p className="mt-4 text-base leading-7 text-brand-slate">{item.excerpt}</p>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-brand-line pt-4">
            <p className="text-sm text-brand-muted">{formatDate(item.date)}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Ask a question
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default BlogGrid
