import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="py-16 lg:py-24 bg-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Upgrade Your Production Line?
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Get in touch with our engineering team to discuss your specific requirements. 
              We offer free consultations and custom quotes tailored to your needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c87941] text-white rounded-lg font-semibold hover:bg-[#a05d2e] transition-colors"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c87941]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#e8956a]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="text-white font-medium hover:text-[#e8956a] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c87941]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#e8956a]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@artitect.com" className="text-white font-medium hover:text-[#e8956a] transition-colors">
                    info@artitect.com
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Our team typically responds within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
