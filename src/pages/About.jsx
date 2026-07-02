import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-screen bg-cream pt-24 md:pt-28 pb-20">
      <div className="container-main max-w-4xl">
        <p className="font-sans text-[11px] uppercase tracking-widest text-stone mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink uppercase tracking-wide leading-tight mb-8">
          Crafted to be Treasured
        </h1>

        <div className="space-y-6 text-ink/80 font-sans text-base md:text-lg leading-relaxed">
          <p>
            Velmora was born from a simple belief: fine jewelry should feel attainable, personal, and made to last.
            We design demi-fine pieces for the modern woman — pieces that move effortlessly from morning coffee to
            evening plans, from quiet moments to celebrations worth remembering.
          </p>
          <p>
            Every collection begins with a mood. A shade of gold in late-afternoon light. The curve of an earring
            catching a breeze. The delicate weight of a chain against skin. We translate those impressions into
            wearable silhouettes using 18K gold plating, surgical steel posts, and hand-finished details.
          </p>
          <p>
            Our pieces are made for layering, gifting, and collecting — small luxuries that become part of your
            everyday ritual. We hope you find something here that feels like it was made just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-cream-muted">
          {[
            { title: 'Thoughtful Materials', text: '18K gold-plated finishes, hypoallergenic posts, and nickel-free metals chosen for sensitive skin.' },
            { title: 'Designed in House', text: 'Each silhouette is sketched, refined, and sampled by our studio before it reaches you.' },
            { title: 'Made to Last', text: 'Protective plating and care guidance help your pieces keep their warmth for years.' },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg uppercase tracking-widest text-ink mb-3">{item.title}</h3>
              <p className="font-sans text-sm text-stone leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </main>
  )
}
