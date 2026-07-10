import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    machine: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would submit to a backend
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.')
    setFormData({ name: '', email: '', company: '', phone: '', machine: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-600 font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mt-3">
            Ready to Upgrade Your<br/>
            <span className="text-accent-500">Fabrication Capabilities?</span>
          </h2>
          <p className="text-brand-500 text-lg mt-4 max-w-2xl mx-auto">
            Contact our machinery specialists for a personalized consultation and quote 
            tailored to your production requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-300">Phone</p>
                    <p className="font-semibold">+1 (800) 555-TECH</p>
                    <p className="text-sm text-brand-400 mt-0.5">Mon-Fri 8am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-300">Email</p>
                    <p className="font-semibold">sales@artitectmachinery.com</p>
                    <p className="text-sm text-brand-400 mt-0.5">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-300">Headquarters</p>
                    <p className="font-semibold">Industrial Parkway, Suite 400</p>
                    <p className="text-sm text-brand-400 mt-0.5">Manufacturing District, OH 44101</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-brand-400 mb-3">TRUSTED BY INDUSTRY LEADERS</p>
                <div className="flex gap-3">
                  {['ISO 9001', 'CE Certified', 'UL Listed'].map((badge) => (
                    <span key={badge} className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-brand-200">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl shadow-brand-900/5 border border-brand-100">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-brand-50 text-brand-900 placeholder-brand-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-brand-50 text-brand-900 placeholder-brand-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-brand-50 text-brand-900 placeholder-brand-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-brand-50 text-brand-900 placeholder-brand-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-brand-700 mb-2">Machine of Interest</label>
                <select
                  name="machine"
                  value={formData.machine}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-brand-50 text-brand-900 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="">Select a machine model...</option>
                  <option value="df-2500">DF-2500 Double Folding Machine (Flagship)</option>
                  <option value="df-1500">DF-1500 Double Folder (Mid-Range)</option>
                  <option value="smf-3000">SMF-3000 Sheet Metal Folder (Heavy Duty)</option>
                  <option value="mf-1200">MF-1200 Metal Folder (Compact)</option>
                  <option value="mfm-2000">MFM-2000 Metal Folding Machine (Professional)</option>
                  <option value="other">Other / Custom Requirements</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-brand-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-brand-50 text-brand-900 placeholder-brand-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                  placeholder="Tell us about your requirements, expected volume, material specifications..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent-500/25"
              >
                <Send className="w-5 h-5" />
                Send Inquiry
              </button>

              <p className="text-xs text-brand-400 mt-4">
                By submitting this form, you agree to our privacy policy. We will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
