import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { getMonsterById, monsters } from '@/data/monsters';

const steps = ['Your Info', 'Your Home', 'Your Experience', 'Your Letter'];

export default function AdoptPage() {
  const [searchParams] = useSearchParams();
  const monsterId = searchParams.get('monster');
  const preselected = monsterId ? getMonsterById(monsterId) : null;

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    monsterId: preselected?.id || '',
    livingSituation: '',
    hasChildren: '',
    hasPets: '',
    experience: '',
    motivation: '',
    agreeTerms: false,
  });

  const selectedMonster = form.monsterId ? getMonsterById(form.monsterId) : null;

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 0) return form.name && form.email;
    if (step === 1) return form.monsterId && form.livingSituation;
    if (step === 2) return form.hasChildren !== '' && form.hasPets !== '' && form.experience;
    if (step === 3) return form.motivation.length >= 50 && form.agreeTerms;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fef9f0] pt-20 flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center animate-bounce-in">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-7xl mb-4 animate-float inline-block">🎉</div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="font-display text-3xl text-purple-900 mb-3">Application Submitted!</h2>
            <p className="text-gray-600 mb-2">
              Thank you, <strong>{form.name}</strong>! Your application to adopt{' '}
              {selectedMonster ? <strong>{selectedMonster.name} the {selectedMonster.type}</strong> : 'your chosen creature'} has been received.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Our magical review team will get back to you at <strong>{form.email}</strong> within 48 hours. Keep an eye on your inbox! ✨
            </p>
            <div className="bg-purple-50 rounded-2xl p-4 mb-6">
              <p className="text-purple-700 font-handwritten text-lg">
                "Every magical creature deserves a loving home, and every family deserves a little magic." 🌟
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/monsters"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display shadow-md hover:shadow-lg transition-all"
              >
                Browse More Creatures
              </Link>
              <Link to="/" className="text-purple-600 font-semibold hover:underline text-sm">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 py-12 px-6 relative overflow-hidden">
        <div className="blob-bg w-48 h-48 bg-orange-300 top-0 right-0 opacity-20" />
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-3 animate-float inline-block">💝</div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-2">Adoption Application</h1>
          <p className="text-pink-100">Start your magical journey together!</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`flex flex-col items-center ${i < steps.length - 1 ? 'flex-1' : ''}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-sm transition-all ${
                  i < step ? 'bg-green-500 text-white' :
                  i === step ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-110' :
                  'bg-gray-200 text-gray-400'
                }`}>
                  {i < step ? <CheckCircle className="w-5 h-5" /> : i + 1}
                </div>
                <span className={`text-xs mt-1 font-semibold hidden sm:block ${i === step ? 'text-purple-600' : 'text-gray-400'}`}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all ${i < step ? 'bg-green-400' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Step 0: Your Info */}
            {step === 0 && (
              <div className="animate-slide-up space-y-5">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">👤</div>
                  <h2 className="font-display text-2xl text-purple-900">Tell us about yourself</h2>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    placeholder="Your full name"
                    className="magic-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    placeholder="your@email.com"
                    className="magic-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    placeholder="(optional)"
                    className="magic-input"
                  />
                </div>
              </div>
            )}

            {/* Step 1: Your Home */}
            {step === 1 && (
              <div className="animate-slide-up space-y-5">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🏠</div>
                  <h2 className="font-display text-2xl text-purple-900">About your home</h2>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Which creature would you like to adopt? *</label>
                  <select
                    value={form.monsterId}
                    onChange={e => update('monsterId', e.target.value)}
                    className="magic-input"
                    required
                  >
                    <option value="">Select a creature...</option>
                    {monsters.filter(m => m.available).map(m => (
                      <option key={m.id} value={m.id}>
                        {m.emoji} {m.name} the {m.type}
                      </option>
                    ))}
                  </select>
                  {selectedMonster && (
                    <div className="mt-3 p-3 bg-purple-50 rounded-xl flex items-center gap-3">
                      <span className="text-3xl">{selectedMonster.emoji}</span>
                      <div>
                        <p className="font-bold text-purple-800">{selectedMonster.name}</p>
                        <p className="text-sm text-purple-600">{selectedMonster.type} • {selectedMonster.age}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Living Situation *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'apartment', label: '🏢 Apartment' },
                      { value: 'house_small', label: '🏡 Small House' },
                      { value: 'house_large', label: '🏠 Large House' },
                      { value: 'rural', label: '🌾 Rural Property' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('livingSituation', opt.value)}
                        className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                          form.livingSituation === opt.value
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 text-gray-600 hover:border-purple-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Experience */}
            {step === 2 && (
              <div className="animate-slide-up space-y-5">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🎓</div>
                  <h2 className="font-display text-2xl text-purple-900">Your experience</h2>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Do you have children at home? *</label>
                  <div className="flex gap-3">
                    {[{ value: 'yes', label: '👶 Yes' }, { value: 'no', label: '🧑 No' }].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('hasChildren', opt.value)}
                        className={`flex-1 p-3 rounded-xl border-2 font-semibold transition-all ${
                          form.hasChildren === opt.value
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 text-gray-600 hover:border-purple-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Do you have other pets? *</label>
                  <div className="flex gap-3">
                    {[{ value: 'yes', label: '🐾 Yes' }, { value: 'no', label: '🏠 No' }].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('hasPets', opt.value)}
                        className={`flex-1 p-3 rounded-xl border-2 font-semibold transition-all ${
                          form.hasPets === opt.value
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 text-gray-600 hover:border-purple-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Experience with magical creatures? *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'none', label: '🌱 Complete Beginner' },
                      { value: 'some', label: '🧚 Some Experience' },
                      { value: 'experienced', label: '🏆 Experienced Keeper' },
                      { value: 'expert', label: '🧙 Expert / Professional' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('experience', opt.value)}
                        className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                          form.experience === opt.value
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 text-gray-600 hover:border-purple-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Motivation Letter */}
            {step === 3 && (
              <div className="animate-slide-up space-y-5">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">💌</div>
                  <h2 className="font-display text-2xl text-purple-900">Your adoption letter</h2>
                  <p className="text-gray-500 text-sm mt-1">Tell us why you'd be a wonderful home for this creature!</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Why do you want to adopt? *
                    <span className="text-gray-400 font-normal ml-2">({form.motivation.length}/50 min)</span>
                  </label>
                  <textarea
                    value={form.motivation}
                    onChange={e => update('motivation', e.target.value)}
                    placeholder="Tell us about your home, your family, why you fell in love with this creature, and how you plan to care for them..."
                    rows={6}
                    className="magic-input resize-none"
                    required
                  />
                  {form.motivation.length > 0 && form.motivation.length < 50 && (
                    <p className="text-orange-500 text-xs mt-1">Please write at least 50 characters ({50 - form.motivation.length} more needed)</p>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agreeTerms}
                    onChange={e => update('agreeTerms', e.target.checked)}
                    className="w-5 h-5 mt-0.5 accent-purple-500"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <span className="text-purple-600 font-semibold">Magical Creature Welfare Standards</span>{' '}
                    and commit to providing a loving, safe home for my adopted creature. I understand that Monster Match may conduct a home visit. *
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <Link to="/monsters" className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-gray-500 hover:text-gray-700 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Browse Monsters
                </Link>
              )}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all"
                >
                  Continue
                  <Sparkles className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-display shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all"
                >
                  <Heart className="w-4 h-4" />
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
