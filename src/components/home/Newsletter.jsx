import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-20 md:py-28 border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title">Join Our Inner Circle</h2>
          <p className="text-velmora-text-secondary text-sm md:text-base font-sans mt-4 leading-relaxed">
            Subscribe for 10% off your first order, early access to new
            collections, and exclusive stories from the studio.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}