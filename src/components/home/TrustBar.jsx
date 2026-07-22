import React from 'react'
import { Separator } from '@/components/ui/separator'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const TrustBar = () => {
  const { ref: revealRef, revealed } = useScrollReveal(0.2)
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="bg-charcoal">
      <div ref={revealRef} className={`max-w-content mx-auto px-4 md:px-6 py-4 transition-all duration-700 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-sans text-xs md:text-sm tracking-cta uppercase text-gold-light whitespace-nowrap">
                {item}
              </span>
              {index < items.length - 1 && (
                <Separator orientation="vertical" className="h-4 bg-gold/30 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
