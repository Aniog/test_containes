import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="h-[60vh] relative flex items-center justify-center bg-[#2C2825]">
        <img 
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=2000&q=90" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-white/70 text-xs tracking-[0.3em] mb-3">EST. 2018</p>
          <h1 className="headline-serif text-white text-5xl md:text-6xl tracking-[-0.02em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-neutral max-w-none text-[#5C5651]">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was founded with a simple belief: that beautiful jewelry should be accessible, 
            not just aspirational. We create demi-fine pieces that feel special enough for life's 
            most meaningful moments, yet wearable enough for every day.
          </p>

          <h2 className="serif text-3xl text-[#2C2825] tracking-[-0.01em] mt-12 mb-6">The Velmora Way</h2>
          <p className="mb-6">
            Every piece begins in our small studio, where we obsess over the smallest details — 
            the weight of a hoop, the curve of a pendant, the way light catches a crystal. 
            We work only with 18K gold-plated brass and hypoallergenic findings, ensuring our 
            jewelry is as kind to your skin as it is to your wardrobe.
          </p>
          <p className="mb-6">
            We believe in thoughtful consumption. Our collections are intentionally small, 
            produced in limited quantities, and designed to last. We want you to reach for 
            these pieces again and again — not just for special occasions, but for the quiet 
            moments that make up a life.
          </p>

          <h2 className="serif text-3xl text-[#2C2825] tracking-[-0.01em] mt-12 mb-6">Crafted with Care</h2>
          <p className="mb-6">
            Our gold plating is thicker than industry standard, applied in multiple layers 
            for lasting beauty. Each stone is hand-selected. Every clasp is tested. 
            We stand behind our work with a 30-day return policy and a commitment to 
            exceptional customer care.
          </p>

          <div className="mt-12 pt-8 border-t border-[#EDE8E0]">
            <Link to="/shop" className="inline-block text-sm tracking-[0.15em] border-b border-[#A68B5B] pb-0.5 hover:text-[#A68B5B]">
              EXPLORE THE COLLECTION
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white border-y border-[#EDE8E0] py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Timeless Design", desc: "Pieces meant to be worn for years, not seasons." },
            { title: "Ethical Sourcing", desc: "Responsible materials and fair labor practices." },
            { title: "Thoughtful Packaging", desc: "Every order arrives ready to gift or treasure." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="serif text-xl tracking-[-0.01em] mb-3">{v.title}</h3>
              <p className="text-sm text-[#5C5651]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
