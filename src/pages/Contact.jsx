import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    lines: ['Guangzhou, Guangdong', 'China 510000'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+86 20 1234 5678', '+86 138 0000 0000'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon - Fri: 9:00 AM - 6:00 PM (CST)', 'Response within 24 hours'],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tell us about your sourcing needs and our team will respond within 24 hours with a detailed plan and cost estimate.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-success/5 border border-success/20 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">Thank You!</h2>
                  <p className="text-text-secondary max-w-md mx-auto">
                    We have received your inquiry. Our team will review your requirements and respond within 24 hours with a sourcing plan and cost estimate.
                  </p>
                </div>
              ) : (
                <div className="bg-surface border border-border rounded-2xl p-6 lg:p-10">
                  <h2 className="text-2xl font-bold text-text-primary mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-text-secondary text-sm mb-8">Fields marked with * are required.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
                        <input
                          type="text"
                          placeholder="Acme Corp"
                          className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@acmecorp.com"
                          className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Country</label>
                        <input
                          type="text"
                          placeholder="United States"
                          className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Product Category</label>
                        <select className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white">
                          <option value="">Select a category</option>
                          <option>Electronics & Components</option>
                          <option>Home & Garden</option>
                          <option>Apparel & Textiles</option>
                          <option>Machinery & Industrial</option>
                          <option>Promotional Products</option>
                          <option>Packaging & Printing</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Product Description *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Describe the product you want to source. Include material, dimensions, quantity, target price, and any certifications needed."
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Quantity / Order Volume</label>
                      <input
                        type="text"
                        placeholder="e.g., 5,000 units per month, first order 1,000 units"
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Additional Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Any other details, special requirements, or questions."
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Submit Sourcing Inquiry
                    </button>
                    <p className="text-xs text-text-muted text-center">
                      We will respond within 24 hours. Your information is kept confidential and never shared with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2">
              <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8 sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-1">{info.title}</h4>
                          {info.lines.map((line) => (
                            <p key={line} className="text-text-secondary text-sm">{line}</p>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="border-t border-border mt-8 pt-8">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">What Happens Next?</h4>
                  <ul className="space-y-3">
                    {[
                      'We review your inquiry within 24 hours',
                      'Our team researches suppliers for your product',
                      'You receive a detailed sourcing plan and quote',
                      'We schedule a call to discuss next steps',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-text-secondary text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border mt-8 pt-8">
                  <div className="flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <MessageSquare className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text-primary mb-1">Prefer to chat?</p>
                      <p className="text-text-secondary text-sm">WhatsApp us at +86 138 0000 0000 for quick questions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
