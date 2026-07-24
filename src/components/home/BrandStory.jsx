import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="py-0 bg-background overflow-hidden border-y border-border">
      <div className="flex flex-col md:flex-row">
        {/* Image side - taking up half viewport width on desktop */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[700px] relative bg-secondary">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            data-strk-bg-id="story-bg-123456"
            data-strk-bg="[story-subtitle] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1200"
          />
        </div>
        
        {/* Text side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-background">
          <div className="max-w-md text-center md:text-left">
            <h2 id="story-title" className="font-serif text-4xl mb-6 text-foreground">
              Quiet Luxury for the Everyday
            </h2>
            <div className="w-12 h-px bg-primary mx-auto md:mx-0 mb-8" />
            <p id="story-subtitle" className="text-muted-foreground font-sans leading-relaxed mb-6 font-light">
              Velmora was born from a simple desire: to create beautiful, high-quality jewelry that bridges the gap between fast fashion and fine jewelry. 
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10 font-light">
              We believe in the power of subtle details. Our pieces are conceptualized with an editorial eye, crafted using 18k gold vermeil and ethically sourced stones to ensure longevity without the traditional markup. Every piece is an invitation to celebrate yourself.
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 rounded-none text-sm tracking-widest uppercase transition-all"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
