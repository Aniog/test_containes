export default function About() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-warm-charcoal leading-tight">
              Our Story
            </h1>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <div className="space-y-4 text-sm text-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should not be reserved 
                for special occasions. We set out to create pieces that celebrate the everyday — 
                the morning coffee, the evening walk, the dinner with friends.
              </p>
              <p>
                Our name draws from Latin roots meaning "to desire" and "treasure." Every piece 
                is designed in our London atelier and hand-finished by master artisans who share 
                our commitment to quality and detail.
              </p>
              <p>
                We use only ethically sourced 18K gold plating and hypoallergenic metals, 
                ensuring that our jewelry is as kind to your skin as it is to the planet. 
                Our packaging is plastic-free, recycled, and fully recyclable.
              </p>
              <p className="font-serif italic text-base text-warm-charcoal">
                This is jewelry for the woman who knows her worth — and wears it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}