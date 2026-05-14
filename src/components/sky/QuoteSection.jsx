const QuoteSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0a1628] via-[#1e3a5f] to-[#0a1628] py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-1 bg-sky-400 mx-auto mb-10 rounded-full" />
        <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed italic mb-8">
          "The sky is not the limit — it is just the beginning of an infinite canvas
          painted anew with every passing moment."
        </blockquote>
        <p className="text-sky-400 font-semibold tracking-widest uppercase text-sm">
          — A Sky Watcher's Creed
        </p>
        <div className="w-16 h-1 bg-sky-400 mx-auto mt-10 rounded-full" />
      </div>
    </section>
  );
};

export default QuoteSection;
