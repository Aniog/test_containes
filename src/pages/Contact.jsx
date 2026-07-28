import { useEffect, useRef, useState } from 'react'
import { ImageHelper, DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: 'Baiyun District, Guangzhou, Guangdong Province, China' },
  { icon: Phone, label: 'Phone', value: '+86 180 1234 5678' },
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
]

export default function Contact() {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    message: ''
  })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const { data: response, error } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            product: formData.product,
            quantity: formData.quantity,
            budget: formData.budget,
            message: formData.message,
            source: 'contact_page',
            status: 'new',
            created_at: new Date().toISOString(),
          },
        })

      if (error || response?.success === false) {
        const errMsg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed'
        toast.error(errMsg)
        setSubmitting(false)
        return
      }

      toast.success('Thank you for your inquiry! We will review your requirements and get back to you within 24 hours with a personalized sourcing plan.')
      setFormData({
        name: '', email: '', company: '', phone: '',
        product: '', quantity: '', budget: '', message: ''
      })
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
              Ready to start sourcing from China? Fill out the form below and we will get back to you within 24 hours with a personalized plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-brand-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Why Choose SSourcing China?</h3>
                <ul className="space-y-2">
                  {[
                    'On-the-ground team in Guangzhou',
                    'Verified supplier database',
                    'Transparent pricing, no hidden fees',
                    'Dedicated account manager',
                    'Free initial consultation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200">
                <CardContent className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Sourcing Quote</h2>
                  <p className="text-gray-500 mb-8 text-sm">
                    Tell us about your project and we will create a tailored sourcing plan with transparent pricing.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <Input required placeholder="John Smith" value={formData.name} onChange={handleChange('name')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <Input type="email" required placeholder="john@company.com" value={formData.email} onChange={handleChange('email')} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <Input placeholder="Your Company Ltd." value={formData.company} onChange={handleChange('company')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <Input placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange('phone')} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Product to Source *</label>
                      <Input required placeholder="e.g. Bluetooth speakers, bamboo kitchenware, custom packaging" value={formData.product} onChange={handleChange('product')} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity</label>
                        <Input placeholder="e.g. 500 units, 10,000 pcs" value={formData.quantity} onChange={handleChange('quantity')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
                        <Input placeholder="e.g. $5,000 - $20,000" value={formData.budget} onChange={handleChange('budget')} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details *</label>
                      <Textarea
                        required
                        placeholder="Describe your product requirements, quality standards, target price, certifications needed, and any other relevant details..."
                        value={formData.message}
                        onChange={handleChange('message')}
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full" disabled={submitting}>
                      <Send className="mr-2 w-4 h-4" />
                      {submitting ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}