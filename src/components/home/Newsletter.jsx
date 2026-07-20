import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <section className="bg-deep-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
            Join the Circle
          </h2>
          <p className="mt-3 text-sm text-cream/70 leading-relaxed">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive events.
          </p>

          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-cream/20 text-cream placeholder:text-cream/40"
              required
            />
            <Button variant="primary" className="flex-shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-[10px] text-cream/40">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}