import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    initial: 'S',
    rating: 5,
    text: 'Absolutely in love with my Golden Sphere Huggies! They\'re the perfect everyday earring — comfortable and so chic.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Emily R.',
    initial: 'E',
    rating: 5,
    text: 'The quality of Velmora jewelry is unmatched for the price point. I\'ve gotten so many compliments on my Amber Lace Earrings!',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Jessica L.',
    initial: 'J',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for myself and it was the best decision. The packaging is gorgeous too!',
    date: '3 weeks ago'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Loved by You</h2>
        <p className="font-sans text-gray-600">Real reviews from our community</p>
        <div className="w-16 h-px bg-amber-600 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            {/* Quote icon */}
            <Quote size={32} className="text-amber-600 mb-4" />
            
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-600 fill-amber-600" />
              ))}
            </div>

            {/* Review text */}
            <p className="font-sans text-gray-700 leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer info */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-serif text-lg mr-3">
                {testimonial.initial}
              </div>
              <div>
                <p className="font-sans text-sm font-medium">{testimonial.name}</p>
                <p className="font-sans text-xs text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
