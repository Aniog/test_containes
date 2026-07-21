import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F7]">
      <div className="container-app">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#E8DCC4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A962] hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-sm font-medium text-[#C9A962] uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="section-title mt-4 mb-6">
              Crafted with<br />Intention
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-6">
              At Velmora, we believe jewelry should be more than an accessory—it should be a 
              cherished part of your story. Each piece is thoughtfully designed in our studio, 
              drawing inspiration from nature's quiet moments and the elegance of everyday life.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              We partner with skilled artisans who share our commitment to quality and sustainability. 
              Every curve, every clasp, every gleam is a testament to the care that goes into 
              creating jewelry meant to be treasured for generations.
            </p>
            <Link
              to="/about"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Learn More About Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}