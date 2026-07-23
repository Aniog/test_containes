export default function About() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] bg-[#E5DED5] rounded-sm overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&auto=format&fit=crop&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#1C1917] font-medium mb-6">
            About Velmora
          </h1>

          <div className="w-12 h-px bg-[#B8943C] mb-8" />

          <div className="space-y-6 text-[#6B6358] leading-relaxed">
            <p>
              Velmora was founded on a simple belief: jewelry shouldn&apos;t wait
              for special occasions. It should be worn, layered, and loved every
              single day.
            </p>
            <p>
              Every piece in our collection is crafted in 18K gold plating over
              brass, with genuine gemstones and crystals. We work with skilled
              artisans who share our commitment to quality — each piece is
              hand-finished and inspected before it reaches you.
            </p>
            <p>
              We believe in transparency, sustainability, and craftsmanship that
              honors both the maker and the wearer. From our packaging to our
              materials, every decision is made with intention.
            </p>
            <p className="font-['Cormorant_Garamond'] text-xl text-[#1C1917] italic mt-8">
              &ldquo;Designed to be treasured, made to be worn.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}