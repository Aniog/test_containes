import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
      <div className="velmora-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-velmora-cocoa shadow-soft">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            data-strk-bg-id="velmora-story-bg-5c18ad"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-5 rounded-[2rem] border border-velmora-ivory/35" />
        </div>
        <div className="lg:pl-12">
          <p className="section-kicker">Velmora notes</p>
          <h2 id="story-title" className="serif-heading mt-4 text-5xl md:text-7xl">
            Gold that feels personal, never precious.
          </h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-cocoa md:text-lg">
            We design demi-fine jewelry with the poise of an heirloom and the
            ease of everyday wear. Each piece is selected for warm tone,
            comfortable proportion, and the quiet sparkle that makes a morning
            routine feel considered.
          </p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-nav text-velmora-bronze transition hover:text-velmora-espresso">
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
