export default function Journal() {
  return (
    <main className="bg-cream-50 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide">
            The Journal
          </h1>
          <p className="text-sm text-brand-400 font-sans mt-3">
            Stories, style, and the art of everyday adornment
          </p>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="space-y-10">
          {[1, 2, 3].map((i) => (
            <article key={i} className="grid md:grid-cols-2 gap-6 items-center">
              <div className={`aspect-[4/3] bg-brand-100 rounded-sm overflow-hidden ${i % 2 === 0 ? 'md:order-2' : ''}`}>
                <img
                  src={
                    i === 1
                      ? 'https://images.unsplash.com/photo-1603975217915-1c8bc1b6fa2f?w=600&auto=format&fit=crop'
                      : i === 2
                        ? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop'
                  }
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-brand-400 font-sans">
                  {['Style Guide', 'Behind the Craft', 'Gift Guide'][i - 1]}
                </p>
                <h2 className="font-serif text-xl md:text-2xl text-brand-900 mt-2 tracking-wide">
                  {[
                    'How to Layer Gold Jewelry Like an Editor',
                    'The Art of Gold Plating: A Visit to Our Workshop',
                    'The Perfect Gift: Curating for the Woman Who Has Everything',
                  ][i - 1]}
                </h2>
                <p className="text-sm text-brand-500 mt-3 font-sans leading-relaxed">
                  {[
                    'Discover the art of stacking and layering your gold pieces for maximum impact — from delicate chains to statement cuffs.',
                    'We traveled to our partner workshop to witness the meticulous process behind every Velmora piece, from wax carving to final polish.',
                    'Finding the right gift is an art. Our editors share their top picks for the jewelry lover in your life.',
                  ][i - 1]}
                </p>
                <button className="mt-4 text-xs tracking-widest uppercase font-sans text-brand-700 border-b border-brand-300 pb-0.5 hover:text-brand-900 transition-colors">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}