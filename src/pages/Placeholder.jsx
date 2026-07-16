import React from 'react'
import { Link } from 'react-router-dom'

export default function Placeholder({ title }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-6">
      <h1 className="font-serif text-4xl font-light tracking-wide text-charcoal">{title}</h1>
      <div className="w-10 h-px bg-gold/40 mx-auto mt-4" />
      <p className="text-taupe text-sm mt-6 max-w-sm">
        This page is coming soon. We are crafting something beautiful for you.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block pb-1.5 font-sans text-xs tracking-wider uppercase text-charcoal border-b border-charcoal/30 hover:border-gold hover:text-gold transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  )
}