import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      product: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your sheet metal folding capabilities? Contact our team for a personalized consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-900 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+49 123 456 7890</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8:00-18:00 CET</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-900 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@artitect-machinery.com</p>
                    <p className="text-sm text-gray-500">24/7 response guarantee</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-900 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Headquarters</p>
                    <p className="text-gray-600">Industrial Park 123</p>
                    <p className="text-gray-600">45678 Munich, Germany</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Free consultation & quote
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    On-site installation & training
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    5-year comprehensive warranty
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 technical support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="+49 123 456 7890"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="product" className="block text-sm font-semibold text-gray-900 mb-2">
                  Product Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a product...</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="not-sure">Not Sure - Need Consultation</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project, required specifications, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-blue-900 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-800 transition-all group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
