import React from 'react'
import { toast } from 'sonner'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
    message: ''
  })
  const [submitting, setSubmitting] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.product) {
      toast.error('Please fill in all required fields')
      return
    }
    setSubmitting(true)
    
    setTimeout(() => {
      toast.success('Inquiry received. We will respond within 24 hours.')
      setFormData({
        name: '', email: '', company: '', phone: '', product: '', quantity: '', timeline: '', message: ''
      })
      setSubmitting(false)
    }, 600)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">GET IN TOUCH</div>
          <h1 className="text-5xl font-semibold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your sourcing requirements. We'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Product or Category *</label>
                  <input type="text" name="product" value={formData.product} onChange={handleChange} placeholder="e.g., LED drivers, stainless steel cookware" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                  <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 500-1000 units" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Timeline</label>
                <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., Samples in 4 weeks, production start Q3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Information</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Specifications, target price range, certifications required, or other details" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 resize-y" />
              </div>

              <button type="submit" disabled={submitting} className="px-10 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-60">
                {submitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
              <p className="text-xs text-slate-500">We respect your privacy. Your information will not be shared with third parties.</p>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="font-semibold text-lg text-slate-900 mb-4">Office</div>
              <div className="space-y-4 text-slate-600">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400" />
                  <div>
                    Room 1208, Tower B<br />
                    1288 Pudong Avenue<br />
                    Shanghai 200135, China
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400" />
                  <a href="tel:+862162345678" className="hover:text-slate-900">+86 21 6234 5678</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400" />
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-slate-900">info@ssourcingchina.com</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400" />
                  <div>Mon–Fri, 9:00–18:00 CST</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="font-semibold text-lg text-slate-900 mb-3">What happens next?</div>
              <ol className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="font-mono text-slate-400">1.</span> We review your inquiry within 24 hours.</li>
                <li className="flex gap-3"><span className="font-mono text-slate-400">2.</span> A sourcing specialist contacts you to discuss details.</li>
                <li className="flex gap-3"><span className="font-mono text-slate-400">3.</span> We provide a preliminary sourcing plan and quote.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact