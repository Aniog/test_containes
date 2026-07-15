export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <h1 className="font-serif text-4xl md:text-5xl text-ink text-center">Our Story</h1>

        <div className="w-12 h-px bg-gold mx-auto my-8" />

        <div className="space-y-6 text-taupe text-sm md:text-base leading-relaxed font-light">
          <p>
            Velmora was born from a simple belief: that fine jewelry should feel warm, personal, and within reach. 
            Not distant or untouchable, but something you reach for every day.
          </p>
          <p>
            We design demi-fine pieces that bridge the space between costume jewelry and fine heirlooms. 
            Each piece is crafted with 18K gold plating, hypoallergenic materials, and a quiet attention to detail 
            that makes it feel far more precious than its price suggests.
          </p>
          <p>
            We work directly with trusted artisans, cutting out the traditional markup to bring you jewelry 
            that honors both craftsmanship and transparency. Every piece arrives in packaging designed to be 
            kept and reused, because we believe beautiful things deserve beautiful presentation.
          </p>
          <p>
            Whether you&rsquo;re treating yourself or selecting a gift for someone you love, 
            we hope every Velmora piece becomes something you treasure.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif italic text-ink text-lg">
            &mdash; Crafted to be Treasured
          </p>
        </div>
      </div>
    </div>
  );
}