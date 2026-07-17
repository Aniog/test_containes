import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-mist overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8 lg:pl-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-warm-black mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves
                jewelry that makes her feel extraordinary, without the
                extraordinary price tag.
              </p>
              <p>
                Founded in 2020, we set out to create pieces that bridge the gap
                between fine jewelry and fashion accessories. Our
                demi-fine collection features 18K gold plating, genuine
                gemstones, and meticulous craftsmanship—each piece designed to
                become a treasured part of your story.
              </p>
              <p>
                We believe in jewelry that moves with you, from morning coffee
                to evening celebrations. Pieces that become your signature, your
                go-to, your "everyday luxury."
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-champagne hover:text-antique-gold transition-colors underline underline-offset-4"
            >
              Read More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;