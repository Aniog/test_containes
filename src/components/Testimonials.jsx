import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      company: "Bloom Bakery",
      content: "I went from having no website to a beautiful, professional site in just 3 minutes! The AI understood exactly what I needed for my bakery. Sales have increased 40% since launch.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Chen Creative",
      content: "As a designer, I was skeptical about AI-generated websites. But this tool creates designs that rival what I'd spend hours crafting. It's become an essential part of my workflow.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "We needed to launch 5 landing pages for different campaigns. What would have taken our team weeks was done in an afternoon. The quality and conversion rates exceeded our expectations.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Thompson's Grill",
      content: "The AI created a stunning restaurant website with online ordering integration. Our customers love the design, and we've seen a 60% increase in online orders since switching.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Park",
      role: "Consultant",
      company: "Park Consulting",
      content: "I needed a professional website to establish credibility with clients. The AI-generated site looks like it was designed by a top agency. I've already landed 3 new clients!",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "James Wilson",
      role: "E-commerce Entrepreneur",
      company: "Wilson Sports",
      content: "Building an e-commerce site used to be a nightmare. This platform made it incredibly simple, and the AI even optimized the product pages for better conversions. Revenue is up 85%!",
      rating: 5,
      avatar: "JW"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              50,000+ Users
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their experience with AI Site Builder. 
            Real stories from real businesses.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-blue-600 opacity-20" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {renderStars(5)}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials