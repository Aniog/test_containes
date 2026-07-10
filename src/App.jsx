import { useState } from 'react'
import { Plus, Trash2, MapPin, Calendar, Plane } from 'lucide-react'

const generateId = () => Math.random().toString(36).slice(2, 9)

const ACTIVITY_TYPES = ['Sightseeing', 'Food', 'Transport', 'Accommodation', 'Activity', 'Other']

const TYPE_COLORS = {
  Sightseeing: 'bg-sky-100 text-sky-700',
  Food: 'bg-orange-100 text-orange-700',
  Transport: 'bg-purple-100 text-purple-700',
  Accommodation: 'bg-green-100 text-green-700',
  Activity: 'bg-pink-100 text-pink-700',
  Other: 'bg-slate-100 text-slate-600',
}

function ActivityRow({ activity, onRemove, onUpdate }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group">
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
        <input
          type="text"
          value={activity.title}
          onChange={(e) => onUpdate({ ...activity, title: e.target.value })}
          placeholder="Activity name…"
          className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none font-medium"
        />
        <div className="flex items-center gap-2">
          <input
            type="time"
            value={activity.time}
            onChange={(e) => onUpdate({ ...activity, time: e.target.value })}
            className="text-xs text-slate-500 bg-transparent outline-none"
          />
          <select
            value={activity.type}
            onChange={(e) => onUpdate({ ...activity, type: e.target.value })}
            className={`text-xs px-2 py-0.5 rounded-full font-medium outline-none border-0 cursor-pointer ${TYPE_COLORS[activity.type]}`}
          >
            {ACTIVITY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="p-1 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
        title="Remove activity"
      >
        <Trash2 size={14} />
      </button>
    </div>
  )
}

function DayCard({ day, dayNumber, onRemove, onUpdate, totalDays }) {
  const [newActivityTitle, setNewActivityTitle] = useState('')

  const addActivity = () => {
    const title = newActivityTitle.trim()
    const activity = {
      id: generateId(),
      title: title || 'New activity',
      time: '',
      type: 'Sightseeing',
    }
    onUpdate({ ...day, activities: [...day.activities, activity] })
    setNewActivityTitle('')
  }

  const removeActivity = (id) => {
    onUpdate({ ...day, activities: day.activities.filter((a) => a.id !== id) })
  }

  const updateActivity = (updated) => {
    onUpdate({
      ...day,
      activities: day.activities.map((a) => (a.id === updated.id ? updated : a)),
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addActivity()
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
            value={day.label}
            onChange={(e) => onUpdate({ ...day, label: e.target.value })}
            placeholder={`Day ${dayNumber}`}
            className="text-base font-semibold text-slate-800 bg-transparent outline-none placeholder-slate-400 w-full"
          />
        </div>
        {totalDays > 1 && (
          <button
            onClick={onRemove}
            className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors flex-shrink-0"
            title="Remove day"
          >
            <Trash2 size={15} />
          </button>
        )}
      </div>

      <div className="px-5 py-4 space-y-2">
        {day.activities.length === 0 && (
          <p className="text-sm text-slate-400 text-center py-2">No activities yet. Add one below.</p>
        )}
        {day.activities.map((activity) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            onRemove={() => removeActivity(activity.id)}
            onUpdate={updateActivity}
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
            onClick={addActivity}
            className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-3 py-2 rounded-xl transition-colors"
          >
            <Plus size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

const initialDays = [
  {
    id: generateId(),
    label: 'Arrival Day',
    activities: [
      { id: generateId(), title: 'Check in to hotel', time: '14:00', type: 'Accommodation' },
      { id: generateId(), title: 'Explore the neighborhood', time: '17:00', type: 'Sightseeing' },
      { id: generateId(), title: 'Welcome dinner', time: '19:30', type: 'Food' },
    ],
  },
  {
    id: generateId(),
    label: 'City Tour',
    activities: [
      { id: generateId(), title: 'Museum visit', time: '10:00', type: 'Sightseeing' },
      { id: generateId(), title: 'Lunch at local café', time: '13:00', type: 'Food' },
    ],
  },
]

export default function App() {
  const [tripName, setTripName] = useState('My Trip')
  const [destination, setDestination] = useState('')
  const [days, setDays] = useState(initialDays)

  const addDay = () => {
    setDays((prev) => [
      ...prev,
      { id: generateId(), label: '', activities: [] },
    ])
  }

  const removeDay = (id) => {
    setDays((prev) => prev.filter((d) => d.id !== id))
  }

  const updateDay = (updated) => {
    setDays((prev) => prev.map((d) => (d.id === updated.id ? updated : d)))
  }

  const totalActivities = days.reduce((sum, d) => sum + d.activities.length, 0)

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
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              placeholder="Trip name…"
              className="text-xl font-bold text-slate-800 bg-transparent outline-none w-full placeholder-slate-400"
            />
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Destination…"
                className="text-sm text-slate-500 bg-transparent outline-none placeholder-slate-400"
              />
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-sm font-semibold text-slate-700">{days.length} {days.length === 1 ? 'day' : 'days'}</span>
            <span className="text-xs text-slate-400">{totalActivities} activities</span>
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
            onRemove={() => removeDay(day.id)}
            onUpdate={updateDay}
          />
        ))}

        <button
          onClick={addDay}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 hover:border-sky-400 hover:bg-sky-50 text-slate-400 hover:text-sky-600 rounded-2xl py-4 text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Add Day
        </button>
      </main>
    </div>
  )
}
