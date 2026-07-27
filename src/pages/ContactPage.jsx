import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowLeft } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.product.trim()) newErrors.product = 'Product description is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus('success')
    setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' })
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-secondary/50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Request Received</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-primary"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-secondary/50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Tell us about your product requirements and we will get back to you within 24 hours
              with a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6">Sourcing Request Form</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-input'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-input'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-1.5">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.product ? 'border-red-500' : 'border-input'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                      placeholder="What product are you looking to source?"
                    />
                    {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Additional Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-input'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none`}
                      placeholder="Please include any specific requirements, target price, timeline, or other details that will help us understand your needs."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Sourcing Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-muted-foreground hover:text-primary">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone / WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+86 XXX XXXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl border border-primary/10 p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">What Happens Next?</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span className="text-muted-foreground">We review your inquiry and requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span className="text-muted-foreground">We respond within 24 hours with initial feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span className="text-muted-foreground">We provide a free sourcing quote and timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    <span className="text-muted-foreground">If you proceed, we begin supplier identification</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
