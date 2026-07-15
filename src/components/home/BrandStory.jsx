import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-gold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-warmGray leading-relaxed">
              <p>
                Founded with a passion for creating jewelry that transcends trends, 
                Velmora was born from the belief that every woman deserves pieces that 
                make her feel extraordinary.
              </p>
              <p>
                Our demi-fine collections are crafted with the finest materials, 
                designed to be worn every day and treasured for a lifetime. Each piece 
                balances contemporary elegance with timeless appeal.
              </p>
              <p>
                We believe in quiet luxury — jewelry that speaks softly but says so much. 
                Pieces that become part of your story, accompanying you through life's 
                most memorable moments.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-gold hover:text-gold-muted transition-colors underline underline-offset-4"
            >
              Read More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}