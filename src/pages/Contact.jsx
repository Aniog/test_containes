import { useState } from 'react'
import { getPickedImageUrl } from '@/lib/img.js'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'

const productCategories = [
  'Consumer Electronics',
  'Furniture & Home Decor',
  'Packaging & Printing',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Hardware & Building Materials',
  'Toys & Games',
  'Beauty & Personal Care',
  'Automotive Parts',
  'Sports & Outdoor',
  'Medical Supplies',
  'Pet Products',
  'Other / Not Listed',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productCategory: '',
  productDescription: '',
  orderVolume: '',
  targetPrice: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim() || !form.email.trim() || !form.productDescription.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 1500)
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
  const labelClass = "block text-sm font-medium text-text-primary mb-1.5"

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Tell us about your sourcing needs. We'll review your requirements and respond with a tailored plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:w-3/5">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">Thank You for Your Inquiry</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    We've received your sourcing request. Our team will review your requirements and respond with a tailored plan within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-primary font-semibold hover:text-primary-light transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} placeholder="John Smith" required />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company Name</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClass} placeholder="Your Company Ltd." />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategory" className={labelClass}>Product Category *</label>
                    <select id="productCategory" name="productCategory" value={form.productCategory} onChange={handleChange} className={inputClass} required>
                      <option value="">Select a category...</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="productDescription" className={labelClass}>Product Description *</label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={3}
                      value={form.productDescription}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Describe the product you want to source. Include specifications, materials, dimensions, or reference images if available."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="orderVolume" className={labelClass}>Estimated Order Volume</label>
                      <select id="orderVolume" name="orderVolume" value={form.orderVolume} onChange={handleChange} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="trial">Trial Order (100-500 units)</option>
                        <option value="small">Small (500-2,000 units)</option>
                        <option value="medium">Medium (2,000-10,000 units)</option>
                        <option value="large">Large (10,000-50,000 units)</option>
                        <option value="xlarge">Very Large (50,000+ units)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="targetPrice" className={labelClass}>Target Price Range (USD)</label>
                      <select id="targetPrice" name="targetPrice" value={form.targetPrice} onChange={handleChange} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="under1">Under $1/unit</option>
                        <option value="1to5">$1 - $5/unit</option>
                        <option value="5to20">$5 - $20/unit</option>
                        <option value="20to100">$20 - $100/unit</option>
                        <option value="over100">$100+/unit</option>
                        <option value="notsure">Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClass}>Expected Timeline</label>
                      <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="urgent">Urgent (within 1 month)</option>
                        <option value="1to3">1-3 months</option>
                        <option value="3to6">3-6 months</option>
                        <option value="6plus">6+ months</option>
                        <option value="exploring">Just Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Any additional requirements, certifications needed, target markets, or questions you have."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-2/5">
              <div className="bg-background rounded-xl border border-border p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">Office Address</h4>
                      <p className="text-text-secondary text-sm mt-1">
                        Futian District, Shenzhen<br />
                        Guangdong, China
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">Email</h4>
                      <a href="mailto:info@ssourcingchina.com" className="text-text-secondary text-sm mt-1 block hover:text-primary transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">Phone</h4>
                      <a href="tel:+86-755-1234-5678" className="text-text-secondary text-sm mt-1 block hover:text-primary transition-colors">
                        +86 755 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">Business Hours</h4>
                      <p className="text-text-secondary text-sm mt-1">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border mt-8 pt-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      'We review your requirements within 24 hours',
                      'We schedule a call to discuss your project in detail',
                      'We provide a tailored sourcing plan and quote',
                      'Upon approval, we begin the sourcing process',
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-text-secondary text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="aspect-[21/9] bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundImage: `url(${getPickedImageUrl('contact-map-bg-1a2b3c') || ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <span id="contact-map-label" className="text-text-muted">Shenzhen, Guangdong, China</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}