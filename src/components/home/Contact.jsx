import { useState } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus('success')
    setValues({ name: '', email: '', company: '', product: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 bg-am-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-am-text mb-6">
              Request a Quote or
              <span className="text-am-gold"> Consultation</span>
            </h2>
            <p className="text-base md:text-lg text-am-muted leading-relaxed mb-10">
              Tell us about your project and our team will recommend the right
              folding machine for your material, volume, and budget.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-am-gold/10 flex items-center justify-center shrink-0 mr-4">
                  <Mail className="w-5 h-5 text-am-gold" />
                </div>
                <div>
                  <div className="text-sm text-am-muted mb-0.5">Email</div>
                  <a
                    href="mailto:sales@artitectmachinery.com"
                    className="text-am-text font-medium hover:text-am-gold"
                  >
                    sales@artitectmachinery.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-am-gold/10 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-5 h-5 text-am-gold" />
                </div>
                <div>
                  <div className="text-sm text-am-muted mb-0.5">Phone</div>
                  <a
                    href="tel:+8612345678900"
                    className="text-am-text font-medium hover:text-am-gold"
                  >
                    +86 123 4567 8900
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-am-gold/10 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-5 h-5 text-am-gold" />
                </div>
                <div>
                  <div className="text-sm text-am-muted mb-0.5">Headquarters</div>
                  <p className="text-am-text font-medium">
                    88 Industrial Park Road
                    <br />
                    Jiangsu, China
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-am-bg border border-white/10 rounded-2xl p-6 md:p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-am-gold mb-4" />
                <h3 className="text-2xl font-bold text-am-text mb-2">
                  Message Sent
                </h3>
                <p className="text-am-muted max-w-sm">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-am-text mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-am-surface border border-white/10 px-4 py-3 text-am-text placeholder-am-muted/60 focus:border-am-gold focus:outline-none focus:ring-1 focus:ring-am-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-am-text mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-am-surface border border-white/10 px-4 py-3 text-am-text placeholder-am-muted/60 focus:border-am-gold focus:outline-none focus:ring-1 focus:ring-am-gold transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-am-text mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-am-surface border border-white/10 px-4 py-3 text-am-text placeholder-am-muted/60 focus:border-am-gold focus:outline-none focus:ring-1 focus:ring-am-gold transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-medium text-am-text mb-2"
                    >
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={values.product}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-am-surface border border-white/10 px-4 py-3 text-am-text focus:border-am-gold focus:outline-none focus:ring-1 focus:ring-am-gold transition-colors"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding-machine">
                        Double Folding Machine
                      </option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">
                        Sheet Metal Folder
                      </option>
                      <option value="sheet-metal-folding-machine">
                        Sheet Metal Folding Machine
                      </option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">
                        Metal Folder Machine
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-am-text mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-am-surface border border-white/10 px-4 py-3 text-am-text placeholder-am-muted/60 focus:border-am-gold focus:outline-none focus:ring-1 focus:ring-am-gold transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
