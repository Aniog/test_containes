import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 bg-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-400 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-50 mb-6">
            Made with Love,<br />
            <span className="italic text-gold-300">Worn with Joy</span>
          </h1>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
            We believe everyone deserves to feel luxurious. Velmora was born 
            from the idea that beautiful, high-quality jewelry shouldn't require 
            a luxury budget.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop"
                alt="Jewelry crafting process"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-charcoal-800 mb-6">
                Our Mission
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                At Velmora, our mission is simple: to craft demi-fine jewelry 
                that bridges the gap between fashion and fine jewelry. Each piece 
                is designed to be accessible, wearable, and utterly delightful.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We work with skilled artisans who share our passion for quality 
                and attention to detail. Every clasp, every stone, every curve is 
                considered — because you deserve jewelry that feels as good as it looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-cream-50">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-100">
                <Heart className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-800 mb-3">
                Crafted with Care
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Every piece is made by skilled artisans who pour their heart 
                into each creation. Quality isn't just a goal — it's our standard.
              </p>
            </div>

            <div className="text-center p-8 bg-cream-50">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-100">
                <Award className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-800 mb-3">
                Accessible Luxury
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We believe elegance shouldn't come with an elite price tag. 
                Our pieces deliver the look and feel of fine jewelry at prices 
                that make sense.
              </p>
            </div>

            <div className="text-center p-8 bg-cream-50">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-100">
                <Leaf className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl text-charcoal-800 mb-3">
                Thoughtfully Made
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                From ethically sourced materials to responsible packaging, 
                we're committed to making beautiful jewelry that's kind to 
                people and planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-cream-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-charcoal-800 mb-4">
            Ready to Discover Velmora?
          </h2>
          <p className="text-charcoal-600 mb-8">
            Explore our collection of demi-fine jewelry designed to become 
            treasured parts of your personal story.
          </p>
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 bg-charcoal-800 text-cream-50 px-8 py-4 text-sm tracking-wider uppercase hover:bg-charcoal-900 transition-colors"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}