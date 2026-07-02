import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038220893-7d9f79c4b39c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      <div className="relative flex h-full items-end pb-20 sm:items-center sm:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Demi-Fine Gold Jewelry
            </p>
            <h1 className="font-serif text-5xl font-light leading-[1.1] sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
              Timeless designs in 18K gold plate — made for everyday moments and
              memories that last.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="px-8">
                <Link to="/shop">Shop the Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-espresso"
              >
                <Link to="/shop?category=sets">Explore Gifts</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
