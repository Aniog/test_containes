export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-24 lg:pt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide font-light text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-12" />

        <div className="space-y-6 text-base text-taupe font-sans leading-relaxed">
          <p>
            Velmora was born from a simple belief: that fine-quality jewelry should be accessible, not exclusive. Founded in 2023, we set out to create demi-fine pieces that combine the craftsmanship of luxury jewelry with a price point that feels right for everyday wear.
          </p>
          <p>
            Every piece in our collection is crafted with 18K gold plating over sterling silver, designed to transition effortlessly from morning coffee to evening cocktails. We believe that the jewelry you reach for every day should be just as beautiful as the pieces you save for special occasions.
          </p>
          <p>
            We work with artisan jewelers who share our commitment to quality and sustainability. Each piece is hypoallergenic, nickel-free, and made to last — because true luxury is something you can wear again and again.
          </p>
          <p>
            Our design philosophy is rooted in quiet elegance. We don't follow trends; we create timeless pieces that become part of your personal story. From the delicate filigree of our drop earrings to the satisfying weight of our dome huggies, every detail is considered.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">18K</h3>
            <p className="text-xs tracking-widest uppercase font-sans text-taupe">Gold Plated</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">100%</h3>
            <p className="text-xs tracking-widest uppercase font-sans text-taupe">Hypoallergenic</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">30</h3>
            <p className="text-xs tracking-widest uppercase font-sans text-taupe">Day Returns</p>
          </div>
        </div>
      </div>
    </div>
  )
}
