import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #3d2e1f 0%, #5a4530 30%, #2a1f15 70%, #1a1410 100%)',
              }}
            />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-black leading-tight mb-6">
              Jewelry That Feels<br />
              <span className="italic font-light">Like You</span>
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-charcoal text-sm leading-relaxed mb-4">
              Velmora was born from a simple belief: everyone deserves jewelry that feels luxurious without the luxury markup. We work directly with skilled artisans to bring you 18K gold-plated pieces that are hypoallergenic, tarnish-resistant, and designed for real life.
            </p>
            <p className="text-velmora-charcoal text-sm leading-relaxed mb-8">
              Every piece in our collection is thoughtfully designed, responsibly sourced, and crafted to be worn every day — from morning coffee to midnight cocktails. Because the best jewelry is the kind you never take off.
            </p>
            <Link to="/about" className="btn-outline text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
