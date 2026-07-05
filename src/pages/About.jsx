export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Velmora craftsmanship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            Born from a Passion for Beauty
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
            More Than Jewelry
          </h2>
          <div className="space-y-6 text-[#1a1a1a]/70 leading-relaxed text-lg">
            <p>
              Velmora was founded with a simple belief: every woman deserves to feel radiant. 
              We create demi-fine jewelry that bridges the gap between fashion and fine jewelry, 
              offering exceptional quality at prices that make sense.
            </p>
            <p>
              Our name, inspired by the Latin word for "more desired," reflects our commitment 
              to creating pieces that become treasured companions through life's moments—big and small.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=200&q=80"
                  alt="Quality"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">Exceptional Quality</h3>
              <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                Each piece features 18K gold plating over hypoallergenic materials, 
                ensuring both beauty and comfort.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80"
                  alt="Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">Thoughtful Design</h3>
              <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                Our designs balance timeless elegance with modern sensibility, 
                creating pieces that transcend seasons.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80"
                  alt="Value"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">True Value</h3>
              <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                Luxury shouldn't require compromise. We believe in accessible pricing 
                without sacrificing craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-white mb-4">
            Ready to Discover Velmora?
          </h2>
          <p className="text-white/60 mb-8">
            Explore our collection of handcrafted pieces designed for the modern woman.
          </p>
          <a
            href="/shop"
            className="inline-block px-10 py-4 bg-[#d4af37] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>
    </main>
  );
}
