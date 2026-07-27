import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="body-large text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 500+ global businesses who trust SSourcing China for reliable 
            supplier sourcing, quality control, and shipping coordination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="btn-accent text-lg px-10 py-4 group"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+8612345678900"
              className="btn-secondary text-lg px-10 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>100% Verified Suppliers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
