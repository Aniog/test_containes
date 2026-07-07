import { Link } from 'react-router-dom'

export const StorySplit = () => {
  return (
    <section className="bg-background overflow-hidden border-y border-border/20">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Image Half */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full bg-secondary">
          <img 
            data-strk-img-id="story-image-1"
            data-strk-img="jewelry designer working on gold pieces studio warm light"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Design Studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text Half */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-card">
          <div className="max-w-md text-center md:text-left">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-6">Our Story</span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">
              Designed for the <br/>Everyday Muse.
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-10 text-sm md:text-base">
              Velmora was born from a simple desire: fine jewelry aesthetics without the traditional markups. We believe in pieces that feel deeply personal, crafted with an obsessive attention to detail. 
              <br/><br/>
              Our demi-fine collections are designed to be lived in, layered together, and treasured for years to come.
            </p>
            <Link 
              to="/about" 
              className="inline-block border-b border-foreground pb-1 text-xs font-serif uppercase tracking-widest text-foreground hover:text-primary hover:border-primary transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}