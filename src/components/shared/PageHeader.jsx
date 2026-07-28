import { Link } from "react-router-dom";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-200">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>/</span>
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-navy-100">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
