export default function JournalPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl text-charcoal font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
            The Journal
          </h1>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
          <p className="text-taupe text-sm mt-4 max-w-md mx-auto font-light">
            Stories, style guides, and behind-the-scenes glimpses into the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "How to Layer Gold Jewelry Like a Pro",
              excerpt: "Master the art of mixing chains, hoops, and cuffs for an effortlessly curated look.",
              image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&q=80",
            },
            {
              title: "The Complete Jewelry Care Guide",
              excerpt: "Keep your pieces radiant for years to come with these simple care routines.",
              image: "https://images.unsplash.com/photo-1619118884598-36e05c462b0d?w=600&q=80",
            },
            {
              title: "Gift Guide: Jewelry She'll Treasure",
              excerpt: "Thoughtful picks for every style and budget — from classic hoops to statement sets.",
              image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
            },
          ].map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-hairline/30 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Journal</p>
              <h2 className="text-xl text-charcoal font-semibold mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
                {post.title}
              </h2>
              <p className="text-sm text-taupe font-light leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}