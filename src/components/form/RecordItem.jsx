import { Trash2, MapPin, Clock, Calendar } from 'lucide-react';

const DISTANCE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RecordItem = ({ index, record, onChange, onRemove, canRemove }) => {
  const handleField = (field, value) => {
    onChange(index, { ...record, [field]: value });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
          <span className="w-5 h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
            {index + 1}
          </span>
          Record #{index + 1}
        </span>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Remove
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Calendar className="w-4 h-4 text-emerald-600" />
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={record.date}
            min="2025-05-01"
            max="2025-05-31"
            onChange={(e) => handleField('date', e.target.value)}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <MapPin className="w-4 h-4 text-emerald-600" />
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={record.location}
            onChange={(e) => handleField('location', e.target.value)}
            placeholder="e.g. Central Park, Riverside Trail"
            required
            maxLength={200}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          />
        </div>

        {/* Start At */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Clock className="w-4 h-4 text-emerald-600" />
            Start At <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            value={record.start_at}
            onChange={(e) => handleField('start_at', e.target.value)}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          />
        </div>

        {/* End At */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Clock className="w-4 h-4 text-emerald-600" />
            End At <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            value={record.end_at}
            onChange={(e) => handleField('end_at', e.target.value)}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          />
        </div>

        {/* Distance */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">
            Distance (km) <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {DISTANCE_OPTIONS.map((km) => (
              <button
                key={km}
                type="button"
                onClick={() => handleField('distance_km', km)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold border transition-all ${
                  record.distance_km === km
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-400 hover:text-emerald-700'
                }`}
              >
                {km}
              </button>
            ))}
          </div>
          {!record.distance_km && (
            <p className="text-xs text-slate-400">Select a distance between 1 and 10 km</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordItem;
