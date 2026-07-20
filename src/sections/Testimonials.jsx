import StarRating from "@/components/StarRating";

const testimonials = [
  {
    id: 1,
    name: "Emma S.",
    text: "The quality completely exceeded my expectations. I wear my huggies every single day and they still look brand new.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya K.",
    text: "Beautiful packaging and even more beautiful jewelry. It felt like a luxury experience at a price I could afford.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lucia M.",
    text: "Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. Will definitely be ordering again.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="border-t border-stone-200 bg-[#fbfaf9] py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
          Reviews
        </p>
        <h2 className="mt-2 font-serif text-3xl font-light text-stone-900 md:text-4xl">
          Loved by Our Customers
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="border border-stone-200 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-sm"
          >
            <StarRating rating={t.rating} size={14} />
            <p className="mt-5 font-serif text-lg font-light italic leading-relaxed text-stone-800">
              “{t.text}”
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
