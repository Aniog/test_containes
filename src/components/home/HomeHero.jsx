import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Shield, Wrench, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty construction with premium materials for years of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Precision Engineering',
    desc: 'Accurate folds every time with our advanced bending technology.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    desc: 'Quick turnaround on orders with worldwide shipping available.',
  },
]

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Precision Sheet Metal
            <span className="block text-amber-500">Folding Machines</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            Artitect Machinery delivers high-performance double folding machines and sheet metal folders
            engineered for accuracy, durability, and efficiency in every bend.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 hover:border-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
            >
              <feature.icon className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
