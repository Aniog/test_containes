import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const BlogPostGrid = ({ items }) => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              {item.category}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              {item.readTime}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-semibold text-slate-900">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            {item.excerpt}
          </p>
          <Link
            to="/contact#inquiry-form"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
          >
            Discuss a similar sourcing need
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      ))}
    </div>
  )
}

export default BlogPostGrid
