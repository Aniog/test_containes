import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { CalendarDays, Clock, Users, CheckCircle2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TIME_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
]

const PARTY_SIZES = Array.from({ length: 20 }, (_, i) => i + 1)

const initialValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  party_size: '',
  special_requests: '',
}

function validate(v) {
  if (!v.name.trim()) return 'Full name is required.'
  if (!v.email.trim() || !/^\S+@\S+\.\S+$/.test(v.email)) return 'A valid email is required.'
  if (!v.date) return 'Please select a date.'
  if (!v.time) return 'Please select a time slot.'
  if (!v.party_size) return 'Please select party size.'
  return null
}

export default function BookingForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    const { data: response, error: createError } = await client
      .from('TableBooking')
      .insert({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          date: values.date,
          time: values.time,
          party_size: parseInt(values.party_size, 10),
          special_requests: values.special_requests || undefined,
          status: 'pending',
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : createError?.message || 'Booking failed. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center px-4">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Booking Confirmed!</h2>
        <p className="text-stone-500 max-w-md">
          Thank you! We've received your reservation and will send a confirmation to your email shortly. We look forward to seeing you!
        </p>
        <Button className="mt-6" onClick={() => setStatus('idle')}>Make Another Booking</Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Doe"
            value={values.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={values.email}
            onChange={onChange}
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(212) 555-0192"
          value={values.phone}
          onChange={onChange}
        />
      </div>

      {/* Date, Time, Party Size */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="date" className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-red-500" /> Date *
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={onChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="time" className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-red-500" /> Time *
          </Label>
          <Select id="time" name="time" value={values.time} onChange={onChange} required>
            <option value="">Select time</option>
            {TIME_SLOTS.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="party_size" className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-red-500" /> Guests *
          </Label>
          <Select id="party_size" name="party_size" value={values.party_size} onChange={onChange} required>
            <option value="">Select guests</option>
            {PARTY_SIZES.map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
            ))}
          </Select>
        </div>
      </div>

      {/* Special requests */}
      <div className="space-y-1.5">
        <Label htmlFor="special_requests">Special Requests</Label>
        <Textarea
          id="special_requests"
          name="special_requests"
          placeholder="Dietary requirements, celebrations, seating preferences..."
          value={values.special_requests}
          onChange={onChange}
          rows={4}
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Confirming Reservation…' : 'Confirm Reservation'}
      </Button>
    </form>
  )
}
