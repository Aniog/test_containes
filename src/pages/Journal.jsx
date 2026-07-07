export default function Journal() {
  return (
    <div className="bg-cream min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-brand text-gold-dark font-sans mb-4 text-center">Journal</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink mb-12 text-center">Style Notes</h1>

        <div className="space-y-12">
          <article className="border-b border-sand pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">How to Build an Ear Stack</h2>
            <p className="text-sm text-taupe font-sans mb-4">July 2026</p>
            <p className="font-sans text-ink/70 leading-relaxed">
              Start with a clean huggie as your anchor, add a delicate stud, and finish with an ear cuff for dimension. The key is balance: mix textures, not sizes.
            </p>
          </article>

          <article className="border-b border-sand pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">Caring for Gold-Plated Jewelry</h2>
            <p className="text-sm text-taupe font-sans mb-4">June 2026</p>
            <p className="font-sans text-ink/70 leading-relaxed">
              Store pieces separately, keep them dry, and wipe them down after each wear. A little care goes a long way in keeping your jewelry luminous for years.
            </p>
          </article>

          <article className="border-b border-sand pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">The Art of Gifting Jewelry</h2>
            <p className="text-sm text-taupe font-sans mb-4">May 2026</p>
            <p className="font-sans text-ink/70 leading-relaxed">
              Jewelry gifts are most meaningful when they match the recipient’s everyday style. Choose something they can wear daily, not just on special occasions.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
