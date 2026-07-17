import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container-velmora">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://placehold.co/800x1000/FFF5EB/8B6914?text=Velmora+Craftsmanship&font=playfair-display"
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Velmora was born from a simple belief: jewelry should be treasured,
                not trended. We create demi-fine pieces that bridge the gap between
                precious and accessible.
              </p>
              <p>
                Every piece is 18K gold plated with a thick, durable layer over
                high-quality brass, then sealed with a protective coating for
                everyday wear. Hypoallergenic and nickel-free — made to be lived in.
              </p>
            </div>
            <Link
              to="/about"
              className="btn-outline inline-block mt-8 text-sm"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
