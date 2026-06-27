import { Link } from "react-router-dom"

export default function SectionHeading({ eyebrow, title, link, align = "center" }) {
  const isCenter = align === "center"
  return (
    <div
      className={
        isCenter
          ? "mb-12 flex flex-col items-center text-center sm:mb-16"
          : "mb-12 flex items-end justify-between sm:mb-16"
      }
    >
      <div>
        {eyebrow && (
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-4xl font-light text-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      {link && (
        <Link
          to={link.to}
          className="mt-4 text-[11px] uppercase tracking-[0.2em] text-ink-soft underline-offset-4 transition-colors hover:text-gold-deep hover:underline sm:mt-0"
        >
          {link.label}
        </Link>
      )}
    </div>
  )
}
