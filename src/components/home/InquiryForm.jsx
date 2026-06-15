import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

// Mocking config since we don't have src/config.jsx yet
const STRK_PROJECT_URL = import.meta.env.VITE_STRK_PROJECT_URL || ''
const STRK_PROJECT_ANON_KEY = import.meta.env.VITE_STRK_PROJECT_ANON_KEY || ''

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const InquiryForm = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productType: '',
    quantity: '',
    requirements: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new'
          }
        })
        .select()
        .single()

      if (error || data?.success === false) {
        throw new Error(error?.message || 'Submission failed')
      }

      toast.success('Inquiry sent successfully! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        company: '',
        productType: '',
        quantity: '',
        requirements: ''
      })
    } catch (err) {
      console.error('Submit error:', err)
      toast.error('Failed to send inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Inc."
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="productType" className="block text-sm font-semibold mb-2">Product Category *</label>
          <input
            type="text"
            id="productType"
            name="productType"
            required
            value={formData.productType}
            onChange={handleChange}
            placeholder="e.g. Eco-friendly Packaging"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          />
        </div>
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-semibold mb-2">Estimated Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g. 5,000 units"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
        />
      </div>
      <div>
        <label htmlFor="requirements" className="block text-sm font-semibold mb-2">Sourcing Requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows="4"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Tell us about the product specifications, target price, etc."
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </button>
      <p className="text-[10px] text-slate-400 text-center">
        By submitting, you agree to our privacy policy. Your information is secure.
      </p>
    </form>
  )
}

export default InquiryForm
