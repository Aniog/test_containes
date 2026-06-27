import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-velmora-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
            Our Story
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto">
            Jewelry with soul, designed for real life.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-velmora-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <div className="space-y-6 text-sm md:text-base text-velmora-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry should be accessible, meaningful, and made to be worn every day.
              </p>
              <p>
                Founded in 2020 by a team of designers and jewelers with decades of combined experience, Velmora bridges the gap between fine jewelry and everyday wearability. Our pieces are crafted from ethically sourced materials, plated in 18K gold, and designed to transition seamlessly from your morning coffee to evening events.
              </p>
              <p>
                Every Velmora piece is designed in our California studio, where we obsess over the details — from the weight of a clasp to the way light plays across a crystal. We believe jewelry should feel as good as it looks: lightweight, comfortable, and built to last.
              </p>
              <p>
                Our name comes from the Latin <em>velum</em> (veil) and <em>mora</em> (pause) — a reminder to slow down and appreciate beauty in everyday moments.
              </p>
              <p>
                From our family to yours, every Velmora piece is crafted to be treasured.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/shop">
              <Button variant="accent" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
