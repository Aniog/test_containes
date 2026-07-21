import React from "react"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-5 text-center">
      <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md font-sans text-sm text-muted">
        The page you're looking for has moved or no longer exists.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-gold-deep"
      >
        Return Home
      </Link>
    </div>
  )
}
