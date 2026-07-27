import { useStrkImages } from "@/hooks/useStrkImages";
import StockBackground from "./StockBackground";

export default function PageHeader({ eyebrow, title, description, queryId, query }) {
  const bgRef = useStrkImages([]);

  return (
    <section className="relative bg-slate-900 py-20 md:py-28 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0">
        <StockBackground
          id={`page-header-bg-${queryId}`}
          query={query}
          ratio="16x9"
          width="1600"
          className="absolute inset-0 opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {description && <p className="text-lg md:text-xl text-slate-300">{description}</p>}
        </div>
      </div>
    </section>
  );
}
