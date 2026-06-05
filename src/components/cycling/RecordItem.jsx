import { Trash2, Calendar, Clock, MapPin, Bike } from 'lucide-react';

const RIDE_TYPES = ['Speed', 'Team', 'Relax'];
const DISTANCES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RecordItem = ({ index, record, onChange, onRemove, canRemove, errors }) => {
  const handleField = (field, value) => {
    onChange(index, { ...record, [field]: value });
  };

  const fieldError = (field) => errors?.[field];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <span className="font-semibold text-gray-700 text-sm">Ride Record</span>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
            aria-label="Remove record"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Date <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="date"
            value={record.date || ''}
            min="2026-06-01"
            max="2026-06-30"
            onChange={(e) => handleField('date', e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
              fieldError('date') ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
            }`}
          />
          {fieldError('date') && <p className="text-red-500 text-xs mt-1">{fieldError('date')}</p>}
        </div>

        {/* Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <Bike className="w-3.5 h-3.5" /> Type <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            value={record.type || ''}
            onChange={(e) => handleField('type', e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition bg-white ${
              fieldError('type') ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          >
            <option value="" disabled>Select a type...</option>
            {RIDE_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {fieldError('type') && <p className="text-red-500 text-xs mt-1">{fieldError('type')}</p>}
        </div>

        {/* Start At */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Start At <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="time"
            value={record.start_at || ''}
            onChange={(e) => handleField('start_at', e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
              fieldError('start_at') ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
            }`}
          />
          {fieldError('start_at') && <p className="text-red-500 text-xs mt-1">{fieldError('start_at')}</p>}
        </div>

        {/* End At */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> End At <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="time"
            value={record.end_at || ''}
            onChange={(e) => handleField('end_at', e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
              fieldError('end_at') ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
            }`}
          />
          {fieldError('end_at') && <p className="text-red-500 text-xs mt-1">{fieldError('end_at')}</p>}
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Location <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            value={record.location || ''}
            onChange={(e) => handleField('location', e.target.value)}
            placeholder="e.g. Central Park, Riverside Trail..."
            className={`w-full border rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
              fieldError('location') ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
            }`}
          />
          {fieldError('location') && <p className="text-red-500 text-xs mt-1">{fieldError('location')}</p>}
        </div>

        {/* Distance */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            Distance (km) <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {DISTANCES.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => handleField('distance_km', d)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold border transition ${
                  record.distance_km === d
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                    : 'border-gray-200 text-gray-600 bg-white hover:bg-emerald-50 hover:border-emerald-300'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          {fieldError('distance_km') && (
            <p className="text-red-500 text-xs mt-1">{fieldError('distance_km')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordItem;
