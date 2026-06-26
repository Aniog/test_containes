import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Industrial Drive, Suite 400, Manufacturing City, MC 12345',
    href: '#',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    product: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate form submission for demonstration.
    window.setTimeout(() => {
      setStatus('success')
      setValues({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        product: '',
      })
    }, 1200)
  }

  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or need a quote? Fill out the form below and our team
              will respond within one business day.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <Card className="rounded-xl border-border bg-background lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="product"
                      className="text-sm font-medium text-foreground"
                    >
                      Product of interest
                    </label>
                    <Input
                      id="product"
                      name="product"
                      value={values.product}
                      onChange={onChange}
                      placeholder="e.g. Double Folding Machine"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, material requirements, or any questions."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send message
                      </>
                    )}
                  </Button>
                  {status === 'success' && (
                    <p className="text-sm font-medium text-primary">
                      Thank you. We have received your message and will be in touch
                      shortly.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  className="rounded-xl border-border bg-background"
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="mt-1 text-sm leading-relaxed text-muted-foreground hover:text-primary"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Separator />

              <div className="rounded-xl bg-slate-900 p-6 text-white">
                <h3 className="text-lg font-bold">Need technical help?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Our support team can assist with machine selection,
                  specifications, and after-sales service.
                </p>
                <a
                  href="tel:+1234567890"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  <Phone className="h-4 w-4" />
                  Call +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
