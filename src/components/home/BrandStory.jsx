import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-warm-gray font-sans leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                We craft demi-fine pieces that bridge the gap between accessible luxury and timeless elegance. Each piece is designed with intention, created to be worn and treasured for years to come.
              </p>
              <p>
                Our commitment to quality means using only the finest materials—18K gold plating, genuine crystals, and hypoallergenic metals. We believe in jewelry that not only looks beautiful but feels beautiful to wear.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 btn-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;