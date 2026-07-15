import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#0A0806]">
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&h=900&fit=crop" 
          alt="Velmora Atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[3px] text-[#C5A46E] mb-4">ESTABLISHED 2018</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[2px]">Our Story</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg max-w-none text-[#5C5346]">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was born from a simple observation: the most cherished pieces in a woman's jewelry box 
            are rarely the most expensive. They are the ones worn every day—the delicate chain that never 
            comes off, the earrings that feel like an extension of her.
          </p>

          <p className="leading-relaxed mb-8">
            We set out to create jewelry that lives in that space. Demi-fine pieces crafted from 18K 
            gold-plated brass, designed with the care of fine jewelry but priced for everyday wear. 
            Pieces that feel special without demanding special occasions.
          </p>

          <div className="my-12 py-8 border-y border-[#E5DFD3]">
            <h2 className="font-serif text-3xl tracking-wide text-[#0A0806] mb-6">The Velmora Difference</h2>
            <ul className="space-y-4">
              <li className="flex gap-4"><span className="text-[#C5A46E] mt-1">—</span> <span>18K gold plating over solid brass for lasting beauty</span></li>
              <li className="flex gap-4"><span className="text-[#C5A46E] mt-1">—</span> <span>Hypoallergenic posts and clasps for sensitive skin</span></li>
              <li className="flex gap-4"><span className="text-[#C5A46E] mt-1">—</span> <span>Hand-finished details that reveal themselves on close inspection</span></li>
              <li className="flex gap-4"><span className="text-[#C5A46E] mt-1">—</span> <span>Thoughtful packaging designed to be kept and reused</span></li>
            </ul>
          </div>

          <p className="leading-relaxed mb-8">
            Every piece is designed in our studio and produced by skilled artisans who share our 
            commitment to quality. We believe that jewelry should be a quiet pleasure—something that 
            makes you feel beautiful without saying a word.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="inline-block">
            <span className="text-sm tracking-[2px] text-[#C5A46E] border-b border-[#C5A46E] pb-1">EXPLORE THE COLLECTION →</span>
          </Link>
        </div>
      </div>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Thoughtful Design", text: "Every curve, every clasp, every detail is considered. We design for the woman who values quiet luxury over loud statements." },
            { title: "Responsible Sourcing", text: "We work with suppliers who share our values. Our gold plating is lead-free and nickel-free, safe for daily wear." },
            { title: "Lasting Quality", text: "We test every piece for durability. Our jewelry is made to be worn, not stored. A piece you reach for every morning." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-xl tracking-wide mb-3">{v.title}</h3>
              <p className="text-sm text-[#5C5346] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
