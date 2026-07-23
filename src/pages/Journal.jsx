export default function Journal() {
  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium text-center">
          The Journal
        </h1>
        <p className="mt-3 text-sm text-taupe font-light text-center">
          Stories, styling tips, and behind-the-scenes from Velmora
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-linen overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-taupe">Journal Image</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-taupe">
                  {['Style Guide', 'Behind the Scenes', 'Care Tips', 'Gift Ideas'][i - 1]}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-velvet mt-2 group-hover:text-gold transition-colors">
                  {
                    [
                      'How to Layer Necklaces Like a Pro',
                      'A Day in Our Design Studio',
                      'Caring for Your Gold-Plated Jewelry',
                      'The Art of Gifting Fine Jewelry',
                    ][i - 1]
                  }
                </h3>
                <p className="mt-2 text-sm text-taupe font-light line-clamp-2">
                  Discover the secrets to making your jewelry last a lifetime and styling it
                  for every occasion.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
