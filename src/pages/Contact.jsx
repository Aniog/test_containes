import React from 'react'
import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { toast } from 'sonner'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '', product: '' })
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // 1. Handle User record (Manual implementation since SDK export is missing)
      let userId = null;
      try {
        const { data: userResponse } = await client.from('Users').upsert({
          email: values.email,
          name: values.name,
          role: 'guest'
        }).select().single();
        
        if (userResponse?.id) {
          userId = userResponse.id;
        }
      } catch (userErr) {
        console.warn('User upsert failed, continuing without link:', userErr);
      }

      // 2. Insert Contact Response
      const { data, error } = await client.from('ContactResponses').insert({
        data: {
          user_id: userId,
          name: values.name,
          email: values.email,
          message: values.message,
          product_interest: values.product
        }
      })

      if (error) throw error

      toast.success("Message sent successfully! We'll get back to you soon.")
      setValues({ name: '', email: '', message: '', product: '' })
      setStatus('success')
    } catch (err) {
      console.error(err)
      toast.error("Failed to send message. Please try again.")
      setStatus('error')
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions about our machinery or need a technical quote? Our team of experts is ready to assist you.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">sales@artitectmachinery.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Headquarters</p>
                <p className="text-sm text-muted-foreground">123 Engineering Way, Industrial District</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={onChange}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={onChange}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="product" className="text-sm font-medium">Inquiry Topic</label>
              <select
                id="product"
                name="product"
                value={values.product}
                onChange={onChange}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">General Inquiry</option>
                <option value="Double Folding Machine">Double Folding Machine</option>
                <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={values.message}
                onChange={onChange}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell us about your project or requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              <Send className="mr-2 h-4 w-4" />
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
