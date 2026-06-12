import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', product: '', quantity: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us about your sourcing needs and our team will provide a detailed plan, supplier options, and cost estimate within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">Inquiry Received!</h2>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours with a detailed plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-navy-900 mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-slate-600 mb-6">Fill in your details and product requirements. All fields marked with * are required.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="text" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
                    <input
                      type="text" name="product" required value={form.product} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                      placeholder="What product are you looking to source from China?"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text" name="quantity" value={form.quantity} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="e.g. 1,000 - 5,000 units"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Budget</label>
                      <input
                        type="text" name="budget" value={form.budget} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="e.g. $5,000 - $10,000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                    <textarea
                      name="message" rows={5} value={form.message} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none resize-none"
                      placeholder="Specifications, certifications needed, timeline, reference links, or any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors border-none cursor-pointer text-base"
                  >
                    <Send className="w-4 h-4" />
                    Submit Sourcing Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-navy-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600">+86 136 0000 8888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Office</p>
                      <p className="text-sm text-slate-600">Yiwu, Zhejiang, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Working Hours</p>
                      <p className="text-sm text-slate-600">Mon–Fri, 9:00–18:00 (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-xl p-6">
                <MessageSquare className="w-8 h-8 text-accent-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent requests, reach us directly via WhatsApp.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-navy-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span>We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span>Our team prepares a sourcing plan and cost estimate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span>We schedule a call to discuss your project in detail</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
