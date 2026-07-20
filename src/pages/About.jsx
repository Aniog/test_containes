import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold text-brand-ink">Our Story</h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img src="https://picsum.photos/seed/velmora-about/900/700" alt="About" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm leading-relaxed text-brand-muted">
              Velmora Fine Jewelry was founded with a singular purpose: to create jewelry that feels both luxurious and wearable. We believe in quiet luxury—pieces that speak softly but leave a lasting impression.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Every design is crafted in-house using quality materials, from 18K gold-plated brass to carefully selected crystals. Our collections are inspired by nature, architecture, and the modern woman.
            </p>
            <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accentHover">
              Explore the collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
