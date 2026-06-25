import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-[#E5E0D8]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 aspect-[3/4] relative">
            <img
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
              alt="Jewelry artisan working"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-subtitle] jewelry making craftsmanship editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start max-w-lg mx-auto md:mx-0">
            <span id="story-subtitle" className="font-sans text-xs tracking-widest uppercase text-[#8B857D] mb-4">
              Our Heritage
            </span>
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl text-[#2D2A26] mb-8 leading-tight">
              A return to thoughtful craftsmanship.
            </h2>
            <div className="space-y-6 text-[#8B857D] font-light leading-relaxed mb-10">
              <p>
                Velmora was born from a simple desire: to create accessible, demi-fine jewelry that doesn't compromise on quality or design.
              </p>
              <p>
                Every piece is meticulously crafted using responsibly sourced materials, designed to be worn, loved, and passed down. We believe luxury isn't about a price tag, but the feeling you get when you wear something made with intention.
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-block border border-[#2D2A26] text-[#2D2A26] hover:bg-[#2D2A26] hover:text-[#FAF9F5] transition-colors duration-300 font-sans tracking-widest uppercase text-xs font-medium py-3 px-8"
            >
              Discover Our Story
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
