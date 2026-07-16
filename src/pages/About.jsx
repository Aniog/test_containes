import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-center">
        <span className="text-xs tracking-[0.2em] text-[#C5A46E]">EST. 2019</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">A quieter kind of luxury.</h1>
        <p className="text-xl text-[#5C5349] max-w-2xl mx-auto">
          Velmora was founded on the belief that beautiful jewelry should be worn every day—not saved for special occasions.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora founder in atelier" 
              className="w-full"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">Our Story</h2>
            <div className="space-y-4 body-text text-[#5C5349]">
              <p>
                After years working in fine jewelry, our founder grew frustrated by the gap between what was available: 
                either prohibitively expensive heirloom pieces, or fast-fashion jewelry that tarnished after a few wears.
              </p>
              <p>
                Velmora was born to fill that space. We source the finest materials and work with skilled artisans to create 
                pieces that feel special but are designed for real life—durable enough for daily wear, beautiful enough to pass down.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F5F1E9] py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h3 className="font-serif text-3xl text-center mb-12">What We Believe</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Over Quantity", text: "We make fewer pieces, but each one is made to last. Our gold plating is three times thicker than industry standard." },
              { title: "Wear It Every Day", text: "Our jewelry is designed for real life. Shower with it, sleep in it, wear it to work. It will still look beautiful." },
              { title: "Thoughtful Design", text: "Every curve, every clasp, every detail is considered. We design pieces we want to wear ourselves—then we do." },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <h4 className="font-serif text-xl mb-3">{v.title}</h4>
                <p className="text-sm text-[#5C5349]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Craft */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 text-center">
        <h2 className="font-serif text-3xl mb-6">Crafted with Intention</h2>
        <p className="body-text text-[#5C5349] max-w-2xl mx-auto mb-8">
          Each piece begins with a sketch and ends in the hands of a skilled artisan. We work with family-owned workshops 
          that have been perfecting their craft for generations. The result is jewelry that feels personal, not mass-produced.
        </p>
        <Link to="/shop" className="btn btn-gold-outline">Explore the Collection</Link>
      </div>

      {/* Contact */}
      <div className="border-t border-[#EDE8E0] py-12">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-sm text-[#5C5349] mb-2">Questions? We're here.</p>
          <a href="mailto:hello@velmora.co" className="font-serif text-xl hover:text-[#C5A46E]">hello@velmora.co</a>
        </div>
      </div>
    </div>
  )
}

export default About
