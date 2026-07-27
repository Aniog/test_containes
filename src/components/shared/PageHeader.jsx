import { useImageLoader } from "@/hooks/useImageLoader"
import { StrkBackground } from "@/components/shared/StrkImage"

export function PageHeader({ eyebrow, title, description, bgId }) {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-900">
      <StrkBackground
        bgId={bgId}
        query="[pageheader-subtitle] [pageheader-title]"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-brand-800/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              {eyebrow}
            </p>
          )}
          <h1
            id="pageheader-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </h1>
          {description && (
            <p
              id="pageheader-subtitle"
              className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHeader
