import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react'

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl">
            Learn about our heritage, our engineering philosophy, and how we can support your fabrication needs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Engineering Excellence Since 1998</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded with a singular vision: to build the world's most precise and reliable sheet metal folding machines. For over 25 years, we have served fabricators, manufacturers, and workshops across the globe.
                </p>
                <p>
                  Our engineering team combines decades of experience in mechanical design, CNC controls, and industrial automation. Every machine we produce undergoes rigorous testing to ensure it meets our exacting standards for accuracy, durability, and operator safety.
                </p>
                <p>
                  From small job shops to large-scale production facilities, our customers trust ARTITECT MACHINERY to deliver consistent, high-quality results day after day.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'ISO 9001 certified manufacturing',
                  'CE compliant machinery',
                  'Global service network',
                  'Comprehensive warranty',
                  'On-site installation support',
                  'Operator training programs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden">
              <img
                alt="ARTITECT MACHINERY factory"
                data-strk-img-id="about-factory-e1f2g3"
                data-strk-img="[about-factory-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <span id="about-factory-title" className="hidden">ARTITECT MACHINERY manufacturing facility precision engineering sheet metal folding machines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss your sheet metal folding requirements? Reach out and our team will respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contact info */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-muted-foreground text-sm">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-muted-foreground text-sm">info@artitectmachinery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    123 Industrial Parkway<br />
                    Chicago, IL 60601<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday – Friday: 8:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/3">
              {submitted ? (
                <div className="bg-card border border-border rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">Company</label>
                    <input
                      id="company" name="company" type="text"
                      value={form.company} onChange={handleChange}
                      className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message *</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      value={form.message} onChange={handleChange}
                      className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                      placeholder="Tell us about your folding machine requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
