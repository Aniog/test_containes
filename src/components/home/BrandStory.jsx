import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section-padding bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block font-sans text-xs tracking-ultra-wide text-accent mb-4 uppercase">
              Our Story
            </span>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Elegance
              <br />
              <span className="italic">Meets Meaning</span>
            </h2>
            
            <div className="space-y-4 font-sans text-charcoal-600 leading-relaxed">
              <p>
                Founded in 2018, Velmora began with a simple belief: every woman deserves 
                jewelry that feels special without compromising on quality or conscience.
              </p>
              <p>
                We partner with artisan workshops that share our commitment to ethical 
                production, using recycled metals and responsibly sourced materials. Each 
                piece is designed to become a treasured part of your story.
              </p>
              <p>
                Our name draws from the Latin "vel" (to cover/envelop) and "mora" (delay/dwell) — 
                a reminder that true elegance invites us to slow down and savor the moments 
                that matter most.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm text-espresso hover:text-accent transition-colors group"
            >
              <span className="uppercase tracking-wider">Read Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
