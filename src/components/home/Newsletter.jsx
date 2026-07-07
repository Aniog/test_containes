import React, { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-gold text-white">
      <div className="container-page py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-eyebrow uppercase font-sans text-cream/85">
              The Velmora Letter
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 leading-[1.1]">
              Join for 10% off<br />your first order.
            </h2>
            <p className="text-base text-cream/85 mt-4 max-w-md leading-relaxed">
              New collections, restocks, and quiet dispatches from our New York studio.
              No noise, ever.
            </p>
          </div>
          <form onSubmit={onSubmit} className="w-full">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 border-b border-cream/40 pb-3 focus-within:border-cream transition-colors">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent text-cream placeholder:text-cream/60 font-sans text-base py-3 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="self-start sm:self-auto text-[11px] tracking-eyebrow uppercase font-sans font-medium text-cream hover:text-deep transition-colors px-2 py-3"
              >
                Subscribe →
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-3 text-sm text-cream/90 font-sans">
                Welcome to Velmora. Your 10% code is on its way to your inbox.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-cream font-sans">
                Please enter a valid email address.
              </p>
            )}
            <p className="text-[11px] tracking-eyebrow uppercase font-sans text-cream/70 mt-4">
              By subscribing you agree to our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
