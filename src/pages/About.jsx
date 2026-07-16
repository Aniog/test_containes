export default function About() {
  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            About Us
          </p>
          <h1 className="font-serif text-heading-lg text-warm-black">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="aspect-[4/5] bg-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&h=900&fit=crop"
              alt="Velmora artisan"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-heading-md text-warm-black mb-6">
              Designed for the <span className="italic text-gold-dark">Everyday Extraordinary</span>
            </h2>
            <p className="text-muted-text leading-relaxed mb-4">
              Velmora was founded with a singular mission: to create demi-fine jewelry that
              bridges the gap between costume and fine jewelry. We believe that luxury should
              be part of your daily life, not reserved for special occasions.
            </p>
            <p className="text-muted-text leading-relaxed mb-4">
              Every piece in our collection is crafted using 18K gold plating over
              sterling silver, ensuring lasting quality and a beautiful finish that
              stands the test of time. Our designs draw inspiration from art, architecture,
              and the natural world.
            </p>
            <p className="text-muted-text leading-relaxed">
              We are committed to ethical sourcing, sustainable practices, and creating
              jewelry that makes you feel like the best version of yourself — every single day.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Ethically Sourced', desc: 'Every material is responsibly sourced from trusted suppliers who share our commitment to ethical practices.' },
            { title: 'Crafted with Care', desc: 'Each piece is designed in-house and crafted by skilled artisans who bring decades of expertise to their work.' },
            { title: 'Built to Last', desc: 'We use 18K gold plating over sterling silver, creating pieces that maintain their beauty through everyday wear.' },
          ].map(val => (
            <div key={val.title} className="text-center p-8">
              <h3 className="font-serif text-heading-sm text-warm-black mb-3">{val.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
