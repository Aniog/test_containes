export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-4">Our Story</p>
          <h1 className="font-serif text-3xl md:text-5xl text-velvet-800 font-light tracking-wide mb-8">
            Beauty in Every Detail
          </h1>
          <div className="prose prose-sand max-w-none text-left">
            <p className="text-sand-600 leading-relaxed mb-6">
              Velmora was born from a simple belief: that fine jewelry should be both extraordinary and accessible. Founded in 2020, we set out to bridge the gap between fast fashion and luxury jewelry — creating demi-fine pieces that feel precious without the inaccessible price tag.
            </p>
            <p className="text-sand-600 leading-relaxed mb-6">
              Each piece is designed in our atelier, where traditional craftsmanship meets modern sensibility. We work exclusively with 18K gold plating over brass and ethically sourced crystals, ensuring every piece is hypoallergenic and made to last.
            </p>
            <p className="text-sand-600 leading-relaxed">
              Sustainability is at the heart of what we do. From our recycled packaging to our made-to-order production model, we're committed to reducing waste and creating jewelry that doesn't cost the earth.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
