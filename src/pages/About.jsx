export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ backgroundColor: 'var(--velmora-bg)' }}>
      <div className="velmora-container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase mb-4 text-center" style={{ color: 'var(--velmora-accent)' }}>
          Our Story
        </p>
        <h1 className="velmora-heading text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--velmora-text)' }}>
          The Velmora Story
        </h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--velmora-text-muted)' }}>
          <p>
            Velmora was born from a simple frustration: why does beautiful jewelry have to cost a fortune? We believe that everyone deserves to feel adorned, to have pieces that catch the light and catch the eye — without the luxury markup.
          </p>
          <p>
            Our founder, a former fine jewelry buyer, spent years studying what makes jewelry truly special. It wasn't the price tag. It was the design, the craftsmanship, the way a piece made you feel when you put it on.
          </p>
          <p>
            So we set out to create demi-fine jewelry that bridges the gap between costume and couture. Every Velmora piece is 18K gold plated over brass, hypoallergenic, and designed to be worn every single day.
          </p>
          <p>
            We work with skilled artisans who share our commitment to quality and sustainability. Our packaging is recyclable, our processes are responsible, and our prices are honest.
          </p>
          <p>
            Because jewelry shouldn't sit in a box waiting for a special occasion. The special occasion is today.
          </p>
        </div>
      </div>
    </div>
  );
}
