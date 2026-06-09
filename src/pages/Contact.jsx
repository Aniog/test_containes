import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe, Building } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  productDescription: '',
  quantity: '',
  targetPrice: '',
  timeline: '',
  additionalInfo: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Please enter a valid email'
    if (!form.productDescription.trim()) newErrors.productDescription = 'Product description is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-neutral-900 bg-white placeholder-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
      errors[field] ? 'border-danger' : 'border-neutral-300'
    }`

  if (submitted) {
    return (
      <div>
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Contact Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Get in Touch</h1>
          </div>
        </section>
        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Thank You for Your Inquiry</h2>
            <p className="text-lg text-neutral-600 mb-6">
              We have received your sourcing inquiry and will respond within 24 hours with a detailed proposal. Check your email for a confirmation.
            </p>
            <Link to="/" className="btn-primary text-sm">
              Return to Home <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Contact Us</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Get a Free Sourcing Quote</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Tell us what products you need. We will provide a detailed sourcing proposal with verified supplier options within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-sm text-neutral-500">Fields marked with * are required.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass('name')} />
                    {errors.name && <p className="text-xs text-danger mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass('email')} />
                    {errors.email && <p className="text-xs text-danger mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." className={inputClass('company')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                    <input type="text" name="country" value={form.country} onChange={handleChange} placeholder="United States" className={inputClass('country')} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" className={inputClass('phone')} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                  <textarea
                    name="productDescription"
                    value={form.productDescription}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the products you want to source. Include material, size, color, function, and any certifications needed."
                    className={inputClass('productDescription')}
                  />
                  {errors.productDescription && <p className="text-xs text-danger mt-1">{errors.productDescription}</p>}
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                    <input type="text" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g., 5,000 pcs" className={inputClass('quantity')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Target Price (per unit)</label>
                    <input type="text" name="targetPrice" value={form.targetPrice} onChange={handleChange} placeholder="e.g., $2.50" className={inputClass('targetPrice')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Delivery Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange} className={inputClass('timeline')}>
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 2 weeks)</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={form.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any additional details about your sourcing needs, sample requirements, packaging preferences, or compliance needs."
                    className={inputClass('additionalInfo')}
                  />
                </div>

                <button type="submit" className="btn-primary text-base w-full md:w-auto px-10 py-3.5">
                  <Send className="w-4 h-4 mr-2" /> Submit Sourcing Inquiry
                </button>

                <p className="text-xs text-neutral-400">
                  By submitting this form, you agree to receive communication from SSourcing China regarding your inquiry. We will not share your information with third parties.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-base font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-primary hover:underline">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone</p>
                      <a href="tel:+8675588888888" className="text-sm text-primary hover:underline">+86 755-8888-8888</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office</p>
                      <p className="text-sm text-neutral-600">Shenzhen, Guangdong Province, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Working Hours</p>
                      <p className="text-sm text-neutral-600">Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your inquiry within 4 hours',
                    'A sourcing specialist is assigned to your project',
                    'You receive a detailed proposal within 24 hours',
                    'We begin supplier search upon your approval',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary text-neutral-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-sm text-neutral-200">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-base font-semibold text-neutral-900 mb-3">Quick Response</h3>
                <p className="text-sm text-neutral-600 mb-4">Need an answer fast? Send us a direct email with your product details and we will prioritize your inquiry.</p>
                <a href="mailto:info@ssourcingchina.com" className="btn-outline text-sm w-full justify-center">
                  <Mail className="w-4 h-4 mr-2" /> Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
