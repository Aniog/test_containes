import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, RotateCcw, ShieldCheck, Leaf } from "lucide-react";
import { getBestsellers } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const bestsellers = getBestsellers();

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

const ugcSlides = [
  { caption: "Golden hour glow ✨", user: "@sarah.m" },
  { caption: "My everyday stack", user: "@jessicak" },
  { caption: "Date night ready", user: "@emilyr" },
  { caption: "Layering season", user: "@anako" },
  { caption: "Minimal but make it luxe", user: "@taylored" },
  { caption: "Gifted myself today", user: "@lina.b" },
];

const categories = [
  { name: "Earrings", id: "earrings" },
  { name: "Necklaces", id: "necklaces" },
  { name: "Huggies", id: "huggies" },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "The quality is incredible for the price. I've worn my huggies every day for three months and they still look brand new.",
    rating: 5,
  },
  {
    name: "Jessica K.",
    text: "Bought the Royal Heirloom Set as a birthday gift and she literally gasped when she opened it. The packaging is beautiful too.",
    rating: 5,
  },
  {
    name: "Emily R.",
    text: "Finally, demi-fine jewelry that doesn't turn my ears green. These are my new go-to for both work and weekends.",
    rating: 5,
  },
];

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
    };
    const onMouseUp = () => {
      isDown = false;
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://placehold.co/1600x1000/2A2420/B88A4D?text=Velmora+Hero+Image"
            alt="Velmora Fine Jewelry"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-dark/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-widest-xl text-white/80">
            New Collection
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p className="mt-5 max-w-md font-sans text-sm font-light leading-relaxed text-white/80 md:text-base">
            Demi-fine jewelry designed for the modern woman. Ethically made,
            beautifully priced, built to last.
          </p>
          <Link
            to="/shop"
            className="mt-8 bg-velmora-gold px-8 py-3.5 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-light"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-velmora-hairline bg-velmora-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-4 md:justify-between md:px-8">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-velmora-muted">
              <Icon size={16} strokeWidth={1.5} />
              <span className="font-sans text-[11px] font-medium uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
              Most Loved
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-velmora-dark md:text-3xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group hidden items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark transition-colors hover:text-velmora-gold md:flex"
          >
            View All
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/shop"
            className="flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* UGC Reels */}
      <section className="bg-velmora-warm-gray py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
                Real Moments
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-velmora-dark md:text-3xl">
                Styled by You
              </h2>
            </div>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex cursor-grab gap-4 overflow-x-auto px-5 pb-2 md:px-8 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {ugcSlides.map((slide, i) => (
            <div
              key={i}
              className="relative w-[180px] flex-shrink-0 overflow-hidden rounded-sm md:w-[220px]"
            >
              <div className="aspect-[9/16] bg-velmora-dark">
                <img
                  src={`https://placehold.co/440x780/2A2420/B88A4D?text=UGC+${i + 1}`}
                  alt={slide.caption}
                  className="h-full w-full object-cover opacity-90"
                  draggable={false}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-velmora-dark/80 to-transparent p-4 pt-12">
                <p className="font-serif text-sm italic text-white/90">
                  {slide.caption}
                </p>
                <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-widest text-white/60">
                  {slide.user}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10">
          <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
            Browse
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium text-velmora-dark md:text-3xl">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-warm-gray"
            >
              <img
                src={`https://placehold.co/800x1000/2A2420/B88A4D?text=${encodeURIComponent(cat.name)}`}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-dark/20 transition-colors group-hover:bg-velmora-dark/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl font-medium uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 md:hidden">
                <span className="font-serif text-lg font-medium uppercase tracking-widest text-white">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-velmora-warm-gray">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden md:aspect-auto md:h-full">
              <img
                src="https://placehold.co/900x1100/2A2420/B88A4D?text=Our+Story"
                alt="Velmora craft"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-14 md:px-14 md:py-20">
              <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
                Since 2019
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-snug text-velmora-dark md:text-4xl">
                Jewelry That Feels Like You
              </h2>
              <p className="mt-5 font-sans text-sm leading-relaxed text-velmora-muted md:text-base">
                Velmora was born from a simple belief: fine craftsmanship should
                not be reserved for the few. We partner with small ateliers
                across Europe and Asia to create demi-fine pieces using
                responsibly sourced materials — 18K gold plating, surgical steel
                posts, and genuine freshwater pearls.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-velmora-muted md:text-base">
                Every design is sketched in-house, refined over months, and
                produced in limited quantities. The result is jewelry that lasts
                — and means something.
              </p>
              <Link
                to="#"
                className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark transition-colors hover:text-velmora-gold"
              >
                Our Story
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
            Reviews
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium text-velmora-dark md:text-3xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-velmora-hairline bg-white px-6 py-8 transition-shadow hover:shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="mt-4 font-sans text-sm leading-relaxed text-velmora-dark">
                "{t.text}"
              </p>
              <p className="mt-5 font-sans text-xs font-medium uppercase tracking-widest text-velmora-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-dark py-16 md:py-24">
        <div className="mx-auto max-w-xl px-5 text-center md:px-8">
          <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
            Join the Inner Circle
          </h2>
          <p className="mt-3 font-sans text-sm font-light text-white/70">
            Subscribe for 10% off your first order, early access to new
            collections, and styling inspiration.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-white/20 bg-transparent px-4 py-3.5 font-sans text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-velmora-gold"
            />
            <button
              type="submit"
              className="bg-velmora-gold px-8 py-3.5 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-light"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 font-sans text-[10px] text-white/40">
            By subscribing, you agree to receive marketing emails. Unsubscribe
            anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
