const FallbackPage = ({ title }) => (
  <div className="pt-40 pb-24 px-6 text-center space-y-8 min-h-screen">
    <h1 className="font-serif text-6xl italic md:text-8xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
      {title}
    </h1>
    <p className="text-muted text-[11px] uppercase tracking-[0.5em] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
      Page coming soon — stay tuned
    </p>
    <div className="pt-12">
      <a href="/shop" className="bg-foreground text-background px-12 py-5 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-accent transition-all duration-500">
        Back to the Collection
      </a>
    </div>
  </div>
);

export const Collections = () => <FallbackPage title="Collections" />;
export const About = () => <FallbackPage title="Our Story" />;
export const Journal = () => <FallbackPage title="The Journal" />;
