import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-24 bg-[#faf9f8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto md:ml-0">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" 
                alt="Velmora Jewelry Collection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/30 -z-10 hidden md:block"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide leading-tight mb-8">
              Redefining <br className="hidden md:block" />Everyday Luxury
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Founded on the belief that fine jewelry shouldn't be reserved for special occasions. Velmora was born to bridge the gap between quality and accessibility, delivering demi-fine pieces crafted to become an effortless extension of you.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              Each piece is thoughtfully designed, responsibly sourced, and made to be stacked, layered, and lived in.
            </p>
            <Link to="/about" className="inline-block border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-accent hover:border-accent transition-colors">
              Discover Our Story
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}