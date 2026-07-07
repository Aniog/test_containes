import React from 'react'

const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    product: "Vivid Aura Jewels",
    text: "Even more beautiful in person. The weight feels premium, and I haven't taken them off since they arrived."
  },
  {
    id: 2,
    name: "Elena R.",
    product: "Golden Sphere Huggies",
    text: "Exactly what I was looking for. The perfect everyday huggie. Doesn't irritate my sensitive ears at all."
  },
  {
    id: 3,
    name: "Chloe T.",
    product: "Majestic Flora Nectar",
    text: "I bought this for my sister's wedding and it was stunning. The packaging alone makes it feel so special."
  }
]

export const Testimonials = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-center text-3xl md:text-4xl text-foreground mb-16">Loved by You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {REVIEWS.map((review) => (
            <div key={review.id} className="text-center flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="font-sans text-foreground/90 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <span className="block font-serif text-sm tracking-widest uppercase text-foreground mb-1">{review.name}</span>
                <span className="block font-sans text-xs text-muted-foreground">Purchased {review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}