import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="max-w-[900px] mx-auto px-6 pt-16 pb-20 text-center">
        <span className="text-xs tracking-[0.15em] text-[#8B7355]">ESTABLISHED 2019</span>
        <h1 className="serif text-7xl tracking-[-0.02em] mt-4">Our Story</h1>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none text-[#2C2825]">
          <p className="text-2xl leading-tight tracking-[-0.01em] mb-12">Velmora was founded on the belief that exceptional jewelry should be both beautiful and accessible—crafted with integrity, designed to last, and meant to be worn every day.</p>
          
          <div className="grid md:grid-cols-5 gap-12 my-16">
            <div className="md:col-span-3">
              <h3 className="serif text-4xl tracking-[-0.01em] mb-6">The Beginning</h3>
              <div className="space-y-5 text-[15px] leading-relaxed text-[#6B665F]">
                <p>Our founder, a lifelong collector of vintage jewelry, noticed a gap in the market: beautiful, well-made pieces that didn't require a special occasion or a significant investment.</p>
                <p>After two years of research and development, working closely with artisans in Italy and India, Velmora was born—bringing together traditional craftsmanship and contemporary design sensibilities.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-[#F8F5F1] p-8 text-sm text-[#6B665F]">
              <p className="font-medium text-[#2C2825] mb-3">Our Promise</p>
              <ul className="space-y-2">
                <li>• 18K gold plating over solid brass</li>
                <li>• Premium crystals and stones</li>
                <li>• Hypoallergenic materials</li>
                <li>• Tarnish-resistant finishes</li>
                <li>• Ethically sourced components</li>
              </ul>
            </div>
          </div>

          <div className="my-16">
            <h3 className="serif text-4xl tracking-[-0.01em] mb-6">Craftsmanship</h3>
            <p className="text-[15px] leading-relaxed text-[#6B665F] max-w-3xl">Every piece begins with a hand-drawn sketch. From there, our team of artisans brings each design to life using time-honored techniques—lost-wax casting, hand-setting, and meticulous polishing. The result is jewelry that feels as good as it looks.</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#1C1917] text-white py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { title: "Thoughtful Design", text: "Every curve, every detail is considered. We design for longevity, not trends." },
            { title: "Honest Materials", text: "Premium metals and stones. No shortcuts. No compromises on quality." },
            { title: "Lasting Beauty", text: "Jewelry meant to be passed down. Timeless pieces for a modern world." }
          ].map((v, i) => (
            <div key={i}>
              <h4 className="serif text-3xl tracking-[-0.01em] mb-4">{v.title}</h4>
              <p className="text-white/70 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <p className="text-[#6B665F]">We believe jewelry should tell your story—not define it. Thank you for being part of ours.</p>
        <Link to="/shop" className="btn-primary mt-8 inline-block">Explore the Collection</Link>
      </div>
    </div>
  )
}

export default About