import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const newsletterRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, newsletterRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section ref={newsletterRef} id="journal" className="bg-velmora-ivory px-5 pb-20 text-velmora-espresso md:px-8 lg:px-12 lg:pb-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-velmora-cocoa text-velmora-ivory shadow-editorial lg:grid-cols-[1fr_0.85fr]">
        <div className="p-8 md:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">The first look</p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-ivory md:text-6xl">Join for 10% off your first order.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-ivory/78">Receive refined styling notes, early access to drops, and gifting reminders without the noise.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="min-h-12 flex-1 border border-velmora-champagne/35 bg-velmora-espresso/35 px-4 text-sm text-velmora-ivory placeholder:text-velmora-ivory/55 outline-none transition focus:border-velmora-champagne"
              aria-label="Email address"
            />
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-velmora-champagne px-6 text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso transition hover:bg-velmora-antique hover:text-velmora-ivory">
              Join <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          {submitted && <p className="mt-4 text-sm text-velmora-champagne">Welcome to Velmora. Your first-order note is on its way.</p>}
        </div>
        <div
          className="min-h-[320px] bg-cover bg-center"
          data-strk-bg-id="newsletter-editorial-bg-s7t1u5"
          data-strk-bg="[newsletter-visual-copy]"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="900"
        >
          <p id="newsletter-visual-copy" className="sr-only">gold jewelry gift box warm editorial still life</p>
        </div>
      </div>
    </section>
  )
}
