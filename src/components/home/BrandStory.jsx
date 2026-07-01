import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-velmora-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-[4/5] bg-velmora-sand overflow-hidden">
             <img 
                data-strk-img-id="story-img"
                data-strk-img="woman putting on gold earrings in a warm lit mirror editorial aesthetic"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Brand Story"
             />
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="uppercase tracking-[0.3em] text-[10px] text-velmora-charcoal/50">Our Heritage</span>
            <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Honoring the <br /> <span className="italic underline underline-offset-8 decoration-[1px] decoration-velmora-accent/30">Craftsmanship</span>
            </h2>
            <div id="story-text" className="space-y-6 text-velmora-charcoal/70 leading-relaxed font-light">
              <p>
                Founded on the belief that luxury should be felt, not just seen. At Velmora, we blend traditional techniques with contemporary design to create demi-fine pieces that stand the test of time.
              </p>
              <p>
                Each piece is meticulously crafted with high-quality recycled metals and thick 18K gold plating, ensuring a finish that radiates warmth and elegance for years to come.
              </p>
            </div>
            
            <div className="pt-4">
               <Link to="/about" className="btn-outline">
                 Our Story
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
