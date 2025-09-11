import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      company: "Bloom Bakery",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "I went from having no website to a stunning online presence in just 2 minutes! The AI understood exactly what I needed for my bakery. Sales have increased 40% since launching.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Freelance Designer",
      company: "Chen Creative Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "As a designer, I was skeptical about AI-generated websites. But this tool creates designs that rival what I'd spend hours crafting. It's become an essential part of my workflow.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      company: "Spice & Soul",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "The AI created a beautiful restaurant website with online ordering in minutes. Our customers love the seamless experience, and we've seen a 60% increase in online orders.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Consultant",
      company: "Thompson Consulting",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "I needed a professional website quickly for my consulting business. The AI delivered exactly what I envisioned - clean, professional, and conversion-focused. Highly recommended!",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "E-commerce Entrepreneur",
      company: "Park Fashion",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "Building an e-commerce site used to take weeks and cost thousands. With AI Site Builder, I launched my fashion store in under an hour. The results speak for themselves!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Fitness Coach",
      company: "Wilson Fitness",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "The AI created a fitness website that perfectly captures my brand and attracts new clients. The booking system integration was seamless. My business has never been stronger.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by 50,000+ Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how entrepreneurs and businesses are transforming their online presence with AI-powered website creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-400">Forbes</div>
            <div className="text-2xl font-bold text-gray-400">Entrepreneur</div>
            <div className="text-2xl font-bold text-gray-400">Inc.</div>
            <div className="text-2xl font-bold text-gray-400">Wired</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials