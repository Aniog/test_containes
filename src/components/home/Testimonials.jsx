import StarRating from "@/components/StarRating";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is unreal for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    id: 2,
    name: "Priya K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a birthday gift and she literally gasped. The packaging is beautiful too.",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    text: "Finally, demi-fine jewelry that does not turn my ears green. Obsessed with the Amber Lace drops.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-accent font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">Loved by Thousands</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-surface p-6 sm:p-8 border border-velmora-hairline"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-4 text-sm text-velmora-text leading-relaxed italic font-serif">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest font-medium text-velmora-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
