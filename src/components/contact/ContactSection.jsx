import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: '',
      })
    }, 4000)
  }

  const inputClass = (field) =>
    `w-full bg-white border ${
      errors[field] ? 'border-red-400' : 'border-gray-200'
    } rounded-sm px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all`

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-medium uppercase tracking-widest">
              Contact Us
            </span>
            <div className="h-px w-8 bg-brand-gold" />
          </div>
          <h2 className="text-brand-dark mb-4">Get in Touch</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Have questions about our folding machines? Need a custom quote? Our team is ready to help you find the right equipment for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-brand-dark text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-medium text-sm">Phone</p>
                    <p className="text-brand-text text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-medium text-sm">Email</p>
                    <p className="text-brand-text text-sm">sales@artitectmachinery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-medium text-sm">Address</p>
                    <p className="text-brand-text text-sm">
                      1240 Industrial Drive, Suite 400<br />
                      Detroit, MI 48207, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-light rounded-lg p-6">
              <h4 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-3">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-text">Monday - Friday</span>
                  <span className="text-brand-dark font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text">Saturday</span>
                  <span className="text-brand-dark font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text">Sunday</span>
                  <span className="text-brand-muted">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 flex flex-col items-center text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-green-800 text-xl font-semibold mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-green-700 text-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-light rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className={inputClass('company')}
                    />
                  </div>
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-brand-dark text-sm font-medium mb-2">
                    Product Interest
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={inputClass('product')}
                  >
                    <option value="">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-brand-dark text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
