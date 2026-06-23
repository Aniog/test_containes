import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BrandStatement() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-36 px-6 bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto text-center reveal">
        <div className="w-8 h-px bg-gold mx-auto mb-12" />
        <blockquote
          className="font-serif text-2xl md:text-4xl text-ink font-light leading-relaxed md:leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.7 }}
        >
          "Made for the moments between midnight and morning.
          <br className="hidden md:block" />
          {' '}For the quiet rituals that belong only to you."
        </blockquote>
        <div className="w-8 h-px bg-gold mx-auto mt-12" />
      </div>
    </section>
  );
}
