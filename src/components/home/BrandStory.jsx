import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="aspect-square md:aspect-auto">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=900&h=700&fit=crop"
          alt="Velmora jewelry craftsmanship"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center bg-secondary/30 p-10 md:p-16 lg:p-20">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Philosophy</p>
          <h2 className="serif-heading text-4xl md:text-5xl mb-6 leading-tight">
            Jewelry That Tells<br />Your Story
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Velmora, we believe luxury shouldn't be reserved for special occasions. Every piece is designed to be worn, loved, and layered into your daily ritual.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our demi-fine collection bridges the gap between costume jewelry and fine jewelry — offering 18K gold plated pieces that look and feel premium, at prices that make everyday indulgence possible.
          </p>
          <Link to="/about" className="btn-outline inline-block">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
