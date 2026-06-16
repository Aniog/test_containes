import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-80 w-80 rounded-full bg-brass/10 blur-3xl" />

      <div className="container-page py-32">
        <p className="eyebrow eyebrow-line text-brass">Error 404</p>
        <h1 className="mt-6 max-w-2xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          That page is not in the catalog.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
          The link may be outdated, or the part you are looking for has been
          retired. Our product catalog is the surest path to the right
          machine.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/products" className="btn-primary">
            Browse the catalog
          </Link>
          <Link to="/" className="btn-secondary-dark">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
