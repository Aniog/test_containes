export default function About() {
  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-10" />

        <div className="space-y-6 text-taupe leading-relaxed font-light text-sm md:text-base">
          <p>
            Velmora was founded on a simple, powerful belief: jewelry should make you feel
            extraordinary every single day. Not just on special occasions, but in the quiet
            moments — your morning coffee, a walk through the city, a dinner with someone you love.
          </p>
          <p>
            We specialize in demi-fine jewelry: pieces crafted with 18K gold plating, premium
            crystals, and hypoallergenic materials that look and feel like luxury, at a price
            point that feels accessible. Every design is created in small batches with intention,
            quality, and timeless elegance.
          </p>
          <p>
            Our collections are inspired by the women who wear them — confident, creative,
            and unapologetically themselves. Whether you are building your jewelry wardrobe
            piece by piece or searching for the perfect gift, we are here to help you find
            something truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="aspect-[4/3] bg-linen flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-widest text-taupe">Studio</span>
          </div>
          <div className="aspect-[4/3] bg-linen flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-widest text-taupe">Craft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
