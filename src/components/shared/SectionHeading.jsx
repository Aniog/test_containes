const SectionHeading = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="editorial-heading mt-3 text-4xl sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
