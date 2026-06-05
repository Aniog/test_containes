import React from 'react'
import { strings } from '../lib/strings'
import { HeroIllustration } from './Icons'

const s = strings.en

export default function Hero() {
  return (
    <section className="w-full hero-wash py-16 md:py-20">
      <div className="max-w-content mx-auto px-5">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading font-bold uppercase leading-tight mb-5">
              <span className="block text-heading-dark text-3xl md:text-5xl">{s.heroLine1}</span>
              <span className="block ai-gradient-text text-3xl md:text-5xl">{s.heroLine2}</span>
            </h1>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              {s.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a
                href="/s/ai_site_builder"
                className="ai-gradient-bg text-white font-heading font-bold uppercase text-sm px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity inline-block text-center min-w-[200px]"
                style={{ height: '44px', lineHeight: '44px', padding: '0 24px' }}
              >
                {s.heroPrimaryCta}
              </a>
              <a
                href="#all-generators"
                className="bg-transparent border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm px-6 py-3 rounded-[4px] hover:bg-brand-purple hover:bg-opacity-5 transition-colors inline-block text-center min-w-[200px]"
                style={{ height: '44px', lineHeight: '44px', padding: '0 24px' }}
              >
                {s.heroSecondaryCta}
              </a>
            </div>
          </div>
          {/* Right column - illustration */}
          <div className="flex-shrink-0">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
