import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground border-y border-border/20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <Mail className="w-8 h-8 mx-auto mb-6 opacity-80" />
        <h2 className="font-serif text-3xl md:text-5xl tracking-wide mb-4 text-background">Join the Inner Circle</h2>
        <p className="text-secondary/80 mb-10 font-light text-lg">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="rounded-none h-14 bg-transparent border-secondary/30 text-secondary placeholder:text-secondary/50 focus-visible:ring-secondary focus-visible:border-secondary transition-all"
            required
          />
          <Button 
            type="submit" 
            className="rounded-none h-14 px-8 tracking-[0.2em] uppercase bg-background text-foreground hover:bg-secondary hover:text-foreground transition-all duration-300 whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-secondary/50 text-xs mt-6 tracking-widest uppercase">By subscribing, you agree to our Terms of Service.</p>
      </div>
    </section>
  )
}
