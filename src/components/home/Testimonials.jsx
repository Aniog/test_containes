import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 'review-1',
    quote:
      'I wear the Golden Sphere huggies almost every day. They have the weight of real fine jewelry without the price — and the gold has not tarnished at all.',
    name: 'Maya R.',
    product: 'Golden Sphere Huggies',
    titleId: 'review-1-name',
    quoteId: 'review-1-quote',
  },
  {
    id: 'review-2',
    quote:
      'I bought the Royal Heirloom set for my sister. The box, the weight, the finishing — it felt like a gift five times the price.',
    name: 'Andrea T.',
    product: 'Royal Heirloom Set',
    titleId: 'review-2-name',
    quoteId: 'review-2-quote',
  },
  {
    id: 'review-3',
    quote:
      'The Majestic Flora necklace is everything. I get a compliment every single time I wear it. Quiet but special — exactly the vibe.',
    name: 'Lila S.',
    product: 'Majestic Flora Nectar',
    titleId: 'review-3-name',
    quoteId: 'review-3-quote',
  },
];

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" strokeWidth={1.4} fill="currentColor" />
      ))}
    </span>
  );
}

function Review({ review }) {
  return (
    <figure className="flex flex-col h-full">
      <Quote className="w-6 h-6 text-gold" strokeWidth={1.2} />
      <blockquote
        id={review.quoteId}
        className="mt-5 font-serif text-xl md:text-[22px] leading-[1.45] text-ink-soft flex-1"
      >
        “{review.quote}”
      </blockquote>
      <div className="mt-8 pt-6 border-t border-hairline">
        <Stars />
        <p
          id={review.titleId}
          className="mt-3 product-name"
        >
          {review.name}
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-widest-2 text-muted">
          on {review.product}
        </p>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-champagne/40">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="eyebrow">From the people who wear it</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink-soft">
            Worn, kept, loved
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {REVIEWS.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
