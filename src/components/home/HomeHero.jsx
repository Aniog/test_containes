import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-truffle-800">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' fill='%232C2420'%3E%3Crect width='1600' height='900'/%3E%3Ccircle cx='800' cy='300' r='250' fill='%233B322E'/%3E%3Ctext x='800' y='500' text-anchor='middle' fill='%23C8A96E' font-size='56' font-family='serif' font-weight='300'%3EEditorial%3C/text%3E%3Ctext x='800' y='560' text-anchor='middle' fill='%23C8A96E' font-size='56' font-family='serif' font-weight='300'%3EPhotography%3C/text%3E%3Ctext x='800' y='700' text-anchor='middle' fill='%23827771' font-size='14' font-family='sans-serif'%3EWarm gold jewelry on model%3C/text%3E%3C/svg%3E"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-truffle-900/30 via-transparent to-truffle-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto animate-fade-up">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.15] tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="mt-6 text-cream-300/80 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman — premium materials, timeless design, and an accessible price point.
        </p>
        <Link to="/shop" className="mt-10 inline-block btn-gold text-sm tracking-widest uppercase">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
