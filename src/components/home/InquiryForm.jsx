import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 md:py-28 bg-white" id="inquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Info */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-slate-300 font-semibold text-sm uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Tell us about your product and requirements. Our team will respond within
                24 hours with a tailored sourcing proposal and estimated timeline.
              </p>

              <div className="space-y-4">
                {[
                  'No obligation, free initial consultation',
                  'Response within 1 business day',
                  'Confidential—we never share your product details',
                  'Tailored proposal based on your specific needs',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-8 md:p-12 lg:p-14">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    Your inquiry has been received. Our team will review your requirements and
                    get back to you within 24 hours with a tailored sourcing proposal.
                  </p>
                  <Link
                    to="/"
                    className="text-accent font-semibold hover:text-accent-hover transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Tell Us About Your Project</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
                          Company Name *
                        </label>
                        <input
                          id="company"
                          type="text"
                          required
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="+1 555 0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="product">
                        Product Description *
                      </label>
                      <input
                        id="product"
                        type="text"
                        required
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                        placeholder="e.g., Bluetooth speakers, kitchen knives, yoga mats"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="quantity">
                          Estimated Order Quantity
                        </label>
                        <input
                          id="quantity"
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="target">
                          Target Unit Price (USD)
                        </label>
                        <input
                          id="target"
                          type="text"
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                          placeholder="e.g., $5-10 per unit"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us about your product specifications, certifications needed, target markets, or any other requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cta text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      We respect your privacy. Your information is never shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
