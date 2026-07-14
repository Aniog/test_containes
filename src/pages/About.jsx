import React from 'react'

export default function AboutPage() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide text-center">Our Story</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />

        <div className="space-y-6 text-sm md:text-base text-stone-600 font-sans leading-relaxed">
          <p>
            Velmora was born from a simple frustration: why should beautifully crafted jewelry cost a fortune? We believed that the artistry, materials, and attention to detail that define luxury should be accessible — not exclusive.
          </p>
          <p>
            Every Velmora piece begins as a hand-drawn sketch in our studio. Our designers draw inspiration from architecture, nature, and the quiet elegance of everyday life. From there, each design is refined through dozens of prototypes until it meets our exacting standards.
          </p>
          <p>
            We use 18K gold plating over hypoallergenic brass, ensuring that every piece not only looks extraordinary but feels comfortable against even the most sensitive skin. Our crystals are hand-set, our clasps are tested for durability, and our finishes are inspected under magnification.
          </p>
          <p>
            The result is jewelry that looks and feels like it belongs in a boutique on the Rue du Faubourg Saint-Honoré — at a price that invites you to wear it every day, not just on special occasions.
          </p>
          <p className="font-serif text-lg text-charcoal italic">
            Crafted to be treasured. Designed to be worn.
          </p>
        </div>
      </div>
    </div>
  )
}
