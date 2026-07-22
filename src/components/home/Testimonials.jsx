import Container from "@/components/ui/Container";
import Stars from "@/components/ui/Stars";

const reviews = [
  {
    id: "rev-1",
    name: "Amelia R.",
    location: "Brooklyn, NY",
    quote:
      "I wear the Golden Sphere Huggies every single day. They feel substantial without being heavy — and they go with everything I own.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "rev-2",
    name: "Sara K.",
    location: "London, UK",
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made me cry. She hasn't taken the necklace off in two months.",
    product: "Royal Heirloom Set",
  },
  {
    id: "rev-3",
    name: "Priya M.",
    location: "Toronto, ON",
    quote:
      "Finally — demi-fine that doesn't look or feel cheap. The Majestic Flora is even more beautiful in person. Already eyeing my next piece.",
    product: "Majestic Flora Necklace",
  },
];

function Quote({ review }) {
  return (
    <article className="flex flex-col gap-5 p-8 md:p-10 bg-ivory border border-hairline">
      <Stars value={5} count={undefined} size={14} />
      <blockquote className="font-serif text-xl md:text-2xl text-espresso leading-snug">
        "{review.quote}"
      </blockquote>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-hairline">
        <div className="w-9 h-9 rounded-full bg-brass-soft/30 border border-brass/30 flex items-center justify-center text-espresso label text-[10px]">
          {review.name[0]}
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-espresso font-medium">{review.name}</span>
          <span className="text-xs text-taupe font-light">{review.location}</span>
        </div>
      </div>
      <p className="label text-taupe text-[10px] mt-1">on the {review.product}</p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <Container>
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="eyebrow">Loved by 12,000+</span>
          <h2 className="display-2 text-espresso">From the people who wear them</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r) => (
            <Quote key={r.id} review={r} />
          ))}
        </div>
      </Container>
    </section>
  );
}
