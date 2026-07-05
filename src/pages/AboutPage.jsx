import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <span className="text-xs tracking-[0.2em] text-[#B8976E]">EST. 2019</span>
        <h1 className="serif text-6xl md:text-7xl tracking-[-0.02em] mt-4 mb-8">Jewelry that feels like home.</h1>
        <p className="text-lg text-[#6B665F] max-w-lg mx-auto">
          Thoughtfully designed demi-fine pieces, made to be worn every day and treasured for years.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 aspect-[16/10] bg-[#F0EBE3]">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="serif text-4xl tracking-[-0.01em] mb-6">Our Philosophy</h2>
            <div className="space-y-4 text-[#6B665F] leading-relaxed">
              <p>
                Velmora began with a simple observation: the jewelry women reach for every day is rarely the most expensive piece in their collection. It's the one that feels right—effortless, beautiful, and enduring.
              </p>
              <p>
                We design demi-fine pieces that honor that instinct. Each earring, necklace, and huggie is crafted from premium materials, finished by hand, and tested for everyday wear.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#2C2823] py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-10 text-white">
          {[
            { title: "Quality First", desc: "18K gold plating over solid brass. Hypoallergenic, nickel-free, and built to last." },
            { title: "Thoughtful Design", desc: "Every curve, clasp, and proportion is considered. Nothing is added without purpose." },
            { title: "Accessible Luxury", desc: "Premium craftsmanship at a price that invites you to collect, layer, and gift freely." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="serif text-2xl tracking-[-0.01em] mb-3">{v.title}</h3>
              <p className="text-white/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <h2 className="serif text-4xl tracking-[-0.01em] mb-4">Ready to find your everyday treasures?</h2>
        <p className="text-[#6B665F] mb-8">Explore our full collection of demi-fine jewelry.</p>
        <Link to="/shop" className="btn-primary inline-block">SHOP THE COLLECTION</Link>
      </div>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-12 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 text-center text-xs text-[#6B665F]">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default AboutPage
