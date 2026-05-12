import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const quotes = [
  { text: 'The nitrogen in our DNA, the calcium in our teeth, the iron in our blood — all were forged in the hearts of collapsing stars.', author: 'Carl Sagan' },
  { text: 'Equipped with his five senses, man explores the universe around him and calls the adventure Science.', author: 'Edwin Hubble' },
  { text: 'The universe is under no obligation to make sense to you.', author: 'Neil deGrasse Tyson' },
];

export default function HomeQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="py-20 md:py-28 bg-deep-space border-y border-stardust/30">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-6">
        <div className="w-8 h-px bg-aurora mx-auto" />
        <blockquote className="font-cormorant text-2xl md:text-3xl font-light text-moonlight leading-relaxed italic">
          "{q.text}"
        </blockquote>
        <p className="font-inter text-sm text-comet tracking-wide">— {q.author}</p>
        <div className="w-8 h-px bg-aurora mx-auto" />

        <div className="pt-4">
          <NavLink
            to="/knowledge"
            className="inline-flex items-center gap-2 text-aurora font-inter text-sm hover:text-amber-star transition-colors duration-200"
          >
            Explore the Knowledge Hub <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
