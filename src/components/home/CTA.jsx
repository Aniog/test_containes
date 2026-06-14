import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CTA() {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="cta-bg-port-9c41d2"
        data-strk-bg="[cta-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="container-x relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="pill-dark">Ready to start?</span>
            <h2 id="cta-headline" className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Send us your project. We will reply within 1 business day with a sourcing plan.
            </h2>
            <p className="mt-4 text-white/75 max-w-2xl">
              Share a few details — product, quantity, target price, deadline — and
              we will come back with the next steps, factory options, and a
              written scope. No commitment required.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              {['Free initial consultation', 'Written quotation', 'NDA available'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white/80" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary !bg-white !text-brand-navy hover:!bg-white/90">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/how-it-works" className="btn-ghost-dark">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <div className="text-sm text-white/70 uppercase tracking-wider">
                Or talk to a sourcing manager
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="mailto:[email protected]" className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Email</div>
                  <div className="mt-1 font-semibold">[email protected]</div>
                </a>
                <a href="https://wa.me/8613800000000" className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-4">
                  <div className="text-xs text-white/60">WhatsApp</div>
                  <div className="mt-1 font-semibold">+86 138 0000 0000</div>
                </a>
              </div>
              <div className="mt-4 text-xs text-white/55">
                Office hours: Mon–Fri, 9:00–18:00 (GMT+8). Replies in English or 中文.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
