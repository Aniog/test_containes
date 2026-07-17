import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Bestsellers from "../components/home/Bestsellers";
import UGCReelRow from "../components/home/UGCReelRow";
import CategoryTiles from "../components/home/CategoryTiles";
import BrandStory from "../components/home/BrandStory";
import Testimonials from "../components/home/Testimonials";
import products from "../data/products";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers products={products} />
      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />

      {/* Newsletter capture section */}
      <section className="py-16 sm:py-24 bg-accent">
        <div className="container-velmora text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-accent-foreground mb-3">
            Join for 10% off your first order
          </h2>
          <p className="text-sm text-accent-foreground/70 mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive offers, new collection previews,
            and jewelry care tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-accent px-6 py-3 text-sm tracking-velmora uppercase font-medium hover:bg-white/90 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
