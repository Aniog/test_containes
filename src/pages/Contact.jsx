import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      toast.success('Thank you. Your inquiry has been received. We will respond within 24 hours.')
      setFormData({ name: '', company: '', email: '', phone: '', product: '', quantity: '', timeline: '', message: '' })
      setSubmitting(false)
    }, 800)
  }

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300">Get in touch to discuss your sourcing requirements. We respond to all inquiries within one business day.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="Your Company Ltd" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Business Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="+1 555 123 4567" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product Description *</label>
                  <input type="text" name="product" value={formData.product} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="E.g., Stainless steel cookware sets" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Quantity</label>
                  <input type="text" name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="E.g., 1,000 units" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Target Timeline</label>
                <input type="text" name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600" placeholder="E.g., Production start within 6 weeks" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-600 resize-y" placeholder="Quality requirements, certifications needed, target price range, packaging specifications, or any other relevant details..." />
              </div>
              <button type="submit" disabled={submitting} className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 text-white px-10 py-4 rounded-lg font-medium text-lg transition-colors">
                {submitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
              <p className="text-xs text-slate-500">Your information is treated confidentially. We do not share client or inquiry details with third parties.</p>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-2xl p-8 sticky top-24">
              <h3 className="font-semibold text-xl text-slate-900 mb-6">Office Information</h3>
              <div className="space-y-6 text-slate-700">
                <div className="flex gap-4">
                  <MapPin className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Hangzhou Office</div>
                    <div className="text-sm">Room 1203, Building A<br />No. 88 Jiangnan Road<br />Hangzhou, Zhejiang 310000<br />China</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Phone</div>
                    <div className="text-sm">+86 571 8765 4321</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm hover:text-teal-600">info@ssourcingchina.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Business Hours</div>
                    <div className="text-sm">Monday - Friday<br />8:30 AM - 6:00 PM (UTC+8)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="text-sm text-slate-600">
                  For urgent matters outside business hours, please email and indicate the urgency in your subject line. We monitor email continuously.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact