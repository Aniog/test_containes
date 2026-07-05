import { Link } from "react-router-dom";

export default function StorySection() {
  return (
    <section className="section-padding">
      <div className="max-w-page mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-surface-secondary overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&q=80"
              alt="Artisan jewelry crafting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="text-xs tracking-widest uppercase text-accent font-sans">
              Our Story
            </span>
            <h2 className="section-heading mt-2">
              Crafted with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm text-secondary/80 leading-relaxed font-sans">
              <p>
                Velmora was born from a simple belief: that exceptional jewelry
                should not require an exceptional budget. Each piece is
                meticulously crafted using 18K gold plating over sterling
                silver, ensuring lasting beauty that transcends seasons.
              </p>
              <p>
                From our atelier to you, every design is a conversation between
                heritage craftsmanship and modern sensibility. We source
                ethically, design thoughtfully, and create pieces meant to be
                worn — not stored away.
              </p>
            </div>
            <Link
              to="/about"
              className="btn-outline inline-block mt-8"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}