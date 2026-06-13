import PrimaryCta from '@/components/common/PrimaryCta'

const PageHero = ({ eyebrow, title, description, titleId, descriptionId, visual }) => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl" id={titleId}>
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600" id={descriptionId}>
            {description}
          </p>
          <div className="mt-8">
            <PrimaryCta />
          </div>
        </div>

        {visual}
      </div>
    </section>
  )
}

export default PageHero
