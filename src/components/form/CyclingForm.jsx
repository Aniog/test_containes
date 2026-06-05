import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { PlusCircle, Bike, CheckCircle2, AlertCircle } from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import RecordItem from './RecordItem.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const EMPTY_RECORD = () => ({
  date: '',
  start_at: '',
  end_at: '',
  location: '',
  distance_km: null,
});

const CyclingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    sex: '',
  });
  const [records, setRecords] = useState([EMPTY_RECORD()]);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRecordChange = (index, updated) => {
    setRecords((prev) => prev.map((r, i) => (i === index ? updated : r)));
  };

  const addRecord = () => {
    setRecords((prev) => [...prev, EMPTY_RECORD()]);
  };

  const removeRecord = (index) => {
    setRecords((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required.';
    if (!formData.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (records.length === 0) return 'At least one cycling record is required.';
    for (let i = 0; i < records.length; i++) {
      const r = records[i];
      if (!r.date) return `Record #${i + 1}: Date is required.`;
      if (!r.start_at) return `Record #${i + 1}: Start time is required.`;
      if (!r.end_at) return `Record #${i + 1}: End time is required.`;
      if (!r.location.trim()) return `Record #${i + 1}: Location is required.`;
      if (!r.distance_km) return `Record #${i + 1}: Distance is required.`;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setStatus('submitting');

    const payload = {
      data: {
        name: formData.name.trim(),
        email: formData.email.trim(),
        ...(formData.phone.trim() && { phone: formData.phone.trim() }),
        ...(formData.age && { age: parseInt(formData.age, 10) }),
        ...(formData.sex && { sex: formData.sex }),
        records: records.map((r) => ({
          date: r.date,
          start_at: r.start_at,
          end_at: r.end_at,
          location: r.location.trim(),
          distance_km: r.distance_km,
        })),
      },
    };

    console.log('Submitting cycling record:', payload);

    const { data: response, error } = await client
      .from('Your Cycling Record (May)')
      .insert(payload)
      .select()
      .single();

    if (error || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed. Please try again.';
      console.error('Submission error:', msg);
      setErrorMsg(msg);
      setStatus('error');
      return;
    }

    console.log('Submission success:', response);
    setStatus('success');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', age: '', sex: '' });
    setRecords([EMPTY_RECORD()]);
    setStatus('idle');
    setErrorMsg('');
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Record Submitted!</h2>
          <p className="text-slate-500 mb-6">
            Thanks for sharing your May cycling records. Keep pedaling!
          </p>
          <button
            onClick={handleReset}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            Submit Another Record
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
          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-600 rounded-2xl shadow-md mb-4">
            <Bike className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-1">Your Cycling Record</h1>
          <p className="text-emerald-600 font-semibold text-lg">May Challenge</p>
          <p className="text-slate-500 text-sm mt-2">
            Log your rides and celebrate your May cycling journey!
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-5">
            <h2 className="text-base font-bold text-slate-700 mb-4 pb-2 border-b border-slate-100">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleField('name', e.target.value)}
                  placeholder="Your full name"
                  required
                  maxLength={100}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleField('email', e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleField('phone', e.target.value)}
                  placeholder="+1 234 567 8900"
                  maxLength={30}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Age */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleField('age', e.target.value)}
                  placeholder="e.g. 28"
                  min={1}
                  max={120}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Sex */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Sex</label>
                <select
                  value={formData.sex}
                  onChange={(e) => handleField('sex', e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                >
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cycling Records */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-slate-700">
                Cycling Records{' '}
                <span className="text-red-500">*</span>
                <span className="ml-2 text-xs font-normal text-slate-400">
                  ({records.length} {records.length === 1 ? 'record' : 'records'})
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {records.map((record, index) => (
                <RecordItem
                  key={index}
                  index={index}
                  record={record}
                  onChange={handleRecordChange}
                  onRemove={removeRecord}
                  canRemove={records.length > 1}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={addRecord}
              className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-dashed border-emerald-300 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 rounded-xl py-3 text-sm font-semibold transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              Add Another Record
            </button>
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-4 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-3.5 rounded-xl text-base transition-colors shadow-md"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit My Records'}
          </button>

          <p className="text-center text-xs text-slate-400 mt-3">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CyclingForm;
