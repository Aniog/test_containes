import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productName: '',
    requirements: '',
    quantity: '',
    targetPrice: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            createdAt: new Date().toISOString()
          }
        })
        .select()
        .single()

      if (error || response?.success === false) {
        throw new Error(error?.message || 'Failed to submit inquiry')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        productName: '',
        requirements: '',
        quantity: '',
        targetPrice: ''
      })
      toast.success('Inquiry submitted successfully!')
    } catch (err) {
      console.error(err)
      setStatus('error')
      toast.error('Submission failed. Please try again.')
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Toaster position="top-center" />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Sourcing Project</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Fill out the form below and our sourcing experts will get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600">hello@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600">+86 123 4567 8901</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Office</h4>
                      <p className="text-slate-600">Futian District, Shenzhen, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">Trust SSourcing China</h4>
                <ul className="space-y-3">
                  {['No Kickbacks', 'Bilingual Support', 'Transparent Fees', 'QC Experts'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                {status === 'success' ? (
                  <div className="text-center py-20">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
                    <p className="text-lg text-slate-600 mb-8 font-medium italic">"Qualified leads are the lifeblood of our operation."</p>
                    <p className="text-slate-500 max-w-md mx-auto mb-10">We have received your inquiry. One of our senior sourcing managers will review your requirements and contact you within 24 business hours.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Wait, I need to send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name *</label>
                        <input 
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address *</label>
                        <input 
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="john@company.com"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name</label>
                        <input 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Global Trading Ltd"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Product(s) to Source *</label>
                        <input 
                          required
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          type="text" 
                          placeholder="e.g. Stainless steel bottles"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Order Quantity</label>
                        <input 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          type="text" 
                          placeholder="e.g. 5,000 units"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Target Unit Price (USD)</label>
                        <input 
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          type="text" 
                          placeholder="e.g. $4.50"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Sourcing Requirements *</label>
                      <textarea 
                        required
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us more about your project requirements, quality standards, and any specific certifications needed."
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                      ></textarea>
                    </div>

                    <p className="text-xs text-slate-500 italic">* Required fields. Your data is strictly confidential and used only for sourcing purposes.</p>

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Get My Free Sourcing Quote</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
