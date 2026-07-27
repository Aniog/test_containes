import React, { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    product_category: '',
    project_details: ''
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required'
    if (!form.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Invalid email address'
    if (!form.project_details.trim()) return 'Please provide project details'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) {
      setErrorMsg(err)
      return
    }

    setStatus('submitting')
    try {
      // 2. Insert Inquiry
      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: form.name,
            company: form.company,
            email: form.email,
            product_category: form.product_category,
            project_details: form.project_details,
            status: 'new'
          }
        })

      if (insertError) throw insertError

      setStatus('success')
      setForm({ name: '', company: '', email: '', product_category: '', project_details: '' })
    } catch (error) {
      console.error(error)
      setErrorMsg(error.message || 'Failed to submit inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="w-full pb-20">
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact SSourcing</h1>
          <p className="text-xl text-gray-600">
            Tell us what you want to source. Our experts will respond within 24 hours with a free feasibility assessment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We are headquartered in Guangzhou, at the heart of China's manufacturing ecosystem, perfectly positioned to visit factories and inspect goods.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Head Office</h3>
                  <p className="text-gray-600 mt-1">Tianhe District,<br />Guangzhou, Guangdong,<br />China</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <a href="mailto:info@ssourcing.cn" className="text-blue-600 hover:underline mt-1 block">info@ssourcing.cn</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Working Hours</h3>
                  <p className="text-gray-600 mt-1">Monday - Friday<br />9:00 AM - 6:00 PM (CST)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Request a Free Sourcing Quote</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                  <h3 className="text-xl font-bold mb-2">Inquiry Submitted Successfully!</h3>
                  <p>Thank you for reaching out. One of our sourcing experts will review your details and contact you via email within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company Name (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Acme Corp"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-gray-700 mb-1.5">Target Product Category (Optional)</label>
                      <input
                        type="text"
                        id="product_category"
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. Electronics, Apparel, Furniture"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project_details" className="block text-sm font-medium text-gray-700 mb-1.5">Project Details *</label>
                    <textarea
                      id="project_details"
                      name="project_details"
                      value={form.project_details}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe the product you want to source, specifications, estimated order quantity, target price, etc."
                      required
                      disabled={status === 'submitting'}
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="text-red-500 text-sm font-medium p-3 bg-red-50 rounded-md border border-red-100">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md text-base font-bold bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : (
                      <>
                        Submit Inquiry <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
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

export default Contact
