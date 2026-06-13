import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-[#1a2744]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and receive a free sourcing quote within 24 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base">
              Get a Free Sourcing Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/services" className="btn-outline-light text-base">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
