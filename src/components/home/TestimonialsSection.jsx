import { StarRating } from "@/components/ui/StarRating";

const testimonials = [
  {
    id: "t1",
    name: "Sarah M.",
    rating: 5,
    text: "The quality far exceeded the price. My huggies still look brand new after months of daily wear.",
  },
  {
    id: "t2",
    name: "Jenna L.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a birthday gift and she cried. The packaging is just as beautiful.",
  },
  {
    id: "t3",
    name: "Priya K.",
    rating: 5,
    text: "Quiet luxury exactly as described. I get compliments every time I wear my Amber Lace earrings.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-widest text-velmora-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">
            Loved by Real Women
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-white border border-velmora-hairline p-6 md:p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <StarRating rating={t.rating} size={16} />
              </div>
              <p className="text-velmora-base leading-relaxed mb-5 font-serif text-lg md:text-xl">
                “{t.text}”
              </p>
              <p className="text-xs uppercase tracking-widest text-velmora-taupe">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
