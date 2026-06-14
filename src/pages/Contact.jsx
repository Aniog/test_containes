import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Globe,
  MessageSquare
} from 'lucide-react'
import { toast } from 'sonner'
import { createInquiry } from '@/api/inquiries'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@ssourcingchina.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+86 755 1234 5678',
    description: 'Mon-Fri, 9am-6pm CST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Shenzhen, China',
    description: 'By appointment only',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    detail: '24/7 Support',
    description: 'Emergency line available',
  },
]

const productCategories = [
  'Electronics',
  'Home & Garden',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Consumer Goods',
  'Auto Parts',
  'Other',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCategory: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please provide a valid email address'
    if (!formData.message.trim()) return 'Message is required'
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      await createInquiry(formData)
      setStatus('success')
      toast.success('Thank you! Your inquiry has been submitted. We\'ll get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        productCategory: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Failed to submit inquiry. Please try again.')
      setStatus('error')
      toast.error('Failed to submit inquiry. Please try again.')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Tell us about your sourcing needs and we'll provide a customized solution. No obligation, no pressure—just expert advice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      <p className="text-slate-900">{info.detail}</p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Why Contact Us?</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>No obligation or pressure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Confidential discussion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">
                      Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setStatus('idle')}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                          Country
                        </label>
                        <Input
                          id="country"
                          name="country"
                          type="text"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="United States"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-2">
                        Product Category
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                      >
                        <option value="">Select a category (optional)</option>
                        {productCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your sourcing needs: product specifications, target quantity, budget, timeline, and any specific requirements..."
                        rows={6}
                        required
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Minimum 10 characters. Be as specific as possible for a more accurate quote.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                      />
                      <label htmlFor="privacy" className="text-sm text-slate-600">
                        I agree to the <a href="#" className="text-slate-900 underline">Privacy Policy</a> and consent to being contacted about my inquiry.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Location</h3>
            <p className="text-slate-600 mb-4">
              Shenzhen, China<br />
              The heart of China's manufacturing industry
            </p>
            <p className="text-sm text-slate-500">
              Office visits by appointment only. Contact us to schedule a meeting.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
