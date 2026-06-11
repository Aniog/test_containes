export default function PageHeader({ eyebrow, title, description, bgId, bgQuery }) {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id={bgId}
        data-strk-bg={bgQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {eyebrow && (
          <p
            id={`${bgId}-eyebrow`}
            className="text-amber-400 font-semibold text-sm uppercase tracking-widest"
          >
            {eyebrow}
          </p>
        )}
        <h1
          id={`${bgId}-title`}
          className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl"
        >
          {title}
        </h1>
        {description && (
          <p
            id={`${bgId}-desc`}
            className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
