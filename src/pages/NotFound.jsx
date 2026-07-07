import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center pt-20">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-sm text-sm text-stone">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 border border-ink px-8 py-3 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-ivory"
      >
        Back to Home
      </Link>
    </div>
  )
}
