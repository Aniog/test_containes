import { Link } from 'react-router-dom'

export default function Placeholder({ title, description }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center px-5">
        <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-muted mb-3">
          Coming Soon
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-text mb-4">
          {title}
        </h1>
        {description && (
          <p className="font-sans text-sm text-velmora-muted mb-8 max-w-md mx-auto">
            {description}
          </p>
        )}
        <Link to="/shop" className="btn-accent">
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
