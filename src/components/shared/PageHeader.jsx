export default function PageHeader({ title, description, badge, pageId = 'page' }) {
  const bgId = `page-header-bg-${pageId}`

  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 lg:py-28">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id={bgId}
        data-strk-bg="[page-header-title] [page-header-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
            {badge}
          </span>
        )}
        <h1 id="page-header-title" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p id="page-header-desc" className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          {description}
        </p>
      </div>
    </section>
  )
}
