import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/data/products";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Loved by Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 md:p-10 text-center flex flex-col items-center"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="font-serif text-lg md:text-xl text-espresso italic my-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-xs uppercase tracking-widest text-stone">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
