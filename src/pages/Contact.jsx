import React, { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1200))

    toast.success('Inquiry received. We will respond within 24 hours.', {
      description: 'Thank you for contacting SSourcing China.'
    })

    // Reset form
    setFormData({
      name: '', company: '', email: '', phone: '', country: '',
      productCategory: '', quantity: '', timeline: '', message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300">Submit your sourcing requirements and receive a response within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a href="tel:+862158881234" className="text-slate-600 hover:text-slate-900">+86 21 5888 1234</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-medium mb-1">Office</div>
                  <p className="text-slate-600">Shanghai, China<br />Business hours: Mon-Fri 9:00-18:00 CST</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-gray-200">
              <h3 className="font-semibold mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Response within 24 business hours</li>
                <li>• Initial supplier recommendations within 5-10 days</li>
                <li>• Transparent pricing with no hidden fees</li>
                <li>• Dedicated account manager for your project</li>
              </ul>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">
            <div className="border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-2">Request a Sourcing Quote</h2>
              <p className="text-slate-600 mb-8">Fill out the form below with your requirements. All fields marked with * are required.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <input
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                      placeholder="+1 555 123 4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Country *</label>
                    <input
                      type="text" name="country" value={formData.country} onChange={handleChange}
                      required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Category *</label>
                    <select
                      name="productCategory" value={formData.productCategory} onChange={handleChange}
                      required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="Consumer Electronics">Consumer Electronics</option>
                      <option value="Home Appliances">Home Appliances</option>
                      <option value="Furniture & Home Decor">Furniture & Home Decor</option>
                      <option value="Industrial Equipment">Industrial Equipment</option>
                      <option value="Textiles & Apparel">Textiles & Apparel</option>
                      <option value="Automotive Parts">Automotive Parts</option>
                      <option value="Packaging Materials">Packaging Materials</option>
                      <option value="Building Supplies">Building Supplies</option>
                      <option value="Medical & Healthcare">Medical & Healthcare</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Quantity</label>
                    <input
                      type="text" name="quantity" value={formData.quantity} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Target Timeline</label>
                    <select
                      name="timeline" value={formData.timeline} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="Within 4 weeks">Within 4 weeks</option>
                      <option value="4-8 weeks">4-8 weeks</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Flexible">Flexible / Not urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Product Specifications & Requirements *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    required rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 resize-y"
                    placeholder="Describe your product requirements, specifications, target price range, quality standards, or any other relevant details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>

                <p className="text-xs text-slate-500">By submitting, you agree to be contacted regarding your sourcing inquiry. We respect your privacy and will not share your information.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact