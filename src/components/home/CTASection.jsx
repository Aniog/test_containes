import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'

const benefits = [
  'Free initial consultation',
  'No obligation quote within 24 hours',
  'Transparent pricing — no hidden fees',
  'Dedicated project manager',
]

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary to-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Source Products from China?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get a free sourcing quote and discover how we can help you find reliable
              suppliers, control quality, and streamline your supply chain.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-white/90 transition-colors group"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+8613800000000"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Right - Contact Options */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">
              Multiple Ways to Reach Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-white/80">+86 138 0000 0000</p>
                  <p className="text-white/60 text-sm">Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-white/80">info@ssourcingchina.com</p>
                  <p className="text-white/60 text-sm">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp / WeChat</h4>
                  <p className="text-white/80">+86 138 0000 0000</p>
                  <p className="text-white/60 text-sm">Available for instant messaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
