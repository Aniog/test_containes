import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="bg-slate-50">
      <div className="container-page py-24 md:py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          We could not find that page
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 leading-relaxed">
          The page you are looking for may have moved, or the link may be out of date.
          Use the navigation above, or get in touch and we will point you in the right
          direction.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
