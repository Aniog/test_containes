import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'

const HomeCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-max relative text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Source Products from China?
          </h2>
          <p className="text-lg md:text-xl text-brand-200 mb-8 leading-relaxed">
            Get a free, no-obligation sourcing quote. Our team will review your requirements and
            provide a detailed proposal within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="btn-accent text-base px-8 py-4 gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/how-it-works"
              className="btn-secondary bg-transparent border-brand-400 text-white hover:bg-brand-700 hover:border-brand-300 text-base px-8 py-4"
            >
              Learn How It Works
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="mailto:info@ssourcingchina.com" className="flex flex-col items-center gap-2 text-brand-200 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="text-sm font-medium">Email Us</span>
            </a>
            <a href="tel:+86-21-1234-5678" className="flex flex-col items-center gap-2 text-brand-200 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <a href="#chat" className="flex flex-col items-center gap-2 text-brand-200 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <span className="text-sm font-medium">Live Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
