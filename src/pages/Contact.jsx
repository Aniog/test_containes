import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [status, setStatus] = React.useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: values
        })

      if (error || response?.success === false) {
        throw new Error(error?.message || 'Failed to submit inquiry')
      }

      setStatus('success')
      toast.success('Inquiry submitted successfully! We will contact you soon.')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
      toast.error(err.message || 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-xl text-slate-600 mb-10">We have received your sourcing inquiry. Our expert team will review your requirements and get back to you within 24 hours.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-amber-600 font-semibold hover:text-amber-700"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Fill out the form below with your product requirements, and our sourcing experts will provide a preliminary analysis and quote.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Headquarters</h3>
                    <p className="text-sm text-slate-600">Futian District, Shenzhen, China</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call / WhatsApp</h3>
                    <p className="text-sm text-slate-600">+86 138-0000-0000</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-500 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Office Hours</h3>
              <p className="text-slate-800 text-sm mb-4">Our sourcing team is available to assist you during the following hours:</p>
              <div className="space-y-2 text-sm font-medium text-slate-900">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM (CST)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat:</span>
                  <span>10:00 AM - 2:00 PM (CST)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sun:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Business Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="product" className="text-sm font-semibold text-slate-700">Product(s) Needed *</label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      required
                      value={values.product}
                      onChange={handleChange}
                      placeholder="e.g. Electric Bicycles"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-semibold text-slate-700">Estimated Quantity</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 units"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Detailed Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us about your sourcing needs, specific standards, or any challenges you're facing..."
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50 transition-all font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-amber-500 text-slate-900 font-bold py-4 rounded-md hover:bg-amber-400 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send My Inquiry
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center">
                  By clicking "Send My Inquiry", you agree to our Privacy Policy. Your data is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
