import { useRef } from 'react';
import { useStrkImages } from '@/hooks/useStrkImages';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();
  const [statsRef, statsRevealed] = useScrollReveal();
  useStrkImages(containerRef);

  return (
    <div ref={containerRef} className="bg-brand-cream min-h-screen pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          ref={revealRef}
          className={`text-center mb-12 md:mb-16 scroll-reveal animate-reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-brand-charcoal">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className={`relative aspect-[16/9] overflow-hidden mb-12 scroll-reveal animate-reveal-scale ${revealed ? 'revealed' : ''}`}>
          <div
            data-strk-bg-id="about-hero-bg-a1b2c3"
            data-strk-bg="[about-subtitle] [about-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            className="w-full h-full"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 id="about-title" className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal mb-6">
            Jewelry That Lives With You
          </h2>
          <p id="about-subtitle" className="text-base text-brand-warm-gray font-sans leading-relaxed mb-6">
            Velmora was founded on a simple conviction: that beautiful, well-crafted jewelry should be accessible to everyone. We saw a gap between fast fashion pieces that tarnish in weeks and fine jewelry that costs thousands — and we set out to fill it.
          </p>
          <p className="text-base text-brand-warm-gray font-sans leading-relaxed mb-6">
            Every Velmora piece is designed in our studio with an obsessive attention to detail. We use 18K gold plating over premium brass, ensuring each piece has the weight, luster, and durability of solid gold — at a fraction of the price.
          </p>
          <p className="text-base text-brand-warm-gray font-sans leading-relaxed mb-6">
            Our materials are rigorously tested for durability and comfort. Every piece is hypoallergenic, nickel-free, and designed to be worn every day — not saved for special occasions.
          </p>

          <div
            ref={statsRef}
            className={`border-t border-brand-sand pt-8 mt-8 scroll-reveal animate-reveal-up ${statsRevealed ? 'revealed' : ''}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-serif text-3xl text-brand-gold">18K</p>
                <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mt-2">Gold Plated</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-brand-gold">100%</p>
                <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mt-2">Hypoallergenic</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-brand-gold">30</p>
                <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mt-2">Day Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
