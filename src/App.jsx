import { useState, useEffect, useCallback, useRef } from 'react'
import { Plus, Trash2, MapPin, Calendar, Plane, Loader2 } from 'lucide-react'
import {
  fetchTrips, createTrip, updateTrip, deleteTrip,
  fetchDays, createDay, updateDay, deleteDay,
  fetchActivities, createActivity, updateActivity, deleteActivity,
} from './api/itinerary.js'

const ACTIVITY_TYPES = ['Sightseeing', 'Food', 'Transport', 'Accommodation', 'Activity', 'Other']

const TYPE_COLORS = {
  Sightseeing: 'bg-sky-100 text-sky-700',
  Food: 'bg-orange-100 text-orange-700',
  Transport: 'bg-purple-100 text-purple-700',
  Accommodation: 'bg-green-100 text-green-700',
  Activity: 'bg-pink-100 text-pink-700',
  Other: 'bg-slate-100 text-slate-600',
}

function useDebounce(fn, delay) {
  const timer = useRef(null)
  return useCallback((...args) => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => fn(...args), delay)
  }, [fn, delay])
}

function ActivityRow({ activity, onRemove, onUpdate, saving }) {
  const fields = activity.data ?? {}

  const handleField = (key, value) => {
    onUpdate(activity, { ...fields, [key]: value })
  }

  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group">
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
        <input
          type="text"
          defaultValue={fields.title}
          onBlur={(e) => handleField('title', e.target.value)}
          placeholder="Activity name…"
          className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none font-medium"
        />
        <div className="flex items-center gap-2">
          <input
            type="time"
            defaultValue={fields.time}
            onBlur={(e) => handleField('time', e.target.value)}
            className="text-xs text-slate-500 bg-transparent outline-none"
          />
          <select
            value={fields.type}
            onChange={(e) => handleField('type', e.target.value)}
            className={`text-xs px-2 py-0.5 rounded-full font-medium outline-none border-0 cursor-pointer ${TYPE_COLORS[fields.type] ?? TYPE_COLORS.Other}`}
          >
            {ACTIVITY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={() => onRemove(activity)}
        disabled={saving}
        className="p-1 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-30"
        title="Remove activity"
      >
        <Trash2 size={14} />
      </button>
    </div>
  )
}

