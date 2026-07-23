import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-[#F3F0EB]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-square md:aspect-auto bg-[#E8E4DF]">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=800&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-20">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-4">Our Philosophy</p>
            <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-4">
              Every Velmora piece is designed with intention — to be worn daily, treasured always, and passed down with meaning. We believe luxury shouldn't come with a luxury price tag.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Our demi-fine collection uses 18K gold plating over quality brass, creating pieces that look and feel premium while remaining accessible to everyone.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
