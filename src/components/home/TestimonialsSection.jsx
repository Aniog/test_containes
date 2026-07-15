import StarRating from "@/components/StarRating.jsx";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The quality is incredible for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    name: "Jenna L.",
    text: "Beautiful packaging and even more beautiful jewelry. It felt like opening a luxury gift — to myself.",
  },
  {
    name: "Amara K.",
    text: "Finally, gold jewelry that doesn't irritate my sensitive ears. Chic, lightweight, and so flattering.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cream-light p-8 md:p-10 text-center border border-ink/5"
            >
              <StarRating rating={5} size={14} className="justify-center mb-5" />
              <p className="font-serif text-xl md:text-2xl italic leading-snug mb-6">
                "{t.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-ink-muted font-semibold">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
