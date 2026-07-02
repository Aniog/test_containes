export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs uppercase tracking-widest-plus text-gold font-sans">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-snug">
              Where Intention Meets Craft
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Every piece in our collection is thoughtfully designed in our London studio and crafted with 18K gold 
              plating over hypoallergenic base metals.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              We believe in slow fashion — pieces that transcend trends and become part of your story. 
              From the first sketch to the final polish, every detail is considered.
            </p>
            <button className="mt-8 border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-widest-plus hover:bg-charcoal hover:text-cream transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
