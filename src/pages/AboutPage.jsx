export default function AboutPage() {
  return (
    <div className="bg-velmora-cream pt-24 md:pt-28 min-h-screen">
      <div className="container-wide section-padding py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink mb-8">About Velmora</h1>

          <div className="space-y-6 text-sm text-velmora-charcoal/80 leading-relaxed">
            <p>
              Velmora was founded on a simple belief: that fine jewelry should be part of your everyday life, not locked away for special occasions. We create demi-fine pieces that bridge the gap between costume and luxury — jewelry that feels precious but is made to be worn.
            </p>
            <p>
              Every Velmora piece is crafted in 18K gold plate over brass or sterling silver, using ethically sourced materials. Our designs are inspired by the interplay of light and texture, the organic forms found in nature, and the quiet confidence of the women who wear them.
            </p>
            <p>
              We believe in transparency, quality, and accessibility. No markups for the sake of markup. Just beautiful, well-made jewelry at a fair price — because you deserve pieces that last.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-velmora-stone">
            <div>
              <h3 className="font-serif text-xl text-velmora-ink mb-2">Ethically Made</h3>
              <p className="text-xs text-velmora-charcoal/70">All materials are responsibly sourced. We work only with suppliers who meet our ethical standards.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-ink mb-2">18K Gold Plate</h3>
              <p className="text-xs text-velmora-charcoal/70">Thick, high-quality gold plating over brass or sterling silver for lasting wear.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-ink mb-2">Hypoallergenic</h3>
              <p className="text-xs text-velmora-charcoal/70">Nickel-free and safe for sensitive skin. Every piece is tested for comfort and safety.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}