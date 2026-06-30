import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="py-8 lg:py-0">
            <p className="text-sm tracking-widest text-gold mb-4">OUR STORY</p>
            
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Jewelry That<br />
              <span className="italic">Tells Your Story</span>
            </h2>
            
            <div className="space-y-4 text-warmGray leading-relaxed">
              <p>
                Founded in 2019, Velmora was born from a simple belief: every woman deserves 
                to wear beautiful, high-quality jewelry without the luxury price tag.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and crafted with 
                18K gold plating over hypoallergenic stainless steel — materials chosen 
                for their durability, luster, and comfort.
              </p>
              <p>
                We believe in jewelry that moves with you, from morning coffee to evening 
                out. Pieces that become part of your story, worn and treasured for years to come.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-charcoal hover:text-gold transition-colors group"
            >
              <span className="text-sm font-medium tracking-wide">Discover Our Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
