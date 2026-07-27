import { useState } from 'react'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    volume: '',
    timeline: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate form submission - in production this would connect to database
    setTimeout(() => {
      toast.success('Thank you for your inquiry. Our team will contact you within 24 hours.')
      setFormData({
        name: '', email: '', company: '', phone: '', product: '', volume: '', timeline: '', message: ''
      })
      setSubmitting(false)
    }, 900)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">Tell us about your sourcing requirements. We respond to all inquiries within one business day.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Product Category *</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Kitchen appliances, apparel"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Expected Annual Volume</label>
                <input
                  type="text"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  placeholder="e.g., 5,000 units"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Target Timeline</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g., First order within 3 months"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Please describe your product requirements, target price range, quality expectations, and any other relevant details..."
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-500 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-slate-900 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
            </button>

            <p className="text-xs text-slate-500">By submitting this form, you agree to our privacy policy. We will not share your information with third parties.</p>
          </form>
        </div>

        <div className="md:col-span-2">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h3 className="font-semibold mb-6">Office Information</h3>
            <div className="space-y-5 text-sm">
              <div>
                <div className="font-medium text-slate-900 mb-1">Shanghai Headquarters</div>
                <div className="text-slate-600">Room 1208, Tower B<br />No. 388 Fenglin Road<br />Xuhui District, Shanghai 200032<br />China</div>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Email</div>
                <a href="mailto:info@ssourcingchina.com" className="text-blue-600 hover:underline">info@ssourcingchina.com</a>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Phone</div>
                <div className="text-slate-600">+86 21 5888 9900</div>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Business Hours</div>
                <div className="text-slate-600">Monday - Friday<br />9:00 AM - 6:00 PM (GMT+8)</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            For urgent matters outside business hours, please email us and we will respond as soon as possible.
          </div>
        </div>
      </div>
    </div>
  )
}