import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";

const REVIEWS = [
  {
    name: "Amelia R.",
    initial: "A",
    rating: 5,
    text: "The Golden Sphere huggies are unreal — heavy, polished, and they haven't tarnished in six months of daily wear. I get asked about them constantly.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Sophia K.",
    initial: "S",
    rating: 5,
    text: "Bought the Flora Nectar necklace for my sister's birthday. The packaging alone made me cry. The necklace itself is even more beautiful in person.",
    product: "Majestic Flora Nectar",
  },
  {
    name: "Jasmine T.",
    initial: "J",
    rating: 5,
    text: "Finally, demi-fine that actually feels fine. The Royal Heirloom set has replaced the fine jewelry I never wore. Worth every penny.",
    product: "Royal Heirloom Set",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Worn & Loved"
          title={<>From the people who wear them</>}
          subtitle="A few words from our community — straight from the review box."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="bg-bone-50 border border-taupe-light/50 p-7 sm:p-8 flex flex-col reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote size={20} strokeWidth={1.2} className="text-gold-300" />
              <blockquote className="mt-4 text-[15px] leading-[1.75] text-espresso/80 flex-1">
                {r.text}
              </blockquote>
              <StarRating value={r.rating} withCount={false} className="mt-6" />
              <figcaption className="mt-4 pt-4 border-t border-taupe-light/50">
                <p className="text-[11px] uppercase tracking-widest2 text-espresso">
                  {r.name[0]}. {r.name.split(" ")[1] ? r.name.split(" ")[1][0] + "." : ""}
                  <span className="text-espresso/40 ml-2">·</span>
                  <span className="ml-2 text-espresso/55 font-normal normal-case tracking-normal">
                    on the {r.product}
                  </span>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
