import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">What Our Customers Say</h2>
          <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center p-6 md:p-8 border border-[#E5DED5]">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-[#C5A572] text-[#C5A572]' : 'text-[#E5DED5]'}`} />
                ))}
              </div>
              <p className="font-sans text-sm text-[#6B6560] leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A] font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
