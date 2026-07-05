import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=80"
          alt="Jewelry crafting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-page mx-auto px-4 md:px-8 w-full">
            <h1 className="font-serif text-4xl md:text-6xl text-primary font-light">
              Our Story
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-page mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="aspect-[4/5] bg-surface-secondary rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
              alt="Jewelry collection"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs tracking-widest uppercase text-accent font-sans">
              Since 2020
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-light mt-3">
              Demi-Fine Jewelry,
              <br />
              <span className="italic">Thoughtfully Made</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm text-secondary/80 leading-relaxed font-sans">
              <p>
                Velmora was founded on the belief that fine jewelry should be
                accessible without compromise. We bridge the gap between
                costume jewelry and high-end luxury, creating pieces that offer
                the quality and finish of fine jewelry at a fraction of the
                price.
              </p>
              <p>
                Every piece is crafted using premium materials — 18K gold
                plating over sterling silver, ethically sourced stones, and
                meticulous attention to detail. Our designs are created in-house
                and brought to life by skilled artisans who share our commitment
                to quality.
              </p>
              <p>
                We believe jewelry is personal. It marks moments, tells stories,
                and becomes part of who you are. That is why each Velmora piece
                is designed to be worn every day — not saved for special
                occasions.
              </p>
            </div>
            <Link to="/shop" className="btn-primary inline-block mt-8 self-start">
              Shop Our Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}