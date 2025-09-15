import React from 'react'
import { Star, Quote, Users, TrendingUp } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      company: "Bloom Bakery",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "I went from having no website to a beautiful, professional site in just 10 minutes. The AI understood exactly what I needed for my bakery business. Sales have increased by 40% since launch!",
      rating: 5,
      metric: "40% increase in sales"
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Chen Creative Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "As a designer, I was skeptical about AI-generated websites. But this platform creates designs that rival what I'd make manually, and in a fraction of the time. It's become an essential tool in my workflow.",
      rating: 5,
      metric: "5x faster delivery"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "We needed to launch multiple landing pages quickly for our campaigns. This AI platform delivered professional results that converted 3x better than our previous pages. Absolutely game-changing!",
      rating: 5,
      metric: "3x better conversion"
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Thompson's Grill",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The AI created a stunning website for my restaurant with online ordering, menu display, and reservation system. Customer engagement has never been higher, and online orders doubled in the first month.",
      rating: 5,
      metric: "2x online orders"
    },
    {
      name: "Lisa Park",
      role: "Fitness Coach",
      company: "FitLife Coaching",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Building my coaching website used to be a nightmare. This platform made it effortless and the result looks incredibly professional. I've booked 60% more clients since switching to this AI-built site.",
      rating: 5,
      metric: "60% more clients"
    },
    {
      name: "James Wilson",
      role: "E-commerce Entrepreneur",
      company: "Wilson Electronics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "I launched my electronics store in record time. The AI optimized everything for conversions - from product layouts to checkout flow. Revenue increased by 85% compared to my old site.",
      rating: 5,
      metric: "85% revenue increase"
    }
  ]

  const stats = [
    { number: "50K+", label: "Websites Created" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-6">
            <Star className="w-4 h-4 text-yellow-600 mr-2" />
            <span className="text-sm font-medium text-yellow-700">Customer Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Thousands
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              of Happy Users
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses of all sizes are transforming their online presence and 
            achieving remarkable results with our AI-powered platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Metric */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-6 border border-green-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">{testimonial.metric}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with a professional website? 
              Join thousands of satisfied customers who chose AI SiteBuilder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                Start Your Success Story
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-sm">⭐ 4.9/5 from 10,000+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials