import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-base/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23c49b3f;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%231a1614;stop-opacity:0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='900' fill='%232a2018'/%3E%3Crect width='1600' height='900' fill='url(%23g)'/%3E%3Ccircle cx='800' cy='350' r='400' fill='%23b8860b' opacity='0.08'/%3E%3Ccircle cx='1100' cy='500' r='250' fill='%23c49b3f' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <p className="font-sans text-xs text-accent uppercase tracking-[0.2em] mb-6">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-surface/70 max-w-md leading-relaxed mb-8">
            Gold jewelry that moves with you — designed for the modern woman who values quiet elegance over loud logos.
          </p>
          <Link to="/shop" className="btn-primary text-sm">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-surface/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-surface/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
