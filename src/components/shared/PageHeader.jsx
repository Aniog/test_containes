import * as React from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="container-page">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {idx > 0 && <ChevronRight className="h-4 w-4" />}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-300">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
