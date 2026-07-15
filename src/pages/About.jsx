import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1A1816]">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-[#A67C52] text-xs tracking-[3px]">EST. 2018</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[2px] mt-3">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none text-[#4A4640]">
          <p className="text-xl leading-relaxed">
            Velmora was founded with a simple conviction: that fine jewelry should feel personal, 
            not precious. We believe in pieces that become part of your daily ritual—worn to work, 
            to dinner, to bed—without hesitation.
          </p>
          
          <div className="my-12 h-px bg-[#E5E0D8]" />

          <h2 className="font-serif text-3xl tracking-wide text-[#1A1816] not-prose mb-6">The Philosophy</h2>
          <p>
            Demi-fine jewelry occupies a beautiful middle ground. More substantial than costume, 
            more accessible than fine. We use 18K gold plating over hypoallergenic brass, 
            set with hand-selected crystals. Each piece is designed to last—not a lifetime of 
            special occasions, but a lifetime of everyday moments.
          </p>

          <h2 className="font-serif text-3xl tracking-wide text-[#1A1816] not-prose mt-12 mb-6">The Process</h2>
          <p>
            Every design begins with a sketch and a question: would we wear this every day? 
            We prototype in our studio, refine the details, and work with trusted artisans 
            who share our commitment to quality. Nothing leaves our hands until it meets 
            our standards for beauty, comfort, and durability.
          </p>

          <h2 className="font-serif text-3xl tracking-wide text-[#1A1816] not-prose mt-12 mb-6">The Promise</h2>
          <p>
            We stand behind every piece. If something doesn't feel right, we'll make it right. 
            Our 30-day return policy is simple, and our customer care team is always here—real 
            people who care about the jewelry you choose to wear.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop">
            <Button>EXPLORE THE COLLECTION</Button>
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail considered for comfort and beauty." },
            { title: "Responsible Sourcing", desc: "We work with suppliers who share our values around ethics and transparency." },
            { title: "Lasting Quality", desc: "Pieces made to be worn daily, not tucked away for special occasions." },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <h3 className="font-serif text-xl tracking-wide mb-3">{v.title}</h3>
              <p className="text-sm text-[#4A4640] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
