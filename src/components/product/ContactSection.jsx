import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle, Send, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.'
    if (!values.email.trim()) return 'Email is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (!values.message.trim()) return 'Message is required.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)
    const err = validate()
    if (err) { setErrorMsg(err); return }

    setStatus('submitting')
    console.log('Submitting contact form:', values)

    try {
      const { data: response, error: insertError } = await client
        .from('ContactFormLead')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            message: values.message,
            submitted_at: new Date().toISOString(),
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        throw new Error(getErrorMessage(response, insertError))
      }

      console.log('Contact form submitted successfully:', response)
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMsg(err.message || 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Let's build
              <br />
              <span className="text-white/30">something together.</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 max-w-md">
              Have a question about AetherAI? Want to explore enterprise options? Our team responds within one business day.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Sales', value: 'sales@aether.ai' },
                { label: 'Support', value: 'help@aether.ai' },
                { label: 'Press', value: 'press@aether.ai' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white/70 text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative image */}
            <div className="mt-12 rounded-xl overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 border border-dashed border-white/10 rounded-xl pointer-events-none z-10" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                alt="Modern workspace"
                className="w-full h-48 object-cover opacity-40"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 relative">
              {/* Dashed corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-dashed border-white/15 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-dashed border-white/15 rounded-bl" />

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-white/70" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Message received</h3>
                  <p className="text-white/40 text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-white/40 text-sm hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      placeholder="Tell us about your project or question..."
                      rows={5}
                      required
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-start gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-black hover:bg-white/90 font-semibold gap-2 h-11"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-white/25 text-xs text-center">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
