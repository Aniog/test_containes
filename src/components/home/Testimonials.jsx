import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    company: 'TechCorp USA',
    role: 'Procurement Manager',
    content: 'SSourcing China transformed our supply chain. Their factory verification process saved us from a potentially disastrous partnership with an unreliable supplier. The quality of our LED products has been consistently excellent.',
    rating: 5,
    avatar: 'JS',
  },
  {
    name: 'Maria Garcia',
    company: 'HomeStyle Europe',
    role: 'Sourcing Director',
    content: 'We\'ve been working with SSourcing for 3 years now. Their production monitoring service gives us peace of mind, and their team\'s communication is exceptional. They\'ve helped us reduce costs by 40% while improving quality.',
    rating: 5,
    avatar: 'MG',
  },
  {
    name: 'David Chen',
    company: 'Aussie Safety Co',
    role: 'Operations Manager',
    content: 'Finding a reliable sourcing agent in China was our biggest challenge until we found SSourcing. Their local team handles everything from supplier negotiations to quality inspections. Highly recommended for any business sourcing from China.',
    rating: 5,
    avatar: 'DC',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>
            Hear from businesses around the world who trust SSourcing China 
            for their sourcing needs.
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card"
            >
              <div className="card-padding">
                <Quote className="w-10 h-10 text-primary-200 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
