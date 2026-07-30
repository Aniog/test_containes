import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustPoints = [
  'On-the-ground team in Shenzhen',
  'Verified supplier network',
  'Transparent reporting',
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <span className="section-label text-brand-400">China Sourcing Agent</span>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-300 mt-6 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4 border-slate-600 text-slate-100 hover:bg-slate-800 hover:text-white">
                See How It Works
              </Link>
            </div>

            <ul className="mt-10 grid sm:grid-cols-3 gap-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                data-strk-img-id="hero-img-ssourcing-d4e5f6"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory inspection and sourcing team in China"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
