import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-white/80 text-lg mb-8">
            We&apos;ve received your inquiry and will get back to you within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }) }}
            className="bg-white text-primary font-semibold rounded-lg px-8 py-3 transition-colors hover:bg-gray-100"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Source with Confidence?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Tell us about your sourcing needs and we&apos;ll provide a free, 
              no-obligation quote within 48 hours.
            </p>
            <ul className="space-y-4">
              {[
                'Free consultation and needs assessment',
                'Customized sourcing plan and quote',
                'No obligation to proceed',
                'Response within 24 hours',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Get a Free Sourcing Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Tell Us About Your Needs *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none resize-none"
                  placeholder="Describe the products, quantities, and requirements you're looking for..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-light hover:bg-primary text-white font-semibold rounded-lg px-6 py-3.5 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}