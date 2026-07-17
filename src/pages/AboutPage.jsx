import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="bg-base min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-wider text-accent font-medium text-center">
          Our Story
        </p>
        <h1 className="section-heading text-center mt-3">
          About Velmora
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-text-secondary leading-relaxed">
              Velmora was born from a simple belief: luxury should feel personal, 
              accessible, and made to be worn every day — not locked away for special occasions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Each piece in our collection is crafted from 18K gold-plated brass with a hypoallergenic finish, 
              designed in our atelier by artisans who believe that the best jewelry doesn't shout — it quietly elevates.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We partner with ethical workshops, source materials responsibly, and wrap every order 
              like a gift. Because whether you're treating yourself or someone you love, 
              the experience should feel extraordinary from the moment the package arrives.
            </p>
            <Link to="/shop" className="btn-primary text-sm mt-4 inline-flex">
              Explore the Collection
            </Link>
          </div>
        </div>

        <div className="hairline-divider mt-20 pt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="font-serif text-3xl text-accent">10K+</p>
            <p className="text-sm text-text-secondary mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-accent">30</p>
            <p className="text-sm text-text-secondary mt-2">Countries Shipped</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-accent">4.8</p>
            <p className="text-sm text-text-secondary mt-2">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
