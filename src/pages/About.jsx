import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-[#1a1a1a]">Our Story</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5f5f5]">
          <img alt="Velmora story" className="h-full w-full object-cover" src="https://placehold.co/800x1000/f5f5f5/1a1a1a?text=Our+Story" />
        </div>
        <div>
          <p className="text-sm leading-relaxed text-[#1a1a1a]/80">
            Velmora was founded with a simple belief: fine jewelry should feel attainable, personal, and timeless. We design each piece in California, using 18K gold-plated materials and hypoallergenic finishes so you can wear them every day.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/80">
            From our family-owned workshop to your jewelry box, we prioritize quality, sustainability, and quiet luxury in every detail.
          </p>
          <Link to="/shop" className="mt-6 inline-flex items-center text-sm text-[#c9a96e] hover:underline">
            Shop the collection <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
