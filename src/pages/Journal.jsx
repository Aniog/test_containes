const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our expert tips. From mixing lengths to combining textures, learn how to create a perfectly curated stack.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    date: 'July 10, 2026',
    category: 'Style Guide',
  },
  {
    id: 2,
    title: 'The Complete Guide to Jewelry Care',
    excerpt: 'Keep your gold-plated pieces looking brand new with our comprehensive jewelry care guide. Simple steps that make a big difference.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop',
    date: 'July 5, 2026',
    category: 'Care Tips',
  },
  {
    id: 3,
    title: '5 Earring Styles Every Woman Should Own',
    excerpt: 'From classic studs to bold huggies, discover the essential earring styles that form the foundation of a versatile jewelry collection.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    date: 'June 28, 2026',
    category: 'Trends',
  },
  {
    id: 4,
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'Finding the perfect jewelry gift doesn\'t have to be stressful. Our curated guide covers birthdays, anniversaries, graduations, and more.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop',
    date: 'June 20, 2026',
    category: 'Gifting',
  },
];

export default function Journal() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">The Journal</h1>
          <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
          <p className="font-sans text-sm text-[#6B6560] mt-4">Style tips, care guides, and inspiration from Velmora.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(article => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden bg-[#F2EDE7] mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A572] font-sans font-medium">{article.category}</span>
                  <span className="text-[10px] text-[#9B958E] font-sans">{article.date}</span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl text-[#1A1A1A] mb-2 group-hover:text-[#C5A572] transition-colors">{article.title}</h2>
                <p className="font-sans text-sm text-[#6B6560] leading-relaxed">{article.excerpt}</p>
                <span className="inline-block mt-3 text-xs uppercase tracking-[0.2em] text-[#1A1A1A] font-sans font-medium group-hover:text-[#C5A572] transition-colors">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
