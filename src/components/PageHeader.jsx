export default function PageHeader({ badge, title, description }) {
  return (
    <div className="bg-white pb-12 pt-16 md:pb-16 md:pt-24">
      <div className="container-main text-center">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
