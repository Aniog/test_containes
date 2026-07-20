import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section bg-[#0D0D0D]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F5F0] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[#A8A8A0] leading-relaxed">
              <p>
                Founded with a passion for creating jewelry that feels both luxurious and accessible, 
                Velmora represents the intersection of timeless elegance and modern sensibility.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed using quality materials—18K gold 
                plating, sterling silver bases, and carefully selected crystals and gemstones.
              </p>
              <p>
                We believe beautiful jewelry should be worn every day, not just saved for special occasions. 
                Our demi-fine pieces are crafted to become treasured parts of your personal story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[#C9A962] uppercase tracking-wider text-sm hover:gap-3 transition-all"
            >
              Read More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;