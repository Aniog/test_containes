export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24 container-padding py-16 md:py-24">
      <h1 className="serif-heading text-4xl md:text-5xl text-center mb-4">Journal</h1>
      <p className="text-muted-foreground text-center max-w-md mx-auto mb-16">
        Styling tips, behind-the-scenes stories, and jewelry care guides.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: 'How to Layer Necklaces Like a Pro',
            excerpt: 'The art of mixing lengths and textures for an effortlessly chic look.',
            date: 'July 15, 2026',
          },
          {
            title: 'The Ultimate Guide to Gold Jewelry Care',
            excerpt: 'Keep your pieces looking brand new with these simple maintenance tips.',
            date: 'July 8, 2026',
          },
          {
            title: '5 Ways to Style Huggie Earrings',
            excerpt: 'From office to evening, huggies are the most versatile piece in your collection.',
            date: 'June 28, 2026',
          },
        ].map((post, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-muted transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
            <h3 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
