import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} fill="#C9A96E" stroke="#C9A96E" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-obsidian">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-cream">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="flex flex-col p-8 border hover:border-gold/30 transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s`, borderColor: 'rgba(250,247,242,0.1)' }}
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg font-light leading-relaxed italic flex-1 mb-6" style={{color: 'rgba(250,247,242,0.9)'}}>
                "{t.text}"
              </blockquote>
              <p className="font-manrope text-xs tracking-widest uppercase" style={{color: '#C9A96E'}}>
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
