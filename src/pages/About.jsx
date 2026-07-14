import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StoryPlaceholder } from '../components/ui/ProductImagePlaceholder';

export function About() {
  return (
    <div className="min-h-screen bg-warm-ivory">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-warm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-gray-900 mb-6">
              Where Craft<br />
              <span className="italic">Meets Intention</span>
            </h1>
            <p className="text-warm-gray-600 text-lg leading-relaxed">
              Founded in New York City with a simple belief: every woman deserves 
              jewelry that feels special without the special-occasion price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Story content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <StoryPlaceholder className="absolute inset-0 w-full h-full" />
            </div>
            <div className="space-y-6 text-warm-gray-600 leading-relaxed">
              <p>
                Velmora was born in 2019 from a late-night conversation between 
                two friends who couldn't find beautiful, quality jewelry at 
                accessible prices. They wanted pieces that felt luxurious, 
                looked expensive, and didn't require a special occasion to wear.
              </p>
              <p>
                We work directly with master artisans in Jaipur and Bali, 
                combining traditional craftsmanship with contemporary design. 
                Each piece goes through a rigorous quality process — because 
                we believe you shouldn't have to compromise on beauty.
              </p>
              <p>
                Our demi-fine collections bridge the gap between fashion and fine 
                jewelry. We're creating a new category: accessible luxury that 
                moves with you from morning coffee to evening cocktails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-ivory text-center mb-12">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-champagne">
                <span className="text-champagne text-2xl">✦</span>
              </div>
              <h3 className="font-serif text-xl text-warm-ivory mb-2">Quality Without Compromise</h3>
              <p className="text-warm-gray-400 text-sm">
                Every piece is hand-finished with 18K gold plating and hypoallergenic materials. 
                We don't cut corners — only prices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-champagne">
                <span className="text-champagne text-2xl">♡</span>
              </div>
              <h3 className="font-serif text-xl text-warm-ivory mb-2">Designed for Real Life</h3>
              <p className="text-warm-gray-400 text-sm">
                Jewelry should be worn, not saved. We design pieces that move with you — 
                from workouts to weddings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-champagne">
                <span className="text-champagne text-2xl">∞</span>
              </div>
              <h3 className="font-serif text-xl text-warm-ivory mb-2">Lasting Beauty</h3>
              <p className="text-warm-gray-400 text-sm">
                Proper care means your Velmora pieces will remain beautiful for years. 
                We include care instructions with every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-warm-ivory">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-gray-900 mb-6">
            Ready to Discover Velmora?
          </h2>
          <p className="text-warm-gray-600 mb-8">
            Explore our collection of handcrafted demi-fine jewelry designed 
            to become part of your story.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Shop the Collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
