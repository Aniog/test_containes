import { useState, useRef, useEffect } from 'react'
import { DataClient, User } from '@strikingly/sdk'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Mail, Phone, MapPin, ArrowRight, Star, Users, Zap } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

export default function LandingPage() {
  const containerRef = useRef(null)
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.'
    if (!form.email.trim()) return 'Email is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.'
    if (!form.message.trim()) return 'Message is required.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) { setErrorMsg(err); return }

    setStatus('submitting')
    try {
      const userRecord = await User.upsert({
        email: form.email,
        name: form.name,
        role: 'guest',
      })

      const { data: response, error } = await client
        .from('Contact Form Submissions')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            phone: form.phone || undefined,
            subject: form.subject || undefined,
            message: form.message,
            user_id: userRecord?.id,
          },
        })
        .select()
        .single()

      if (error || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Submission failed.')
        setErrorMsg(msgs)
        setStatus('error')
        return
      }

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">Acme Co.</span>
          <a
            href="#contact"
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span id="hero-badge">Trusted by 10,000+ businesses</span>
            </div>
            <h1 id="hero-title" className="text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              Build something <span className="text-blue-600">amazing</span> with us
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-600 mb-8 leading-relaxed">
              We help businesses grow with powerful tools, expert support, and a team that genuinely cares about your success.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                data-strk-img-id="hero-img-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: '10K+', label: 'Happy Clients' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '50+', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl font-bold text-slate-900 mb-4">Why choose us?</h2>
            <p id="features-subtitle" className="text-slate-500 text-lg max-w-xl mx-auto">
              Everything you need to grow your business, all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'feat-1',
                icon: <Star className="w-6 h-6 text-blue-600" />,
                title: 'Premium Quality',
                desc: 'We deliver top-tier solutions built with the latest technology and best practices.',
              },
              {
                id: 'feat-2',
                icon: <Users className="w-6 h-6 text-blue-600" />,
                title: 'Expert Team',
                desc: 'Our experienced professionals are dedicated to your success every step of the way.',
              },
              {
                id: 'feat-3',
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                title: 'Fast Results',
                desc: 'Get up and running quickly with our streamlined onboarding and rapid deployment.',
              },
            ].map((f) => (
              <div key={f.id} className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 id={`${f.id}-title`} className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p id={`${f.id}-desc`} className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left info */}
          <div>
            <h2 id="contact-title" className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h2>
            <p id="contact-subtitle" className="text-slate-600 text-lg mb-10 leading-relaxed">
              Have a question or want to work together? Fill out the form and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5 text-blue-600" />, label: 'Email', value: 'hello@acmeco.com' },
                { icon: <Phone className="w-5 h-5 text-blue-600" />, label: 'Phone', value: '+1 (555) 000-1234' },
                { icon: <MapPin className="w-5 h-5 text-blue-600" />, label: 'Office', value: '123 Main St, San Francisco, CA' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-slate-800 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message sent!</h3>
                <p className="text-slate-500 mb-6">Thanks for reaching out. We'll be in touch soon.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input id="name" name="name" placeholder="Jane Smith" value={form.name} onChange={onChange} required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <Input id="email" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={onChange} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone <span className="text-slate-400 font-normal">(optional)</span></Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={onChange} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" value={form.subject} onChange={onChange} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your project or question..."
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6 text-center text-sm">
        <p className="text-white font-semibold text-base mb-1">Acme Co.</p>
        <p>© {new Date().getFullYear()} Acme Co. All rights reserved.</p>
      </footer>
    </div>
  )
}
