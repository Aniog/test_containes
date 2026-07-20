import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Kind Words</p>
          <h2 className="serif-heading text-3xl lg:text-4xl">What Our Customers Say</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(review => (
            <div key={review.id} className="text-center">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="serif-heading text-lg lg:text-xl italic leading-relaxed mb-6 text-foreground/80">
                "{review.text}"
              </p>
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
