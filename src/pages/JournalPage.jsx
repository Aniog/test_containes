const JournalPage = () => {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <h1 className="serif-heading text-4xl md:text-5xl mb-3">Journal</h1>
        <p className="text-muted-foreground text-sm mb-12">Stories, styling tips, and behind-the-scenes</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'How to Layer Necklaces Like a Pro', date: 'July 2026', category: 'Styling' },
            { title: 'The Art of Gift-Giving: A Velmora Guide', date: 'June 2026', category: 'Lifestyle' },
            { title: 'Behind the Scenes: Our Gold Plating Process', date: 'May 2026', category: 'Craft' },
          ].map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-secondary mb-4 overflow-hidden">
                <div className="w-full h-full bg-secondary group-hover:opacity-90 transition-opacity" />
              </div>
              <p className="text-xs tracking-widest uppercase text-primary mb-2">{post.category}</p>
              <h3 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
