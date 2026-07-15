export default function Journal() {
  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="section-padding py-16 md:py-24 max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-widester uppercase text-velmora-muted mb-4">Journal</p>
        <h1 className="font-heading text-4xl md:text-5xl mb-8">Style Notes</h1>
        <p className="text-velmora-muted leading-relaxed mb-10">
          Stories, styling tips, and behind-the-scenes looks at the world of Velmora.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            { title: "How to Layer Necklaces Like a Stylist", date: "July 10, 2026" },
            { title: "The Art of the Curated Ear", date: "June 28, 2026" },
            { title: "Caring for Your Demi-Fine Jewelry", date: "June 15, 2026" },
            { title: "Gift Guide: Pieces She'll Treasure", date: "May 30, 2026" },
          ].map((post) => (
            <div key={post.title} className="bg-white p-6 border border-velmora-stone/30 hover:border-velmora-gold/40 transition-colors cursor-pointer">
              <p className="text-[11px] text-velmora-muted mb-3">{post.date}</p>
              <h3 className="font-heading text-lg leading-snug">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
