import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Toaster } from "sonner"
import { toast } from "sonner"
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const ContactPage = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: 'Double Folding Machine',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: response, error } = await client
        .from('ContactRequest')
        .insert({
          data: {
            ...formData,
            created_at: new Date().toISOString()
          }
        })

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Failed to send request')
      }

      toast.success('Quote Request Sent!', {
        description: "Our engineering team will contact you shortly.",
      })
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: 'Double Folding Machine',
        message: ''
      })
    } catch (err) {
      toast.error('Submission Failed', {
        description: err.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary">Contact Our Team</h1>
          <p className="mt-4 text-xl text-muted-foreground">Get a technical consultation or request a custom quote for your next project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">Technical Sales Office</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Main Headquarters</h3>
                  <p className="mt-1 text-muted-foreground">Industrial Park Nord, Building B4<br />Engineering Way 122, Tech City</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Direct Line</h3>
                  <p className="mt-1 text-muted-foreground">+1 (555) 123-4567<br />Mon-Fri, 9am - 5pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Technical Email</h3>
                  <p className="mt-1 text-muted-foreground">experts@artitect.com<br />quotes@artitect.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-64 relative">
               <img
                  data-strk-img-id="office-location-map"
                  data-strk-img="modern headquarters building industrial"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt="Office Location"
                />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-2xl bg-white p-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Request a Custom Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="MetalWorks Inc."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product_interest">Product of Interest</Label>
                    <select
                      id="product_interest"
                      name="product_interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.product_interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="Double Folding Machine">Double Folding Machine</option>
                      <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                      <option value="Custom Solution">Custom Solution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Technical Requirements / Project Details</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your material thickness, length, and profile complexity..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-bold" disabled={loading}>
                  {loading ? 'Sending Request...' : (
                    <>
                      Submit Quote Request <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
