export default function About() {
  return (
    <main className="bg-cream-50 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide">
            About Velmora
          </h1>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="aspect-[16/9] bg-brand-200 rounded-sm overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=1200&auto=format&fit=crop&q=80"
            alt="Crafting jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-sm text-brand-600 leading-relaxed font-sans">
            Velmora was born from a simple belief: that fine jewelry should be a part of 
            everyday life, not something reserved for special occasions. We create demi-fine 
            gold pieces that are as comfortable at a coffee shop as they are at a gala.
          </p>
          <p className="text-sm text-brand-600 leading-relaxed font-sans">
            Every piece is handcrafted by master artisans using 18K gold plating over brass, 
            with ethically sourced cubic zirconia crystals. We personally visit each workshop 
            to ensure every detail meets our standards — from the weight of a huggie to the 
            way light catches a crystal facet.
          </p>
          <p className="text-sm text-brand-600 leading-relaxed font-sans">
            By working directly with our artisans and selling directly to you, we eliminate 
            traditional markups. The result is heirloom-quality jewelry at prices that 
            feel surprisingly accessible — because we believe everyone deserves to feel 
            beautiful every day.
          </p>
        </div>
      </div>
    </main>
  )
}