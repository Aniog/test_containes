import React, { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Newsletter() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <div 
          className="w-full h-full bg-center bg-cover bg-no-repeat opacity-40"
          data-strk-bg-id="newsletter-bg"
          data-strk-bg="[newsletter-subhead] [newsletter-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 max-w-2xl text-center">
        <h2 id="newsletter-title" className="font-serif text-3xl md:text-5xl text-white mb-4">
          Join the Club
        </h2>
        <p id="newsletter-subhead" className="text-white/90 mb-10 text-lg">
          Sign up for editorial insights, early access to new collections, and 10% off your first order.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="rounded-none h-12 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-1 focus-visible:ring-white"
            required
          />
          <Button type="submit" className="rounded-none h-12 px-8 bg-white text-black hover:bg-white/90 font-medium tracking-widest uppercase text-xs sm:w-auto w-full">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
