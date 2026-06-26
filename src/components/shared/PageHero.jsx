import StockImage from '@/components/shared/StockImage'

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative bg-brand-ink text-white overflow-hidden">
      {image && (
        <div className="absolute inset-0 opacity-30">
          <StockImage
            imgId={image.imgId}
            query={image.query}
            ratio="16x9"
            width={1600}
            alt=""
            rounded="rounded-none"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/70 via-brand-ink/80 to-brand-ink" />
        </div>
      )}
      <div className="relative container-page py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent-2 mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}