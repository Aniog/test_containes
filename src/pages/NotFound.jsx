import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Not found — Velmora Fine Jewelry"
    return () => {
      document.title = "Velmora Fine Jewelry"
    }
  }, [])

  return (
    <section className="bg-cream min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-page px-6 md:px-12 py-20 text-center">
        <p className="kicker">404</p>
        <h1 className="mt-4 headline-xl text-espresso">
          This page slipped between the displays.
        </h1>
        <p className="mt-4 max-w-md mx-auto editorial-body">
          The page you're looking for has been moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link
            to="/shop"
            className="underline-link justify-center"
          >
            Shop the collection
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
