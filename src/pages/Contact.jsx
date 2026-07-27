import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    productCategory: '',
    message: ''
  })
  
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please fill out all required fields.")
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const { data: response, error: submitError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: formState.name,
            email: formState.email,
            company: formState.company || undefined,
            productCategory: formState.productCategory || undefined,
            message: formState.message,
            status: 'new'
          }
        })
      
      if (submitError || response?.success === false) {
        throw new Error(
          (Array.isArray(response?.errors) && response.errors.length > 0) 
            ? response.errors.join(', ') 
            : submitError?.message || "Failed to submit inquiry. Please try again."
        )
      }

      // 3. Success state
      setStatus('success')
      setFormState({
        name: '',
        email: '',
        company: '',
        productCategory: '',
        message: ''
      })

    } catch (err) {
      console.error(err)
      setErrorMessage(err.message || 'An error occurred during submission.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300">
            Tell us about your sourcing needs, and our experts will get back to you within 24 hours with a free assessment.
          </p>
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Get In Touch</h3>
                <p className="text-slate-600 mb-8">
                  We're headquartered in Guangzhou, at the heart of China's manufacturing ecosystem.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Office Location</h4>
                    <p className="text-slate-600 font-sans">
                      124 Tianhe Road,<br />
                      Tianhe District,<br />
                      Guangzhou, Guangdong,<br />
                      China 510000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                    <a href="mailto:info@ssourcingchina.local" className="text-blue-600 hover:underline">
                      info@ssourcingchina.local
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Call Us</h4>
                    <a href="tel:+8613800138000" className="text-blue-600 hover:underline">
                      +86 138-0013-8000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM (GMT+8)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Send an Inquiry</h3>
                  
                  {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
                      <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                      <p>Thank you for reaching out. A sourcing expert will review your requirements and contact you within 24 hours.</p>
                      <Button 
                        variant="outline" 
                        className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
                        onClick={() => setStatus('idle')}
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                          {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                          <input 
                            id="name"
                            name="name"
                            type="text" 
                            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
                          <input 
                            id="email"
                            name="email"
                            type="email" 
                            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
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
                            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Business LLC"
                            value={formState.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="productCategory" className="text-sm font-semibold text-slate-700">Product Category</label>
                          <select 
                            id="productCategory"
                            name="productCategory"
                            className="w-full h-11 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            value={formState.productCategory}
                            onChange={handleChange}
                          >
                            <option value="">Select a category</option>
                            <option value="Consumer Electronics">Consumer Electronics</option>
                            <option value="Home & Garden">Home & Garden</option>
                            <option value="Apparel & Textiles">Apparel & Textiles</option>
                            <option value="Toys & Baby">Toys & Baby</option>
                            <option value="Hardware & Tools">Hardware & Tools</option>
                            <option value="Other">Other (specify below)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message / Sourcing Requirements *</label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full p-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                          placeholder="Please describe the product you are looking for, estimated quantities, and any specific requirements or links to similar products..."
                          value={formState.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}