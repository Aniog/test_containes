export function SectionHeading({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-playfair text-3xl font-medium text-espresso md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
