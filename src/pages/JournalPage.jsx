export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-brand-espresso py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
            Journal
          </h1>
          <p className="mt-3 text-sm text-white/60 font-sans">
            Stories, styling tips, and inspiration
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <p className="font-serif text-xl text-brand-muted">Coming soon</p>
        <p className="mt-2 text-sm text-brand-muted font-sans">
          We're working on bringing you inspiring content about jewelry, style, and the art of everyday luxury.
        </p>
      </div>
    </div>
  );
}
