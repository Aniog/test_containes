const JournalPage = () => {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <h1
          className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Journal
        </h1>
        <div className="hairline mb-8" />
        <div className="max-w-2xl space-y-8">
          <article className="border-b border-border pb-8">
            <h2 className="text-2xl font-light text-foreground mb-2">
              How to Layer Necklaces Like a Pro
            </h2>
            <p className="text-xs text-muted-foreground mb-3">July 10, 2026</p>
            <p className="text-muted-foreground leading-relaxed">
              Discover the art of necklace layering with our expert tips. Learn how to mix lengths, 
              textures, and styles to create a look that's uniquely yours.
            </p>
          </article>
          <article className="border-b border-border pb-8">
            <h2 className="text-2xl font-light text-foreground mb-2">
              The Care Guide for Gold-Plated Jewelry
            </h2>
            <p className="text-xs text-muted-foreground mb-3">July 5, 2026</p>
            <p className="text-muted-foreground leading-relaxed">
              Keep your Velmora pieces looking brand new with our comprehensive care guide. 
              Simple steps to maintain the luster and longevity of your jewelry.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-light text-foreground mb-2">
              Summer Styling: Jewelry for Warm Weather
            </h2>
            <p className="text-xs text-muted-foreground mb-3">June 28, 2026</p>
            <p className="text-muted-foreground leading-relaxed">
              From beach days to garden parties, find out which pieces work best for summer occasions 
              and how to style them for maximum impact.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default JournalPage;
