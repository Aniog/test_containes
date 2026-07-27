import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="section bg-primary text-white" id="inquiry">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free sourcing quote and let our experts help you find the right suppliers 
            for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8612345678900"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-blue-200" />
              <span className="text-blue-100">+86 123 4567 8900</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-blue-200" />
              <span className="text-blue-100">info@ssourcingchina.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MessageSquare className="w-5 h-5 text-blue-200" />
              <span className="text-blue-100">Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
