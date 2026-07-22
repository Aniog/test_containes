export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-velmora-sand py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            Our Story
          </h1>
          <p className="font-sans text-sm text-velmora-taupe mt-3">
            Crafting jewelry with purpose since 2020
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <p className="font-sans text-velmora-charcoal/80 leading-relaxed">
            Velmora was born from a simple belief: every woman deserves to feel special 
            without breaking the bank. We set out to create jewelry that bridges the gap 
            between luxury and accessibility—pieces that feel expensive but remain within reach.
          </p>
          
          <p className="font-sans text-velmora-charcoal/80 leading-relaxed mt-6">
            Our name, derived from the Latin "velum" (veil) and "mor" (custom), reflects 
            our mission: to unveil accessible luxury for the modern woman. Each piece in 
            our collection is designed to become a treasured part of your personal story.
          </p>

          <h2 className="font-serif text-2xl text-velmora-charcoal mt-12 mb-4">
            Our Craft
          </h2>
          <p className="font-sans text-velmora-charcoal/80 leading-relaxed">
            We work with skilled artisans who bring decades of experience in jewelry making. 
            Every piece is crafted with 18K gold plating over quality metals, genuine crystals, 
            and ethically sourced gemstones. Our quality standards ensure that your jewelry 
            remains beautiful for years to come.
          </p>

          <h2 className="font-serif text-2xl text-velmora-charcoal mt-12 mb-4">
            Our Values
          </h2>
          <p className="font-sans text-velmora-charcoal/80 leading-relaxed">
            Sustainability matters to us. We're committed to responsible sourcing, minimal 
            packaging, and supporting ethical manufacturing practices. When you wear Velmora, 
            you're not just wearing beautiful jewelry—you're supporting a brand that cares 
            about its impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
}