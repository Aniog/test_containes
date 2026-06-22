import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', company: '', product_interest: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            email: values.email,
            name: values.name,
            company: values.company,
            product_interest: values.product_interest,
            message: values.message,
          }
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({ name: '', email: '', company: '', product_interest: '', message: '' })

    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <div className="bg-stone-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Ready to streamline your importing process? Tell us what you're looking for, and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Headquarters</h3>
                    <p className="text-stone-600 mt-1">123 Business Avenue, Tianhe District<br/>Guangzhou, Guangdong, China 510000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Phone</h3>
                    <p className="text-stone-600 mt-1">+86 123 456 7890<br/>+86 098 765 4321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Email</h3>
                    <p className="text-stone-600 mt-1">info@ssourcingchina.com<br/>support@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Working Hours</h3>
                    <p className="text-stone-600 mt-1">Monday - Friday: 9AM - 6PM (CST)<br/>Saturday/Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Send us an Inquiry</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for reaching out. A sourcing expert will review your requirements and respond within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex justify-center items-center px-4 py-2 border border-green-600 text-sm font-medium rounded text-green-700 bg-white hover:bg-green-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                  {status === 'error' && !!error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={values.name} 
                        onChange={onChange} 
                        required 
                        className="w-full px-4 py-2 bg-white border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-stone-900 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email} 
                        onChange={onChange} 
                        required 
                        className="w-full px-4 py-2 bg-white border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-stone-900 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-1">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={values.company} 
                        onChange={onChange} 
                        className="w-full px-4 py-2 bg-white border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-stone-900 outline-none transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="product_interest" className="block text-sm font-medium text-stone-700 mb-1">Product Category</label>
                      <input 
                        type="text" 
                        id="product_interest" 
                        name="product_interest" 
                        value={values.product_interest} 
                        onChange={onChange} 
                        className="w-full px-4 py-2 bg-white border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-stone-900 outline-none transition-colors"
                        placeholder="e.g., Electronics, Home Goods"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Detailed Requirements <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      value={values.message} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-2 bg-white border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-stone-900 outline-none transition-colors resize-y"
                      placeholder="Please include details like target quantities, materials, custom specifications, or specific sourcing challenges you are facing..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending Request...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}