function DayCard({ day, dayNumber, totalDays, onRemoveDay, onUpdateDayLabel, activities, onAddActivity, onRemoveActivity, onUpdateActivity, saving }) {
  const [newActivityTitle, setNewActivityTitle] = useState('')
  const fields = day.data ?? {}

  const handleAdd = async () => {
    const title = newActivityTitle.trim()
    if (!title) return
    setNewActivityTitle('')
    await onAddActivity(day, title)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
            {dayNumber}
          </div>
          <input
            type="text"
            defaultValue={fields.label ?? ''}
            onBlur={(e) => onUpdateDayLabel(day, e.target.value)}
            placeholder={`Day ${dayNumber}`}
            className="text-base font-semibold text-slate-800 bg-transparent outline-none placeholder-slate-400 w-full"
          />
        </div>
        {totalDays > 1 && (
          <button
            onClick={() => onRemoveDay(day)}
            disabled={saving}
            className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors flex-shrink-0 disabled:opacity-30"
            title="Remove day"
          >
            <Trash2 size={15} />
          </button>
        )}
      </div>

      <div className="px-5 py-4 space-y-2">
        {activities.length === 0 && (
          <p className="text-sm text-slate-400 text-center py-2">No activities yet. Add one below.</p>
        )}
        {activities.map((activity) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            onRemove={onRemoveActivity}
            onUpdate={onUpdateActivity}
            saving={saving}
          />
        ))}

        <div className="flex items-center gap-2 pt-1">
          <input
            type="text"
            value={newActivityTitle}
            onChange={(e) => setNewActivityTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add an activity…"
            className="flex-1 text-sm text-slate-700 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-sky-400 transition-colors"
          />
          <button
            onClick={handleAdd}
            disabled={saving || !newActivityTitle.trim()}
            className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white text-sm font-medium px-3 py-2 rounded-xl transition-colors"
          >
            <Plus size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [trip, setTrip] = useState(null)
  const [days, setDays] = useState([])
  const [activitiesByDay, setActivitiesByDay] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  // Load or create the single trip on mount
  useEffect(() => {
    async function init() {
      try {
        setLoading(true)
        const trips = await fetchTrips()
        let currentTrip = trips[0]
        if (!currentTrip) {
          currentTrip = await createTrip('My Trip', '')
        }
        setTrip(currentTrip)

        const tripDays = await fetchDays(currentTrip.id)
        setDays(tripDays)

        const actMap = {}
        await Promise.all(
          tripDays.map(async (d) => {
            actMap[d.id] = await fetchActivities(d.id)
          })
        )
        setActivitiesByDay(actMap)
      } catch (err) {
        console.error(err)
        setError('Failed to load itinerary.')
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  const totalActivities = Object.values(activitiesByDay).reduce((s, arr) => s + arr.length, 0)

  // Trip name / destination update (debounced)
  const persistTripName = useCallback(async (field, value) => {
    if (!trip) return
    try {
      const updated = await updateTrip(trip.id, { [field]: value }, trip)
      setTrip(updated)
    } catch (err) { console.error(err) }
  }, [trip])

  const debouncedTripName = useDebounce((v) => persistTripName('name', v), 600)
  const debouncedTripDest = useDebounce((v) => persistTripName('destination', v), 600)

  // Add day
  const handleAddDay = async () => {
    if (!trip) return
    setSaving(true)
    try {
      const order = days.length + 1
      const newDay = await createDay(trip.id, '', order)
      setDays((prev) => [...prev, newDay])
      setActivitiesByDay((prev) => ({ ...prev, [newDay.id]: [] }))
    } catch (err) { console.error(err) }
    finally { setSaving(false) }
  }

  // Remove day
  const handleRemoveDay = async (day) => {
    setSaving(true)
    try {
      await deleteDay(day.id)
      setDays((prev) => prev.filter((d) => d.id !== day.id))
      setActivitiesByDay((prev) => {
        const next = { ...prev }
        delete next[day.id]
        return next
      })
    } catch (err) { console.error(err) }
    finally { setSaving(false) }
  }

  // Update day label
  const handleUpdateDayLabel = async (day, label) => {
    try {
      const updated = await updateDay(day.id, { label }, day)
      setDays((prev) => prev.map((d) => (d.id === updated.id ? updated : d)))
    } catch (err) { console.error(err) }
  }

  // Add activity
  const handleAddActivity = async (day, title) => {
    setSaving(true)
    try {
      const existing = activitiesByDay[day.id] ?? []
      const order = existing.length + 1
      const newAct = await createActivity(day.id, title, '', 'Sightseeing', order)
      setActivitiesByDay((prev) => ({
        ...prev,
        [day.id]: [...(prev[day.id] ?? []), newAct],
      }))
    } catch (err) { console.error(err) }
    finally { setSaving(false) }
  }

  // Remove activity
  const handleRemoveActivity = async (activity) => {
    setSaving(true)
    try {
      const dayId = activity.data?.day_id
      await deleteActivity(activity.id)
      setActivitiesByDay((prev) => ({
        ...prev,
        [dayId]: (prev[dayId] ?? []).filter((a) => a.id !== activity.id),
      }))
    } catch (err) { console.error(err) }
    finally { setSaving(false) }
  }

  // Update activity
  const handleUpdateActivity = async (activity, newFields) => {
    try {
      const updated = await updateActivity(activity.id, newFields, activity)
      const dayId = updated.data?.day_id
      setActivitiesByDay((prev) => ({
        ...prev,
        [dayId]: (prev[dayId] ?? []).map((a) => (a.id === updated.id ? updated : a)),
      }))
    } catch (err) { console.error(err) }
  }

  const tripFields = trip?.data ?? {}

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <Loader2 size={32} className="animate-spin text-sky-500" />
          <span className="text-sm">Loading your itinerary…</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
            <Plane size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <input
              type="text"
              defaultValue={tripFields.name ?? 'My Trip'}
              onChange={(e) => debouncedTripName(e.target.value)}
              placeholder="Trip name…"
              className="text-xl font-bold text-slate-800 bg-transparent outline-none w-full placeholder-slate-400"
            />
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-slate-400 flex-shrink-0" />
              <input
                type="text"
                defaultValue={tripFields.destination ?? ''}
                onChange={(e) => debouncedTripDest(e.target.value)}
                placeholder="Destination…"
                className="text-sm text-slate-500 bg-transparent outline-none placeholder-slate-400"
              />
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end text-right gap-0.5">
            <span className="text-sm font-semibold text-slate-700">{days.length} {days.length === 1 ? 'day' : 'days'}</span>
            <span className="text-xs text-slate-400">{totalActivities} activities</span>
            {saving && <Loader2 size={12} className="animate-spin text-sky-400 mt-0.5" />}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Calendar size={13} />
          <span>{days.length} {days.length === 1 ? 'day' : 'days'} · {totalActivities} activities planned</span>
        </div>

        {days.map((day, index) => (
          <DayCard
            key={day.id}
            day={day}
            dayNumber={index + 1}
            totalDays={days.length}
            activities={activitiesByDay[day.id] ?? []}
            onRemoveDay={handleRemoveDay}
            onUpdateDayLabel={handleUpdateDayLabel}
            onAddActivity={handleAddActivity}
            onRemoveActivity={handleRemoveActivity}
            onUpdateActivity={handleUpdateActivity}
            saving={saving}
          />
        ))}

        <button
          onClick={handleAddDay}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 hover:border-sky-400 hover:bg-sky-50 text-slate-400 hover:text-sky-600 rounded-2xl py-4 text-sm font-medium transition-colors disabled:opacity-50"
        >
          <Plus size={16} />
          Add Day
        </button>
      </main>
    </div>
  )
}
