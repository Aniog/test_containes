import React from 'react'

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl mb-8">Journal</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Styling tips, behind-the-scenes stories, and the inspiration behind our collections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-muted">
                  <img
                    src={`https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=450&fit=crop&random=${i}`}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs tracking-wider uppercase text-accent mb-2">Styling</p>
                <h3 className="serif-heading text-2xl mb-2 group-hover:text-accent transition-colors">
                  How to Layer Necklaces Like a Pro
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover the art of creating effortless layered looks with our guide to mixing lengths and styles.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
