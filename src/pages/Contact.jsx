import React from 'react'
import Layout from '@/Layout'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Create Contact Response
      const { error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company,
            message: form.message,
            created_at: new Date().toISOString()
          }
        })

      if (responseError) throw responseError
      
      toast.success("Message Sent Successfully", {
        description: "Our technical team will contact you shortly."
      })
      
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      toast.error("Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Toaster />
      <section className="py-20 bg-brand-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">Get in Touch</h1>
                  <p className="mt-4 text-brand-charcoal/60 leading-relaxed">
                    Planning a new production line or looking to upgrade your current machinery? Our engineers are ready to assist you with tailored solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-serif">Global Headquarters</h4>
                      <p className="text-sm text-brand-charcoal/60">123 Industrial Parkway, Suite 500<br />Tech City, TC 94103</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-serif">Direct Line</h4>
                      <p className="text-sm text-brand-charcoal/60">+1 (555) 123-4567<br />Mon - Fri, 8am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-serif">Email Inquiry</h4>
                      <p className="text-sm text-brand-charcoal/60">sales@artitectmachinery.com<br />support@artitectmachinery.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-brand-charcoal/5 p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl -mr-16 -mt-16" />
                
                <h3 className="text-2xl font-serif font-bold mb-6">Request a Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-ivory/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-brand-ivory/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40">Company</label>
                      <input
                        type="text"
                        className="w-full bg-brand-ivory/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                        value={form.company}
                        onChange={e => setForm({...form, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-brand-ivory/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold resize-none"
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                    />
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-brand-charcoal text-white font-bold py-4 text-sm uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-brand-charcoal/90 transition-all disabled:opacity-50"
                  >
                    {loading ? "Processing..." : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
