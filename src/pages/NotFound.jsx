import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="bg-bone-50 pt-40 pb-32 text-center">
      <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">404</p>
      <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">This page slipped away.</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-ink/65">
        The page you were looking for has moved or no longer exists. Wander back to the collection.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center bg-ink px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-bone"
      >
        Return home
      </Link>
    </section>
  )
}
