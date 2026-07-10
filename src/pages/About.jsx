import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg-primary">
      {/* Hero */}
      <div className="bg-velmora-bg-secondary py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-text-primary mb-6">
            Our Story
          </h1>
          <p className="text-velmora-text-secondary text-lg md:text-xl leading-relaxed">
            Where timeless elegance meets intentional design. We're on a mission to make 
            beautiful, ethical jewelry accessible to everyone.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80"
              alt="Velmora craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div>
            <span className="text-xs tracking-widest uppercase text-velmora-accent mb-4 block">
              Founded in 2020
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-primary mb-6">
              Born from a Love of Beauty
            </h2>
            <div className="space-y-4 text-velmora-text-secondary leading-relaxed">
              <p>
                Velmora began in a small studio with a simple belief: jewelry should make you 
                feel extraordinary every day, not just on special occasions. Our founders set out 
                to create pieces that bridge the gap between fashion and fine jewelry.
              </p>
              <p>
                Today, we're proud to work with certified ethical workshops, using premium materials 
                like 18K gold plating and hypoallergenic metals. Every piece is designed to become 
                a treasured part of your personal story.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-velmora-border">
          <div className="text-center">
            <h3 className="font-serif text-xl mb-3">Ethical Craft</h3>
            <p className="text-sm text-velmora-text-secondary">
              Partnering only with certified workshops that ensure fair wages and safe conditions.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-xl mb-3">Premium Quality</h3>
            <p className="text-sm text-velmora-text-secondary">
              18K gold plating, cubic zirconia, and hypoallergenic metals built to last.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-xl mb-3">Inclusive Design</h3>
            <p className="text-sm text-velmora-text-secondary">
              Jewelry designed for every body, every style, every day.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-velmora-text-secondary mb-6">
            Ready to discover your new favorite pieces?
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Shop the Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
