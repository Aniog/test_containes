import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'

export default function HomeBookingCTA() {
  return (
    <section className="py-16 md:py-24 bg-red-600">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <CalendarDays className="w-12 h-12 text-red-200 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Reserve Your Table Tonight
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
          Join us for an unforgettable dining experience. Book your table in minutes and we'll have everything ready for you.
        </p>
        <Link to="/booking">
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50 font-bold shadow-lg"
          >
            Book a Table Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
