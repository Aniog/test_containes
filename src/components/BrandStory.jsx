import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs font-sans tracking-widest text-velmora-gold uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6">
              Jewelry Designed to be Treasured
            </h2>
            <p className="text-velmora-graphite leading-relaxed mb-6">
              At Velmora, we believe that beautiful jewelry should be accessible to everyone. 
              Our journey began with a simple vision: to create pieces that blend the elegance 
              of fine jewelry with the accessibility of everyday luxury.
            </p>
            <p className="text-velmora-graphite leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed using premium materials, 
              including 18K gold plating and hypoallergenic metals. We believe in jewelry that 
              not only looks stunning but stands the test of time.
            </p>
            <Link
              to="/about"
              className="link-underline font-sans text-sm tracking-wider uppercase"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}