import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-velmora-sand">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square md:aspect-auto">
          <img
            src="https://placehold.co/1000x1000/1C1C1C/BFA06B?text=Our+Craftsmanship"
            alt="Jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center section-padding py-16 md:py-20">
          <p className="text-xs tracking-widester uppercase text-velmora-muted mb-4">
            Since 2019
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Designed for the Modern Woman
          </h2>
          <p className="text-velmora-muted leading-relaxed mb-4 max-w-md">
            Velmora was born from a belief that fine jewelry should feel accessible without compromising on quality or design. Each piece is thoughtfully crafted in small batches using 18K gold plating and hypoallergenic materials.
          </p>
          <p className="text-velmora-muted leading-relaxed mb-8 max-w-md">
            We design for the moments that matter — the quiet confidence of everyday wear, the joy of gifting, and the art of self-expression.
          </p>
          <Link
            to="/about"
            className="inline-flex text-xs tracking-widester uppercase border-b border-velmora-ink pb-0.5 self-start hover:border-velmora-gold transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
