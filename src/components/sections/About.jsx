import React from 'react'

export default function About() {
  const cards = [
    {
      id: 'cellular',
      title: 'Cellular Worlds',
      desc: 'Discover the intricate organelles and complex protein structures that make up the fundamental building blocks of all living things.',
      imgId: 'about-cell-123'
    },
    {
      id: 'bacterial',
      title: 'Bacterial Landscapes',
      desc: 'Explore the vast and colorful colonies of microorganisms that thrive in every environment on our planet, unseen by the naked eye.',
      imgId: 'about-bact-456'
    },
    {
      id: 'crystals',
      title: 'Crystalline Formations',
      desc: 'Marvel at the perfectly ordered geometry and stunning light refraction of microscopic crystals and minerals.',
      imgId: 'about-cryst-789'
    }
  ]

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Beyond Ordinary Sight</h2>
        <p id="about-subtitle" className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Through the lens of powerful electron microscopes, we can reveal the astonishing complexity of biology and chemistry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div key={card.id} className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group">
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={card.imgId}
                data-strk-img={`[about-card-${card.id}-desc] [about-card-${card.id}-title] microscopic`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              />
            </div>
            <div className="p-6">
              <h3 id={`about-card-${card.id}-title`} className="text-xl font-semibold mb-3 text-card-foreground">
                {card.title}
              </h3>
              <p id={`about-card-${card.id}-desc`} className="text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
