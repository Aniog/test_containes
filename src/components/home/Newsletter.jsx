import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-primary-foreground/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary-foreground/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide mb-6">
          Join the Inner Circle
        </h2>
        
        <p className="text-primary-foreground/80 font-light tracking-wide mb-10 max-w-xl mx-auto">
          Subscribe to receive 10% off your first order, early access to new collections, and exclusive styling tips.
        </p>
        
        <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="rounded-none sm:border-r-0 border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 h-12 focus-visible:ring-1 focus-visible:ring-primary-foreground focus-visible:ring-offset-0 focus-visible:outline-none"
            required
          />
          <Button 
            type="submit" 
            className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8 font-serif uppercase tracking-widest text-xs transition-colors"
          >
            Subscribe
          </Button>
        </form>
        
        <p className="text-[10px] text-primary-foreground/50 tracking-widest uppercase mt-6">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </section>
  );
}