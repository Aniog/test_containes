import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#6E6862] mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F5F0EB] rounded p-6 md:p-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="text-sm md:text-[15px] text-[#1A1816] leading-relaxed mt-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-[0.1em] uppercase text-[#6E6862] mt-6 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
