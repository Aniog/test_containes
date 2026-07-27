import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="section-container text-center">
        <div className="text-7xl md:text-9xl font-extrabold text-brand/20">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Page not found</h1>
        <p className="text-slate-600 mt-4 max-w-md mx-auto">
          The page you are looking for does not exist. Let us help you get back to sourcing.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
