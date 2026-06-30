import React from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Sarah M.', rating: 5, text: 'The quality is absolutely stunning. I\'ve worn my Golden Sphere Huggies every day for months and they still look brand new.' },
    { id: 2, name: 'Emily R.', rating: 5, text: 'Bought the Royal Heirloom Set as a gift for my daughter\'s graduation. The packaging alone made it feel so special.' },
    { id: 3, name: 'Jessica L.', rating: 5, text: 'Finally found jewelry that looks expensive but doesn\'t break the bank. The Amber Lace Earrings are my new go-to.' },
  ]

  return (
    <section className="py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-10 tracking-wide">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 md:p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>
              <p className="text-sm font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
