import StarRating from "@/components/ui/StarRating";
import SectionHeader from "@/components/ui/SectionHeader";

const reviews = [
  {
    id: 1,
    name: "Maya R.",
    quote:
      "The Golden Sphere Huggies are the first pair I've worn to sleep, the shower, the gym — they still look brand new.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sienna L.",
    quote:
      "Beautifully packaged, the right weight, the right finish. Velmora has earned a customer for life.",
    rating: 5,
  },
  {
    id: 3,
    name: "Camille B.",
    quote:
      "I bought the Royal Heirloom set for my sister — she texted before she'd even opened the box.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-ivory-100">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="What people are saying"
          title="A quiet kind of love"
          subtitle="Notes from customers who wear Velmora daily, gift it often, and come back."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.id}
              className="bg-ivory-50 border hairline-dark p-7 sm:p-9 flex flex-col card-hover"
            >
              <StarRating value={r.rating} size={14} />
              <blockquote className="mt-5 font-serif text-xl sm:text-[22px] leading-snug text-espresso-200 flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t hairline-dark text-[11px] tracking-widest2 uppercase text-muted">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
