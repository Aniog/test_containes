import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-6 md:p-8 flex flex-col"
            >
              <StarRating rating={testimonial.rating} size={14} className="mb-4" />
              <p className="font-serif text-xl md:text-2xl text-base leading-snug mb-6 flex-1">
                “{testimonial.text}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-base">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
