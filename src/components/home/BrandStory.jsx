import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-snug">
              Where Timeless Design Meets Accessible Luxury
            </h2>
            <p className="mt-6 text-warm-gray leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels special without the luxury price tag. Our pieces are crafted with 18K gold plating over hypoallergenic bases, designed to be worn every day and treasured for years.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Each design is inspired by architectural details, natural forms, and the quiet confidence of the women who wear them.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.15em] text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
