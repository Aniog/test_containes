import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const benefits = [
    'Free consultation and site assessment',
    'Custom machine configuration options',
    'Comprehensive warranty coverage',
    'On-site installation and training',
    '24/7 technical support',
    'Genuine spare parts availability',
  ]

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Ready to Upgrade Your Production?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Contact our team of experts to discuss your specific requirements. 
              We'll help you find the perfect folding solution for your operation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+1234567890" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Call Us Now
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="cta-name" className="block text-sm font-medium text-white/80 mb-1">
                  Full Name
                </label>
                <input
                  id="cta-name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="cta-email" className="block text-sm font-medium text-white/80 mb-1">
                  Email Address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="cta-company" className="block text-sm font-medium text-white/80 mb-1">
                  Company Name
                </label>
                <input
                  id="cta-company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="cta-message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="cta-message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button type="submit" className="btn-accent w-full">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
