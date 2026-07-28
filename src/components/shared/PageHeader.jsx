import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function PageHeader({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="border-b border-border bg-primary-900">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-primary-200">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{breadcrumb}</span>
        </nav>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-400">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-200 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
