import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: "rev-amelia",
    name: "Amelia R.",
    quote:
      "I wear the Golden Sphere huggies every single day. They still look brand new after months of showers and sunscreen — and they feel like nothing.",
    product: "Golden Sphere Huggies",
    titleId: "rev-amelia-title",
    descId: "rev-amelia-desc",
    imgId: "rev-amelia-img",
    query:
      "close up of a woman wearing chunky gold huggie hoop earrings editorial portrait warm light",
  },
  {
    id: "rev-noor",
    name: "Noor K.",
    quote:
      "Bought the Royal Heirloom set for my sister's birthday. The packaging alone made her cry. The pieces have not left her ears since.",
    product: "Royal Heirloom Set",
    titleId: "rev-noor-title",
    descId: "rev-noor-desc",
    imgId: "rev-noor-img",
    query:
      "woman opening a cream gold jewelry gift box editorial portrait warm light",
  },
  {
    id: "rev-mira",
    name: "Mira T.",
    quote:
      "I have sensitive ears and gave up on jewelry years ago. Velmora is the first brand that has not turned my lobes red. I am converted.",
    product: "Amber Lace Earrings",
    titleId: "rev-mira-title",
    descId: "rev-mira-desc",
    imgId: "rev-mira-img",
    query:
      "close up of a woman wearing delicate gold filigree drop earrings editorial portrait soft light",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="bg-bone py-20 md:py-28 border-y border-hairline"
    >
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow mb-4">Words From the Studio</p>
          <h2
            id="reviews-title"
            className="font-serif text-h2 md:text-[44px] leading-[1.05]"
          >
            <em className="italic font-normal text-champagne-deep">Loved</em>{" "}
            by 12,000+ women
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 text-ink">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-champagne text-champagne"
                  strokeWidth={1.2}
                />
              ))}
            </div>
            <span className="text-small text-muted">4.9 / 5 across 3,200 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="relative bg-ivory p-8 md:p-10 flex flex-col"
            >
              <Quote
                className="w-6 h-6 text-champagne mb-6"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-champagne text-champagne"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
              <p
                id={review.descId}
                className="font-serif text-[20px] md:text-[22px] leading-snug text-ink"
              >
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-hairline">
                <p
                  id={review.titleId}
                  className="text-eyebrow uppercase text-ink font-medium"
                >
                  {review.name}
                </p>
                <p className="text-small text-muted mt-1">
                  Verified · {review.product}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
