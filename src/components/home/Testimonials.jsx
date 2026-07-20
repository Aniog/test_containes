import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const reviews = [
    { name: "Eleanor R.", text: "The quality surpassed my expectations. The weight of the Golden Sphere Huggies feels truly premium.", stars: 5 },
    { name: "Sophia M.", text: "Finally, jewelry that doesn't irritate my skin. I wear my Amber Lace earrings daily now.", stars: 5 },
    { name: "Isabella G.", text: "Beautifully packaged. It made gifting the Royal Heirloom set so special. She loved it!", stars: 5 }
  ]

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-8">
              <div className="flex space-x-1">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed opacity-80 uppercase tracking-tight">
                "{rev.text}"
              </p>
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">— {rev.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
