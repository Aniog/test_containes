const TrustBar = () => {
    return (
      <section className="bg-velmora-stone py-4 px-6 md:px-12 border-y border-velmora-black/5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-12 md:gap-4 min-w-max md:min-w-0">
          {[
            'Free Worldwide Shipping',
            '30-Day Returns',
            '18K Gold Plated',
            'Hypoallergenic'
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold opacity-60" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">{text}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default TrustBar;