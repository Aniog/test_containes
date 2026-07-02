import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: 'Accessible Luxury',
      description: 'Premium materials and craftsmanship at prices that make sense. Every woman deserves to feel adorned.',
    },
    {
      title: 'Ethical Craft',
      description: 'Responsibly sourced materials, fair labor practices, and sustainable packaging. Beauty without compromise.',
    },
    {
      title: 'Designed to Last',
      description: 'Tarnish-resistant finishes, surgical-grade bases, and quality control at every step. This is not fast fashion.',
    },
    {
      title: 'Joyful Gifting',
      description: 'Every piece arrives in our signature gift box, ready to give — or to keep. Because unboxing should feel special.',
    },
  ];

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&h=900&fit=crop"
          alt="Velmora artisan workshop"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-obsidian-950/60" />
        <div className="relative z-10 text-center px-5">
          <h1 id="about-hero-title" className="font-serif text-display text-cream-50 mb-4">Our Story</h1>
          <p className="font-sans text-base text-obsidian-300 max-w-lg mx-auto">
            Born from the belief that fine jewelry should be accessible, not aspirational.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <p className="section-subtitle mb-4">Our Mission</p>
        <h2 className="font-serif text-heading mb-6">Jewelry for Every Day, Every Moment</h2>
        <div className="space-y-4 text-obsidian-300 leading-relaxed">
          <p>
            Velmora started in a small studio in 2021, with one question: why does beautiful jewelry
            have to cost a fortune? We set out to bridge the gap between costume jewelry that tarnishes
            after a week and luxury pieces that require a second mortgage.
          </p>
          <p>
            Our answer: demi-fine jewelry crafted with 18K gold plating over surgical-grade stainless
            steel and brass. The look and feel of fine jewelry, at a fraction of the cost, built to
            actually last.
          </p>
          <p>
            Today, Velmora pieces are worn by over 50,000 women in 30+ countries. From the ear cuff
            that started it all to our curated gift sets, every piece is designed to make you feel
            effortlessly put-together — whether you're heading to a boardroom or brunch.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-obsidian-900/40 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <h2 className="font-serif text-heading text-center mb-12 md:mb-16">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold-400 text-sm font-serif">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cream-100 mb-2">{value.title}</h3>
                  <p className="text-sm text-obsidian-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <p className="section-subtitle mb-4">Shipping & Returns</p>
        <h2 className="font-serif text-heading mb-8">Hassle-Free, Always</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-serif text-lg text-cream-200 mb-2">Free Shipping</h3>
            <p className="text-sm text-obsidian-400 leading-relaxed">
              We ship worldwide at no cost. Orders are dispatched within 24 hours and arrive in 5–10 business days.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-cream-200 mb-2">30-Day Returns</h3>
            <p className="text-sm text-obsidian-400 leading-relaxed">
              Not in love? Return any unworn piece within 30 days for a full refund. No questions asked.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-cream-200 mb-2">2-Year Warranty</h3>
            <p className="text-sm text-obsidian-400 leading-relaxed">
              Every piece comes with a 2-year warranty against manufacturing defects. We stand behind our craft.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
