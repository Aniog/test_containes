import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="bg-page">
      <div className="container-x grid place-items-center py-24 md:py-32">
        <div className="text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
            We couldn't find that page.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-700">
            The link may be out of date. Head back to the homepage or use the
            menu above.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
