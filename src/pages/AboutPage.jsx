export default function AboutPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-32 pb-20">
      <div className="section-padding max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-ink text-center mb-4">
          Our Story
        </h1>
        <p className="text-velmora-gold text-xs tracking-widest uppercase text-center mb-12">
          Velmora Fine Jewelry
        </p>

        <div className="aspect-[16/9] bg-velmora-sand/30 flex items-center justify-center mb-12">
          <span className="text-velmora-stone/30 text-xs tracking-wider">
            OUR STUDIO
          </span>
        </div>

        <div className="space-y-6 text-velmora-stone text-sm leading-relaxed">
          <p>
            Velmora was born from a simple belief: that fine jewelry should be
            accessible, not aspirational. Founded in 2022 in New York City, we
            set out to bridge the gap between costume jewelry and traditional
            fine jewelry — creating pieces that feel luxurious but fit into
            real life.
          </p>
          <p>
            Every Velmora piece is crafted in 18K gold-plated brass, using
            ethically sourced materials and hypoallergenic finishes. We work
            with a small team of artisans who bring decades of experience
            to each design, ensuring that every earring, necklace, and huggie
            meets our exacting standards.
          </p>
          <p>
            We design for the woman who wears jewelry every day — not just on
            special occasions. Pieces that move with you, layer effortlessly,
            and become part of your story.
          </p>
          <p className="text-velmora-ink font-medium">
            Thank you for being part of ours.
          </p>
        </div>
      </div>
    </div>
  );
}