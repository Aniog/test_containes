import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="container-velmora flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-5xl text-espresso sm:text-6xl">
        Lost in the jewelry box
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-stone-300">
        The page you're looking for has been moved, retired, or never existed.
        Either way, our apologies — let's get you back to the shine.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">
          Back to Home <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
        <Link to="/shop" className="btn-secondary">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
