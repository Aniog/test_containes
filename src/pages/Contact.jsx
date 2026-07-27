import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-400 font-medium text-sm mb-3">GET IN TOUCH</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Tell us about your sourcing needs and we'll get back to you within 24 hours with a free, no-obligation proposal.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-brand-50 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-900 mb-3">Thank You for Your Inquiry!</h2>
                  <p className="text-slate-500 max-w-md mx-auto mb-6">
                    We've received your request and will review it carefully. Our team will get back to you within 24 hours with a detailed response.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-brand-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-500 text-sm mb-4">
                    Fill out the form below and we'll get back to you within 24 hours. Fields marked with * are required.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <Input
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <Input
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                      <Input
                        placeholder="+1 555 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
                      <Input
                        placeholder="e.g., Stainless steel water bottles, 500ml"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Order Quantity</label>
                      <Input
                        placeholder="e.g., 5,000 units"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                    <Textarea
                      placeholder="Tell us about your target price, certifications needed, timeline, and any other requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>

                  <p className="text-xs text-slate-400">
                    We respect your privacy and will never share your information. All inquiries are confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-brand-900 mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-900">Phone</div>
                      <div className="text-sm text-slate-500">+86 755 8888 6666</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-900">Email</div>
                      <div className="text-sm text-slate-500">info@ssourcingchina.com</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-900">Office</div>
                      <div className="text-sm text-slate-500">Shenzhen, Guangdong, China</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-900">Business Hours</div>
                      <div className="text-sm text-slate-500">Mon-Fri: 9:00 AM - 6:00 PM (CST)</div>
                      <div className="text-sm text-slate-500">Sat: 9:00 AM - 12:00 PM (CST)</div>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-lg font-semibold text-brand-900 mb-3">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free, no-obligation quote',
                    'Response within 24 hours',
                    'Confidential consultation',
                    'Expert advice tailored to your product',
                    'No minimum order requirement',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}