import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24 bg-accent text-accent-foreground text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h2 className="font-heading text-4xl mb-4 tracking-wide">Join the Inner Circle</h2>
        <p className="mb-10 text-white/90 font-light">
          Sign up for 10% off your first order, plus early access to new collections and exclusive events.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="rounded-none bg-transparent border-white/50 text-white placeholder:text-white/60 focus-visible:border-white focus-visible:ring-0 px-6 py-6 h-auto text-base flex-1"
            required
          />
          <Button 
            type="submit" 
            className="rounded-none bg-white text-accent hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-widest text-sm"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}