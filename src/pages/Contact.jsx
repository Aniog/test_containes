import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { createInquiry } from '@/api/inquiries.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await createInquiry({
        name: form.name,
        email: form.email,
        company: form.company,
        product: form.product,
        quantity: form.quantity,
        message: form.message,
        source_page: window.location.pathname,
      })
      setSubmitted(true)
      setForm({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        message: '',
      })
    } catch (err) {
      toast.error(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Ready to source from China? Fill out the form and our team will get back to you within 24 hours with a tailored sourcing plan and quote.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Office Address</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Room 1805, Tower B, Fortune Plaza<br />
                      No. 7002 Shennan Avenue, Futian District<br />
                      Shenzhen, Guangdong 518040, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      <a href="mailto:inquiry@ssourcingchina.com" className="text-brand hover:underline">
                        inquiry@ssourcingchina.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      <a href="tel:+8675588881234" className="text-brand hover:underline">
                        +86 755 8888 1234
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Business Hours</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Monday — Friday: 9:00 AM – 6:00 PM (GMT+8)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description *
                    </label>
                    <input
                      id="contact-product"
                      name="product"
                      type="text"
                      required
                      value={form.product}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                      placeholder="e.g. Bluetooth wireless earbuds with ANC"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none transition resize-none"
                      placeholder="Target price, certifications needed, delivery timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {sending ? 'Sending…' : 'Send Inquiry'}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
