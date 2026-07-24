import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Reviews</p>
          <h2 className="serif-heading text-3xl md:text-4xl">What They Say</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-6 bg-card border border-border/50">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-primary" />
                ))}
              </div>
              <p className="serif-heading text-lg italic leading-relaxed mb-4 text-foreground/80">
                "{t.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
