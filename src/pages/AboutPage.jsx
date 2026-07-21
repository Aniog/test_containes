import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-8 text-center">Our Story</h1>
        <div className="prose prose-lg mx-auto text-[#57534E] leading-relaxed space-y-6">
          <p>
            Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and designed for real life.
          </p>
          <p>
            Founded in 2020, we create demi-fine pieces that bridge the gap between everyday wear and special occasion elegance. Each design is thoughtfully crafted in California, using ethically sourced materials and time-honored techniques.
          </p>
          <p>
            Our name comes from the Latin "velum" (veil) and "mora" (pause) — a reminder to slow down and appreciate the beauty in everyday moments.
          </p>
          <p>
            Every Velmora piece is designed to be worn, loved, and passed down. We believe jewelry should tell your story, not the other way around.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
