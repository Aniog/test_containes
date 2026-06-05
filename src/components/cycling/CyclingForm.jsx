import { useState } from 'react';
import { Plus, CheckCircle, Bike, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import RecordItem from './RecordItem.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const emptyRecord = () => ({
  date: '',
  type: '',
  start_at: '',
  end_at: '',
  location: '',
  distance_km: null,
});

const CyclingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    sex: '',
    records: [emptyRecord()],
  });
  const [errors, setErrors] = useState({});
  const [recordErrors, setRecordErrors] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const setField = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleRecordChange = (index, updated) => {
    const next = [...form.records];
    next[index] = updated;
    setForm((f) => ({ ...f, records: next }));
    setRecordErrors((prev) => {
      const next = [...prev];
      next[index] = {};
      return next;
    });
  };

  const addRecord = () => {
    setForm((f) => ({ ...f, records: [...f.records, emptyRecord()] }));
    setRecordErrors((prev) => [...prev, {}]);
  };

  const removeRecord = (index) => {
    setForm((f) => ({ ...f, records: f.records.filter((_, i) => i !== index) }));
    setRecordErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const validateRecord = (rec) => {
    const errs = {};
    if (!rec.date) errs.date = 'Date is required';
    else if (!rec.date.startsWith('2026-06')) errs.date = 'Date must be in June 2026';
    if (!rec.type) errs.type = 'Type is required';
    if (!rec.start_at) errs.start_at = 'Start time is required';
    if (!rec.end_at) errs.end_at = 'End time is required';
    if (!rec.location?.trim()) errs.location = 'Location is required';
    if (!rec.distance_km) errs.distance_km = 'Distance is required';
    return errs;
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (form.age && (isNaN(form.age) || form.age < 1 || form.age > 120))
      errs.age = 'Age must be between 1 and 120';

    const recErrs = form.records.map(validateRecord);
    const hasRecordErrors = recErrs.some((e) => Object.keys(e).length > 0);

    setErrors(errs);
    setRecordErrors(recErrs);

    return Object.keys(errs).length === 0 && !hasRecordErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerError('');

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      records: form.records.map((r) => ({
        date: r.date,
        type: r.type,
        start_at: r.start_at,
        end_at: r.end_at,
        location: r.location.trim(),
        distance_km: r.distance_km,
      })),
    };
    if (form.phone.trim()) payload.phone = form.phone.trim();
    if (form.age) payload.age = parseInt(form.age, 10);
    if (form.sex) payload.sex = form.sex;

    const { data: response, error } = await client
      .from('Your Cycling Record (June)')
      .insert({ data: payload })
      .select()
      .single();

    if (error || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed. Please try again.';
      setServerError(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', age: '', sex: '', records: [emptyRecord()] });
    setErrors({});
    setRecordErrors([]);
    setStatus('idle');
    setServerError('');
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Record Submitted!</h2>
          <p className="text-gray-500 mb-6">
            Thanks for sharing your June cycling records. Keep riding!
          </p>
          <button
            onClick={handleReset}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl shadow-md mb-4">
            <Bike className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Your Cycling Record</h1>
          <p className="text-emerald-600 font-semibold text-lg">June 2026</p>
          <p className="text-gray-500 text-sm mt-2">
            Log your rides and track your progress this month
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  placeholder="Your full name"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField('email', e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  placeholder="+1 234 567 8900"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Age
                </label>
                <input
                  type="number"
                  value={form.age}
                  onChange={(e) => setField('age', e.target.value)}
                  placeholder="e.g. 28"
                  min="1"
                  max="120"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition ${
                    errors.age ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
              </div>

              {/* Sex */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Gender
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Male', 'Female', 'Other', 'Prefer not to say'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setField('sex', s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                        form.sex === s
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'border-gray-200 text-gray-600 bg-white hover:bg-emerald-50 hover:border-emerald-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cycling Records */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-700 flex items-center gap-2">
                <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                Cycling Records
                <span className="text-red-500 text-sm">*</span>
              </h2>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                {form.records.length} {form.records.length === 1 ? 'ride' : 'rides'}
              </span>
            </div>

            <div className="space-y-4">
              {form.records.map((record, index) => (
                <RecordItem
                  key={index}
                  index={index}
                  record={record}
                  onChange={handleRecordChange}
                  onRemove={removeRecord}
                  canRemove={form.records.length > 1}
                  errors={recordErrors[index] || {}}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={addRecord}
              className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-dashed border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400 rounded-xl py-3 text-sm font-semibold transition"
            >
              <Plus className="w-4 h-4" />
              Add Another Ride
            </button>
          </div>

          {/* Server Error */}
          {status === 'error' && serverError && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{serverError}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-bold py-4 rounded-2xl text-base transition shadow-md hover:shadow-lg"
          >
            {status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit My Records'
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Fields marked with <span className="text-red-500">*</span> are required
          </p>
        </form>
      </div>
    </div>
  );
};

export default CyclingForm;
