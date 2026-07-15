export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center text-offWhite px-4">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Our Story</h1>
          <p className="text-lg text-offWhite/80 max-w-2xl mx-auto">
            Crafting jewelry that becomes part of your story since 2018
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-warmGray leading-relaxed">
            <p className="text-xl font-serif text-charcoal">
              Velmora was founded with a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromising on quality or breaking the bank.
            </p>
            
            <p>
              Our name, derived from the Latin "velum" (veil) and "mor" (to linger), reflects our philosophy — creating pieces that linger in memory, that become treasured companions through life's moments big and small.
            </p>

            <p>
              We specialize in demi-fine jewelry, that sweet spot between fashion and fine jewelry. Each piece is crafted with 18K gold plating over quality brass, designed to withstand daily wear while maintaining its beautiful luster.
            </p>

            <p>
              Our design aesthetic embraces quiet luxury — pieces that speak softly but say so much. We believe in understated elegance, in jewelry that complements rather than overwhelms, that becomes a natural extension of your personal style.
            </p>

            <p>
              Every Velmora piece is designed in our studio and crafted with care by skilled artisans. We source only the finest materials and maintain strict quality standards because we believe you deserve jewelry that's built to last.
            </p>

            <p>
              Whether you're treating yourself or finding the perfect gift, we hope our jewelry brings you joy every time you wear it. That's what drives everything we do at Velmora.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <span className="font-serif text-4xl text-gold">18K</span>
              <p className="mt-2 text-sm uppercase tracking-widest">Gold Plated</p>
            </div>
            <div className="text-center p-6">
              <span className="font-serif text-4xl text-gold">30</span>
              <p className="mt-2 text-sm uppercase tracking-widest">Day Returns</p>
            </div>
            <div className="text-center p-6">
              <span className="font-serif text-4xl text-gold">Free</span>
              <p className="mt-2 text-sm uppercase tracking-widest">Worldwide Shipping</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}