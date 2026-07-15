import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-warm-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400 font-sans font-medium">
          Stay Connected
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-cream-100 font-light">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-sm text-cream-400 font-sans leading-relaxed max-w-md mx-auto">
          Be the first to know about new collections, exclusive edits, and
          behind-the-scenes stories from our atelier.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-warm-900/50 border-warm-700 text-cream-100 placeholder:text-cream-500 flex-1"
          />
          <Button
            type="submit"
            variant="default"
            className="bg-gold-600 hover:bg-gold-700 text-white border-gold-600"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}