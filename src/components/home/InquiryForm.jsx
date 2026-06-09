import React, { useState } from 'react'
import { client, getErrorMessage } from '@/lib/sdk'
import { User } from '@strikingly/sdk'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { toast } from 'sonner'
import { Send } from 'lucide-react'

export default function InquiryForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 1. Upsert user in CRM
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        role: 'guest'
      })

      // 2. Save inquiry to database
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...values,
            status: 'new'
          }
        })

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      toast.success('Your inquiry has been sent! Our team will contact you within 24 hours.')
      setValues({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        message: ''
      })
    } catch (err) {
      console.error(err)
      toast.error(err.message || 'Failed to send inquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="inquiry-form" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Ready to Start Sourcing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Fill out the form below with your product details and our sourcing experts will get back to you with a free consultation and quote.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold">Initial Review</h3>
                  <p className="text-sm text-slate-400">We analyze your request and check initial feasibility with our network.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold">Expert Consultation</h3>
                  <p className="text-sm text-slate-400">A dedicated sourcing manager will contact you to discuss details and strategy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold">Transparent Quote</h3>
                  <p className="text-sm text-slate-400">Receive a clear breakdown of costs and a customized sourcing plan.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 bg-white rounded-2xl p-8 shadow-2xl text-slate-950">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={values.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={values.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input 
                  id="company" 
                  name="company" 
                  value={values.company} 
                  onChange={handleChange} 
                  placeholder="Your Company Ltd." 
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product">Product to Source *</Label>
                  <Input 
                    id="product" 
                    name="product" 
                    value={values.product} 
                    onChange={handleChange} 
                    required 
                    placeholder="e.g. Ergonomic Office Chairs" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input 
                    id="quantity" 
                    name="quantity" 
                    value={values.quantity} 
                    onChange={handleChange} 
                    placeholder="e.g. 500 units" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Requirements / Questions *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={values.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Please describe your requirements, target price, etc." 
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 mt-4 h-12 text-lg">
                {loading ? 'Sending...' : 'Get My Free Quote'} <Send className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-center text-xs text-slate-500 mt-4">
                By submitting this form, you agree to our privacy policy. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
