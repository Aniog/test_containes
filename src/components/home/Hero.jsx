import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ShieldCheck, TrendingUp, Anchor } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        data-strk-bg-id="hero-bg-29f1"
        data-strk-bg="[hero-subtitle] [hero-title] factory warehouse logistics shipping container"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 id="hero-title" className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping—acting as your dedicated team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium border-t">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Supplier Search</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Factory Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Quality Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Anchor className="h-5 w-5 text-primary" />
                <span>Global Shipping</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img
              alt="Quality Control team inspecting products"
              className="rounded-xl shadow-2xl object-cover"
              data-strk-img-id="hero-img-b3c9"
              data-strk-img="factory quality control inspection team [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
