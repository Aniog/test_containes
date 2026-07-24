import { testimonials } from "@/data/products";
import StarRating from "@/components/StarRating";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-stone/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-6 md:p-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 text-sm md:text-base leading-relaxed text-charcoal/80 flex-1">
                "{t.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-taupe">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
