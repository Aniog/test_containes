import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-white border-y border-velmora-border/50">
      <div className="flex flex-col md:flex-row">
        
        {/* Image Half */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
          <div 
            className="w-full h-full min-h-[400px]"
            data-strk-bg-id="story-bg"
            data-strk-bg="jewelry designer studio sketch gold editorial"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="1000"
          />
        </div>

        {/* Text Half */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24">
          <div className="max-w-md text-center md:text-left">
            <h2 id="story-title" className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text mb-6">
              The Art of Everyday Elegance
            </h2>
            <p className="text-velmora-text/80 leading-relaxed mb-8">
              Velmora was born from a simple belief: fine jewelry shouldn't wait for a special occasion. We craft demi-fine pieces using 18K gold plating over sterling silver, ensuring every earring, necklace, and huggie is accessible, hypoallergenic, and designed to seamlessly elevate your daily life.
            </p>
            <Link 
              to="/about"
              className="inline-block border-b border-velmora-text pb-1 uppercase tracking-widest text-sm hover:text-velmora-accent hover:border-velmora-accent transition-colors duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}