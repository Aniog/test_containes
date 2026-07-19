import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const testimonials = [
  {
    name: "Emily S.",
    text: "The quality is stunning for the price. I get compliments every time I wear my Golden Sphere Huggies.",
  },
  {
    name: "Sophia L.",
    text: "Bought the Royal Heirloom Set as a gift and ended up keeping it for myself. Packaging feels luxurious.",
  },
  {
    name: "Maya T.",
    text: "Finally, demi-fine jewelry that doesn't tarnish after a week. Velmora is my new go-to.",
  },
];

const ugc = [
  { id: "ugc-1", caption: "Everyday gold", user: "@jessicarose" },
  { id: "ugc-2", caption: "Gift-ready layers", user: "@amanda.k" },
  { id: "ugc-3", caption: "Ear stack magic", user: "@lianastyles" },
  { id: "ugc-4", caption: "Quiet luxury", user: "@natatjewels" },
  { id: "ugc-5", caption: "Self-love treat", user: "@elenav" },
];

export default function Home() {
  const bestSellersTitleId = "bestsellers-title";
  const categorySectionTitleId = "category-section-title";
  const reelTitleId = "reel-title";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-velmora-espresso"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-transparent to-velmora-espresso/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <p className="text-xs uppercase tracking-widest text-white/80">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="mt-4 font-serif text-5xl font-light leading-[1.1] md:text-7xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-white/90 md:text-lg"
            >
              Timeless earrings, necklaces, and huggies in 18k gold plate —
              designed for everyday elegance and the moments that matter.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block bg-velmora-gold px-8 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-dark"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-velmora-linen bg-velmora-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-3 text-center text-[10px] uppercase tracking-widest text-velmora-mocha md:flex-row md:gap-10 md:py-4">
          <span>Free Worldwide Shipping</span>
          <span className="hidden h-3 w-px bg-velmora-linen md:block" />
          <span>30-Day Returns</span>
          <span className="hidden h-3 w-px bg-velmora-linen md:block" />
          <span>18K Gold Plated</span>
          <span className="hidden h-3 w-px bg-velmora-linen md:block" />
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-velmora-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-xs uppercase tracking-widest text-velmora-taupe">
              Most Loved
            </p>
            <h2
              id={bestSellersTitleId}
              className="mt-2 font-serif text-3xl text-velmora-espresso md:text-4xl"
            >
              Bestsellers
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {products.slice(0, 5).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                sectionTitleId={bestSellersTitleId}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border-b border-velmora-espresso pb-1 text-xs uppercase tracking-widest text-velmora-espresso transition-colors hover:text-velmora-gold hover:border-velmora-gold"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reels */}
      <section className="bg-velmora-champagne py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 flex items-end justify-between md:mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-velmora-taupe">
                @velmorafinejewelry
              </p>
              <h2
                id={reelTitleId}
                className="mt-2 font-serif text-3xl text-velmora-espresso md:text-4xl"
              >
                Styled by You
              </h2>
            </div>
            <a
              href="#"
              className="hidden text-xs uppercase tracking-widest text-velmora-taupe underline-offset-4 hover:text-velmora-gold hover:underline md:block"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-8">
          {ugc.map((item, index) => (
            <div
              key={item.id}
              className="relative w-[180px] flex-shrink-0 snap-start md:w-[240px]"
            >
              <div className="aspect-[9/16] overflow-hidden bg-velmora-espresso">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${index}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent p-4 text-white">
                <p
                  id={`ugc-caption-${index}`}
                  className="font-serif text-lg italic"
                >
                  {item.caption}
                </p>
                <p className="mt-1 text-xs text-white/80">{item.user}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-velmora-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-xs uppercase tracking-widest text-velmora-taupe">
              Explore
            </p>
            <h2
              id={categorySectionTitleId}
              className="mt-2 font-serif text-3xl text-velmora-espresso md:text-4xl"
            >
              Shop by Category
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {categories.slice(0, 3).map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-velmora-espresso"
              >
                <div
                  data-strk-bg-id={`category-bg-${category.id}`}
                  data-strk-bg={`[category-label-${index}] gold jewelry`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-espresso/20 transition-colors group-hover:bg-velmora-espresso/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-label-${index}`}
                    className="border border-white/40 bg-white/10 px-6 py-3 text-center text-sm uppercase tracking-widest text-white backdrop-blur-sm transition-all group-hover:bg-white/20"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section id="story" className="bg-velmora-champagne">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square bg-velmora-espresso md:aspect-auto">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[brand-story-title] [brand-story-text] gold jewelry atelier"
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
              <p className="text-xs uppercase tracking-widest text-velmora-taupe">
                Our Philosophy
              </p>
              <h2
                id="brand-story-title"
                className="mt-3 font-serif text-3xl leading-tight text-velmora-espresso md:text-4xl"
              >
                Designed with Intention, Worn with Confidence
              </h2>
              <p
                id="brand-story-text"
                className="mt-6 text-sm leading-relaxed text-velmora-mocha md:text-base"
              >
                Velmora was born from a simple belief: luxury should feel
                personal, not out of reach. Each piece is thoughtfully designed
                in small batches using 18k gold plating and hypoallergenic
                materials, so you can wear them from morning coffee to midnight
                celebrations.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 self-start border-b border-velmora-espresso pb-1 text-xs uppercase tracking-widest text-velmora-espresso transition-colors hover:text-velmora-gold hover:border-velmora-gold"
              >
                Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-velmora-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-xs uppercase tracking-widest text-velmora-taupe">
              Reviews
            </p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-espresso md:text-4xl">
              Loved by Our Community
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-velmora-linen bg-white p-8 text-center transition-shadow hover:shadow-sm"
              >
                <div className="flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-velmora-gold text-velmora-gold"
                    />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-velmora-mocha md:text-base">
                  “{t.text}”
                </p>
                <p className="mt-5 text-xs font-medium uppercase tracking-widest text-velmora-espresso">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-gold py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Join for 10% Off
          </h2>
          <p className="mt-3 text-sm text-white/90 md:text-base">
            Subscribe for exclusive early access, styling notes, and 10% off
            your first order.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 md:flex-row md:gap-0"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-b border-white/50 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:bg-white/20 focus:outline-none md:py-4"
            />
            <button
              type="submit"
              className="bg-velmora-espresso px-8 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-velmora-cream hover:text-velmora-espresso md:py-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
