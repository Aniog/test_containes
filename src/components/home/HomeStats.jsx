import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const facts = [
  { number: '200B+', label: 'Stars in the Milky Way' },
  { number: '13.8B', label: 'Years since the Big Bang' },
  { number: '299,792', label: 'km/s — Speed of Light' },
  { number: '~2T', label: 'Galaxies in the Observable Universe' },
];

export default function HomeStats() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-surface border-y border-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-24">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-light text-amber mb-2 glow-amber">
                {fact.number}
              </div>
              <div className="text-xs text-muted tracking-wide leading-snug">
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-2xl border border-subtle bg-nebula overflow-hidden p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
          <div className="relative z-10">
            <MessageCircle className="w-8 h-8 text-amber mx-auto mb-5" />
            <h2 className="font-serif font-light text-2xl md:text-3xl text-star mb-4 tracking-wide">
              Have a Question for Your Teacher?
            </h2>
            <p className="text-muted text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Curiosity is the engine of discovery. Submit your questions and feedback — your teacher reads every message.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber text-cosmos font-semibold text-sm rounded-full hover:bg-amber/90 transition-all duration-300 hover:shadow-xl hover:shadow-amber/20"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
