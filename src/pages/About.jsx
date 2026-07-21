import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wider mb-6">
            ABOUT VELMORA
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-sm text-velvet-700 max-w-2xl mx-auto leading-relaxed">
            Founded on the belief that luxury should be accessible, Velmora creates demi-fine jewelry 
            that blends timeless design with modern sensibility.
          </p>
        </div>

        {/* Image + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-20">
          <div className="aspect-[4/5] bg-velvet-100 overflow-hidden">
            <img
              data-strk-img-id="about-craftsmanship-img"
              data-strk-img="[about-craftsmanship-title] [about-craftsmanship-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center bg-velvet-100 px-8 md:px-16 py-16">
            <div className="max-w-md">
              <h2 id="about-craftsmanship-title" className="font-serif text-3xl tracking-wider mb-6">
                CRAFTSMANSHIP
              </h2>
              <p id="about-craftsmanship-text" className="text-sm text-velvet-700 leading-relaxed mb-6">
                Every Velmora piece is crafted from 18K gold-plated brass, chosen for its warmth and durability. 
                Our designs are brought to life by skilled artisans who share our passion for quality and detail.
              </p>
              <p className="text-sm text-velvet-700 leading-relaxed">
                Each piece is hypoallergenic, nickel-free, and designed to be worn every day — from morning coffee 
                to evening occasions.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Quality First',
              text: 'We use only 18K gold plating over premium brass, ensuring each piece maintains its luster and warmth for years.',
            },
            {
              title: 'Ethical Sourcing',
              text: 'Our materials are responsibly sourced, and we work exclusively with partners who share our commitment to ethical practices.',
            },
            {
              title: 'Designed to Last',
              text: 'We believe in jewelry that endures. Our pieces are crafted to be worn, loved, and passed down through generations.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center px-4">
              <h3 className="font-serif text-xl tracking-wider mb-4">{value.title}</h3>
              <p className="text-sm text-velvet-700 leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/shop" className="btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>
    </main>
  );
}