import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 800)
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Help</p>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground">
            We would love to hear from you. Send us a message and we will respond within 24 hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-sm border border-border bg-card p-8 text-center">
            <p className="font-serif text-xl text-foreground">Thank you for reaching out.</p>
            <p className="mt-2 text-muted-foreground">Our team will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                rows={6}
                required
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
            <Button type="submit" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
