import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 min-h-[60vh] bg-ivory-50">
      <div className="container-x text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 font-serif text-[64px] sm:text-[88px] lg:text-[120px] leading-none text-ink-900">
          Lost in the workshop.
        </h1>
        <p className="mt-4 text-[15px] text-ink-500 max-w-[420px] mx-auto">
          The page you’re looking for has been moved, restocked, or never existed.
        </p>
        <Link to="/" className="btn-primary mt-10 inline-flex">
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back home
        </Link>
      </div>
    </section>
  )
}
