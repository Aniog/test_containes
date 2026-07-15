import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-ink">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-wider">
          Join the Inner Circle
        </h2>
        <p className="text-white/50 text-sm mt-3 font-light max-w-sm mx-auto">
          Subscribe for 10% off your first order and early access to new collections.
        </p>
        <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-8" />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 text-white border-white/20 placeholder:text-white/30 focus:border-gold bg-transparent"
            required
          />
          <Button type="submit" className="flex-shrink-0">
            Subscribe
          </Button>
        </form>
        <p className="text-white/20 text-[11px] mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}