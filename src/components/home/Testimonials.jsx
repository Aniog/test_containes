import { StarRating } from "@/components/ui/StarRating";
import { JewelryImage } from "@/components/ui/JewelryImage";

const testimonials = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    text:
      "I bought the Huggies on a whim and have not taken them off in six weeks. The weight, the warmth of the gold — they feel like real jewelry. Because they are.",
    palette: "amber",
  },
  {
    id: "t2",
    name: "Priya S.",
    rating: 5,
    text:
      "Gifted the Royal Heirloom Set to my sister. The packaging alone made her cry. The earrings and pendant inside made her call me the next day.",
    palette: "champagne",
  },
  {
    id: "t3",
    name: "Jules T.",
    rating: 5,
    text:
      "I am picky about plating. Velmora is the rare demi-fine that holds up to daily wear and shower-singing. I keep adding to my collection.",
    palette: "honey",
  },
];

export function Testimonials() {
  return (
    <section className="bg-canvas-soft">
      <div className="container-editorial py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Loved by Thousands</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            What our community says
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="flex flex-col bg-canvas p-8 shadow-soft"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <JewelryImage
                  art="testimonial"
                  palette={t.palette}
                  variant={i}
                  ratio="4/3"
                  className="h-full w-full"
                  alt={`${t.name} wearing Velmora`}
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <StarRating value={t.rating} />
                <span className="text-[10px] uppercase tracking-wider2 text-ink-muted">
                  Verified
                </span>
              </div>
              <blockquote className="mt-5 font-serif text-lg leading-relaxed text-ink">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-wider2 text-ink-secondary">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
