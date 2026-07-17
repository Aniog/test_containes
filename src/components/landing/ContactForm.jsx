import React from 'react'
import { Button } from '@/components/ui/button'
import { Input, Textarea, Label } from '@/components/ui/input'
import { createContact } from '@/api/contacts'

const EMPTY = { name: '', email: '', phone: '', company: '', message: '' }

export default function ContactForm({ onSubmitted }) {
  const [values, setValues] = React.useState(EMPTY)
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setStatus('submitting')
    try {
      await createContact(values)
      setValues(EMPTY)
      setStatus('success')
      if (onSubmitted) onSubmitted()
    } catch (err) {
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Jane Doe"
            disabled={status === 'submitting'}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="jane@example.com"
            disabled={status === 'submitting'}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
            placeholder="+1 555 000 0000"
            disabled={status === 'submitting'}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={values.company}
            onChange={onChange}
            placeholder="Acme Inc."
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          placeholder="How can we help you?"
          disabled={status === 'submitting'}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
      {status === 'success' && (
        <p role="status" className="text-sm text-green-600">
          Thanks! Your message has been received.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}
