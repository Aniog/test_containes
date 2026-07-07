import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-charcoal-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=1000&fit=crop&auto=format"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:max-w-md">
            <p className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal-900 leading-tight mb-5">
              Jewelry that tells<br />your story
            </h2>
            <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-6">
              Velmora was born from a simple belief — that fine jewelry should feel personal, not precious. We craft each piece in 18K gold plate with the same attention to detail as heritage jewelers, but at a price that lets you live in your jewelry, not just save it for special occasions.
            </p>
            <Link to="/" className="text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 font-medium underline underline-offset-4 transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;