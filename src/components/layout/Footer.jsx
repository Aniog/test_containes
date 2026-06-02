export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-display text-3xl font-light tracking-[0.3em] text-ink">PULP</span>
            <p className="mt-2 text-xs font-mono tracking-widest text-ink-faint uppercase">
              Fine Stationery & Print Studio
            </p>
          </div>

          <div className="flex flex-col gap-1 text-right">
            <p className="text-xs font-mono tracking-widest text-ink-faint uppercase">Est. 2019</p>
            <a
              href="mailto:hello@pulpstudio.com"
              className="text-sm font-mono text-ink-muted hover:text-ink transition-colors"
            >
              hello@pulpstudio.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-ink-faint tracking-widest">
            © {new Date().getFullYear()} PULP Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Pinterest', 'Behance'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs font-mono tracking-widest text-ink-faint hover:text-ink-muted uppercase transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
