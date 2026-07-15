import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/40" />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-ivory">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl lg:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-ivory/90 md:text-base"
        >
          Timeless pieces for everyday luxury. Designed for the women who know
          that quiet elegance speaks loudest.
        </p>
        <div className="mt-10">
          <Button
            variant="primary"
            className="bg-ivory text-espresso hover:bg-parchment"
            onClick={() => (window.location.href = "/shop")}
          >
            Shop the Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
