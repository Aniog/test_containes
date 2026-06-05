import { useState } from 'react'
import { Trash2, Plus, Bike, CheckCircle2, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const DISTANCE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const SEX_OPTIONS = ['Male', 'Female', 'Other', 'Prefer not to say']

const emptyRecord = () => ({
  date: '',
  start_at: '',
  end_at: '',
  location: '',
  distance_km: '',
})

const emptyForm = () => ({
  name: '',
  email: '',
  phone: '',
  age: '',
  sex: '',
  records: [emptyRecord()],
})

function InputField({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  )
}

function TextInput({ value, onChange, placeholder, type = 'text', className = '' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400 ${className}`}
    />
  )
}

function SelectInput({ value, onChange, options, placeholder }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )
}

function RecordCard({ record, index, onChange, onRemove, canRemove, errors }) {
  const update = (field, value) => onChange(index, { ...record, [field]: value })

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{index + 1}</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">Record #{index + 1}</span>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Remove
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Date" required error={errors?.date}>
          <input
            type="date"
            value={record.date}
            onChange={(e) => update('date', e.target.value)}
            className="w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </InputField>

        <InputField label="Distance (km)" required error={errors?.distance_km}>
          <SelectInput
            value={record.distance_km}
            onChange={(e) => update('distance_km', Number(e.target.value))}
            options={DISTANCE_OPTIONS}
            placeholder="Select distance"
          />
        </InputField>

        <InputField label="Start At" required error={errors?.start_at}>
          <input
            type="time"
            value={record.start_at}
            onChange={(e) => update('start_at', e.target.value)}
            className="w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </InputField>

        <InputField label="End At" required error={errors?.end_at}>
          <input
            type="time"
            value={record.end_at}
            onChange={(e) => update('end_at', e.target.value)}
            className="w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </InputField>

        <div className="md:col-span-2">
          <InputField label="Location" required error={errors?.location}>
            <TextInput
              value={record.location}
              onChange={(e) => update('location', e.target.value)}
              placeholder="e.g. Central Park, NYC"
            />
          </InputField>
        </div>
      </div>
    </div>
  )
}

function validateForm(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email'
  }
  if (values.age && (isNaN(values.age) || values.age < 1 || values.age > 120)) {
    errors.age = 'Age must be between 1 and 120'
  }

  const recordErrors = values.records.map((r) => {
    const re = {}
    if (!r.date) re.date = 'Date is required'
    if (!r.start_at) re.start_at = 'Start time is required'
    if (!r.end_at) re.end_at = 'End time is required'
    if (!r.location.trim()) re.location = 'Location is required'
    if (!r.distance_km) re.distance_km = 'Distance is required'
    return Object.keys(re).length > 0 ? re : null
  })

  if (recordErrors.some(Boolean)) errors.records = recordErrors

  return errors
}

export default function CyclingForm() {
  const [values, setValues] = useState(emptyForm())
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState(null)

  const updateField = (field, value) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const updateRecord = (index, updated) => {
    const next = values.records.map((r, i) => (i === index ? updated : r))
    setValues((v) => ({ ...v, records: next }))
    if (errors.records) {
      const nextRecordErrors = (errors.records || []).map((re, i) =>
        i === index ? null : re
      )
      setErrors((e) => ({ ...e, records: nextRecordErrors }))
    }
  }

  const addRecord = () => {
    setValues((v) => ({ ...v, records: [...v.records, emptyRecord()] }))
  }

  const removeRecord = (index) => {
    setValues((v) => ({ ...v, records: v.records.filter((_, i) => i !== index) }))
    if (errors.records) {
      setErrors((e) => ({
        ...e,
        records: (e.records || []).filter((_, i) => i !== index),
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)

    const validationErrors = validateForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      records: values.records.map((r) => ({
        date: r.date,
        start_at: r.start_at,
        end_at: r.end_at,
        location: r.location.trim(),
        distance_km: Number(r.distance_km),
      })),
    }
    if (values.phone.trim()) payload.phone = values.phone.trim()
    if (values.age) payload.age = Number(values.age)
    if (values.sex) payload.sex = values.sex

    const { data: response, error } = await client
      .from('Your Cycling Record (May)')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed. Please try again.'
      setSubmitError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
  }

  const handleReset = () => {
    setValues(emptyForm())
    setErrors({})
    setStatus('idle')
    setSubmitError(null)
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 max-w-md w-full text-center">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Record Submitted!</h2>
          <p className="text-slate-500 text-sm mb-8">
            Your cycling records for May have been saved successfully. Keep pedaling!
          </p>
          <button
            onClick={handleReset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Submit Another Record
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
              <Bike className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Cycling Record (May)</h1>
          <p className="text-slate-500 text-sm">
            Log your cycling sessions for May. Add as many records as you like!
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-5">
            <h2 className="text-base font-semibold text-slate-800 mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full inline-block" />
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Full Name" required error={errors.name}>
                <TextInput
                  value={values.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Your full name"
                />
              </InputField>

              <InputField label="Email" required error={errors.email}>
                <TextInput
                  type="email"
                  value={values.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </InputField>

              <InputField label="Phone" error={errors.phone}>
                <TextInput
                  type="tel"
                  value={values.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+1 234 567 8900"
                />
              </InputField>

              <InputField label="Age" error={errors.age}>
                <TextInput
                  type="number"
                  value={values.age}
                  onChange={(e) => updateField('age', e.target.value)}
                  placeholder="e.g. 28"
                />
              </InputField>

              <div className="md:col-span-2">
                <InputField label="Sex" error={errors.sex}>
                  <SelectInput
                    value={values.sex}
                    onChange={(e) => updateField('sex', e.target.value)}
                    options={SEX_OPTIONS}
                    placeholder="Select your sex"
                  />
                </InputField>
              </div>
            </div>
          </div>

          {/* Cycling Records */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded-full inline-block" />
                Cycling Records
                <span className="text-xs font-normal text-red-500 ml-1">* at least 1 required</span>
              </h2>
              <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                {values.records.length} {values.records.length === 1 ? 'record' : 'records'}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {values.records.map((record, index) => (
                <RecordCard
                  key={index}
                  record={record}
                  index={index}
                  onChange={updateRecord}
                  onRemove={removeRecord}
                  canRemove={values.records.length > 1}
                  errors={errors.records?.[index]}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={addRecord}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 border-dashed rounded-xl transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Another Record
            </button>
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm"
          >
            {status === 'submitting' ? 'Submitting…' : 'Submit My Cycling Records'}
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>
        </form>
      </div>
    </div>
  )
}
