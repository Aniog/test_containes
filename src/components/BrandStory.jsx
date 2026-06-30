import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-12 md:py-20 bg-ivory">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-dark rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141589-46e951c1bbae?w=800&q=80"
              alt="Artisan jewelry crafting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-2xl md:text-4xl text-text-primary leading-tight">
              Designed with Intention, Made to Last
            </h2>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-warm-gray leading-relaxed">
              Every piece at Velmora begins with a sketch and a story. We partner with master artisans
              who transform 18K gold-plated metals into jewelry that feels substantial, sits comfortably,
              and ages beautifully. No mass production — just thoughtful design and meticulous craftsmanship.
            </p>
            <p className="mt-4 text-sm md:text-base text-warm-gray leading-relaxed">
              From our hands to yours, each piece arrives in packaging made from recycled materials,
              ready to be worn, gifted, and treasured for years to come.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-6 md:mt-8 text-sm uppercase tracking-wider text-gold-accent hover:text-text-primary transition-colors group"
            >
              Our Story
              <span className="block w-8 h-[1px] bg-gold-accent group-hover:bg-text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}