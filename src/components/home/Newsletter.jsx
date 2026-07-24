import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-secondary p-12 md:p-16 border border-border">
          <h2 id="newsletter-title" className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
            Join the Insider List
          </h2>
          <p id="newsletter-desc" className="text-muted-foreground font-sans mb-8">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 h-12 px-4 bg-background border border-border focus:outline-none focus:border-primary font-sans text-sm"
              required
            />
            <Button 
              type="submit"
              className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 rounded-none text-sm tracking-widest uppercase transition-colors"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-6">
            By subscribing, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
