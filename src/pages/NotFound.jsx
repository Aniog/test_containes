import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NotFound = () => (
  <section className="section">
    <div className="container-content text-center max-w-2xl">
      <p className="kicker">404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-base md:text-lg text-primary-600">
        The page you were looking for does not exist or has been moved.
      </p>
      <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <Link to="/contact" className="btn-secondary">
          Contact us
        </Link>
      </div>
    </div>
  </section>
)

export default NotFound
