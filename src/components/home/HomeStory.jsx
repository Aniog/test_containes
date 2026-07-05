import { Link } from 'react-router-dom';

const HomeStory = () => {
  return (
    <section className="bg-velmora-stone overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            data-strk-img-id="home-story-img"
            data-strk-img="jewelry craftsmanship details artisan gold editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Our Craftsmanship"
            className="w-full h-full object-cover grayscale-[10%]"
          />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-24 space-y-8 bg-velmora-cream">
          <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Unveiling our essence</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">Craftsmanship with Purpose</h2>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            At Velmora, we believe jewelry is more than an accessory—it's a narrative. Our pieces are crafted with 18K gold plating over durable bases, designed to elevate your everyday moments with a touch of quiet luxury. We are committed to transparency, sustainability, and the celebration of modern womanhood.
          </p>
          <div className="pt-4">
            <Link to="#" className="text-xs uppercase tracking-[0.2em] underline underline-offset-8 hover:text-velmora-gold transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStory;