import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col gap-5 p-8 bg-velmora-ivory border border-velmora-blush/50">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-velmora-champagne text-velmora-champagne" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-cormorant text-lg font-light text-velmora-obsidian leading-relaxed italic">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-velmora-blush/50">
        <div className="w-8 h-8 rounded-full bg-velmora-blush flex items-center justify-center">
          <span className="font-cormorant text-sm text-velmora-stone font-medium">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">
          {testimonial.name}
        </span>
        <span className="ml-auto font-manrope text-[10px] text-velmora-stone/50 uppercase tracking-widest">
          Verified Buyer
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-3">
            What They Say
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-velmora-blush pt-12">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '12,000+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-cormorant text-4xl md:text-5xl font-light text-velmora-champagne mb-2">
                {stat.value}
              </p>
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
