export default function PressBar() {
  const publications = ['VOGUE', 'ELLE', 'HARPER\'S BAZAAR', 'WHO WHAT WEAR', 'MARIE CLAIRE', 'THE EDIT'];

  return (
    <section className="border-t border-b border-brand-sand/50 py-10 md:py-12">
      <div className="section-padding">
        <p className="text-center font-sans text-[11px] tracking-[0.3em] uppercase text-brand-smoke/60 mb-8">As Seen In</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {publications.map((pub) => (
            <span key={pub} className="font-serif text-lg md:text-xl tracking-[0.15em] text-brand-smoke/40 hover:text-brand-smoke/70 transition-colors duration-500 cursor-default">
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}