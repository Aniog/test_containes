import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      toast.success('Welcome! Check your inbox for 10% off.')
      setEmail('')
    }, 600)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-sm bg-[#0f0f0f] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/60">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-12 flex-1 rounded-sm border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#b08d57]"
            />
            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="h-12 rounded-sm bg-[#b08d57] px-6 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#9a7a4a]"
            >
              {status === 'submitting' ? 'Joining...' : 'Subscribe'}
            </Button>
          </form>
          {status === 'success' && (
            <p className="mt-3 text-xs text-white/70">Thanks! Your discount code is on its way.</p>
          )}
        </div>
      </div>
    </section>
  )
}
