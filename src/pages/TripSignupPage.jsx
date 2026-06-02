import React, { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card.jsx'
import { Button } from '../components/ui/button.jsx'
import { Input } from '../components/ui/input.jsx'
import { Label } from '../components/ui/label.jsx'
import { Select } from '../components/ui/select.jsx'
import { MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const DATE_OPTIONS = [
  { value: '06/07', label: 'June 7 (06/07)' },
  { value: '06/08', label: 'June 8 (06/08)' },
  { value: '06/09', label: 'June 9 (06/09)' },
]

const INITIAL_VALUES = {
  student_name: '',
  student_id: '',
  email: '',
  phone: '',
  trip_date: '',
  emergency_contact_name: '',
  emergency_contact_phone: '',
  dietary_requirements: '',
  notes: '',
}

function FieldGroup({ label, required, children, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>
      {children}
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  )
}

export default function TripSignupPage() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.student_name.trim()) return 'Student name is required.'
    if (!values.email.trim()) return 'Email address is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.trip_date) return 'Please select a trip date.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const err = validate()
    if (err) {
      setErrorMsg(err)
      return
    }

    setStatus('submitting')
    console.log('Submitting trip signup:', values)

    const payload = {
      data: {
        student_name: values.student_name.trim(),
        email: values.email.trim(),
        trip_date: values.trip_date,
        ...(values.student_id.trim() && { student_id: values.student_id.trim() }),
        ...(values.phone.trim() && { phone: values.phone.trim() }),
        ...(values.emergency_contact_name.trim() && { emergency_contact_name: values.emergency_contact_name.trim() }),
        ...(values.emergency_contact_phone.trim() && { emergency_contact_phone: values.emergency_contact_phone.trim() }),
        ...(values.dietary_requirements.trim() && { dietary_requirements: values.dietary_requirements.trim() }),
        ...(values.notes.trim() && { notes: values.notes.trim() }),
      },
    }

    const { data: response, error } = await client
      .from('Trip Signups')
      .insert(payload)
      .select()
      .single()

    if (error || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed. Please try again.'
      console.error('Signup error:', msg)
      setErrorMsg(msg)
      setStatus('error')
      return
    }

    console.log('Signup successful:', response)
    setStatus('success')
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
    setStatus('idle')
    setErrorMsg('')
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-10 pb-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">You're signed up!</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Thanks, <span className="font-medium text-gray-700">{values.student_name}</span>! Your spot on the{' '}
              <span className="font-medium text-gray-700">
                {DATE_OPTIONS.find((d) => d.value === values.trip_date)?.label}
              </span>{' '}
              Shanghai trip has been recorded. A confirmation will be sent to{' '}
              <span className="font-medium text-gray-700">{values.email}</span>.
            </p>
            <Button onClick={handleReset} variant="outline" className="mt-2">
              Submit another response
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Class Trip
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shanghai Trip Sign-Up</h1>
          <p className="text-gray-500 text-base">
            Register your spot for our upcoming class trip to Shanghai.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-blue-700 font-medium">
            <Calendar className="w-4 h-4" />
            Available dates: June 7, 8, or 9
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Student Information</CardTitle>
            <CardDescription>Fields marked with * are required.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Student Name */}
                <div className="md:col-span-2">
                  <FieldGroup label="Full Name" required>
                    <Input
                      name="student_name"
                      value={values.student_name}
                      onChange={onChange}
                      placeholder="e.g. Zhang Wei"
                      autoComplete="name"
                    />
                  </FieldGroup>
                </div>

                {/* Student ID */}
                <FieldGroup label="Student ID">
                  <Input
                    name="student_id"
                    value={values.student_id}
                    onChange={onChange}
                    placeholder="e.g. 2024001"
                  />
                </FieldGroup>

                {/* Email */}
                <FieldGroup label="Email Address" required>
                  <Input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="you@school.edu"
                    autoComplete="email"
                  />
                </FieldGroup>

                {/* Phone */}
                <FieldGroup label="Phone Number">
                  <Input
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="e.g. 138 0000 0000"
                    autoComplete="tel"
                  />
                </FieldGroup>

                {/* Trip Date */}
                <FieldGroup label="Preferred Trip Date" required>
                  <Select
                    name="trip_date"
                    value={values.trip_date}
                    onChange={onChange}
                  >
                    <option value="">Select a date…</option>
                    {DATE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </Select>
                </FieldGroup>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-6" />

              <h3 className="text-base font-semibold text-gray-800 mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FieldGroup label="Contact Name">
                  <Input
                    name="emergency_contact_name"
                    value={values.emergency_contact_name}
                    onChange={onChange}
                    placeholder="Parent / Guardian name"
                  />
                </FieldGroup>
                <FieldGroup label="Contact Phone">
                  <Input
                    name="emergency_contact_phone"
                    type="tel"
                    value={values.emergency_contact_phone}
                    onChange={onChange}
                    placeholder="e.g. 138 0000 0001"
                  />
                </FieldGroup>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-6" />

              <div className="flex flex-col gap-5">
                <FieldGroup label="Dietary Requirements / Allergies" hint="Leave blank if none.">
                  <textarea
                    name="dietary_requirements"
                    value={values.dietary_requirements}
                    onChange={onChange}
                    rows={2}
                    placeholder="e.g. Vegetarian, nut allergy…"
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </FieldGroup>

                <FieldGroup label="Additional Notes" hint="Any special requests or questions.">
                  <textarea
                    name="notes"
                    value={values.notes}
                    onChange={onChange}
                    rows={3}
                    placeholder="Anything else we should know…"
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </FieldGroup>
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="mt-5 flex items-start gap-2 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full mt-6"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting…' : 'Submit Sign-Up'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-400 mt-6">
          Your information is collected solely for trip planning purposes.
        </p>
      </div>
    </div>
  )
}
